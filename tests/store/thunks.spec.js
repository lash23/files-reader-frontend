import { filesApi } from "../../src/api/filesApi"
import { getfiles } from "../../src/store/slices/files/thunks";
import { mockRawFiles } from "../mocks/rawFilesMock";
import { Helpers } from "../../src/helpers/Helpers";
import { loadFiles, setFiles } from "../../src/store/slices/files/filesSlice";
import { mockMappeddFiles } from "../mocks/mappedFilesMock";

describe('getfiles()', () => {
  it('should dispatch the loadFiles() action ', async () => {
    jest.spyOn(filesApi, 'get').mockResolvedValue({data: mockRawFiles});
    const dispatch = jest.fn();

    await getfiles()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(loadFiles());
  })

  it('should call axios get ', async () => {
    const spy = jest.spyOn(filesApi, 'get');
    spy.mockResolvedValue({data: mockRawFiles});
    const dispatch = jest.fn();

    await getfiles()(dispatch);

    expect(spy).toHaveBeenCalled();
  })

  it('should call mapFiles() ', async () => {
    jest.spyOn(filesApi, 'get').mockResolvedValue({data: mockRawFiles});
    const dispatch = jest.fn();
    const spy = jest.spyOn(Helpers, 'mapFiles');
    await getfiles()(dispatch);

    expect(spy).toHaveBeenCalled();
  })

  it('should dispatch the setFiles() action ', async () => {
    jest.spyOn(filesApi, 'get').mockResolvedValue({data: mockRawFiles});
    const dispatch = jest.fn();

    await getfiles()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setFiles({files: mockMappeddFiles}));
  })
})
