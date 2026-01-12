import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users, BookOpen, ChevronRight, MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { COURSES, ACHIEVERS } from '../data/content';
import emailjs from '@emailjs/browser';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const targetId = (location.hash && location.hash.replace('#', '')) || state?.scrollTo;
    if (!targetId) return;

    const timeout = window.setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 75);

    return () => window.clearTimeout(timeout);
  }, [location]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // OPTION 1: Using Web3Forms (Simpler - get free access key from https://web3forms.com)
      const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'; // Get from https://web3forms.com
      
      const formPayload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        email: 'neurone.institute.dev@gmail.com',
        subject: `New Inquiry from ${formData.fullName}`,
        name: formData.fullName,
        phone: formData.phone,
        course: formData.course,
        message: formData.message,
        from_name: 'Neurone.in Website',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ fullName: '', phone: '', course: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }

      /* OPTION 2: Using EmailJS (More customizable - requires EmailJS account setup)
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'neurone.institute.dev@gmail.com',
          from_name: formData.fullName,
          phone: formData.phone,
          course: formData.course,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ fullName: '', phone: '', course: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
      */
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[96vh] flex items-center bg-slate-50 overflow-hidden py-20 lg:py-0">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
              x: [0, 50, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-b from-primary-100/50 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -30, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary-100/40 to-transparent rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/4" 
          />
          <div className="absolute top-1/2 left-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary-100 rounded-full shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-secondary-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-600">Trusted by 500+ Students in Sundarban</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight">
                Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Medical & Engineering Success</span> Starts Here.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
                Expert coaching for NEET, JEE, WBJEE & Nursing entrance exams. Personalized guidance to help you achieve your dreams.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold shadow-lg shadow-primary-500/25 transition-all flex items-center gap-2"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-full font-semibold shadow-sm transition-all flex items-center gap-2 group"
                >
                  <Play className="w-5 h-5 fill-slate-900 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200 group">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Students studying"
                  className="w-full h-full object-cover"
                />
                
                <motion.div
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute inset-x-6 bottom-6 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl border border-slate-100"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Affordable Fees", icon: CheckCircle2 },
                      { label: "Expert Faculty", icon: Users },
                      { label: "Weekly Tests", icon: TrendingUp },
                      { label: "Study Material", icon: BookOpen },
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                        <feature.icon className="w-4 h-4 text-secondary-500" />
                        <span className="text-slate-600 font-medium">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2 mb-4">Targeted Coaching for Top Exams</h2>
            <p className="text-slate-600 text-lg">Choose from our specialized programs designed to give you the competitive edge.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {COURSES.map((course) => (
              <motion.div 
                key={course.id} 
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-primary-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.gradient} opacity-5 rounded-bl-[100px] transition-opacity group-hover:opacity-10`} />
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-primary-500/20`}
                >
                  <course.icon className="w-7 h-7" />
                </motion.div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-2">
                  {course.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {course.examInfo.slice(0, 2).map((info, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                      {info.value}
                    </span>
                  ))}
                </div>

                <Link to={`/courses/${course.id}`} className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievers Section */}
      <section id="achievers" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <span className="text-secondary-500 font-semibold tracking-wider uppercase text-sm">Hall of Fame</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Our Shining Stars</h2>
              <p className="text-slate-400 mt-4 text-lg">
                Consistent results year after year. We are proud of our students who worked hard to achieve their dreams.
              </p>
            </motion.div>
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/achievers')}
              className="px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-full text-white transition-colors"
            >
              View All Results
            </motion.button>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {ACHIEVERS.slice(0, 4).map((student, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-4 hover:bg-slate-800 transition-colors"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={student.image} 
                    alt={student.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className={`absolute bottom-2 left-2 ${student.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                    {student.rank}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">{student.name}</h3>
                <p className="text-slate-400 text-sm">{student.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-primary-50/20 to-slate-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/40 to-transparent rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Connect With Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2 mb-4">Get in Touch</h2>
            <p className="text-slate-600 text-lg">Have questions about our courses or admission process? We're here to help you achieve your dreams.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden border border-slate-100 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-50/50 via-secondary-50/50 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-50/50 via-primary-50/50 to-transparent rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
              
              <div className="relative z-10 p-[28px] flex flex-col gap-0 h-fit">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {[
                    { 
                      Icon: MapPin, 
                      title: "Visit Us", 
                      text: "Kakdwip, Nayapara College Road,\nSouth 24 Pgs - 743347",
                      color: "text-primary-600",
                      bg: "bg-primary-50",
                      border: "border-primary-100",
                      className: ""
                    },
                    { 
                      Icon: Phone, 
                      title: "Call Us", 
                      text: "+91 98328 64275\n+91 96471 01618\n+91 99335 01844", 
                      sub: "Mon-Sat, 9am - 8pm",
                      color: "text-secondary-600",
                      bg: "bg-secondary-50",
                      border: "border-secondary-100",
                      className: ""
                    },
                    { 
                      Icon: Mail, 
                      title: "Email Us", 
                      text: "contact@neurone.in",
                      color: "text-slate-600",
                      bg: "bg-slate-50",
                      border: "border-slate-200",
                      className: "md:col-span-2",
                      isWide: true
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      className={`relative group h-full ${item.className}`}
                    >
                      <div className={`flex flex-col h-full items-center text-center p-8 rounded-3xl transition-all duration-300 bg-slate-50/50 border ${item.border} hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 ${item.isWide ? 'md:flex-row md:text-left md:justify-start md:gap-8' : ''}`}>
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 md:mb-0 shadow-sm group-hover:shadow-md transition-all duration-300 shrink-0`}
                        >
                          <item.Icon className={`w-7 h-7 ${item.color}`} />
                        </motion.div>
                        
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                          
                          {item.isWide ? (
                            <div className={`${!item.sub ? 'flex flex-col gap-0 h-fit' : 'grid md:grid-cols-3 gap-4 items-center'}`}>
                               <p className={`text-slate-600 whitespace-pre-line leading-relaxed text-base ${!item.sub ? 'md:col-span-3' : ''}`}>{item.text}</p>
                               {item.sub && (
                                 <div className="md:col-span-2 flex md:justify-end">
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold group-hover:bg-slate-50 transition-colors">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    {item.sub}
                                  </span>
                                 </div>
                               )}
                            </div>
                          ) : (
                            <>
                              <p className="text-slate-600 whitespace-pre-line leading-relaxed text-base mb-4">{item.text}</p>
                              {item.sub && (
                                <div className="mt-auto pt-2">
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold group-hover:bg-slate-50 transition-colors">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    {item.sub}
                                  </span>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick action button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 flex justify-center"
                >
                  <div className="p-1.5 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full">
                    <motion.a
                      href="tel:+919832864275"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold shadow-lg shadow-primary-200 hover:shadow-xl transition-all relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <Phone className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Call Now for Admission</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full grayscale-[50%] invert-[5%]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689252178!2d88.43270784335936!3d22.16904370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02760ccccccccd%3A0x0!2zMjLCsDEwJzA4LjYiTiA4OMKwMjYnMTAuOCJF!5e0!3m2!1sen!2sin!4v1234567890" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Neurone Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;