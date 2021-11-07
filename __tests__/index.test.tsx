import { render, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";
import Home from "pages/index";
import { Routes } from "enums/routes";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("App", () => {
  it("renders without crashing", async () => {
    const mockRouter = {
      push: jest.fn(),
      pathname: "",
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    const component = render(<Home />);

    await waitFor(() => {
      expect(component.getAllByTestId("sidebar-link")).toHaveLength(Routes.length);
    });
  });
});
