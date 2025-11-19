import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btnText, pageUrl }) => {
  return (
    <>
      <Link to={pageUrl} className="px-10 py-3 rounded-full bg-linear-to-r from-green-300 to-blue-300 hover:from-green-400 hover:to-blue-400 text-text-headline text-sm font-semibold shadow-sm transition-all ease-in duration-300 hover:scale-105">
        {btnText}
      </Link>
    </>
  );
};

export default Button;
