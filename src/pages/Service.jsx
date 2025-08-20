
import React, { useState } from 'react';
import { CheckCircle, Star, Users, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Service = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const hoverCardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      price: "Starting at $2,999",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile Friendly"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to grow your online presence",
      price: "Starting at $1,499/month",
      features: ["Social Media Management", "Content Creation", "PPC Campaigns", "Analytics"]
    },
    {
      title: "Brand Design",
      description: "Complete brand identity design from logo to marketing materials",
      price: "Starting at $1,999",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"]
    },
    {
      title: "Consulting",
      description: "Expert advice and strategic planning for your business growth",
      price: "Starting at $199/hour",
      features: ["Business Analysis", "Strategy Planning", "Process Optimization", "Growth Planning"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      text: "Exceptional service and results. Our website traffic increased by 300% within 3 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Local Business Co.",
      text: "Professional, reliable, and delivered exactly what was promised. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Davis",
      company: "Creative Agency",
      text: "The team's expertise and attention to detail exceeded our expectations.",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: CheckCircle, number: "1000+", label: "Projects Completed" },
    { icon: Star, number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen  overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Floating background elements with Framer Motion */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We provide comprehensive digital solutions to help your business thrive in the modern world. 
            From web development to digital marketing, we've got you covered.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-gray-800 shadow-lg border-t-4 border-b-4 border-blue-500 p-6 rounded-xl cursor-pointer"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 2, repeat: Infinity, delay: index * 0.2 }
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white mx-auto mb-2" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold text-white"
                    animate={{
                      scale: [1, 1.05, 1],
                      transition: { duration: 1.5, repeat: Infinity, delay: index * 0.3 }
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-white">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-16 px-4 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            variants={itemVariants}
          >
            What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="border-t-4 border-b-4 border-blue-500 bg-gray-900 p-8 rounded-2xl cursor-pointer group"
                variants={itemVariants}
                whileHover={hoverCardVariants.hover}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-xl font-bold text-white mb-4 group-hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                
                <p className="text-white mb-6">{service.description}</p>
                
                <motion.div 
                  className="text-2xl font-bold text-blue-600 mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.price}
                </motion.div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      className="flex items-center text-sm text-white"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      whileHover={{ x: 5, color: "#3b82f6" }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button 
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center group"
                  whileHover={{ 
                    backgroundColor: "#1d4ed8",
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            variants={itemVariants}
          >
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 border-b-4 border-blue-500 p-8 rounded-2xl cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  rotateY: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="flex mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.p 
                  className="text-white mb-6 italic"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  "{testimonial.text}"
                </motion.p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        className="py-16 px-4 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-200 rounded-full opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-24 h-24 border-2 border-purple-200 rounded-full opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get Started?</span>
            </h2>
            <p className="text-xl text-white">
              Let's discuss your project and bring your vision to life.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "+1 (555) 123-4567" },
                  { icon: Mail, text: "hello@yourcompany.com" },
                  { icon: MapPin, text: "123 Business Ave, City, State 12345" }
                ].map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex items-center cursor-pointer group"
                      whileHover={{ x: 10, color: "#3b82f6" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <IconComponent className="w-5 h-5 text-blue-600 mr-3" />
                      </motion.div>
                      <span className="text-white group-hover:text-blue-600 transition-colors duration-300">
                        {contact.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'name', type: 'text', label: 'Full Name *', placeholder: 'Your full name' },
                  { name: 'email', type: 'email', label: 'Email Address *', placeholder: 'your.email@example.com' },
                  { name: 'phone', type: 'tel', label: 'Phone Number', placeholder: '(555) 123-4567' }
                ].map((field, index) => (
                  <motion.div 
                    key={field.name}
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor={field.name} className="block text-sm font-semibold text-white mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800 text-white">Select a service</option>
                    <option value="web-development" className="bg-gray-800 text-white">Web Development</option>
                    <option value="digital-marketing" className="bg-gray-800 text-white">Digital Marketing</option>
                    <option value="brand-design" className="bg-gray-800 text-white">Brand Design</option>
                    <option value="consulting" className="bg-gray-800 text-white">Consulting</option>
                  </select>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold flex items-center justify-center group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    background: "linear-gradient(to right, #1d4ed8, #7c3aed)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Service;