import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // 🌿 Logo + icons
import Button from "./Button";
import logo from "/img/logo.png";
// import * as Motion from "motion/react-client";
// import { useScroll } from "motion/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // const { scrollYProgress } = useScroll();

  return (
    <header className="sticky top-0 right-0 left-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 md:py-3">
            {/* Logo and Title */}
            <Link to="/">
              <img
                src={logo}
                alt="Wellness Connect logo"
                className="h-10 w-20"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-md font-medium hover:text-green-600 transition-all duration-300 ease-in text-text-body dark:text-gray-300 dark:hover:text-primary "
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop only) */}
            <div className="hidden md:flex">
              {/* <button className="flex min-w-[84px] items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-linear-to-r from-green-300 to-blue-300 hover:from-green-400 hover:to-blue-400 text-text-headline text-sm font-bold shadow-sm transition-all">
              <span className="truncate">Book Now</span>
            </button> */}

              <Button btnText={"Book Now"} pageUrl={"#"} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center text-gray-800 dark:text-white focus:outline-none"
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-4 py-4 bg-white dark:bg-background-dark border-t border-gray-200/50 dark:border-gray-800/50">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-sm font-medium dark:text-gray-300 dark:hover:text-primary hover:font-semibold transition-all duration-300 ease-in"
              >
                {item}
              </Link>
            ))}

            <Button btnText="Book Now" pageUrl={"#"} />
          </nav>
        </div>

        {/* <Motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "absolute",
            top: 68,
            left: 0,
            right: 0,
            height: 5,
            originX: 0,
            zIndex: 100,
            backgroundColor: "#7decb6",
          }}
        /> */}
      </div>
    </header>
  );
};

export default Navbar;
