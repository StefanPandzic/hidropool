const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'public', 'Gallery');
const outputDir = path.join(__dirname, 'public', 'Gallery', 'compressed');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all JPG files in the Gallery directory
const files = fs.readdirSync(inputDir).filter((file) => {
  const ext = path.extname(file).toLowerCase();
  return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
});

console.log(`Found ${files.length} images to compress...`);

// Process each image
let completed = 0;
let totalSizeBefore = 0;
let totalSizeAfter = 0;

const processImage = async (filename) => {
  const inputPath = path.join(inputDir, filename);
  const outputPath = path.join(outputDir, filename);

  // Skip if it's in the compressed folder
  if (inputPath.includes('compressed')) {
    return;
  }

  try {
    // Get original file size
    const statsBefore = fs.statSync(inputPath);
    totalSizeBefore += statsBefore.size;

    // Compress and resize image
    await sharp(inputPath)
      .resize(1920, 1920, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 75,
        progressive: true,
      })
      .toFile(outputPath);

    // Get compressed file size
    const statsAfter = fs.statSync(outputPath);
    totalSizeAfter += statsAfter.size;

    completed++;
    const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(
      1,
    );
    console.log(
      `✓ ${filename}: ${(statsBefore.size / 1024 / 1024).toFixed(2)}MB → ${(statsAfter.size / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`,
    );
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
  }
};

// Process all images
(async () => {
  for (const file of files) {
    await processImage(file);
  }

  console.log('\n=== Compression Complete ===');
  console.log(`Processed: ${completed}/${files.length} images`);
  console.log(
    `Total size before: ${(totalSizeBefore / 1024 / 1024).toFixed(2)} MB`,
  );
  console.log(
    `Total size after: ${(totalSizeAfter / 1024 / 1024).toFixed(2)} MB`,
  );
  console.log(
    `Total reduction: ${((1 - totalSizeAfter / totalSizeBefore) * 100).toFixed(1)}%`,
  );
  console.log(`\nCompressed images saved to: ${outputDir}`);
  console.log('\nNext steps:');
  console.log('1. Review the compressed images in public/Gallery/compressed/');
  console.log(
    '2. If satisfied, backup originals and replace with compressed versions',
  );
  console.log('3. Delete the compressed folder after moving files');
})();
