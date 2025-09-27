import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Home, Wrench, Briefcase } from 'lucide-react';
import type { Service } from '../types';

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const services: Service[] = [
    {
      id: '1',
      title: 'Architecture & Design',
      description: 'Custom architectural designs that blend functionality with aesthetic appeal. Our expert architects create innovative solutions tailored to your vision.',
      icon: 'Building2',
    },
    {
      id: '2',
      title: 'Home Renovation',
      description: 'Transform your existing space with our comprehensive renovation services. From kitchens to full home makeovers, we bring new life to your property.',
      icon: 'Wrench',
    },
    {
      id: '3',
      title: 'Residential Construction',
      description: 'Build your dream home with our residential construction expertise. We handle everything from foundation to finishing touches with meticulous attention to detail.',
      icon: 'Home',
    },
    {
      id: '4',
      title: 'Commercial Projects',
      description: 'Professional commercial construction services for offices, retail spaces, and industrial facilities. We deliver projects on time and within budget.',
      icon: 'Briefcase',
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return Building2;
      case 'Wrench':
        return Wrench;
      case 'Home':
        return Home;
      case 'Briefcase':
        return Briefcase;
      default:
        return Building2;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 sm:mb-6 font-inter">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed px-4">
              From concept to completion, we offer comprehensive construction services 
              to meet all your building needs with exceptional quality and craftsmanship.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <motion.div
                  key={service.id}
                  className="group bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-construction-gold"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="mb-4 sm:mb-6">
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-construction-gold bg-opacity-10 rounded-xl flex items-center justify-center group-hover:bg-construction-gold group-hover:bg-opacity-100 transition-all duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-construction-gold group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3 sm:mb-4 font-inter group-hover:text-construction-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-construction-gray leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -20 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm sm:text-base text-construction-gold font-medium hover:underline cursor-pointer">
                      Learn More →
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;