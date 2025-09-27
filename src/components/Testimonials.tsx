import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Homeowner',
      company: 'Private Client',
      content: 'BuildCraft transformed our vision into reality. Their attention to detail and professionalism exceeded our expectations. The team was responsive, reliable, and delivered exactly what they promised.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Property Developer',
      company: 'Chen Development Group',
      content: 'Working with BuildCraft on multiple commercial projects has been exceptional. They consistently deliver high-quality work on time and within budget. Their expertise in commercial construction is unmatched.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Business Owner',
      company: 'Rodriguez Retail Solutions',
      content: 'The renovation of our retail space was handled flawlessly. BuildCraft understood our business needs and minimized disruption while delivering a stunning result that increased our customer traffic significantly.',
      rating: 5,
    },
    {
      id: '4',
      name: 'David Thompson',
      role: 'Architect',
      company: 'Thompson Design Studio',
      content: 'As an architect, I appreciate working with contractors who understand the importance of precision. BuildCraft brings my designs to life with incredible accuracy and craftsmanship.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-construction-gold fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
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
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed px-4">
              Don't just take our word for it. Here's what our satisfied clients 
              have to say about their experience working with BuildCraft.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-50 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg relative">
                  <Quote className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-construction-gold mx-auto mb-4 sm:mb-6 opacity-50" />
                  
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-navy-900 font-medium mb-6 sm:mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex justify-center mb-4 sm:mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  <div className="border-t border-gray-200 pt-4 sm:pt-6">
                    <h4 className="text-base sm:text-lg font-bold text-navy-900 mb-1 font-inter">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm sm:text-base text-construction-gray">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 sm:p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-construction-gold transition-all duration-200 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-construction-gray group-hover:text-construction-gold" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex space-x-1.5 sm:space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-construction-gold' : 'bg-gray-300 hover:bg-construction-gold'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-2 sm:p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-construction-gold transition-all duration-200 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-construction-gray group-hover:text-construction-gold" />
              </motion.button>
            </div>
          </div>

          {/* Client Logos */}
          <motion.div
            className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-center text-sm sm:text-base text-construction-gray font-medium mb-6 sm:mb-8">
              Trusted by leading companies and homeowners
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center opacity-50">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 sm:h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs sm:text-sm text-gray-400 font-medium">Logo {i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;