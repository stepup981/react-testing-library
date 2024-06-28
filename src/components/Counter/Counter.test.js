import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../test/helpers/renderWithRedux";
import { renderTestApp } from "../../test/helpers/renderTestApp";

describe("Counter test", () => {
  test("Router test", async () => {
    const {getByTestId} = renderTestApp(null, {
      route: '/',
      initialState: {
        counter: {value: 10}
      },
    })


    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title")).toHaveTextContent("10");
    userEvent.click(incrementBtn);
    expect(getByTestId("value-title")).toHaveTextContent("11");
  });
});
