import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-blue-100 text-blue-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* App Name */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">SkinAI</h1>
          <p className="text-sm md:text-base text-blue-700 mt-1">
            Detect skin conditions and get helpful advice instantly
          </p>
        </div>

        {/* Optional navigation / buttons */}
        <nav className="mt-4 md:mt-0 flex space-x-4">
          <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-200 transition">
            Home
          </button>
          <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-200 transition">
            About
          </button>
          <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-200 transition">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
