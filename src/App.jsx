import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantage from './components/Advantage';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden relative">
      
      {/* Global CSS for Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(40px, -40px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes floatCard { 
          0%, 100% { transform: translateY(0) rotate(0deg); } 
          50% { transform: translateY(-25px) rotate(-2deg); } 
        }
        @keyframes floatCardBack {
          0%, 100% { transform: rotate(8deg) scale(0.92) translateY(0); }
          50% { transform: rotate(6deg) scale(0.92) translateY(-15px); }
        }
        .animate-float { animation: float 10s infinite ease-in-out; }
        .animate-float-card { animation: floatCard 6s ease-in-out infinite; }
        .animate-float-card-back { animation: floatCardBack 7s ease-in-out infinite; }
      `}</style>

      {/* Background Mesh (Global) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[700px] h-[700px] bg-[#2B1B47] rounded-full blur-[120px] opacity-30 animate-float"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#FE601F] rounded-full blur-[120px] opacity-15 animate-float" style={{animationDelay: '-5s'}}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Advantage />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;