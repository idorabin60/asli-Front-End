import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
       <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "40px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
