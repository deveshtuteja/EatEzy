import { fireEvent, render } from "@testing-library/react";
import Header from "../Header";
import { screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it('should display login button in header component', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const login = screen.getByRole("button", { name: "Login" });

    expect(login).toBeInTheDocument();

});

it('should display cart(0 items) in header component', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const cart = screen.getByText("Cart - (0 items)");
    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();

});

it('should change login to logout', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const login = screen.getByRole("button", { name: "Login" });

    fireEvent.click(login);

    const logout = screen.getByRole("button", { name: "Logout" });

    expect(logout).toBeInTheDocument();

});