export class Helpers {
  static mapFiles(rawFiles) {
    const files = [];

    rawFiles.forEach((item) => {
      item.lines.forEach((line) => {
        files.push({
          file: item.file,
          ...line,
        });
      });
    });

    return files;
  }
}
