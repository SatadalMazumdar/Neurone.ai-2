import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import NeuroneLogo from '../Assets/Neurone Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={NeuroneLogo}
                alt="Neurone logo"
                className="h-12 w-auto max-w-[180px] object-contain"
              />
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Empowering students in Kakdwip, Sundarban, and Kolkata to achieve their medical and engineering dreams through quality coaching and mentorship.
            </p>
            <p className="text-slate-500 text-sm mb-6 font-medium">
              Reg. No: WB-18-0144250
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Courses', 'Success Stories', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#" 
                    className="hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Courses</h4>
            <ul className="space-y-4">
              {['NEET Coaching', 'JEE Main', 'WBJEE', 'AIIMS Nursing', 'JENPAS UG', 'ANM / GNM'].map((item) => (
                <li key={item}>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#" 
                    className="hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary-500 shrink-0" />
                <span>Kakdwip, Nayapara College Road,<br />South 24 Pgs - 743347</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>+91 98328 64275</span>
                  <span>+91 96471 01618</span>
                  <span>+91 99335 01844</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary-500 shrink-0" />
                <span>contact@neurone.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Neurone Institute. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;