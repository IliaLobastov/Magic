import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";

function App() {
  const routes = [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        // {
        //   path: "/auth/signup",
        //   element: <SignUpPage />,
        // },
        // {
        //   path: "/auth/signin",
        //   element: <SignInPage />,
        // },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
