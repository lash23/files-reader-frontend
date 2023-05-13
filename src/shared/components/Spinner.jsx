import { Spinner } from "react-bootstrap";

export const AppSpinner = () => {
  return (
    <div data-testid="app-spinner">
      <Spinner animation="grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}
