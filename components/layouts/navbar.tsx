"use client";



import {  Settings } from "lucide-react";

const Navbar = () => {


  return (
    <nav className="fixed top-0 right-0 left-[280px] z-30 bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-4">
          <button

            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
