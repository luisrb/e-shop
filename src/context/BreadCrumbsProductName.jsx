import { createContext, React, useState } from "react";

const BreadCrumbsProductNameContext = createContext();

function BreadCrumbsProductNameProvider({ children }) {
  const [productName, setProductName] = useState("");

  const changeProductName = (value) => {
    setProductName(value);
  };

  return (
    <BreadCrumbsProductNameContext.Provider
      value={{ productName, changeProductName }}
    >
      {children}
    </BreadCrumbsProductNameContext.Provider>
  );
}

export { BreadCrumbsProductNameProvider, BreadCrumbsProductNameContext };
