import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path if needed

function Header() {
  
  
  
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md p-3 px-5 flex items-center justify-between">
      {/* Optional: Left-side button or links */}


      {/* Centered Header Text */}
      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-blue-600">
       רשימת המטלות שלי
      </h2>

      {/* Logo aligned to the right */}
      <Link to={"/home"} className="flex-1 flex justify-end">
        <img
          src={logo}
          alt="אסלי"
          className="cursor-pointer max-h-24 max-w-48"
        />
      </Link>
    </div>
  );
}

export default Header;
