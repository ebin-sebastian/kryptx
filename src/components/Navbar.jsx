import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
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
    setIsMobileMenuOpen(false); // Close mobile menu on click
    
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
    <nav className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300 ease-out ${scrolled ? 'py-3' : 'py-6'}`}>
      
      {/* --- MAIN NAVBAR CONTAINER --- */}
      {/* Fixed "Layout Shift" Issue: 
         1. Added 'bg-[#0f0f0f]/80' conditionally but with smooth transition-colors.
         2. Synced z-index to ensure it sits above the dropdown logic visually.
      */}
      <div 
        className={`
          w-[90%] md:w-full max-w-6xl px-6 py-3 flex justify-between items-center rounded-full relative z-[60]
          transition-all duration-300 ease-in-out
          ${scrolled || isMobileMenuOpen 
            ? 'bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/10 shadow-2xl' 
            : 'bg-transparent border border-transparent'
          }
        `}
      >
        
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

        {/* DESKTOP: Navigation Links */}
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

        {/* DESKTOP: CTA Button */}
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform active:scale-95 whitespace-nowrap"
        >
          Visit Store <ArrowRight size={16} />
        </a>

        {/* MOBILE: Hamburger Button */}
        <button 
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {/* Smoothness Fixes:
         1. 'visible' vs 'invisible': Ensures menu is gone from DOM interaction when closed.
         2. 'transition-all duration-300 cubic-bezier(...)': Smooth elastic snap effect.
         3. 'top-[120%]': Pushes it slightly further down so it slides UP/DOWN nicely without clipping.
      */}
      <div 
        className={`
          absolute top-full left-0 right-0 px-6 mt-2 md:hidden overflow-hidden
          transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] origin-top
          ${isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible scale-100' 
            : 'opacity-0 -translate-y-4 invisible scale-95 pointer-events-none'
          }
        `}
      >
        <div className="bg-[#0f0f0f]/90 border border-white/10 rounded-[24px] p-4 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
               const isActive = activeSection === item.id;
               return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`
                    px-6 py-4 rounded-xl text-base font-medium transition-all duration-200 block text-left
                    ${isActive 
                      ? 'bg-[#FE601F]/10 text-[#FE601F] border border-[#FE601F]/20' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }
                  `}
                >
                  {item.label}
                </a>
               );
            })}
            
            <div className="h-px bg-white/10 my-2"></div>
            
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="flex items-center justify-center gap-2 bg-[#FE601F] text-white px-6 py-4 rounded-xl text-base font-bold active:scale-95 transition-transform shadow-lg shadow-orange-500/20"
            >
              Visit Our Office <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;