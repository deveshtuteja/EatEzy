import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should load restaurant card with components", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
});