import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Brand & Tagline */}
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Krypt<span className="text-[#FE601F]">X</span></h3>
          <p className="text-gray-500 text-xs mt-1">Built on Trust • Powered by Compliance</p>
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} KryptX Solutions Private Limited.</p>
          <p className="text-xs mt-1">All Rights Reserved.</p>
        </div>

        {/* Simple Links */}
        <div className="flex gap-6">
          <a href="#home" className="text-gray-500 hover:text-[#FE601F] text-sm transition-colors">Home</a>
          <a href="#vision" className="text-gray-500 hover:text-[#FE601F] text-sm transition-colors">About</a>
          <a href="#contact" className="text-gray-500 hover:text-[#FE601F] text-sm transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;