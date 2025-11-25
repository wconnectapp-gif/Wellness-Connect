import React from "react";
import { FaInstagram, FaSearch, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-text-headline dark:text-white">
              <div className="size-6 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="font-heading text-lg font-bold">
                Wellness Connect
              </h2>
            </div>
            <p className="mt-4 text-sm text-text-body dark:text-gray-400">
              © 2025 Wellness Connect. All rights reserved.
            </p>
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
                    to="/terms-service"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-bold text-text-headline dark:text-white">
                Connect
              </h3>
              <div className="flex items-center space-x-4 mt-4 text-text-body dark:text-gray-400">
                <Link
                  to="#"
                  aria-label="Instagram"
                  className="hover:text-primary transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </Link>
                <Link
                  to="#"
                  aria-label="LinkedIn"
                  className="hover:text-primary transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;