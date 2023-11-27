import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
export default App;
