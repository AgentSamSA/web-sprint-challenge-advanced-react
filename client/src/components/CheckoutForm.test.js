import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/checkout form/i);
    
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput  = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipCodeInput = screen.getByLabelText(/zip/i);

    userEvent.type(firstNameInput, "Sam");
    userEvent.type(lastNameInput, "Lee");
    userEvent.type(addressInput, "1111 N Fun St.");
    userEvent.type(cityInput, "Seattle");
    userEvent.type(stateInput, "WA");
    userEvent.type(zipCodeInput, "98405");

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(screen.getByTestId("successMessage")).toBeInTheDocument();
});