import React, { useState, useEffect } from 'react';
import { 
  ArrowLeftRight, 
  FileSpreadsheet, 
  BrainCircuit, 
  ShieldCheck, 
  GraduationCap, 
  Sparkles, 
  UserCheck, 
  TrendingUp, 
  TrendingDown,
  CheckCircle2,
  Target,
  Award,
  PieChart,
  Scale
} from 'lucide-react';

const Services = () => {
  // Initial State
  const [cryptoData, setCryptoData] = useState([
    { symbol: 'BTC', price: 'Loading...', change: 0, image: '' },
    { symbol: 'ETH', price: 'Loading...', change: 0, image: '' },
    { symbol: 'SOL', price: 'Loading...', change: 0, image: '' },
    { symbol: 'USDT', price: 'Loading...', change: 0, image: '' },
  ]);

  // --- FETCH LIVE DATA ---
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,solana,binancecoin,ripple,cardano,dogecoin&order=market_cap_desc'
        );
        const data = await response.json();

        const formattedData = data.map(coin => ({
          id: coin.id,
          symbol: coin.symbol.toUpperCase(),
          price: `$${coin.current_price.toLocaleString()}`,
          change: coin.price_change_percentage_24h.toFixed(2),
          isPositive: coin.price_change_percentage_24h >= 0,
          image: coin.image
        }));

        setCryptoData(formattedData);
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [...cryptoData, ...cryptoData, ...cryptoData];

  // --- CONSISTENT STYLES ---
  const styles = {
    card: "group relative bg-[#0a0a0a] rounded-[32px] border border-white/5 p-8 overflow-hidden hover:border-[#FE601F]/30 transition-all duration-500",
    iconWrapper: "w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform duration-500",
    heading: "text-2xl font-bold text-white mb-3",
    paragraph: "text-base text-gray-400 leading-relaxed mb-6",
    listText: "text-sm text-gray-500 font-medium",
    featureCard: "p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/20 transition-colors" // New consistent style for features
  };

  return (
    <section id="nodes" className="py-24 px-6 relative overflow-hidden">

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- LIVE MARKET TICKER --- */}
        <div className="mb-24 relative">
          <div className="absolute -top-3 left-6 z-20 px-3 py-1 bg-[#FE601F] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(254,96,31,0.4)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            Live Market
          </div>
          <div 
            className="w-full overflow-hidden bg-white/5 border-y border-white/10 backdrop-blur-md py-4 relative"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div className="flex w-max animate-scroll">
              {tickerItems.map((coin, index) => (
                <div key={`${coin.symbol}-${index}`} className="flex items-center gap-3 px-8 border-r border-white/5 min-w-[200px]">
                  {coin.image ? (
                    <img src={coin.image} alt={coin.symbol} className="w-6 h-6 rounded-full object-cover" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-white/10 animate-pulse"></div>
                  )}
                  <span className="font-bold text-gray-400 text-sm">{coin.symbol}</span>
                  <span className="font-mono text-white font-medium">{coin.price}</span>
                  <span className={`text-xs font-bold flex items-center gap-1 ${coin.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                    {coin.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {Math.abs(coin.change)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 text-[#FE601F] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            Comprehensive Solutions
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] to-[#ff9d3a]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A structured ecosystem designed to enable responsible participation in India's digital asset economy.
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* SERVICE 1: CRYPTO BUY & SELL */}
          <div className={`${styles.card} md:col-span-2 flex flex-col justify-between`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#FE601F]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className={`${styles.iconWrapper} bg-[#FE601F]/10 text-[#FE601F] border-[#FE601F]/20`}>
                <ArrowLeftRight size={28} strokeWidth={2} />
              </div>
              
              <h3 className={`${styles.heading} group-hover:text-[#FE601F] transition-colors`}>Crypto Buy & Sell (P2P)</h3>
              <p className={`${styles.paragraph} max-w-lg`}>
                Experience safe, transparent peer-to-peer cryptocurrency transactions at Kerala's first physical crypto store. We provide a trusted environment where you can trade with confidence.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto pt-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <ShieldCheck size={20} className="text-[#FE601F]" />
                  <span className="text-sm font-bold text-gray-300">Verified Platforms</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <UserCheck size={20} className="text-[#FE601F]" />
                  <span className="text-sm font-bold text-gray-300">Physical Store Security</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <TrendingUp size={20} className="text-[#FE601F]" />
                  <span className="text-sm font-bold text-gray-300">Live Market Rates</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <CheckCircle2 size={20} className="text-[#FE601F]" />
                  <span className="text-sm font-bold text-gray-300">Instant Settlement</span>
                </div>
            </div>
          </div>

          {/* SERVICE 2: CONSULTING (Updated Content) */}
          <div className={`${styles.card} md:row-span-2 flex flex-col hover:border-purple-500/30`}>
             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className={`${styles.iconWrapper} bg-purple-500/10 text-purple-500 border-purple-500/20`}>
                  <BrainCircuit size={28} strokeWidth={2} />
                </div>
                
                <h3 className={`${styles.heading} group-hover:text-purple-400 transition-colors`}>Crypto Consulting</h3>
                <p className={styles.paragraph}>
                  Expert guidance tailored for individuals and businesses. We help you navigate the complex world of blockchain with data-driven strategies and personalized roadmaps.
                </p>

                {/* Added more items to fill vertical space */}
                <div className="mt-auto space-y-3 pt-6">
                   <div className={styles.featureCard}>
                     <div className="flex items-start gap-3">
                       <Target size={18} className="text-purple-400 mt-0.5" />
                       <div>
                         <h4 className="text-white font-semibold text-sm mb-1">Strategic Planning</h4>
                         <p className="text-xs text-gray-500">Custom investment roadmaps.</p>
                       </div>
                     </div>
                   </div>

                   <div className={styles.featureCard}>
                     <div className="flex items-start gap-3">
                       <ShieldCheck size={18} className="text-purple-400 mt-0.5" />
                       <div>
                         <h4 className="text-white font-semibold text-sm mb-1">Risk Management</h4>
                         <p className="text-xs text-gray-500">Mitigate volatility & scams.</p>
                       </div>
                     </div>
                   </div>

                   <div className={styles.featureCard}>
                     <div className="flex items-start gap-3">
                       <PieChart size={18} className="text-purple-400 mt-0.5" />
                       <div>
                         <h4 className="text-white font-semibold text-sm mb-1">Portfolio Analysis</h4>
                         <p className="text-xs text-gray-500">Diversification strategies.</p>
                       </div>
                     </div>
                   </div>

                   <div className={styles.featureCard}>
                     <div className="flex items-start gap-3">
                       <Scale size={18} className="text-purple-400 mt-0.5" />
                       <div>
                         <h4 className="text-white font-semibold text-sm mb-1">Regulatory Advice</h4>
                         <p className="text-xs text-gray-500">Stay legally compliant.</p>
                       </div>
                     </div>
                   </div>

                   <div className={styles.featureCard}>
                     <div className="flex items-start gap-3">
                       <Award size={18} className="text-purple-400 mt-0.5" />
                       <div>
                         <h4 className="text-white font-semibold text-sm mb-1">Business Integration</h4>
                         <p className="text-xs text-gray-500">Web3 adoption guidance.</p>
                       </div>
                     </div>
                   </div>
                </div>
             </div>
          </div>

          {/* SERVICE 3: TAX ASSISTANCE */}
          <div className={`${styles.card} hover:border-emerald-500/30`}>
             <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10">
                <div className={`${styles.iconWrapper} bg-emerald-500/10 text-emerald-500 border-emerald-500/20`}>
                  <FileSpreadsheet size={28} strokeWidth={2} />
                </div>
                
                <h3 className={`${styles.heading} group-hover:text-emerald-400 transition-colors`}>Tax Assistance</h3>
                <p className={styles.paragraph}>
                  Stay compliant with Indian tax regulations. We help organize transactions and ensure accurate reporting.
                </p>
                
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span className={styles.listText}>Transaction documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span className={styles.listText}>Capital gains calculation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span className={styles.listText}>Filing support</span>
                  </div>
                </div>
             </div>
          </div>

          {/* SERVICE 4: EDUCATION */}
          <div className={`${styles.card} hover:border-blue-500/30`}>
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10">
                <div className={`${styles.iconWrapper} bg-blue-500/10 text-blue-500 border-blue-500/20`}>
                  <GraduationCap size={28} strokeWidth={2} />
                </div>
                
                <h3 className={`${styles.heading} group-hover:text-blue-400 transition-colors`}>Crypto Education</h3>
                <p className={styles.paragraph}>
                  Demystify cryptocurrency with our practical learning modules. Understand blockchain basics and risk management.
                </p>
                
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    <span className={styles.listText}>Beginner to advanced</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    <span className={styles.listText}>Security best practices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    <span className={styles.listText}>Market fundamentals</span>
                  </div>
                </div>
             </div>
          </div>

          {/* TILE 5: COMING SOON (Full Width) */}
          <div className="md:col-span-3 bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] border border-dashed border-white/10 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-white/20 transition-all">
             <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
             
             <div className="flex items-center gap-6 z-10">
               <div className={`${styles.iconWrapper} mb-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 text-orange-500 border-white/5`}>
                 <Sparkles size={28} strokeWidth={2} />
               </div>
               
               <div className="text-center md:text-left">
                 <h3 className={styles.heading + " mb-2"}>More Services Coming Soon</h3>
                 <p className={styles.paragraph + " mb-0"}>We're expanding to bring you cutting-edge solutions in DeFi and enterprise crypto services.</p>
               </div>
             </div>
             
             <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 z-10">
               <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
               In Development
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;