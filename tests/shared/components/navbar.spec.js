import { render, screen } from "@testing-library/react";
import { AppNavbar } from "../../../src/shared/components/Navbar";

jest.mock()

describe('AppNavbar', () => {

  it('should render the component properly', () => {
    render(<AppNavbar />);
    const navBar = screen.getByTestId('navbar');
    expect(navBar).toBeDefined();
  })

  it('should have the classes navbar & bg-dark at first element', () => {
    const { container } = render(<AppNavbar />);
    expect(container.firstElementChild.className).toContain('navbar', 'bg-dark')
  })
})