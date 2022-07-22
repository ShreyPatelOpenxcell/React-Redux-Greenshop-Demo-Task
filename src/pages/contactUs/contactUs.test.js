import { render, screen } from "@testing-library/react";
import ContactUs from 'src/pages/contactUs';
import '@testing-library/jest-dom'


test("renders header part", () => {
    render(<ContactUs />);
    const header = screen.getByText(/Organic Food/i);
    expect(header).toBeInTheDocument();
})

test("renders header part 2", () => {
    render(<ContactUs />);
    const header = screen.getByText(/contact/i);
    expect(header).toBeInTheDocument();
})

test("renders office map", () => {
    render(<ContactUs />);
    const header = screen.getByTestId('officeMap');
    expect(header).toBeInTheDocument();
})


