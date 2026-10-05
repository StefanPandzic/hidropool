const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

console.log('📱 Creating mobile-optimized version of Picture1.webp...\n');

const createMobileImage = async () => {
  const desktopPath = path.join(publicDir, 'Picture1.webp');
  const mobilePath = path.join(publicDir, 'Picture1-mobile.webp');

  if (!fs.existsSync(desktopPath)) {
    console.log('❌ Picture1.webp not found!');
    return;
  }

  const statsBefore = fs.statSync(desktopPath);
  console.log(`📸 Desktop version: ${(statsBefore.size / 1024).toFixed(2)} KB`);

  // Get metadata
  const metadata = await sharp(desktopPath).metadata();
  console.log(`   Dimensions: ${metadata.width}x${metadata.height}\n`);

  // Create mobile version: smaller dimensions + more compression
  // Target width: 480px (optimized for mobile screens up to 768px)
  console.log('🔧 Creating mobile version:');
  console.log('   - Max width: 480px');
  console.log('   - Quality: 55 (aggressive compression for mobile)');
  console.log('   - Processing...\n');

  await sharp(desktopPath)
    .resize(480, null, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({
      quality: 55,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(mobilePath);

  const statsAfter = fs.statSync(mobilePath);
  const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1);

  console.log('✅ Mobile version created successfully!');
  console.log(`   File: Picture1-mobile.webp`);
  console.log(`   Size: ${(statsAfter.size / 1024).toFixed(2)} KB`);
  console.log(
    `   Savings: ${((statsBefore.size - statsAfter.size) / 1024).toFixed(2)} KB (${reduction}% smaller)\n`,
  );

  // Get new dimensions
  const mobileMetadata = await sharp(mobilePath).metadata();
  console.log(
    `   Dimensions: ${mobileMetadata.width}x${mobileMetadata.height}`,
  );

  console.log('\n🎯 Next step: Update Home.tsx to use responsive images');
  console.log('   - Mobile devices will load Picture1-mobile.webp');
  console.log('   - Desktop devices will load Picture1.webp');
};

createMobileImage().catch(console.error);
