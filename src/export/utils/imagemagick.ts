import { sync as which } from 'which';
import path from 'path';
import { Logger } from 'logging';
import { makeExecutable } from './exec';

export function isImageMagickAvailable() {
  return which('convert', { nothrow: true });
}

export async function extractFirstFrameOfGif(
  gif: string,
  log: Logger,
  buildPath: string,
): Promise<string | null> {
  const dirname = path.dirname(gif);
  const basename = path.basename(gif, path.extname(gif));
  const png = path.join(dirname, `${basename}.png`);
  const convert = makeExecutable(
    `convert ${path.join(buildPath, gif)}[0] ${path.join(buildPath, png)}`,
    log,
  );
  try {
    await convert();
  } catch (err) {
    log.error(`Could not extract an image from gif ${err}`);
    return null;
  }
  return png;
}