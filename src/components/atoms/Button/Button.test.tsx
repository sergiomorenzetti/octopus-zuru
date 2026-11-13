// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";
import "@testing-library/jest-dom/vitest";

vi.mock("../Icon/Icon", () => ({
  Icon: ({ name, size }: { name: string; size?: number }) => (
    <svg data-testid="icon" data-name={name} data-size={size} />
  ),
}));

describe("Button", () => {
  describe("rendering", () => {
    it("renders a <button> with the label when there is no href", () => {
      render(<Button label="Submit" />);

      const button = screen.getByRole("button", { name: "Submit" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("type", "button");
    });

    it("renders an <a> when href is set and the button is not disabled", () => {
      render(<Button label="Go" href="/products" />);

      const link = screen.getByRole("link", { name: "Go" });
      expect(link).toHaveAttribute("href", "/products");
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("renders a <button> instead of a link when href is set but disabled", () => {
      render(<Button label="Go" href="/products" disabled />);

      expect(screen.getByRole("button", { name: "Go" })).toBeDisabled();
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("renders the label when label is set", () => {
      render(<Button label="Submit" />);

      expect(screen.getByText("Submit")).toBeInTheDocument();
    });

    it("renders the icon with the given name and size", () => {
      render(
        <Button iconName="chevron-right" iconSize={24} ariaLabel="Next" />,
      );

      const icon = screen.getByTestId("icon");
      expect(icon).toHaveAttribute("data-name", "chevron-right");
      expect(icon).toHaveAttribute("data-size", "24");
    });
  });

  describe("interaction", () => {
    it("calls onClick when the button is clicked", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<Button label="Submit" onClick={onClick} />);

      await user.click(screen.getByRole("button", { name: "Submit" }));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("calls onClick when the link is clicked", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<Button label="Go" href="/products" onClick={onClick} />);

      await user.click(screen.getByRole("link", { name: "Go" }));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<Button label="Submit" onClick={onClick} disabled />);

      await user.click(screen.getByRole("button", { name: "Submit" }));

      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
