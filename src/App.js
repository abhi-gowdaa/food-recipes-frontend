import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Visualize from "./pages/Visualize";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/search",
    element: <RootLayout />,
    children: [
      { index: true, element: <Search /> },
      { path: "details/:id", element: <Details /> },
      { path: "visualize", element: <Visualize /> },
    ],
    errorElement:<Error/>
  },
  {
    path: "/",
    element: <Home />,
    errorElement:<Error/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
