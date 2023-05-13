import { Table } from "react-bootstrap"

export const SimpleTable = ({columns, data}) => {
  return (
    <div data-testid="simple-table">
      <Table striped bordered hover variant="dark" data-testid='table'>
        <thead>
          <tr>
            {
              columns.map( (column, i) => (
                <th key={i} data-testid='table-column'>
                  { column }
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
            {
              data.map((item, i) => (
                <tr key={i} data-testid='table-row'>
                  <td>{item.file}</td>
                  <td>{item.text}</td>
                  <td>{item.number}</td>
                  <td>{item.hex}</td>
                </tr>
              ))
            }
        </tbody>
      </Table>
    </div>
  );
}
