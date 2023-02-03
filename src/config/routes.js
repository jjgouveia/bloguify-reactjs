import React from "react";
import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Views/ErrorView/ErrorPage";
import FeedView from "../Views/FeedView";
import LoginView from "../Views/LoginView/Login";
import UserView from "../Views/UserView";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
        { path: '/', element: <LoginView /> },
        { path: '/feed', element: <FeedView /> },
        { path: '/users', element: <UserView /> },
      ],
    },
    { path: '/login', element: <LoginView /> },
  ]);

  function ErrorBoundary () {
    const error = useRouteError();
    return <ErrorPage e={error} />;
  }

  export default router;