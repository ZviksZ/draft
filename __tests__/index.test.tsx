import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import Home from "pages/index";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("App", () => {
  it("renders without crashing", () => {
    const mockRouter = {
      push: jest.fn(),
      pathname: "",
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    render(<Home />);
  });
});
