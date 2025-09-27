import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const projects: Project[] = [
    {
      id: '1',
      title: 'Luxury Residential Complex',
      category: 'Residential',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Modern luxury apartments with sustainable design features',
    },
    {
      id: '2',
      title: 'Corporate Headquarters',
      category: 'Commercial',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'State-of-the-art office building with innovative architecture',
    },
    {
      id: '3',
      title: 'Custom Family Home',
      category: 'Residential',
      imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Beautiful custom home with modern amenities and design',
    },
    {
      id: '4',
      title: 'Shopping Center Renovation',
      category: 'Commercial',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete renovation of retail space with modern facilities',
    },
    {
      id: '5',
      title: 'Historic Building Restoration',
      category: 'Restoration',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Careful restoration preserving historical architectural elements',
    },
    {
      id: '6',
      title: 'Industrial Warehouse',
      category: 'Industrial',
      imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Large-scale industrial facility with modern logistics design',
    },
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Restoration'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gray-50">
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
              Our Projects
            </h2>
            <p className="text-lg sm:text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed px-4">
              Explore our portfolio of successful construction projects that showcase 
              our commitment to excellence and attention to detail.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeCategory === category
                    ? 'bg-construction-gold text-white'
                    : 'bg-white text-construction-gray hover:bg-navy-50 hover:text-navy-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-navy-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  
                  <motion.div
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <span className="bg-construction-gold text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {project.category}
                    </span>
                  </motion.div>
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2 font-inter group-hover:text-construction-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-construction-gray mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -20 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm sm:text-base text-construction-gold font-medium hover:underline cursor-pointer">
                      View Details →
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;