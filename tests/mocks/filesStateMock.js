import { mockMappeddFiles } from "./mappedFilesMock"

export const initialState = {
  files: [],
  isLoading: false
}

export const loadingState = {
  files: [],
  isLoading: true
}

export const loadedState = {
  files: mockMappeddFiles,
  isLoading: false
}
