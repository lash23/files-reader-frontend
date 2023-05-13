import { filesApi } from "../../../api/filesApi";
import { Helpers } from "../../../helpers/Helpers";
import { loadFiles, setFiles } from "./filesSlice";

export const getfiles = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadFiles());

      const { data } = await filesApi.get('/files/data');

      const files = Helpers.mapFiles(data);

      dispatch(setFiles({ files }));
    } catch (error) {
      console.log('error >>>>', error);
    }
  };
};
