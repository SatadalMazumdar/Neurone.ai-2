import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../data/content';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = COURSES.find(c => c.id === courseId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Course Not Found</h2>
        <Link to="/" className="text-primary-600 hover:underline">Back to Home</Link>
      </div>
    );
  }

  const { icon: Icon } = course;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      {/* Course Hero */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <Link to="/#courses" className="inline-flex items-center text-slate-500 hover:text-slate-800 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-white shrink-0 shadow-xl`}
            >
              <Icon className="w-10 h-10" />
            </motion.div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">{course.title}</h1>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider rounded-full border border-primary-100">
                  {course.badge.text}
                </span>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                {course.fullDescription}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {course.examInfo.map((info, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <p className="text-xs text-slate-500 uppercase font-semibold mb-1">{info.label}</p>
                    <p className="text-slate-900 font-bold">{info.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Course Highlights</h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 gap-6"
              >
                {course.highlights.map((highlight, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className={`w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4`}>
                      <highlight.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{highlight.title}</h3>
                    <ul className="space-y-2">
                      {highlight.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-primary-400 rounded-full shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Exam Pattern Table */}
            {course.tableData && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
              >
                <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
                  <h2 className="text-xl font-bold text-slate-900">{course.tableData.title}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                      <tr>
                        {course.tableData.columns.map((col, i) => (
                          <th key={i} className="px-6 md:px-8 py-4">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {course.tableData.rows.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                          {row.map((cell, j) => (
                            <td key={j} className="px-6 md:px-8 py-4 font-medium first:text-slate-900">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.section>
            )}

          </div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Career Opportunities */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-xl font-bold mb-6 relative z-10">{course.careerSectionTitle || "Career Opportunities"}</h3>
              <div className="space-y-6 relative z-10">
                {course.careers.map((career, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + (idx * 0.1) }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-500 transition-colors">
                      <career.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{career.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{career.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-primary-50 to-indigo-50 rounded-3xl p-8 border border-primary-100 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to Start?</h3>
              <p className="text-slate-600 mb-6 text-sm">Join the next batch and begin your journey to success.</p>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold shadow-lg shadow-primary-500/20 transition-all flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;