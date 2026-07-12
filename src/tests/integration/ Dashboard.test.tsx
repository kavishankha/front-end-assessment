import { screen } from "@testing-library/react";
import { Dashboard } from "../../src/pages/Dashboard";
import { renderWithProviders } from "../utils/renderWithProviders";

describe("Dashboard", () => {

    it("loads products", async () => {
        renderWithProviders(<Dashboard />);
        expect(
            await screen.findByText("Laptop")
        ).toBeInTheDocument();
    });

});