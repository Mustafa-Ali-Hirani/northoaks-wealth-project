import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-900 rounded-sm group-hover:bg-amber-600 transition-colors duration-300"></div>
          <span className="text-xl font-bold text-slate-900 tracking-tight uppercase">
            NORTH<span className="text-amber-600">OAKS</span> WEALTH
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-left">
          <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition">Home</Link>
          <Link to="/services" className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition">Services</Link>
          <Link to="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition">About Us</Link>
          <Link to="/insights" className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition">Insights</Link>
          <Link to="/contact" className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition">Contact</Link>
          <Link to="/contact" className="bg-blue-950 text-white px-5 py-2.5 rounded text-xs font-bold hover:bg-slate-800 transition cursor-pointer">
            FREE CONSULTATION
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;