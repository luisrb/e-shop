import ProductDetailPage from "./features/products/pages/ProductDetailPage";
import ProductsPage from "./features/products/pages/ProductsPage";

export const routes = [
  {
    path: "/",
    element: <ProductsPage />,
    breadcrumb: "Home",
  },
  {
    path: "/:id",
    element: <ProductDetailPage />,
  },
];
