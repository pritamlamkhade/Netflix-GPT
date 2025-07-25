import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Browse from "./Browse";
import { ROUTES } from "../constants/routes";

const Private = () => {
  const appRouter = createBrowserRouter([
    {
      path: ROUTES.BROWSE,
      element: <Browse />,
    },
    {
      path: ROUTES.SIGNUP,
      element: <Navigate to={ROUTES.BROWSE} replace />,
    },
    {
      path: ROUTES.LOGIN,
      element: <Navigate to={ROUTES.BROWSE} replace />,
    },
  ]);

  return (
    <div className=" h-screen w-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Private;
