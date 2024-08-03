import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
//it and test are same


describe("Contact Us Page test cases", () => {
    //helper functions
    beforeAll(() => {
        console.log("before all");
    })

    beforeEach(() => {
        console.log("before each");
    })
    afterAll(() => {
        console.log("after all");
    })

    afterEach(() => {
        console.log("after each");
    })

    it("Should load contact us component", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();

    });

    it("Should load button inside contact us component", () => {
        render(<Contact />);

        const btn = screen.getByRole("button");

        expect(btn).toBeInTheDocument();

    });

    test("Should load input inside contact us component", () => {
        render(<Contact />);

        const inp = screen.getByPlaceholderText("name");

        expect(inp).toBeInTheDocument();

    });

    test("should load 2 input boxes inside contact us component", () => {
        //1.Render
        render(<Contact />);
        //checking multiple boxes
        //2.Querying
        const inpBoxes = screen.getAllByRole("textbox");
        //3.Assertion
        expect(inpBoxes.length).toBe(2);
    })
})


