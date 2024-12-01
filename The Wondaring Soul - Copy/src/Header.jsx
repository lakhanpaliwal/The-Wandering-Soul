import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu toggle

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 sm:px-10 py-4 bg-white border-b min-h-[70px] tracking-wide z-50">
      <div className="flex items-center w-full">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="src/assets/Screenshot 2024-11-27 010155.png"
            alt="logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          id="toggleOpen"
          onClick={toggleMenu}
          className="lg:hidden ml-auto text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          id="collapseMenu"
          className={`lg:flex lg:ml-14 lg:gap-x-5 lg:static lg:translate-x-0 lg:flex-row ${
            isMenuOpen
              ? "fixed inset-0 flex flex-col bg-white items-center p-6 space-y-3 translate-x-0 z-50"
              : "fixed inset-0 flex flex-col bg-white items-center p-6 space-y-3 -translate-x-full z-50 lg:translate-x-0"
          } transition-transform duration-300 lg:space-y-0`}
        >
          <Link
            to="/"
            className="lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px] px-3 py-2"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            to="/contect"
            className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px] px-3 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px] px-3 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
        </nav>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="hidden lg:flex items-center bg-gray-100 rounded px-4 py-2 focus-within:ring-2 ring-blue-500 ml-auto"
      >
        <input
          type="text"
          placeholder="Search something..."
          value={searchInput}
          onChange={handleInputChange}
          className="bg-transparent outline-none text-sm text-gray-700 w-full"
        />
        <button type="submit" aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </form>
    </header>
  );
};

export default Header;
