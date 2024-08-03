import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../components/mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart"

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve(MOCK_DATA)
    })
)

it('should load restaurant menu component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Recommended (20)")
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    const addBtns = screen.getAllByRole("button", { name: "Add+" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(22);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    expect(screen.getByText("Your cart is empty. Please add items.")).toBeInTheDocument();

});