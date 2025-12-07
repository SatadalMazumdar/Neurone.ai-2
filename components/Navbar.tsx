import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const NavItem = ({ to, label, isHash = false }: { to: string; label: string; isHash?: boolean }) => {
    if (isHash) {
      return (
        <a 
          href={`/${to}`} 
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              scrollToSection(to.replace('#', ''));
            }
          }}
          className="relative text-slate-600 hover:text-primary-600 font-medium transition-colors group"
        >
          {label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      );
    }
    return (
      <Link to={to} className="relative text-slate-600 hover:text-primary-600 font-medium transition-colors group">
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    );
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="text-primary-600"
          >
            <Brain className="w-9 h-9" strokeWidth={2.5} />
          </motion.div>
          <span className="text-2xl font-bold font-display text-primary-600 tracking-tight uppercase group-hover:text-primary-700 transition-colors">
            Neurone
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItem to="/" label="Home" />
          <NavItem to="#courses" label="Courses" isHash />
          <NavItem to="#achievers" label="Achievers" isHash />
          <NavItem to="#contact" label="Contact" isHash />
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (location.pathname !== '/') window.location.href = '/#contact';
              else document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-slate-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              <Link to="/" onClick={closeMenu} className="text-slate-700 font-medium py-2 border-b border-slate-100">Home</Link>
              <a href="/#courses" onClick={closeMenu} className="text-slate-700 font-medium py-2 border-b border-slate-100">Courses</a>
              <a href="/#achievers" onClick={closeMenu} className="text-slate-700 font-medium py-2 border-b border-slate-100">Achievers</a>
              <a href="/#contact" onClick={closeMenu} className="text-slate-700 font-medium py-2 border-b border-slate-100">Contact</a>
              <motion.button 
                whileTap={{ scale: 0.98 }}
                className="bg-primary-600 text-white w-full py-3 rounded-lg font-medium mt-2"
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;