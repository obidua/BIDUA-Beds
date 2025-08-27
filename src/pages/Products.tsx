import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';
import { products, productSeries } from '../data/products';
import { Check, Star, Award, Globe, ChevronDown, ChevronUp, Zap, Shield, Layers, Palette, Package } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [showModelCodes, setShowModelCodes] = useState(false);

  const dimensions = [
    { variant: 'Horizontal Single', size: '2060 × 1140 × 2400 mm' },
    { variant: 'Horizontal Double', size: '2060 × 1580 × 2400 mm' },
    { variant: 'Big-bed (select series)', size: '2060 × 1950 × 2400 mm' },
    { variant: 'COSMOS Vertical Single', size: '2060 × 1140 × 2400 mm' },
    { variant: 'E-sports Horizontal Single', size: '2150 × 1150 × 2400 mm (ladder 180 mm)' },
    { variant: 'Wooden Horizontal Single', size: '2150 × 1100 × 2400 mm (ladder 480 mm)' },
    { variant: 'Online Red studio (Small)', size: '1580 × 2150 × 2450 mm' },
    { variant: 'Online Red studio (Large)', size: '2180 × 2150 × 2450 mm' }
  ];

  const occasions = [
    'Hotels', 'Airports', 'Container capsule hotels', 'Schools', 'Hospitals', 
    'Offices', 'Dorms', 'Lounges/Studios', 'Internet bars', 'Homes'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Capsule Beds by <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">BIDUA</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
          >
            As a premier manufacturer and importer, we deliver hotel-grade sleeping pods in Single, Double, Vertical Single 
            and Wooden variants. Fire-retardant ABS shell (Taiwan Chi-Mei) with metal structure, intelligent LED control panel, 
            security lock and ergonomic ladder—all with direct quality assurance and competitive factory pricing.
          </motion.p>
        </div>
      </motion.section>

      {/* Product Series Overview */}
      <section className="py-20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Product <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Series</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive range of capsule bed series, each designed for specific applications and environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {productSeries.map((series, index) => (
              <motion.div
                key={series.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl group"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{series.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{series.description}</p>
                
                {/* Quick Info */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{series.sizes.length} size{series.sizes.length > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Palette className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{series.colors.length} color{series.colors.length > 1 ? 's' : ''}</span>
                  </div>
                </div>
                
                {/* Models */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-cyan-400 font-mono">
                    {series.models.join(', ')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Colors */}
      <section className="py-20 bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Materials & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Construction</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Premium materials and construction details across all series
            </p>
          </motion.div>

        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Models</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Product Selection */}
            <div className="space-y-4">
              {products.map((product, index) => (
                <motion.button
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    selectedProduct.id === product.id
                     ? 'bg-gradient-to-r from-cyan-100/50 to-blue-100/50 dark:from-cyan-500/20 dark:to-blue-600/20 border border-cyan-400 shadow-lg shadow-cyan-500/10'
                     : 'bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 hover:border-cyan-500/40 hover:bg-gray-50 dark:hover:bg-gray-800/70 shadow-md'
                  }`}
                >
                 <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{product.name}</h3>
                 <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 line-clamp-2">{product.description}</p>
                  <span className="text-cyan-400 font-bold">{product.price}</span>
                </motion.button>
              ))}
            </div>

            {/* Product Details */}
            <motion.div 
              key={selectedProduct.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-cyan-500/20 overflow-hidden shadow-2xl">
                <div className="relative">
                  <ImageSlider
                    images={selectedProduct.images}
                    className="w-full h-80"
                    autoPlay={true}
                    interval={4000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-3xl font-bold text-white dark:text-white mb-2">{selectedProduct.name}</h2>
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                      {selectedProduct.price}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{selectedProduct.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Star className="h-5 w-5 text-cyan-400 mr-2" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProduct.features.map((feature, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center space-x-3"
                        >
                          <Check className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Layers className="h-5 w-5 text-cyan-400 mr-2" />
                      Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3 border-b border-gray-200 dark:border-gray-700/50 gap-2">
                          <span className="text-gray-500 dark:text-gray-400 capitalize text-sm font-medium sm:w-1/2">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-gray-900 dark:text-white font-medium text-sm sm:w-1/2 sm:text-right break-words">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={`/products/${selectedProduct.id}`}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-purple-400 hover:to-indigo-500 transition-all duration-200 transform hover:scale-105 font-semibold text-center shadow-lg hover:shadow-purple-500/25"
                    >
                      View More Details
                    </Link>
                    <Link
                      to="/order-now"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-semibold text-center shadow-lg hover:shadow-cyan-500/25"
                    >
                      Order Now
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border-2 border-cyan-400 text-cyan-400 py-3 px-6 rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-200 font-semibold text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dimensions Table */}
      <section className="py-20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dimensions <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Overview</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-cyan-500/20 overflow-hidden shadow-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-cyan-100/50 to-blue-100/50 dark:from-cyan-500/20 dark:to-blue-600/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-semibold">Variant</th>
                    <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-semibold">Dimensions (L × W × H)</th>
                  </tr>
                </thead>
                <tbody>
                  {dimensions.map((dim, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border-b border-gray-200 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">{dim.variant}</td>
                      <td className="px-6 py-4 text-cyan-400 font-mono">{dim.size}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Materials & Colors */}
      <section className="py-20 bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Series <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Details</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive specifications for each product series
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {productSeries.map((series, index) => (
              <motion.div
                key={series.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/20 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-cyan-400 mr-3" />
                  {series.name}
                </h3>
                
                <div className="space-y-6">
                  {/* Models */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Models</h4>
                    <div className="flex flex-wrap gap-2">
                      {series.models.map((model, modelIndex) => (
                        <span key={modelIndex} className="bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-mono">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Available Sizes</h4>
                    <div className="flex flex-wrap gap-2">
                      {series.sizes.map((size, sizeIndex) => (
                        <span key={sizeIndex} className="bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs">
                          {`${size.variant}: ${size.dimensions}`}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Color Options</h4>
                    <div className="flex flex-wrap gap-2">
                      {series.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable Occasions */}
      <section className="py-20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Perfect for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Every Occasion</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {occasions.map((occasion, index) => (
              <motion.div
                key={occasion}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-r from-cyan-100/50 to-blue-100/50 dark:from-cyan-500/20 dark:to-blue-600/20 border border-cyan-400/40 rounded-full px-6 py-3 hover:from-cyan-200/60 dark:hover:from-cyan-500/30 hover:to-blue-200/60 dark:hover:to-blue-600/30 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <span className="text-gray-900 dark:text-white font-medium">{occasion}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Codes */}
      <section className="py-20 bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => setShowModelCodes(!showModelCodes)}
              className="w-full bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 flex items-center justify-between shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Model Codes & SKU Reference</h3>
              {showModelCodes ? (
                <ChevronUp className="h-6 w-6 text-cyan-400" />
              ) : (
                <ChevronDown className="h-6 w-6 text-cyan-400" />
              )}
            </button>

            {showModelCodes && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-cyan-500/20 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {productSeries.map((series, index) => (
                    <motion.div
                      key={series.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-gray-100 dark:bg-gray-700/30 rounded-lg p-4"
                    >
                      <h4 className="text-cyan-400 font-semibold mb-2">{series.name}</h4>
                      <div className="space-y-1">
                        {series.models.map((model, modelIndex) => (
                          <span key={modelIndex} className="block text-gray-600 dark:text-gray-300 text-sm font-mono">
                            {model}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">BIDUA</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Crafted with Taiwan Chi-Mei flame-retardant materials and precision engineering for unmatched durability and safety'
              },
              {
                icon: Award,
                title: 'Manufacturing & Import Excellence',
                description: 'As both manufacturer and importer, we maintain complete control from raw materials to final assembly, ensuring consistent quality, competitive pricing, and direct global sourcing capabilities'
              },
              {
                icon: Globe,
                title: 'Lifetime Support',
                description: 'Comprehensive installation, after-sales service, and lifetime maintenance on all capsule products'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;