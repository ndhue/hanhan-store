import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import { NavBar } from "./components/Navbar";
import { Home } from "./pages/home/index";
import { BottomNav } from "./components/BottomNav";

const Layout = () => {
  return (
    <div className=" bg-slate-50">
      <NavBar />
      <Outlet />
      <BottomNav/>
    </div>
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
