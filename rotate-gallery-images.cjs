const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Images that need 90-degree clockwise rotation
const imagesToRotate = [
  8, 9, 10, 11, 12, 13, 15, 16, 19, 21, 22, 23, 24, 25, 28, 29, 31, 32,
];

const galleryDir = path.join(__dirname, 'public', 'gallery');

async function rotateImages() {
  console.log('Starting image rotation...\n');
  console.log('Step 1: Creating rotated versions...\n');

  const tempFiles = [];

  // Step 1: Create all rotated versions with temp names
  for (const imageNum of imagesToRotate) {
    const filename = `${imageNum}.webp`;
    const inputPath = path.join(galleryDir, filename);
    const tempPath = path.join(galleryDir, `rotated-${filename}`);

    try {
      // Check if file exists
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  File not found: ${filename}`);
        continue;
      }

      // Rotate image 90 degrees clockwise
      await sharp(inputPath).rotate(90).webp({ quality: 80 }).toFile(tempPath);

      tempFiles.push({ original: inputPath, temp: tempPath, filename });
      console.log(`✓ Created rotated version of ${filename}`);
    } catch (error) {
      console.error(`✗ Error rotating ${filename}:`, error.message);
    }
  }

  console.log('\nStep 2: Replacing original files...\n');

  // Step 2: Replace originals with rotated versions
  for (const { original, temp, filename } of tempFiles) {
    try {
      // Copy temp file over original
      fs.copyFileSync(temp, original);
      // Delete temp file
      fs.unlinkSync(temp);
      console.log(`✓ Replaced ${filename} with rotated version`);
    } catch (error) {
      console.error(`✗ Error replacing ${filename}:`, error.message);
      console.log(`   Temp file saved as: rotated-${filename}`);
    }
  }

  console.log('\nRotation complete!');
  console.log(
    `Total images processed: ${tempFiles.length} of ${imagesToRotate.length}`,
  );
}

rotateImages().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
