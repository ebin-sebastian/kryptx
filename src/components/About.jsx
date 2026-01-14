import React from 'react';
import {ShieldCheck,Target,Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4">
      {/* About Section */}
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] to-[#ff9d3a]">KryptX Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Info Card */}
            <div className="bg-[#0a0a0a] rounded-[32px] border border-white/5 p-10 hover:border-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-6">Our Company</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                KryptX Solutions Private Limited is a duly incorporated Indian Private Limited company providing structured and compliance-oriented cryptocurrency services. We operate with a strong emphasis on transparency, internal controls, and risk management.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our services are designed to enable responsible participation in the digital asset ecosystem while following documented processes, verification standards, and ethical business practices aligned with applicable regulatory expectations.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-[#0a0a0a] rounded-[32px] border border-white/5 p-10 hover:border-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-6">Our Commitment</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={20} className="text-[#FE601F]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Transparency First</h4>
                    <p className="text-gray-500 text-sm">Clear documentation and honest communication in every transaction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Long-term Sustainability</h4>
                    <p className="text-gray-500 text-sm">Building investor confidence through prudent growth strategies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Innovation with Compliance</h4>
                    <p className="text-gray-500 text-sm">Supporting digital asset innovation while maintaining regulatory alignment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Bar
          <div className="mt-8 bg-gradient-to-r from-[#0a0a0a] to-[#0f0f0f] rounded-[32px] border border-white/5 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Location</p>
                <p className="text-white font-semibold">Divine Nagar, Muringoor</p>
                <p className="text-gray-400 text-sm">Chalakudy, Thrissur, Kerala – 680309</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Email</p>
                <a href="mailto:kryptxsolutions@gmail.com" className="text-[#FE601F] font-semibold hover:text-[#ff7a45] transition-colors">
                  kryptxsolutions@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Website</p>
                <a href="https://www.kryptxsolutions.com" target="_blank" rel="noopener noreferrer" className="text-[#FE601F] font-semibold hover:text-[#ff7a45] transition-colors">
                  www.kryptxsolutions.com
                </a>
              </div>
            </div>
          </div> */}
        </div>
    </section>
  );
};

export default About;