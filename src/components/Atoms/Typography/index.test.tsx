/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-children-prop */
import { render } from "@testing-library/react";
import Typography from ".";


describe("Typography", () => {
  test("should render the correct text", () => {
    const { getByTestId } = render(
      <Typography children="Hello" variant="h2" />
    );
    expect(getByTestId("typography-text").textContent).toBe("Hello");
  });
});
