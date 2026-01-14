import React from 'react';

const Process = () => {
  const steps = [
    { title: "1. Visit Our Store", desc: "Walk into our office in Divine Nagar, Muringoor." },
    { title: "2. Consultation", desc: "Sit down with experts to define your buying, selling, or tax needs." },
    { title: "3. Verification", desc: "We complete necessary KYC and verification checks for compliance." },
    { title: "4. Execution", desc: "We facilitate your transaction or service securely and transparently." }
  ];

  return (
    <section id="process" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Journey with KryptX</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-[#FE601F] to-transparent opacity-30 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 bg-[#050505] p-6 rounded-xl border border-white/5 text-center md:text-left">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full border border-[#FE601F] flex items-center justify-center text-[#FE601F] font-bold text-xl mb-4 mx-auto md:mx-0 shadow-[0_0_15px_rgba(254,96,31,0.2)]">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;