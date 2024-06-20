import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import SignUp from "./components/pages/SignUp";
import axiosInstance, { setAccessToken } from "./components/api/axiosInstance";

function App() {
  const [user, setUser] = useState({ status: "fetching", data: null });

  useEffect(() => {
    axiosInstance("/tokens/refresh")
      .then(({ data }) => {
        setUser({ status: "logged", data: data.user });
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: "fetching", data: null });
        setAccessToken("");
      });
  }, []);

  const signUpHandler = (e, input) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name || !input) {
      return alert("Missing required fields");
    }
    axiosInstance
      .post("/auth/signup", { cityId: input, ...formData })
      .then(({ data }) => {
        setUser({ status: "logged", data: data.user });
      });
  };

  const routes = [
    {
      element: <Layout user={user} />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/auth/signup",
          element: <SignUp signUpHandler={signUpHandler} />,
        },
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
