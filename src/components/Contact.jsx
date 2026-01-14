import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#121212] border border-white/5 rounded-[32px] p-8 md:p-12 overflow-hidden relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* LEFT COLUMN: Text Content - Vertically Centered */}
            <div className="flex flex-col justify-center"> {/* ADDED justify-center */}
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Navigate the Future?</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Visit us today and experience the safety of Kerala’s trusted crypto ecosystem. We are here to help you every step of the way.
              </p>
              
              <div className="space-y-5"> {/* Increased gap slightly for balance */}
                
                {/* Address */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-[#FE601F] group-hover:bg-[#FE601F] group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight">KryptX Solutions Pvt Ltd</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Divine Nagar, Muringoor, Chalakudy, Thrissur, Kerala – 680309
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-[#FE601F] group-hover:bg-[#FE601F] group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight">Email Us</h4>
                    <a href="mailto:kryptxsolutions@gmail.com" className="block text-gray-400 hover:text-white text-sm mt-1 transition-colors">
                      kryptxsolutions@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-[#FE601F] group-hover:bg-[#FE601F] group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight">Call Us</h4>
                    <a href="tel:+919876543210" className="block text-gray-400 hover:text-white text-sm mt-1 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Map Placeholder */}
            <div className="h-[450px] w-full bg-slate-800 rounded-2xl overflow-hidden relative border border-white/10 group">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.960686976214!2d76.32688757508757!3d10.273766289846065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0803875865230f%3A0x67073252554e2072!2sMuringoor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1705148000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0, filter: 'grayscale(100%) invert(90%) contrast(85%)'}} 
                 allowFullScreen="" 
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="KryptX Location"
                 className="group-hover:filter-none transition-all duration-500"
               ></iframe>
               <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white text-xs px-3 py-1 rounded-md border border-white/10">
                  Locate Us
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;