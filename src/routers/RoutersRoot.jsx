import RegistersPage from "pages/RegistersPage";
import React from "react";
import { useRoutes } from "react-router";
import HomePage from "pages/HomePage";
import LoginsPage from "pages/LoginsPage";
import NotFoundPage from "pages/NotFoundPage";
import PhonenumberRegisterPage from "pages/PhonenumberRegisterPage";
import EmailRegisterPage from "pages/EmailRegisterPage";
import FirebaseActionHandlerPage from "pages/FirebaseActionHandlerPage";
import GoogleRegisterPage from "pages/GoogleRegisterPage";

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
    },
    {
      path: "/registers",
      element: <RegistersPage />,
    },
    {
      path: "/registers/phonenumber",
      element: <PhonenumberRegisterPage />,
    },
    {
      path: "/registers/email",
      element: <EmailRegisterPage />,
    },
    {
      path: "/registers/google",
      element: <GoogleRegisterPage />,
    },
    {
      path: "/firbs/auth/action",
      element: <FirebaseActionHandlerPage />,
    },
  ]);
  return rootRouter;
}

export default RoutersRoot;
