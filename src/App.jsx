import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import SingleProductDisplay from "./pages/singleProductDisplay/SingleProductDisplay";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/productPage/:productId",
      element: <SingleProductDisplay />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
export default App;
