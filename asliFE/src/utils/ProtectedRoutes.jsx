// src/auth/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import App from "@/App";

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return <App />; // Render App, which contains <Header /> and <Outlet />
}
