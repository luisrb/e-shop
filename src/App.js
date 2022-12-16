import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ShoppingCartProvider } from "./context/ShoppingCart";
import { routes } from "./Router";
import { BuildProviderTree } from "./utils/buildProviderTree";

const Providers = BuildProviderTree([ShoppingCartProvider]);

function App() {
  const router = useRoutes(routes);
  return (
    <div className="App">
      <Providers>
        <Header />
        {router}
      </Providers>
    </div>
  );
}

export default App;
