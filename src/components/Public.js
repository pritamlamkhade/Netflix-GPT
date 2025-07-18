import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import { ROUTES } from "../constants/Routes";

const Public = () => {
  const appRouter = createBrowserRouter([
    {
      path: ROUTES.SIGNUP,
      element: <SignUp />,
    },
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: ROUTES.BROWSE,
      element: <Navigate to={ROUTES.SIGNUP} replace />,
    },
  ]);

  return (
    <div className="bg-white h-screen w-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Public;
