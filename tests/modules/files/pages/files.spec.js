import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Files } from "../../../../src/modules/files/pages/Files"
import { filesSlice, loadFiles, setFiles } from "../../../../src/store/slices/files/filesSlice";
import { initialState } from "../../../mocks/filesStateMock";
import { mockMappeddFiles } from "../../../mocks/mappedFilesMock";
import * as thunks from "../../../../src/store/slices/files/thunks";

const store = configureStore({
  reducer: {
    files: filesSlice.reducer
  },
  initialState
})

describe('Files page', () => {
  afterEach(() => jest.clearAllMocks() );

  it('should render the component properly', () => {
    render(
      <Provider store={ store }>
        <Files />
      </Provider>
    )

    const testFilesPage = screen.getByTestId('files-page-container');
    expect(testFilesPage).toBeDefined();
  })

  describe('rendering AppSpinner', () => {
    it('should render AppSpinner if isLoading state is true', () => {
      filesSlice.reducer(initialState, loadFiles());
      render(
        <Provider store={ store }>
          <Files />
        </Provider>
      )
      const testSpinner = screen.getByTestId('app-spinner');
      expect(testSpinner).toBeDefined();
    })
  })

  describe('render SimpleTable', () => {

    it('should render SimpleTable if isLoading state is false and there is files to show', () => {
      jest.spyOn(thunks, 'getfiles').mockReturnValue((dispatch) => {
        dispatch(setFiles({ mockMappeddFiles }));
      });

      render(
        <Provider store={ store }>
          <Files />
        </Provider>
      )
      const testSimpleTable = screen.getByTestId('simple-table');
      expect(testSimpleTable).toBeDefined();
    })
  })
})
