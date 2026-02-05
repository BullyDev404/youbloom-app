import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import Login from "./Login";

describe("Login Component", () => {
  it("should render login form with phone input and sign in button", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Toaster />
          <Login />
        </BrowserRouter>
      </AuthProvider>,
    );

    const heading = screen.getByText("Welcome Back");
    const input = screen.getByPlaceholderText("9 digits");
    const button = screen.getByRole("button", { name: /sign in/i });

    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
