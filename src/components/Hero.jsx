import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  
  // --- ASSETS ---
  const logos = {
    btc: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
    eth: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
    usdt: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=029",
    sol: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
    xrp: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=029",
    bnb: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=029",
    ada: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=029",
    usdc: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
  };

  const innerRing = [logos.eth, logos.sol, logos.bnb, logos.ada, logos.xrp, logos.usdt, logos.usdc, logos.eth];
  const middleRing = [logos.eth, logos.sol, logos.bnb, logos.ada, logos.xrp, logos.usdt, logos.usdc, logos.eth, logos.sol, logos.bnb, logos.ada, logos.xrp];
  const outerRing = [logos.eth, logos.sol, logos.bnb, logos.ada, logos.xrp, logos.usdt, logos.usdc, logos.eth, logos.sol, logos.bnb, logos.ada, logos.xrp, logos.usdt, logos.usdc, logos.eth, logos.sol];

  // --- ORBITAL RING RENDERER ---
  const renderOrbitalRing = (config) => {
    const { radius, count, items, iconSize, speed, direction } = config;
    const elements = [];
    const step = 360 / count;

    for (let i = 0; i < count; i++) {
      const angle = (i * step * Math.PI) / 180;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const currentItem = items[i % items.length];

      elements.push(
        <div key={`icon-${i}-${radius}`} className="absolute" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}>
          <div className="relative rounded-full bg-black/60 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center border border-white/10 hover:border-[#FE601F]/50 transition-all duration-300" style={{ width: `${iconSize}px`, height: `${iconSize}px` }}>
            <img src={currentItem} alt="crypto" className="object-contain opacity-90" style={{ width: `${iconSize * 0.6}px`, height: `${iconSize * 0.6}px` }} />
          </div>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute rounded-full border border-dashed border-white/10 opacity-40" style={{ width: radius * 2, height: radius * 2 }} />
        <div className="orbital-ring absolute inset-0" style={{ animation: direction === 'cw' ? `spin-smooth ${speed} linear infinite` : `spin-reverse-smooth ${speed} linear infinite` }}>
          {elements}
        </div>
      </div>
    );
  };

  return (
    // FIX 1: The 'overflow-hidden' is now on this outer FULL WIDTH wrapper.
    // This allows the animation to expand beyond the 7xl container without getting cut.
    <div className="relative w-full min-h-screen overflow-hidden ">
      
      {/* --- ANIMATIONS --- */}
      <style>{`
        @keyframes spin-smooth { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes spin-reverse-smooth { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        @keyframes pulse-gold { 0%, 100% { box-shadow: 0 0 30px rgba(247,147,26,0.1); } 50% { box-shadow: 0 0 60px rgba(247,147,26,0.3); } }
        
        @keyframes radiate-far {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(6.5);
            opacity: 0;
          }
        }

        .orbital-ring { will-change: transform; transform: translate3d(0, 0, 0); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; }
      `}</style>

      {/* FIX 2: The inner container handles ALIGNMENT (max-w-7xl) but does NOT hide overflow. */}
      <section id="home" className="relative z-10 min-h-screen flex items-center pt-32 pb-16 px-6 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/30 text-[#FE601F] text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(254,96,31,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#FE601F] animate-pulse"></span>
              Kerala's First Trusted Cryptocurrency Store
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 text-white">
              Built on Trust.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] via-[#ff8c5a] to-[#ffa07a]">Powered by Compliance.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              Step out of the digital shadows. We provide safe P2P transactions, expert consulting, and full tax compliance—right here in Chalakudy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-br from-[#FE601F] to-[#ff7a45] rounded-full text-white font-semibold shadow-[0_8px_32px_rgba(254,96,31,0.4)] hover:shadow-[0_12px_48px_rgba(254,96,31,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Visit Our Office <ArrowRight size={18} />
              </a>
              <a href="#nodes" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2">
                Explore Our Services
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          {/* FIX 3: Removed 'hidden' on overflowing content here too, just in case */}
          <div className="relative h-[700px] w-full flex items-center justify-center hidden lg:flex" style={{ perspective: '1000px' }}>
              
              {/* Background Atmosphere */}
              <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-orange-600/10 to-purple-900/10 rounded-full blur-[100px]"></div>

              {/* RINGS */}
              {renderOrbitalRing({ radius: 280, count: 16, items: outerRing, iconSize: 50, speed: '180s', direction: 'cw' })}
              {renderOrbitalRing({ radius: 200, count: 12, items: middleRing, iconSize: 60, speed: '120s', direction: 'ccw' })}
              {renderOrbitalRing({ radius: 120, count: 8, items: innerRing, iconSize: 50, speed: '60s', direction: 'cw' })}

              {/* --- CENTER: FAR-REACHING SMOOTH WAVE --- */}
              <div className="relative z-50 flex items-center justify-center">
                 
                 {/* Wave 1 */}
                 <div 
                   className="absolute inset-0 rounded-full blur-md mix-blend-screen"
                   style={{
                     width: '130px',
                     height: '130px',
                     background: 'radial-gradient(circle, rgba(247,147,26,0) 20%, rgba(247,147,26,0.6) 50%, rgba(247,147,26,0) 70%)',
                     animation: 'radiate-far 5s ease-out infinite',
                   }}
                 ></div>

                 {/* Wave 2 */}
                 <div 
                   className="absolute inset-0 rounded-full blur-md mix-blend-screen"
                   style={{
                     width: '130px',
                     height: '130px',
                     background: 'radial-gradient(circle, rgba(247,147,26,0) 20%, rgba(247,147,26,0.5) 50%, rgba(247,147,26,0) 70%)',
                     animation: 'radiate-far 5s ease-out infinite',
                     animationDelay: '1.6s'
                   }}
                 ></div>

                  {/* Wave 3 */}
                  <div 
                   className="absolute inset-0 rounded-full blur-md mix-blend-screen"
                   style={{
                     width: '130px',
                     height: '130px',
                     background: 'radial-gradient(circle, rgba(247,147,26,0) 20%, rgba(247,147,26,0.4) 50%, rgba(247,147,26,0) 70%)',
                     animation: 'radiate-far 5s ease-out infinite',
                     animationDelay: '3.2s'
                   }}
                 ></div>
                 
                 {/* Solid Core */}
                 <div className="relative w-32 h-32 rounded-full bg-[#0a0a0a] border-2 border-[#F7931A]/50 flex items-center justify-center shadow-[0_0_60px_rgba(247,147,26,0.3)] animate-[pulse-gold_4s_ease-in-out_infinite] z-20">
                   <img src={logos.btc} alt="Bitcoin" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(247,147,26,0.6)]" />
                 </div>

              </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;