import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import Search from "./pages/Search";
import Home from "./pages/Home";

const router= createBrowserRouter([
  {
    path:"/search",
    element:<RootLayout/>,
    children:[
      {index:true,element:<Search/>},
       
    ]
  },
  {
    path:"/",
    element:<Home/>,
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
