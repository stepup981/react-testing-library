import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("TEST APP", () => {
  test("ROUTER TEST", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("ERROR TEST", () => {
    render(
      <MemoryRouter initialEntries={["/asdasdas"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});
