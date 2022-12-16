import { useRoutes } from "react-router-dom";
import "./App.css";
import BreadCrumbs from "./components/Breadcrumbs";
import Header from "./components/Header";
import { BreadCrumbsProductNameProvider } from "./context/BreadCrumbsProductName";
import { ShoppingCartProvider } from "./context/ShoppingCart";
import { routes } from "./Router";
import { BuildProviderTree } from "./utils/buildProviderTree";

const Providers = BuildProviderTree([
  ShoppingCartProvider,
  BreadCrumbsProductNameProvider,
]);

function App() {
  const router = useRoutes(routes);
  return (
    <div className="App">
      <Providers>
        <Header>
          <BreadCrumbs />
        </Header>
        {router}
      </Providers>
    </div>
  );
}

export default App;
