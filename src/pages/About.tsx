import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading sleep technology researcher with 15+ years in biomedical engineering'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning industrial designer specializing in human-centered technology'
    },
    {
      name: 'Elena Petrov',
      role: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former aerospace engineer bringing precision manufacturing to sleep technology'
    }
  ];

  return (
    <div className="min-h-screen bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'var(--svg-background-pattern)' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">BIDUA</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering the future of sleep technology through innovative design and cutting-edge engineering
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                At BIDUA, we believe that quality sleep is the foundation of human performance and well-being. 
                As both a manufacturer and importer, our mission is to revolutionize the way people rest by creating 
                intelligent sleeping environments that adapt to individual needs and optimize recovery through 
                direct quality control and global sourcing excellence.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Through our integrated manufacturing and importing capabilities, we combine cutting-edge technology 
                with thoughtful design to create sleeping pods that don't just provide comfort—they actively enhance 
                your sleep quality through intelligent controls and advanced environmental systems, all while 
                maintaining direct oversight of materials and production quality.
              </p>
            </div>
            <div className="relative">
              <img
                src='/Pod Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed main.png'
                alt="Our Mission"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Continuously pushing boundaries to create breakthrough sleep technology solutions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Uncompromising standards in materials, manufacturing, and customer experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Customer Focus</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every decision we make is guided by what's best for our customers' sleep experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Environmental responsibility drives our material choices and manufacturing processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Visionary leaders combining expertise in technology, design, and human wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-400/50"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">2020</div>
              <div className="text-gray-400">Manufacturing Est.</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400">Employees</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10k+</div>
              <div className="text-gray-400">Pods Delivered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;