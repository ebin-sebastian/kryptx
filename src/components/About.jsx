import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  UserCheck, 
  Building2, 
  Fingerprint, 
  Crown,
  MapPin, 
  Users, 
  Zap,
  Activity
} from 'lucide-react';

// --- DATA ---
const advantageCards = [
  { 
    id: "01",
    icon: UserCheck, 
    title: "Face-to-Face Accountability", 
    desc: "Algorithms don't have empathy. Speak to real professionals who value long-term relationships over quick transactions." 
  },
  { 
    id: "02",
    icon: Building2, 
    title: "Institutional Standards", 
    desc: "We operate as a registered Private Limited company with strict internal audits, KYC protocols, and compliance standards." 
  },
  { 
    id: "03",
    icon: Fingerprint, 
    title: "Complete Lifecycle Support", 
    desc: "We don't just sell you crypto. From your first purchase to tax filing and portfolio rebalancing, we are with you." 
  }
];

const steps = [
  { 
    id: "01", 
    icon: MapPin, 
    title: "Visit Store", 
    desc: "Walk into our Divine Nagar office. No appointment needed.",
    status: "Start"
  },
  { 
    id: "02", 
    icon: Users, 
    title: "Consultation", 
    desc: "Define your buying or selling needs with our experts.",
    status: "Planning"
  },
  { 
    id: "03", 
    icon: ShieldCheck, 
    title: "Verification", 
    desc: "Quick, secure KYC check to ensure compliance.",
    status: "Security"
  },
  { 
    id: "04", 
    icon: Zap, 
    title: "Execution", 
    desc: "Instant transaction & settlement with zero hidden fees.",
    status: "Done"
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-[#050505]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[10%] right-0 w-[600px] h-[600px] bg-[#FE601F]/5 blur-[120px] rounded-full"></div>
         <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FE601F]/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col gap-32">

            {/* =========================================
                PART 1: WHO WE ARE
               ========================================= */}
            <div>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FE601F] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                    <ShieldCheck size={14} />
                    Who We Are
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] to-[#ff9d3a]">KryptX Solutions</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Company Info */}
                  <div className="bg-[#0a0a0a] rounded-[32px] border border-white/5 p-10 hover:border-white/10 transition-colors flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-6">Our Company</h3>
                      <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                        KryptX Solutions Private Limited is a duly incorporated Indian Private Limited company providing structured and compliance-oriented cryptocurrency services.
                      </p>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        We operate with a strong emphasis on transparency, internal controls, and risk management, following documented processes and ethical business practices.
                      </p>
                    </div>
                  </div>

                  {/* Values */}
                  <div className="bg-[#0a0a0a] rounded-[32px] border border-white/5 p-10 hover:border-white/10 transition-colors relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-8">Our Commitment</h3>
                        <div className="space-y-8">
                          <div className="flex items-start gap-5 group/item">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 border border-orange-500/20">
                              <ShieldCheck size={24} className="text-[#FE601F]" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-lg mb-1 group-hover/item:text-[#FE601F] transition-colors">Transparency First</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">Clear documentation and honest communication.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-5 group/item">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 border border-purple-500/20">
                              <Target size={24} className="text-purple-500" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-lg mb-1 group-hover/item:text-purple-400 transition-colors">Long-term Sustainability</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">Building investor confidence through prudent growth.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-5 group/item">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 border border-emerald-500/20">
                              <Award size={24} className="text-emerald-500" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-lg mb-1 group-hover/item:text-emerald-400 transition-colors">Innovation with Compliance</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">Supporting innovation while maintaining alignment.</p>
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
            </div>

            {/* =========================================
                SECTION 2: THE ADVANTAGE
               ========================================= */}
            <div>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FE601F] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                    <Crown size={14} />
                    Why Choose Us
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] to-[#ff9d3a]">KryptX Advantage</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    In a world of faceless apps, we bring trust back to the equation. Experience the security of a physical store.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {advantageCards.map((card, idx) => (
                    <div key={idx} className="group relative p-8 rounded-[32px] bg-[#0a0a0a] border border-white/5 hover:border-[#FE601F]/40 transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FE601F]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* ADVANTAGE NUMBER (Remains 120px because the card is wide) */}
                      <div className="absolute -right-4 -top-4 text-[120px] font-bold text-white/5 leading-none select-none group-hover:text-[#FE601F]/10 transition-colors duration-500 font-mono">
                        {card.id}
                      </div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#FE601F]/30 transition-all duration-500 shadow-lg">
                          <card.icon size={32} className="text-[#FE601F] drop-shadow-[0_0_10px_rgba(254,96,31,0.3)]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FE601F] transition-colors duration-300">{card.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-base border-t border-white/5 pt-6 mt-auto group-hover:border-white/10 transition-colors">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>

            {/* =========================================
                SECTION 3: THE PROCESS
               ========================================= */}
            <div id="process">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FE601F] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                    <Activity size={14} />
                    How It Works
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    Streamlined <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] to-[#ff9d3a]">Execution</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Simple. Secure. Fast. From initial consultation to final execution in 4 seamless steps.
                  </p>
                </div>

                {/* PROCESS TRACK */}
                <div className="relative max-w-6xl mx-auto">
                  
                  {/* MAIN TRACK LINE (Desktop) */}
                  <div className="hidden md:block absolute top-[28px] left-0 w-full h-1 bg-[#1a1a1a] rounded-full">
                    <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-[#FE601F] to-[#4c1d95]/50 rounded-full"></div>
                  </div>

                  {/* MAIN TRACK LINE (Mobile) */}
                  <div className="md:hidden absolute left-[28px] top-0 bottom-0 w-1 bg-[#1a1a1a] rounded-full">
                     <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[#FE601F] to-[#4c1d95]/50 rounded-full"></div>
                  </div>

                  {/* STEPS GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                    {steps.map((step, idx) => (
                      <div key={idx} className="group relative pl-20 md:pl-0 pt-0 md:pt-16">
                        
                        {/* ICON CHECKPOINT */}
                        <div className="absolute left-[28px] top-0 md:left-1/2 md:top-[28px] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#050505] border-4 border-[#FE601F] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(254,96,31,0.4)] transition-transform duration-300 group-hover:scale-110">
                          <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center">
                            <step.icon size={20} className="text-white group-hover:text-[#FE601F] transition-colors duration-300" />
                          </div>
                          
                          {/* Vertical Connector */}
                          <div className="md:block hidden absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#FE601F] to-white/10 -translate-x-1/2"></div>
                          <div className="md:hidden block absolute left-full top-1/2 h-0.5 w-8 bg-gradient-to-r from-[#FE601F] to-white/10 -translate-y-1/2"></div>
                        </div>

                        {/* TEXT CARD */}
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 text-left md:text-center hover:border-[#FE601F]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] h-full relative overflow-hidden">
                          
                          {/* FIX APPLIED: Reduced size to text-7xl so it fits the smaller box nicely */}
                          <div className="absolute -right-2 -top-2 text-7xl font-bold text-white/5 leading-none select-none group-hover:text-[#FE601F]/10 transition-colors duration-500 font-mono">
                            {step.id}
                          </div>

                          <div className="inline-flex md:mx-auto mb-3 items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FE601F]/10 border border-[#FE601F]/20 text-[10px] font-bold uppercase text-[#FE601F] relative z-10">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FE601F] animate-pulse"></div>
                            {step.status}
                          </div>

                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FE601F] transition-colors relative z-10">
                            {step.title}
                          </h3>
                          
                          <p className="text-sm text-gray-400 leading-snug relative z-10">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;