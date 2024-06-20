import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import SignUp from './components/pages/SignUp';

function App() {
  const [user, setUser] = useState({ status: 'fetching', data: null });
  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name) {
      return alert('Missing required fields');
    }
    // axiosInstance.post("/auth/signup", formData).then(({ data }) => {
    //   setUser({ status: "logged", data: data.user });
    // });
  };

  const routes = [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/auth/signup',
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
