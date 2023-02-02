import React from "react";
import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Views/ErrorPage";
import Home from "../Views/Feed";
import Login from "../Views/Login";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
        { path: '/', element: <Login /> },
        { path: '/feed', element: <Home /> },
      ],
    },
    { path: '/login', element: <Login /> },
  ]);

  function ErrorBoundary () {
    const error = useRouteError();
  
    return <ErrorPage e={error} />;
  }

  export default router;