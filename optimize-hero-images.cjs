const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

// Backup original files
const backupDir = path.join(publicDir, 'originals-backup');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

console.log('🚀 Optimizing hero images for better performance...\n');

const optimizeImages = async () => {
  // 1. Optimize Logo.webp - Resize to 100x100 (2x for 50px display)
  const logoPath = path.join(publicDir, 'Logo.webp');
  const logoBackup = path.join(backupDir, 'Logo.webp');
  const logoTemp = path.join(publicDir, 'Logo-optimized.webp');

  if (fs.existsSync(logoPath)) {
    console.log('📸 Processing Logo.webp...');

    // Backup original if not already backed up
    if (!fs.existsSync(logoBackup)) {
      fs.copyFileSync(logoPath, logoBackup);
      console.log('   ✓ Backed up original to public/originals-backup/');
    }

    const statsBefore = fs.statSync(logoPath);
    console.log(
      `   • Original size: ${(statsBefore.size / 1024).toFixed(2)} KB`,
    );

    // Optimize: Resize to 100x100 (2x for retina @ 50x50)
    await sharp(logoPath)
      .resize(100, 100, {
        fit: 'cover',
        position: 'center',
      })
      .webp({
        quality: 90,
        effort: 6, // Higher effort = better compression
      })
      .toFile(logoTemp);

    const statsAfter = fs.statSync(logoTemp);
    const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(
      1,
    );

    console.log(
      `   • Optimized size: ${(statsAfter.size / 1024).toFixed(2)} KB`,
    );
    console.log(
      `   ✓ Reduced by ${reduction}% (from ${(statsBefore.size / 1024).toFixed(2)} KB to ${(statsAfter.size / 1024).toFixed(2)} KB)`,
    );

    // Replace original with optimized (handle file locks)
    try {
      const tempOriginal = path.join(publicDir, 'Logo-old.webp');
      fs.renameSync(logoPath, tempOriginal);
      fs.renameSync(logoTemp, logoPath);
      fs.unlinkSync(tempOriginal);
      console.log('   ✓ Logo.webp optimized and replaced!\n');
    } catch (err) {
      console.log(
        `   ⚠️  Could not replace file (it may be locked). Optimized version saved as Logo-optimized.webp`,
      );
      console.log(
        `   📝 Manual step: Close any apps using Logo.webp, then rename Logo-optimized.webp to Logo.webp\n`,
      );
    }
  } else {
    console.log('⚠️  Logo.webp not found, skipping...\n');
  }

  // 2. Optimize Picture1.webp - Better compression for hero image
  const heroPaths = [
    { name: 'Picture1.webp', maxWidth: 1920, quality: 82 },
    { name: 'Picture2.webp', maxWidth: 1920, quality: 80 },
    { name: 'Picture3.webp', maxWidth: 1920, quality: 80 },
  ];

  for (const { name, maxWidth, quality } of heroPaths) {
    const imagePath = path.join(publicDir, name);
    const imageBackup = path.join(backupDir, name);
    const imageTemp = path.join(
      publicDir,
      `${name.replace('.webp', '')}-optimized.webp`,
    );

    if (fs.existsSync(imagePath)) {
      console.log(`📸 Processing ${name}...`);

      // Backup original if not already backed up
      if (!fs.existsSync(imageBackup)) {
        fs.copyFileSync(imagePath, imageBackup);
        console.log('   ✓ Backed up original to public/originals-backup/');
      }

      const statsBefore = fs.statSync(imagePath);
      console.log(
        `   • Original size: ${(statsBefore.size / 1024).toFixed(2)} KB`,
      );

      // Get image metadata to determine size
      const metadata = await sharp(imagePath).metadata();
      console.log(
        `   • Original dimensions: ${metadata.width}x${metadata.height}`,
      );

      // Optimize with better compression
      await sharp(imagePath)
        .resize(maxWidth, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({
          quality: quality,
          effort: 6,
        })
        .toFile(imageTemp);

      const statsAfter = fs.statSync(imageTemp);
      const reduction = (
        (1 - statsAfter.size / statsBefore.size) *
        100
      ).toFixed(1);

      console.log(
        `   • Optimized size: ${(statsAfter.size / 1024).toFixed(2)} KB`,
      );
      console.log(
        `   ✓ Reduced by ${reduction}% (saved ${((statsBefore.size - statsAfter.size) / 1024).toFixed(2)} KB)`,
      );

      // Replace original with optimized (handle file locks)
      try {
        const tempOriginal = path.join(
          publicDir,
          `${name.replace('.webp', '')}-old.webp`,
        );
        fs.renameSync(imagePath, tempOriginal);
        fs.renameSync(imageTemp, imagePath);
        fs.unlinkSync(tempOriginal);
        console.log(`   ✓ ${name} optimized and replaced!\n`);
      } catch (err) {
        console.log(
          `   ⚠️  Could not replace file (it may be locked). Optimized version saved as ${name.replace('.webp', '')}-optimized.webp`,
        );
        console.log(
          `   📝 Manual step: Close any apps using the file, then rename the optimized version\n`,
        );
      }
    } else {
      console.log(`⚠️  ${name} not found, skipping...\n`);
    }
  }

  console.log('✅ All images optimized successfully!');
  console.log(`\n📁 Original files backed up to: ${backupDir}`);
  console.log('\n🎯 Next steps:');
  console.log('1. Run "npm run build" to rebuild the project');
  console.log('2. Test the site to ensure images look good');
  console.log('3. Deploy to Netlify');
  console.log('4. Run PageSpeed Insights to verify improvements');
};

optimizeImages().catch(console.error);
