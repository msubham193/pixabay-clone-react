import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full  bg-white flex  justify-center items-center h-16">
      <Link to="/" className="no-underline text-inherit">
        {" "}
        <h1 className="tracking-widest font-bold text-2xl">Pixabay</h1>
      </Link>
    </div>
  );
};

export default Navbar;
