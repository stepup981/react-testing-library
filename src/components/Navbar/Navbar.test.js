import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { renderWithRouter } from "../../test/helpers/renderWithRouter";
import userEvent from "@testing-library/user-event";

describe("USERS TEST", () => {
  test("renders learn main link", () => {
    renderWithRouter(<Navbar />, "/main");
    const mainLink = screen.getByTestId("main-link");
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-link')).toBeInTheDocument()
  });

  // test("renders learn about link", () => {
  //   renderWithRouter(<Navbar />);

  //   const aboutLink = screen.getByTestId("about-link");

  //   // screen.debug();
  // });

  // test("renders learn user link", () => {
  //   renderWithRouter(<Navbar />);

  //   const userLink = screen.getByTestId("user-link");

  //   // screen.debug();
  // });
});
