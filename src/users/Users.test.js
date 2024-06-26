import { render, screen } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../test/helpers/renderWithRouter";

jest.mock("axios");

describe("USERS TEST", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders learn react link", async () => {
    axios.get.mockResolvedValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  // test("renders learn react link2", async () => {
  //   axios.get.mockResolvedValue(response);
  //   renderWithRouter(null, "/users");
  //   const users = await screen.findAllByTestId("user-item");
  //   expect(users.length).toBe(3);
  //   userEvent.click(users[0]);
  //   expect(screen.getByTestId("user-page")).toBeInTheDocument();
  // });
});
