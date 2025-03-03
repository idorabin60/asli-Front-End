import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoutes.jsx";
import SignIn from "./auth/signIn.jsx";
import App from "./App.jsx";
import "./index.css";
import { HomeworkDashboard } from "./components/HomeworkDashboard.jsx";
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
        element: <HomeworkDashboard />,
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
