import { filesSlice, loadFiles, setFiles } from "../../src/store/slices/files/filesSlice"
import { initialState, loadedState, loadingState } from "../mocks/filesStateMock"
import { mockMappeddFiles } from "../mocks/mappedFilesMock";

describe('filesSlice()', () => {
  it('should return the initial state', () => {
    const state = filesSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  })

  describe('loadFiles()', () => {
    it('should set the loadingState', () => {
      const state = filesSlice.reducer(initialState, loadFiles());

      expect(state).toEqual(loadingState);
    })
  })

  describe('setFiles()', () => {
    it('should set the loadedState', () => {
      const state = filesSlice.reducer(initialState, setFiles({files: mockMappeddFiles}));

      expect(state).toEqual(loadedState);
    })
  })
})