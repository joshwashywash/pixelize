import { readdir } from 'fs/promises';
import { extname, join } from 'path';

import inquirer from 'inquirer';
import chalk from 'chalk';
import sharp from 'sharp';

type Names = 'maxColors' | 'inputFile' | 'outputFileName';

const IMAGE_DIR_NAME = 'images';
const OUTPUT_DIRECTORY = 'pixelated';
const DEFAULT_OUTPUT_FILENAME = 'output';

const PALETTE_HIGH = 1 << 8;
const PALETTE_LOW = 2;

const [chalkedImageDirName, chalkedPaletteHigh, chalkedPaletteLow] = [
  IMAGE_DIR_NAME,
  PALETTE_HIGH,
  PALETTE_LOW,
].map(q => chalk.yellow(q));

const extensions = ['avif', 'gif', 'jpg', 'png', 'tiff', 'webp'].map(
  ext => `.${ext}`
);

const files = await readdir(IMAGE_DIR_NAME);
const choices = files.filter(file =>
  extensions.includes(extname(file).toLowerCase())
);

if (choices.length > 0) {
  const { maxColors, inputFile, outputFileName }: Record<Names, string> =
    await inquirer.prompt([
      {
        choices,
        message: `First, pick an image to pixelize from the list of supported images in ${chalkedImageDirName}.`,
        name: 'inputFile',
        type: 'list',
      },
      {
        message: `Cool. Now, what's the maximum number of colors you want in the image? You can enter any whole number between ${chalkedPaletteLow} and ${chalkedPaletteHigh}. I can't guarantee the pixelated image will have that many colors but I'll try my best!`,
        name: 'maxColors',
        type: 'input',
        validate(n) {
          const parsed = parseInt(n);
          if (isNaN(parsed)) {
            return 'That does not look like a number. :T';
          }
          if (parsed.toString() !== n) {
            return 'The number must be a whole number, you crazy bean!';
          }
          if (parsed < PALETTE_LOW) {
            return `Woah. The number you enter must be greater than ${chalkedPaletteLow}.`;
          }
          if (parsed > PALETTE_HIGH) {
            return `Yikes. The number you enter must be less than ${chalkedPaletteHigh}.`;
          }
          return true;
        },
      },
      {
        default: DEFAULT_OUTPUT_FILENAME,
        message:
          'Lastly, what name do you want to give to the pixelated image file?',
        name: 'outputFileName',
        type: 'input',
      },
    ]);

  const filePath = join(IMAGE_DIR_NAME, inputFile);
  const outputFile = `${outputFileName}.png`;
  const outputFilePath = join(OUTPUT_DIRECTORY, outputFile);
  const chalkedOutputFilePath = chalk.yellow(outputFilePath);

  console.log(
    `Thanks! I am pixelizing your image right now. *~*~ ${chalk.blue(
      'pixelizing noises'
    )} ~*~*`
  );
  try {
    await sharp(filePath)
      .png({ colors: parseInt(maxColors) })
      .toFile(outputFilePath);
  } catch (error) {
    console.log(
      'Aw man, something went wrong. I gotta get all computery for a moment. Here is the error that occured while trying to pixelize the image:'
    );
    console.error(error);
    process.exit(1);
  }

  console.log(
    `All done! Your image has been pixelized and written to ${chalkedOutputFilePath}. Bye bye.`
  );
} else {
  console.log(
    `Hmm... I didn't find any images in ${chalkedImageDirName} that I can pixelize. If you have any images you want to pixelize, you can drop them into ${chalkedImageDirName} and call me again. Hasta la vista, baby. 8-)`
  );
}
