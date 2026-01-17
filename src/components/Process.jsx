import React from 'react';
import { MapPin, Users, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    { 
      id: "01",
      icon: MapPin,
      title: "Visit Our Store", 
      desc: "Walk into our registered office in Divine Nagar, Muringoor for a face-to-face discussion." 
    },
    { 
      id: "02",
      icon: Users,
      title: "Expert Consultation", 
      desc: "Sit down with our specialists to clearly define your buying, selling, or taxation needs." 
    },
    { 
      id: "03",
      icon: ShieldCheck,
      title: "KYC Verification", 
      desc: "We complete the necessary compliance checks securely to ensure a safe transaction." 
    },
    { 
      id: "04",
      icon: Zap,
      title: "Instant Execution", 
      desc: "Once verified, we facilitate your transaction instantly with complete transparency." 
    }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FE601F] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 bg-[#FE601F] rounded-full animate-pulse"></span>
            Simple 4-Step Process
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Your Journey with <span className="text-[#FE601F]">KryptX</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We’ve simplified crypto transactions into a transparent, physical process. No bots, no confusion—just real people and secure results.
          </p>
        </div>
        
        {/* PROCESS GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* --- DESKTOP CONNECTOR LINE --- */}
          {/* This line sits behind the icons and connects them horizontally */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-white/5 via-[#FE601F]/50 to-white/5 z-0"></div>
          
          {/* --- MOBILE CONNECTOR LINE --- */}
          {/* This line sits to the left on mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-[#FE601F]/50 via-white/10 to-transparent z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              
              {/* CARD CONTAINER */}
              <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 pt-16 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#FE601F]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                
                {/* ICON (Floating on top/border) */}
                {/* On Desktop: Centered top. On Mobile: Left aligned to match line. */}
                <div className="absolute top-8 left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-[#111] border-2 border-[#FE601F] rounded-2xl flex items-center justify-center text-[#FE601F] shadow-[0_0_20px_rgba(254,96,31,0.2)] group-hover:scale-110 transition-transform duration-300 z-20">
                  <step.icon size={28} />
                </div>

                {/* WATERMARK NUMBER (Big, faint number in background) */}
                <div className="absolute -right-4 -top-4 text-[120px] font-bold text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-white/[0.06] transition-colors">
                  {step.id}
                </div>

                {/* CONTENT */}
                <div className="relative z-10 text-left md:text-center mt-6 md:mt-8 pl-16 md:pl-0">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FE601F] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FE601F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* ARROW INDICATOR (Desktop Only - between cards) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-[52px] -right-4 text-white/20 z-10">
                  <ArrowRight size={20} />
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Bottom CTA Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Average process time: <span className="text-white font-semibold">15-30 Minutes</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Process;