import React from "react";
import { FaInstagram, FaSearch, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import logo from "/img/logo.png";

const Footer = () => {
  const scrollUpBtn = () => {
    window.scrollTo(0, 0);
  };

  const footerYear = new Date();
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200/50 dark:border-gray-800/50 p-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 flex items-center justify-center">
            <Link to={"/"}>
              <img src={logo} alt="Wellness Connect logo" className="w-30 h-20 " />
            </Link>
          </div>

          {/* Links Section */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h3 className="font-bold text-text-headline dark:text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    className="text-sm text-text-body dark:text-gray-400 hover:text-primary"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-text-body dark:text-gray-400 hover:text-primary"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-text-body dark:text-gray-400 hover:text-primary"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-text-headline dark:text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    className="text-sm text-text-body dark:text-gray-400 hover:text-primary"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-text-body dark:text-gray-400 hover:text-primary"
                    to="/terms-of-service"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="relative">
              <h3 className="font-bold text-text-headline dark:text-white">
                Connect
              </h3>
              <div className="flex items-center space-x-4 mt-4 text-text-body dark:text-gray-400">
                <Link
                  to="https://www.instagram.com/_wellnessconnect?igsh=azN4Y3dtaDV5a2tz"
                  aria-label="Instagram"
                  target="_blank"
                  className="text-red-600 hover:scale-125 transition-all duration-300 ease-in"
                >
                  <FaInstagram className="w-6 h-6" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/wellness-connect-app/"
                  aria-label="LinkedIn"
                  target="_blank"
                  className="text-blue-600 hover:scale-125 transition-all duration-300 ease-in"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>

                <Link
                  to="https://www.tiktok.com/@_wellnessconnect?_r=1&_t=ZS-91QYa51bHEY"
                  aria-label="TikTok"
                  target="_blank"
                  className="text-black hover:scale-125 transition-all duration-300 ease-in"
                >
                  <FaTiktok className="w-6 h-6" />
                </Link>
              </div>

              <div className="fixed bottom-10 right-2.5 md:right-10">
                <FaChevronUp
                  size={50}
                  className="p-4 rounded-full bg-linear-to-r from-green-300 to-blue-300 hover:from-green-400 hover:to-blue-400 text-text-headline text-sm font-bold shadow-sm transition-all duration-300 ease-in cursor-pointer hover:scale-120"
                  onClick={scrollUpBtn}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center border-t border-gray-300">
          <p className="mt-4 text-sm text-text-body dark:text-gray-400 text-center">
            &copy; {footerYear.getFullYear()} Wellness Connect. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
