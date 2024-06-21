import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import axiosInstance, { setAccessToken } from "./components/api/axiosInstance";
import useStore from "./components/store";
import Basket from "./components/pages/Basket";

function App() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    axiosInstance("tokens/refresh")
      .then((res) => {
        setUser({ status: "logged", data: res.data.user });
        setAccessToken(res.data.setAccessToken);
      })
      .catch(() => {
        setUser({ status: "guest", data: null });
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
      window.location.href = '/';
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post("/auth/signin", data);
    if (res.status === 200) {
      setUser({ status: "logged", data: res.data.user });
      setAccessToken(res.data.setAccessToken);
      window.location.href = '/';
    }
  };
  const handleLogout = async () => {
    const res = await axiosInstance.post("/auth/logout");
    if (res.status === 200) {
      setUser({ status: "guest", data: null });
      setAccessToken("");
    }
  };

  const routes = [
    {
      element: <Layout user={user} handleLogout={handleLogout} />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/auth/signup",
          element: <SignUp signUpHandler={signUpHandler} />,
        },
        {
          path: "/auth/signin",
          element: <SignIn signInHandler={signInHandler} />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
