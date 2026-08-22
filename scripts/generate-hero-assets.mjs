import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const root = process.cwd();
const sourceDirectory = path.join(root, 'resources/images/hero/source');
const generatedDirectory = path.join(root, 'resources/images/hero/generated');

const sources = {
    background: path.join(sourceDirectory, 'hero-background-source.png'),
    character: path.join(sourceDirectory, 'hero-character-marco-source.png'),
};

await mkdir(generatedDirectory, { recursive: true });

const background = sharp(sources.background)
    // The green grade applies only to production derivatives. The approved
    // source remains unchanged and is retained for visual comparison.
    .modulate({ hue: -60, saturation: 1.05 });

const character = sharp(sources.character);

await Promise.all([
    background
        .clone()
        .removeAlpha()
        .resize({ width: 1536, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(generatedDirectory, 'hero-background-desktop.webp')),
    background
        .clone()
        .removeAlpha()
        .resize({ width: 1536, withoutEnlargement: true })
        .avif({ quality: 55, effort: 6 })
        .toFile(path.join(generatedDirectory, 'hero-background-desktop.avif')),
    background
        .clone()
        .extract({ left: 480, top: 0, width: 576, height: 1024 })
        .removeAlpha()
        .resize({ width: 576, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(generatedDirectory, 'hero-background-mobile.webp')),
    background
        .clone()
        .extract({ left: 480, top: 0, width: 576, height: 1024 })
        .removeAlpha()
        .resize({ width: 576, withoutEnlargement: true })
        .avif({ quality: 55, effort: 6 })
        .toFile(path.join(generatedDirectory, 'hero-background-mobile.avif')),
    character
        .clone()
        .resize({ width: 1199, withoutEnlargement: true })
        .webp({ quality: 88, alphaQuality: 100 })
        .toFile(path.join(generatedDirectory, 'hero-character-desktop.webp')),
    character
        .clone()
        .resize({ width: 1199, withoutEnlargement: true })
        .avif({ quality: 60, effort: 6 })
        .toFile(path.join(generatedDirectory, 'hero-character-desktop.avif')),
    character
        .clone()
        .resize({ width: 960, withoutEnlargement: true })
        .webp({ quality: 88, alphaQuality: 100 })
        .toFile(path.join(generatedDirectory, 'hero-character-mobile.webp')),
    character
        .clone()
        .resize({ width: 960, withoutEnlargement: true })
        .avif({ quality: 60, effort: 6 })
        .toFile(path.join(generatedDirectory, 'hero-character-mobile.avif')),
]);

async function sha256(filePath) {
    const contents = await readFile(filePath);

    return createHash('sha256').update(contents).digest('hex');
}

const checksums = {
    background: await sha256(sources.background),
    character: await sha256(sources.character),
};

await writeFile(
    path.join(generatedDirectory, 'manifest.json'),
    `${JSON.stringify(
        {
            sourceChecksums: checksums,
        },
        null,
        4,
    )}\n`,
);
