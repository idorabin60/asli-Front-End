import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md p-3 px-5 flex justify-between">
      <Link to={"/home"}>
        <img
          src="/logo.svg"
          className="cursor-pointer"
          width={50}
          height={50}
        />
      </Link>
      <div className="flex gap-2 items-center">
        <Link to={"/auth/sign-in"}>
          <Button variant="outline">עמוד בית</Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
