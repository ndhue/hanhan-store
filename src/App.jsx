import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import { NavBar } from "./components/Navbar";
import { Home } from "./pages/home/index";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
