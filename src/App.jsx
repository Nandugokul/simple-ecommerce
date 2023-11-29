import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ProductDetails from "./pages/singleProductDisplay/ProductDetails";

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
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
export default App;
