import { cleanup, render } from "@testing-library/react";
import React, { useContext } from "react";
import {
  BreadCrumbsProductNameContext,
  BreadCrumbsProductNameProvider,
} from "../../context/BreadCrumbsProductName";
afterEach(cleanup);

const TestProductComponent = () => {
  const { productName } = useContext(BreadCrumbsProductNameContext);
  return (
    <>
      <p data-testid="product-name">{productName}</p>
    </>
  );
};

describe("BreadCrumbsProductNameProvider", () => {
  const productName = "";
  it("should render the provider with the correct initial value for productName", () => {
    const { getByTestId } = render(
      <BreadCrumbsProductNameProvider>
        <TestProductComponent />
      </BreadCrumbsProductNameProvider>
    );
    expect(getByTestId("product-name").textContent).toBe(productName);
  });
});
