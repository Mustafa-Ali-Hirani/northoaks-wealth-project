import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
        <div>
          <div className="flex items-center gap-2 mb-6 text-white text-lg font-bold tracking-tighter uppercase">
            <div className="w-6 h-6 bg-blue-700"></div>
            NorthOaks Wealth
          </div>
          <p className="text-sm leading-relaxed">Independent, fee-only wealth management dedicated to your family's long-term success.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-amber-500">Services</a></li>
            <li><a href="#" className="hover:text-amber-500">Our Team</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
          <p className="text-sm text-slate-400">123 Financial District<br/>New York, NY 10005<br/>(555) 123-4567</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Client Portal</h4>
          <button className="w-full border border-slate-700 py-3 text-xs font-bold hover:bg-white hover:text-slate-900 transition cursor-pointer">LOGIN</button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-800 text-[10px] text-slate-500 text-center uppercase tracking-widest leading-relaxed">
        <p>© 2025 NORTHOAKS WEALTH MANAGEMENT. ALL RIGHTS RESERVED. INVESTMENT ADVISORY SERVICES OFFERED THROUGH A REGISTERED INVESTMENT ADVISER.</p>
      </div>
    </footer>
  );
};

export default Footer;