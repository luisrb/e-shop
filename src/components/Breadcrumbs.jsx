import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { BreadCrumbsProductNameContext } from "../context/BreadCrumbsProductName";
import { routes } from "../Router";
import "./Breadcrumbs.css";

function BreadCrumbs() {
  const breadcrumbsItems = useBreadcrumbs(routes);
  const [breadcrumbs, setBreadcrumbs] = useState(breadcrumbsItems);
  const product = useContext(BreadCrumbsProductNameContext);

  useEffect(() => {
    if (product && breadcrumbsItems.length > 1) {
      setBreadcrumbs([
        breadcrumbs[0],
        {
          key: `/${product.id}`,
          breadcrumb: product.productName,
        },
      ]);
    } else {
      setBreadcrumbs(breadcrumbsItems);
    }
  }, [product]);

  return (
    <>
      {breadcrumbs.map((item, index) => {
        if (index !== breadcrumbs.length - 1) {
          return (
            <span key={item.key}>
              <NavLink to={item.key} className="breadcrumb breadcrumb-link">
                {item.breadcrumb}
              </NavLink>
              <span className="breadcrumb"> {" > "}</span>
            </span>
          );
        }

        return (
          <span key={item.key} className="breadcrumb no-link">
            {" "}
            {item.breadcrumb}
          </span>
        );
      })}
    </>
  );
}

export default BreadCrumbs;
