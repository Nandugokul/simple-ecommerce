import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import ProductListings from "./pages/productListings/ProductListings";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/productPage/:productId",
      element: <ProductDetails />,
    },
    {
      path: "/productListings/:category",
      element: <ProductListings />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
export default App;
