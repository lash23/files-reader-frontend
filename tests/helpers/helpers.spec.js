import { Helpers } from "../../src/helpers/Helpers";
import { mockRawFiles } from "../mocks/rawFilesMock";

describe('mapFiles()', () => {

  it('should return an array', () => {
    const testMappedFiles = Helpers.mapFiles(mockRawFiles);

    expect(testMappedFiles).toBeInstanceOf(Array);
  })

  it('should have as many items as existing lines in rawFiles array', () => {
    const testLinesNumber = mockRawFiles.reduce((prev, curr) => {
      const totalLines = curr.lines.length + (prev?.lines?.length || 0);

      return totalLines;
    }, 0);

    const testMappedFiles = Helpers.mapFiles(mockRawFiles);

    expect(testMappedFiles.length).toEqual(testLinesNumber);
  })
})