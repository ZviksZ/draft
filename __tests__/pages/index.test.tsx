import React from "react";
import { render, screen } from "../test-utils";
import HomePage from "@pages/index";

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<HomePage />);

    const heading = screen.getByText(/Testing Next.js With Jest and React Testing Library/i);

    expect(heading).toBeInTheDocument();
  });
});
