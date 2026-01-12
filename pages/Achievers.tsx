import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ACHIEVERS } from '../data/content';

const fadeInUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};


const Achievers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 text-white pt-24 pb-20">
      <div className="container mx-auto px-4 relative z-10 mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="ml-auto mb-6 px-4 py-2 border border-slate-600 hover:border-slate-400 text-white rounded-full text-sm font-medium transition-colors"
        >
          Back
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6 mb-12"
        >
          <div className="space-y-3 max-w-2xl">
            <p className="text-secondary-400 font-semibold tracking-widest uppercase text-sm">Hall of Fame</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold">Our Shining Stars</h1>
            <p className="text-slate-300 text-lg">
              Consistent results year after year. We celebrate the students who trusted our process and achieved their dreams.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ACHIEVERS.map((student, idx) => (
            <motion.div
              key={`${student.name}-${idx}`}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-2xl p-4 hover:bg-slate-800 transition-colors"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.45 }}
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute bottom-2 left-2 ${student.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                  {student.rank}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1">{student.name}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{student.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Achievers;

