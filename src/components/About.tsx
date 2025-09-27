import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Projects Completed', value: '750+' },
    { icon: Clock, label: 'Years Experience', value: '15+' },
    { icon: CheckCircle, label: 'Success Rate', value: '99%' },
  ];

  const features = [
    'Licensed and fully insured construction company',
    'Expert team of skilled craftsmen and engineers',
    'Sustainable and eco-friendly building practices',
    'Transparent pricing with no hidden costs',
    'Quality materials and cutting-edge techniques',
    '24/7 customer support throughout your project'
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6 font-inter">
              About BuildCraft
            </h2>
            <p className="text-lg sm:text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed px-4">
              With over 15 years of excellence in the construction industry, we've built a reputation 
              for delivering exceptional results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Construction team at work"
                className="rounded-xl shadow-2xl w-full"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4 sm:mb-6 font-inter">
                Your Vision, Our Expertise
              </h3>
              <p className="text-base sm:text-lg text-construction-gray mb-6 sm:mb-8 leading-relaxed">
                At BuildCraft, we believe every project tells a story. Whether you're dreaming of a 
                custom home, planning a commercial development, or renovating your space, our expert 
                team brings your vision to life with precision and passion.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-construction-green flex-shrink-0" />
                    <span className="text-sm sm:text-base text-construction-gray">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <IconComponent className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-construction-gold mx-auto mb-2 sm:mb-4" />
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-900 mb-1 sm:mb-2 font-inter">{stat.value}</h4>
                  <p className="text-xs sm:text-sm lg:text-base text-construction-gray font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;