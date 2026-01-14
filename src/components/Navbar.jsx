import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // UPDATED: Added "Contact" to the list
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'nodes', label: 'Our Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }, // New Item
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Navbar Background
      setScrolled(window.scrollY > 50);

      // 2. Handle Active Section (Scroll Spy)
      const scrollPosition = window.scrollY + 150; 

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className={`w-full max-w-6xl px-6 py-3 flex justify-between items-center transition-all duration-500 rounded-full ${scrolled ? 'bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border border-transparent'}`}>
        
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <div className="w-9 h-9 bg-[#FE601F] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
            <ShieldCheck size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-orange-500 transition-colors">KryptX</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full p-1.5 backdrop-blur-sm relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id)}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out whitespace-nowrap
                  ${isActive 
                    ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform active:scale-95 whitespace-nowrap"
        >
          Visit Store <ArrowRight size={16} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;