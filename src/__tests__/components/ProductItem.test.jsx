import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductItem from "../../features/products/components/ProductItem";

const product = {
  id: 1,
  title: "Product 1",
  price: 100,
  image: "",
};

describe("ProductItem", () => {
  it("should render product item", () => {
    const { container } = render(
      <BrowserRouter>
        <ProductItem productData={product} />
      </BrowserRouter>
    );

    expect(container.getElementsByClassName("product").length).toBe(1);
  });

  it("should render product info", () => {
    const { container } = render(
      <BrowserRouter>
        <ProductItem productData={product} />
      </BrowserRouter>
    );

    expect(
      container.getElementsByClassName("product__name")[0].textContent
    ).toBe(product.title);

    expect(
      container.getElementsByClassName("product__price")[0].textContent
    ).toBe(`${product.price}€`);

    expect(container.querySelectorAll("img")[0].getAttribute("src")).toBe(
      product.image
    );

    expect(container.querySelectorAll("a")[0].getAttribute("href")).toBe(
      `/${product.id}`
    );
  });
});
