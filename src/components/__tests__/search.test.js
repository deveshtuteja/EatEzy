import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});
it("should check if search is working", async () => {
    await act(async () => render(<BrowserRouter> <Body /> </BrowserRouter>))

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchInput = screen.getByTestId("searchBox");

    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);

    //screen should show 1 card
    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
})
it("should check if top rated restaurants button is working", async () => {
    await act(async () => render(<BrowserRouter> <Body /> </BrowserRouter>))

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(5);
})