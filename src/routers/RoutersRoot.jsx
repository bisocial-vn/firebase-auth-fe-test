import React from "react";
import { useRoutes } from "react-router";
import HomePage from "../pages/HomePage";
import LoginsPage from "../pages/LoginsPage";
import NotFoundPage from "../pages/NotFoundPage";
import PhonenumberLoginPage from "../pages/PhonenumberLoginPage";

function RoutersRoot() {
  const rootRouter = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/*",
      element: <NotFoundPage />,
    },
    {
      path: "/logins",
      element: <LoginsPage />,
      //   children: [
      //     {
      //       path: "phonenumber",
      //       element: <PhonenumberLogin />,
      //     },
      //   ],
    },
    {
      path: "logins/phonenumber",
      element: <PhonenumberLoginPage />,
    },
  ]);
  return rootRouter;
}

export default RoutersRoot;
