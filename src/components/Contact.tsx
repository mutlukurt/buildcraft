import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import type { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      }, 500);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 8AM-6PM',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@buildcraft.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Construction Ave',
      description: 'New York, NY 10001',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gray-50">
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
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed px-4">
              Ready to start your construction project? Contact us today for a free consultation 
              and let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-6 sm:mb-8 font-inter">
                Let's Build Something Amazing Together
              </h3>
              
              <p className="text-sm sm:text-base text-construction-gray mb-6 sm:mb-8 leading-relaxed">
                Whether you're planning a residential project, commercial development, or renovation, 
                our expert team is here to help. We offer free consultations and detailed project estimates.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 sm:space-x-4"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-construction-gold bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-construction-gold" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-navy-900 mb-1 font-inter">{item.title}</h4>
                        <p className="text-sm sm:text-base text-construction-gray font-medium">{item.content}</p>
                        <p className="text-xs sm:text-sm text-construction-gray">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-6 sm:py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16 text-construction-green mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 font-inter">
                      Thank You!
                    </h3>
                    <p className="text-sm sm:text-base text-construction-gray">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-4 sm:mb-6 font-inter">
                      Send us a message
                    </h3>

                    <div>
                      <label htmlFor="name" className="block text-sm sm:text-base font-medium text-navy-900 mb-2">
                        Full Name
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-construction-gold focus:border-transparent transition-all duration-200 text-sm sm:text-base ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                        whileFocus={{ scale: 1.02 }}
                      />
                      {errors.name && (
                        <motion.p
                          className="text-red-500 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm sm:text-base font-medium text-navy-900 mb-2">
                        Email Address
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-construction-gold focus:border-transparent transition-all duration-200 text-sm sm:text-base ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email address"
                        whileFocus={{ scale: 1.02 }}
                      />
                      {errors.email && (
                        <motion.p
                          className="text-red-500 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm sm:text-base font-medium text-navy-900 mb-2">
                        Project Details
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-construction-gold focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        whileFocus={{ scale: 1.02 }}
                      />
                      {errors.message && (
                        <motion.p
                          className="text-red-500 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-construction-gold text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;