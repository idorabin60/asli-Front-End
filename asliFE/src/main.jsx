import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoutes.jsx";
import SignIn from "./auth/signIn.jsx";
import App from "./App.jsx";
import "./index.css";
import Page from "./components/Page.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App /> 
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <Page />,
      },
     
    ],
  },
  {
    path:"auth/sign-in",
    element: <SignIn  />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
