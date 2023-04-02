import React from "react";
import { act, getByText, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // import the Router component
import App from "./App";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe('App component', () => {
    it('should render the home page by default', () => {
        const { container } = render(
            <Router>
                <App />
            </Router>
        );

        expect(container).toMatchSnapshot();
    });

    it('should render the shop page after the Shop NavLink is clicked', async () => {
        render(
            <Router>
                <App />
            </Router>
        );
        await act(async () => {
            userEvent.click(screen.getByRole('link', { name: 'Shop' }));
        });
        await waitFor(() => screen.getByRole('heading', { name: 'Products' }));
        expect(screen.getByRole('heading', { name: 'Products' })).toBeInTheDocument();
    });
})