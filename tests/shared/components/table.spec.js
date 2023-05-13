import { render, screen } from "@testing-library/react";
import { SimpleTable } from "../../../src/shared/components/Table";
import { mockMappeddFiles } from "../../mocks/mappedFilesMock";
import { mockColumns } from "../../mocks/tableColumnsMock";

describe('SimpleTable', () => {
  it('should render the component properly', () => {
    render(<SimpleTable columns={mockColumns} data={mockMappeddFiles}/>);
    const navBar = screen.getByTestId('table');
    expect(navBar).toBeDefined();
  })

  it('should render as many columns as exists in column prop', () => {
    render(<SimpleTable columns={mockColumns} data={mockMappeddFiles}/>);
    const testColumns = screen.getAllByTestId('table-column');

    expect(testColumns.length).toEqual(mockColumns.length);
  })

  it('should render as many rows as exists in data prop', () => {
    render(<SimpleTable columns={mockColumns} data={mockMappeddFiles}/>);
    const testRows = screen.getAllByTestId('table-row');

    expect(testRows.length).toEqual(mockMappeddFiles.length);
  })
})
