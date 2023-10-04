import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import { NavBar } from "./components/Navbar";
import { Home } from "./pages/home/index";
import { Details } from "./pages/Details";
import { ProductsBySearch } from "./pages/ProductsBySearch";

const Layout = () => {
  return (
    <div className=" bg-slate-50">
      <NavBar />
      <Outlet />
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/details/:id", element: <Details />},
      { path: "/?searchKey=:id", element: <ProductsBySearch />}
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
