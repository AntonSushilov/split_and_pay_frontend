import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Home Page
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "tmp",
        element: <div>Hello world</div>,
      },
    ],
  },
]);
