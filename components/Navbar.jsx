"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/modulecss/navbar.module.css";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  // Effect hook to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      // If the screen size is medium or larger (md breakpoint in Tailwind is 768px),
      // ensure the mobile menu is hidden.
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-sky-200 shadow-md
                 flex items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-12"
    >
      <Link
        href="/"
        className="flex flex-col items-center sm:flex-row sm:space-x-2 text-indigo-700 hover:text-indigo-700 transition-colors duration-300"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold navbar-logo-main">
          Portfolio
        </h1>
      </Link>

      {/* Mobile Menu Button (Hamburger Icon) */}
      <div className="md:hidden">
        <button
          id="mobile-menu-button"
          className="text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
          onClick={toggleMobileMenu} // Attach the toggle function to the button click
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Main Navigation Links (Hidden on small screens, visible on medium and larger) */}
      <ul className="hidden md:flex space-x-6 lg:space-x-10 text-xl lg:text-2xl text-indigo-500 font-medium">
        {navLinks.map((link) => {
          return (
            <li key={link.name} className="navbar-nav-item">
              <Link
                href={link.path}
                className={`hover:text-indigo-700 transition-colors duration-300
                                ${styles.underlineonhover}
                                `}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Dropdown Menu (Conditionally rendered based on isMobileMenuOpen state) */}
      <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-full left-0 w-full bg-sky-100 shadow-lg rounded-b-md`}
      >
        <ul className="flex flex-col items-center py-2 space-y-2 text-indigo-600">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="block px-4 py-2 hover:bg-sky-200 hover:text-indigo-800 rounded-md transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
