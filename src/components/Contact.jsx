import React from 'react';
import { MapPin, Mail, Phone, Send, User, MessageSquare, ArrowRight, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4]">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-[#121212] border border-white/5 rounded-[32px] overflow-hidden shadow-2xl shadow-black/50 flex flex-col lg:flex-row">
          
          {/* --- LEFT PANEL: CONTACT FORM (60% Width) --- */}
          <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Let's <span className="text-[#FE601F]">talk.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Have an inquiry or some feedback for us? Fill out the form below to contact our team. 
                We usually respond within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#FE601F] transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FE601F] focus:bg-white/[0.05] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#FE601F] transition-colors" size={18} />
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FE601F] focus:bg-white/[0.05] transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#FE601F] transition-colors" size={18} />
                  <input 
                    type="text" 
                    placeholder="How can we help?" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FE601F] focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us more about your inquiry..." 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-5 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FE601F] focus:bg-white/[0.05] transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-[#FE601F] hover:bg-[#e55010] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#FE601F]/20 mt-4"
              >
                Send Message
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* --- RIGHT PANEL: INFO & MAP (40% Width) --- */}
          <div className="lg:w-2/5 relative flex flex-col">
            
            {/* Top Half: Contact Details */}
            <div className="bg-[#1A1A1A] p-8 md:p-12 flex-1 flex flex-col justify-center border-l border-white/5">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                Contact Information
              </h3>
              
              <div className="space-y-6"> {/* Reduced space slightly to fit 4 items comfortably */}
                
                {/* Address */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#FE601F] border border-white/5 group-hover:border-[#FE601F] transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm uppercase tracking-wide opacity-80 mb-1">Visit Us</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Divine Nagar, Muringoor, Chalakudy, <br/> Thrissur, Kerala – 680309
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#FE601F] border border-white/5 group-hover:border-[#FE601F] transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm uppercase tracking-wide opacity-80 mb-1">Email Us</h4>
                    <a href="mailto:kryptxsolutions@gmail.com" className="block text-gray-400 hover:text-white text-sm transition-colors">
                      kryptxsolutions@gmail.com
                    </a>
                  </div>
                </div>
                  <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#FE601F] border border-white/5 group-hover:border-[#FE601F] transition-colors duration-300">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm uppercase tracking-wide opacity-80 mb-1">Follow Us</h4>
                    <a 
                      href="https://www.instagram.com/kryptx_solutions" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      @kryptx_solutions
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#FE601F] border border-white/5 group-hover:border-[#FE601F] transition-colors duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm uppercase tracking-wide opacity-80 mb-1">Call Us</h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+918921237435" className="block text-gray-400 hover:text-white text-sm transition-colors">
                        +91 89212 37435
                      </a>
                      <a href="tel:+919645244272" className="block text-gray-400 hover:text-white text-sm transition-colors">
                        +91 96452 44272
                      </a>
                    </div>
                  </div>
                </div>

                {/* Instagram - NEW SECTION */}
              

              </div>
            </div>

            {/* Bottom Half: Map */}
            <div className="h-64 lg:h-auto lg:flex-1 relative border-t border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.960686976214!2d76.32688757508757!3d10.273766289846065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0803875865230f%3A0x67073252554e2072!2sMuringoor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1705148000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0, filter: 'invert(90%) contrast(85%)'}} 
                 allowFullScreen="" 
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="KryptX Location"
                 className="absolute inset-0 w-full h-full"
               ></iframe>
               
               {/* Overlay Badge */}
               <div className="absolute bottom-4 right-4 bg-black/90 backdrop-blur text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded border border-white/10 z-10">
                  Kerala, India
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;