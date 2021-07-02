import { fireEvent, render, screen } from "@testing-library/react";
import EditableLabel from "./Editable";

test("should render a clickable label component and hidden input component", () => {
  render(<EditableLabel label="Sample" />);
  const label = screen.getByTestId("editable-label");
  const input = screen.getByTestId("hidden-label");
  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input.getAttribute("type")).toEqual("hidden");
});

test("should hide the label and render only the hidden input on label click", () => {
  render(<EditableLabel label="Sample" />);
  const label = screen.getByTestId("editable-label");
  const input = screen.getByTestId("hidden-label");
  fireEvent(
    label,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(label).not.toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input.getAttribute("type")).toEqual("text");
});

test("should change the value of the label after edit", () => {
  render(<EditableLabel label="Sample" />);
  const label = screen.getByTestId("editable-label");
  const input = screen.getByTestId("hidden-label");
  fireEvent(
    label,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(input.getAttribute("type")).toEqual("text");
  fireEvent.change(input, {
    target: {
      value: "New Sample",
    },
  });
  fireEvent.keyDown(input, {
    key: "Enter",
  });
  expect(screen.getByText("New Sample")).toBeInTheDocument();
  expect(input.getAttribute("type")).toEqual("hidden");
});
