import { fireEvent, render, screen } from "@testing-library/react";
import QuestionMatrix, { Props } from "./QuestionMatrix";

const props: Props = {
  defaults: {
    rows: 1,
    columns: 1,
    questionId: 0,
  },
};
test("should render default number of rows and columns with radio button", () => {
  render(<QuestionMatrix {...props} />);
  expect(screen.getByText("row1")).toBeInTheDocument();
  expect(screen.getByText("col1")).toBeInTheDocument();

  expect(screen.getAllByText("row1").length).toBe(1);
  expect(screen.getAllByText("col1").length).toBe(1);

  expect(screen.getAllByTestId("radio-button").length).toBe(1);
});

test("should add one row and column when add row and add column are clicked", () => {
  render(<QuestionMatrix {...props} />);
  fireEvent.click(screen.getByTestId("add-row"));
  expect(screen.getAllByTestId("radio-button").length).toBe(2);
  fireEvent.click(screen.getByTestId("add-col"));
  expect(screen.getAllByTestId("radio-button").length).toBe(4);
});

test("should disable the file upload  after a image has been successfully uploaded", () => {
  render(<QuestionMatrix {...props} />);
  expect(screen.getByTestId("file-0-1-0").hasAttribute("disabled")).toBe(false);
  fireEvent.change(screen.getByTestId("file-0-1-0"), {
    currentTarget: {
      files: new File(["(%$%$%)"], "Sample.pdf", { type: "image/pdf" }),
    },
  });
  expect(screen.getByTestId("file-0-1-0").hasAttribute("disabled")).toBe(true);
});
