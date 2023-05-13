import { render, screen } from "@testing-library/react"
import { AppSpinner } from "../../../src/shared/components/Spinner"

describe('AppSpinner', () => {
  it('should render an elemment with class name "spinner-grow"', () => {
    const { container } = render(<AppSpinner />);
    const testSpinners = container.getElementsByClassName('spinner-grow')
    expect(testSpinners.length).toBe(1)
  })
})