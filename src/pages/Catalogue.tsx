import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Star, 
  Package, 
  Palette, 
  Layers, 
  Shield, 
  Zap, 
  Building, 
  ChevronRight,
  Filter,
  Grid,
  List,
  Search,
  Download
} from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import ProductCard from '../components/ProductCard';
import { products, productSeries } from '../data/products';

const Catalogue: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products based on selected series and search term
  const filteredProducts = products.filter(product => {
    const matchesSeries = selectedSeries === 'all' || product.id.toLowerCase().includes(selectedSeries.toLowerCase());
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSeries && matchesSearch;
  });

  // Get series that have actual products
  const seriesWithProducts = productSeries.filter(series => 
    products.some(product => product.id.toLowerCase().includes(series.id.toLowerCase()))
  );

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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <BookOpen className="h-10 w-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Product <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Catalogue</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Explore our complete range of premium capsule beds and sleeping pods. From manufacturing to import, 
            we deliver hotel-grade solutions with intelligent controls, safety features, and competitive factory pricing.
          </motion.p>
          
          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl px-6 py-3 border border-cyan-400/40">
              <div className="text-2xl font-bold text-cyan-400">{productSeries.length}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Product Series</div>
            </div>
            <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl px-6 py-3 border border-cyan-400/40">
              <div className="text-2xl font-bold text-cyan-400">{products.length}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Available Models</div>
            </div>
            <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl px-6 py-3 border border-cyan-400/40">
              <div className="text-2xl font-bold text-cyan-400">25+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Countries Served</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-base"
              />
            </div>

            {/* Controls Row */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              {/* Series Filter */}
              <div className="flex items-center space-x-2 flex-1 sm:flex-none">
                <Filter className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="flex-1 sm:flex-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors text-base min-w-0"
                >
                  <option value="all">All Series</option>
                  {seriesWithProducts.map((series) => (
                    <option key={series.id} value={series.id}>
                      {series.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between sm:justify-end space-x-4">
                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-md transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-md transition-colors ${
                      viewMode === 'list'
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                    aria-label="List view"
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>

                {/* Download Catalogue */}
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base whitespace-nowrap">
                  <Download className="h-4 w-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Series Overview */}
      <section className="py-20 bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Series Overview</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of capsule bed series, each engineered for specific applications and environments
            </p>
          </motion.div>

          {/* Series Cards */}
          <div className="space-y-16">
            {productSeries.map((series, seriesIndex) => {
              const seriesProducts = products.filter(product => 
                product.id.toLowerCase().includes(series.id.toLowerCase())
              );

              return (
                <motion.div
                  key={series.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: seriesIndex * 0.1 }}
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-cyan-500/20 overflow-hidden shadow-2xl"
                >
                  {/* Series Header */}
                  <div className="bg-gradient-to-r from-cyan-100/50 to-blue-100/50 dark:from-cyan-500/20 dark:to-blue-600/20 p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-500 mr-2 sm:mr-3 flex-shrink-0" />
                          {series.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                          {series.description}
                        </p>
                        
                        {/* Quick Info */}
                        <div className="flex flex-wrap gap-2 sm:gap-4">
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 font-medium text-xs sm:text-sm">
                              {series.sizes.length} Size{series.sizes.length > 1 ? 's' : ''}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 font-medium text-xs sm:text-sm">
                              {series.colors.length} Color{series.colors.length > 1 ? 's' : ''}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 font-medium text-xs sm:text-sm">
                              {series.applications.length} Application{series.applications.length > 1 ? 's' : ''}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Series Stats */}
                      <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-4 sm:p-6 w-full lg:w-auto lg:min-w-[200px]">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-cyan-500 mb-1">{seriesProducts.length}</div>
                          <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Available Models</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Series Details */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {/* Material */}
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mr-2 flex-shrink-0" />
                            Material & Construction
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30 rounded-lg p-3 sm:p-4 text-sm sm:text-base leading-relaxed">
                            {series.material}
                          </p>
                        </div>

                        {/* Sizes */}
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Package className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mr-2 flex-shrink-0" />
                            Available Sizes
                          </h4>
                          <div className="space-y-2">
                            {series.sizes.map((size, sizeIndex) => (
                              <div key={sizeIndex} className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-3 sm:p-4">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                                  <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{size.variant}</span>
                                  <span className="text-cyan-400 font-mono text-xs sm:text-sm break-all">{size.dimensions}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {/* Colors */}
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mr-2 flex-shrink-0" />
                            Color Options
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {series.colors.map((color, colorIndex) => (
                              <span 
                                key={colorIndex} 
                                className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-700 dark:text-purple-300 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-purple-200 dark:border-purple-500/30"
                              >
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Star className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mr-2 flex-shrink-0" />
                            Key Features
                          </h4>
                          <div className="space-y-2">
                            {series.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6 lg:mb-8">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Building className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mr-2 flex-shrink-0" />
                        Perfect Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {series.applications.map((application, appIndex) => (
                          <span 
                            key={appIndex} 
                            className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-500/20 dark:to-blue-500/20 text-cyan-700 dark:text-cyan-300 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-cyan-200 dark:border-cyan-500/30"
                          >
                            {application}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Model Codes */}
                    <div className="mb-6 lg:mb-8">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mr-2 flex-shrink-0" />
                        Model Codes
                      </h4>
                      <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-3 sm:p-4">
                        <div className="flex flex-wrap gap-2">
                          {series.models.map((model, modelIndex) => (
                            <span 
                              key={modelIndex} 
                              className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-mono break-all"
                            >
                              {model}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Available Products */}
                    {seriesProducts.length > 0 && (
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                          <Package className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mr-2 flex-shrink-0" />
                          Available Models in This Series
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                          {seriesProducts.map((product, productIndex) => (
                            <motion.div
                              key={product.id}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: productIndex * 0.1 }}
                            >
                              <ProductCard product={product} />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} 
              {selectedSeries !== 'all' && ` in ${productSeries.find(s => s.id === selectedSeries)?.name || 'selected series'}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </motion.div>

          {/* Products Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-cyan-500/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3">
                      <ImageSlider
                        images={product.images}
                        className="w-full h-48 sm:h-64 lg:h-full"
                        autoPlay={false}
                        interval={4000}
                      />
                    </div>
                    <div className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-4">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white flex-1">{product.name}</h3>
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 sm:px-4 py-2 rounded-full font-bold text-sm sm:text-base whitespace-nowrap">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{product.description}</p>
                      
                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                        {product.features.slice(0, 6).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <Link
                          to={`/products/${product.id}`}
                          className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:from-purple-400 hover:to-indigo-500 transition-all duration-200 font-semibold text-center text-sm sm:text-base"
                        >
                          View Details
                        </Link>
                        <Link
                          to="/order-now"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 font-semibold text-center text-sm sm:text-base"
                        >
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="bg-gray-100 dark:bg-gray-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">No Products Found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
                Try adjusting your search terms or filter settings
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSeries('all');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 font-semibold text-sm sm:text-base"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-gray-800/30 dark:to-gray-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto"
          >
            Get factory-direct pricing with our comprehensive manufacturing and import capabilities. 
            Contact us for detailed quotes and delivery timelines.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link
              to="/order-now"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-semibold shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>Get Quote Now</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-200 font-semibold text-sm sm:text-base"
            >
              Contact Sales Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Catalogue;