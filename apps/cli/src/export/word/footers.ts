import { Footer, Paragraph, TextRun, ImageRun, AlignmentType } from 'docx';

const image = `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`;

export function createCurvenoteFooter() {
  return new Footer({
    children: [
      new Paragraph({
        children: [
          new TextRun('Created in '),
          new ImageRun({
            data: image,
            transformation: {
              width: 1150 / 18,
              height: 200 / 18,
            },
          }),
        ],
        alignment: AlignmentType.RIGHT,
      }),
    ],
  });
}
