const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

console.log('🎯 Re-optimizing Picture1.webp with aggressive compression...\n');

const optimizeHeroImage = async () => {
  const imagePath = path.join(publicDir, 'Picture1.webp');
  const imageTemp = path.join(publicDir, 'Picture1-recompressed.webp');

  if (!fs.existsSync(imagePath)) {
    console.log('❌ Picture1.webp not found!');
    return;
  }

  const statsBefore = fs.statSync(imagePath);
  console.log(`Original size: ${(statsBefore.size / 1024).toFixed(2)} KB`);

  // Get metadata
  const metadata = await sharp(imagePath).metadata();
  console.log(`Dimensions: ${metadata.width}x${metadata.height}`);

  // Try different quality levels to find the best balance
  const qualities = [75, 70, 65];
  let bestQuality = 75;
  let bestSize = Infinity;

  for (const quality of qualities) {
    const testPath = path.join(publicDir, `Picture1-test-q${quality}.webp`);

    await sharp(imagePath)
      .resize(1920, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({
        quality: quality,
        effort: 6,
        smartSubsample: true, // Better compression
      })
      .toFile(testPath);

    const testStats = fs.statSync(testPath);
    const size = testStats.size;

    console.log(
      `\nQuality ${quality}: ${(size / 1024).toFixed(2)} KB (${((1 - size / statsBefore.size) * 100).toFixed(1)}% reduction)`,
    );

    if (size < bestSize && size < statsBefore.size) {
      bestSize = size;
      bestQuality = quality;
      // Copy this as the best version
      fs.copyFileSync(testPath, imageTemp);
    }

    // Clean up test file
    fs.unlinkSync(testPath);
  }

  if (bestSize < statsBefore.size) {
    console.log(`\n✅ Best result: Quality ${bestQuality}`);
    console.log(`   Original: ${(statsBefore.size / 1024).toFixed(2)} KB`);
    console.log(`   Optimized: ${(bestSize / 1024).toFixed(2)} KB`);
    console.log(
      `   Savings: ${((statsBefore.size - bestSize) / 1024).toFixed(2)} KB (${((1 - bestSize / statsBefore.size) * 100).toFixed(1)}% reduction)`,
    );
    console.log(`\n📝 Optimized file saved as: Picture1-recompressed.webp`);
    console.log('Run this command to replace:');
    console.log(
      'Remove-Item -Force public\\Picture1.webp; Rename-Item public\\Picture1-recompressed.webp Picture1.webp',
    );
  } else {
    console.log(
      '\n⚠️  Could not achieve better compression. Original is already well optimized.',
    );
    if (fs.existsSync(imageTemp)) {
      fs.unlinkSync(imageTemp);
    }
  }
};

optimizeHeroImage().catch(console.error);
