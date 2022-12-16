import { fireEvent, render } from "@testing-library/react";
import React from "react";
import ProductSearcher from "../../features/products/components/ProductSearcher";

describe("ProductSearcher component", () => {
  it("should render the component & check if event to parent works", () => {
    const searchChange = jest.fn();

    const { getByPlaceholderText } = render(
      <ProductSearcher searchChange={searchChange} />
    );
    const input = getByPlaceholderText("Search product");

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "abc" } });
    expect(searchChange).toHaveBeenCalledWith("abc");

    fireEvent.change(input, { target: { value: "  def  " } });
    expect(searchChange).toHaveBeenCalledWith("def");
  });
});
