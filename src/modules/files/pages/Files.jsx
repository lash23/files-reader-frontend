import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { SimpleTable } from "../../../shared/components/Table"
import { getfiles } from "../../../store/slices/files/thunks";
import { AppSpinner } from "../../../shared/components/Spinner";

export const Files = () => {

  const dispatch = useDispatch();
  const columns = ['File Name', 'Text', 'Number', 'Hex'];
  const { files = [], isLoading } = useSelector(state => state.files)

  useEffect(() => {
    dispatch(getfiles());
  }, []);

  return (
    <div data-testid="files-page-container">
      {
        isLoading ? (
          <AppSpinner></AppSpinner>
        ) : (
          <SimpleTable columns={columns} data={files} data-testid="simple-table"></SimpleTable>
        )
      }
    </div>
  )
}
