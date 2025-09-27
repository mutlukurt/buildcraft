import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Facebook, Twitter, Instagram, Linkedin as LinkedIn, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    'Architecture & Design',
    'Home Renovation',
    'Residential Construction',
    'Commercial Projects',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Company Info */}
            <motion.div
              className="sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <Hammer className="h-6 sm:h-7 lg:h-8 w-6 sm:w-7 lg:w-8 text-construction-gold" />
                <span className="text-xl sm:text-2xl font-bold font-inter">BuildCraft</span>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Professional construction services that transform visions into reality. 
                Building the future with strength, integrity, and exceptional craftsmanship.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-construction-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">123 Construction Ave, New York, NY 10001</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-construction-gold" />
                  <span className="text-sm sm:text-base text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-construction-gold" />
                  <span className="text-sm sm:text-base text-gray-300">hello@buildcraft.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 font-inter text-white">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm sm:text-base text-gray-300 hover:text-construction-gold transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 font-inter text-white">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-sm sm:text-base text-gray-300 hover:text-construction-gold transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 font-inter text-white">Stay Connected</h3>
              
              {/* Newsletter */}
              <div className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  Subscribe to get updates on our latest projects and construction tips.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 sm:px-4 py-2 bg-navy-800 border border-gray-600 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:border-construction-gold text-white text-sm sm:text-base"
                  />
                  <button className="px-3 sm:px-4 py-2 bg-construction-gold text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-opacity-90 transition-colors duration-200 text-sm sm:text-base font-medium">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Follow us on social media:</p>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-construction-gold transition-colors duration-200 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-white" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <motion.div
            className="border-t border-gray-700 pt-6 sm:pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <div className="text-gray-300 text-center sm:text-left">
                <p className="text-sm sm:text-base">&copy; 2025 Mutlu Kurt. Licensed under MIT License.</p>
              </div>
              
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
                <a href="#" className="text-gray-300 hover:text-construction-gold transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-construction-gold transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-construction-gold transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-construction-gold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-40 text-sm sm:text-base"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;