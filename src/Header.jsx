import React, { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {}
        <h1 className="font-bold text-xl text-gray-800 m-5">Team Palahubog</h1>

        {}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li className="hover:scale-105 transition-transform"><a href="#">Home</a></li>
          <li className="hover:scale-105 transition-transform"><a href="#">Find Team</a></li>
          <li className="hover:scale-105 transition-transform"><a href="#">Contacts</a></li>
          <li className="hover:scale-105 transition-transform"><a href="#">About Us</a></li>
          <li className="hover:scale-105 transition-transform"><a href="#">Services</a></li>
        </ul>

        {}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none focus:text-gray-900"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4 font-medium text-gray-700">
            <li className="hover:scale-105 transition-transform" onClick={toggleMobileMenu}><a href="#">Home</a></li>
            <li className="hover:scale-105 transition-transform" onClick={toggleMobileMenu}><a href="#">Shop</a></li>
            <li className="hover:scale-105 transition-transform" onClick={toggleMobileMenu}><a href="#">Contacts</a></li>
            <li className="hover:scale-105 transition-transform" onClick={toggleMobileMenu}><a href="#">About Us</a></li>
            <li className="hover:scale-105 transition-transform" onClick={toggleMobileMenu}><a href="#">Services</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;