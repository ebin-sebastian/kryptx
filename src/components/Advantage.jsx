import React from 'react';
import { UserCheck, Building2, Fingerprint } from 'lucide-react';

const Advantage = () => {
  const cards = [
    { icon: UserCheck, title: "Face-to-Face Accountability", desc: "Speak to real professionals. We value long-term relationships over quick transactions." },
    { icon: Building2, title: "Institutional Standards", desc: "As a Private Limited company, we operate with internal audits and protocols informal traders cannot offer." },
    { icon: Fingerprint, title: "Complete Lifecycle Support", desc: "From buying your first asset to filing your taxes, we are with you at every step." }
  ];

  return (
    <section id='advantage' className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The KryptX Advantage</h2>
          <p className="text-gray-400">Why choose a physical store over an online app?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-gradient-to-b from-[#151515] to-[#0a0a0a] border border-white/5 hover:border-[#FE601F]/30 transition-all group">
              <div className="w-14 h-14 bg-[#FE601F]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <card.icon size={28} className="text-[#FE601F]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;