import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/pod%20view.png',
      title: 'GALAXY Series Pod View',
      category: 'Product Design'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/inside%202.png',
      title: 'Interior View - Double Pod',
      category: 'Interior Design'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/9.jpg',
      title: 'COSMOS Vertical Series',
      category: 'Commercial'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/8.jpg',
      title: 'Wooden Series Design',
      category: 'Premium Materials'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/6.jpg',
      title: 'E-sports Series Gaming Pod',
      category: 'Gaming'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/5.jpg',
      title: 'Installation Setup',
      category: 'Installation'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/4.png',
      title: 'LED Control Panel',
      category: 'Technology'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/21.png',
      title: 'Multiple Pod Configuration',
      category: 'Commercial'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/20.png',
      title: 'Space-Efficient Layout',
      category: 'Installation'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/18.png',
      title: 'Premium Interior Finish',
      category: 'Interior Design'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/17.png',
      title: 'Ventilation System',
      category: 'Technology'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/16.png',
      title: 'Security Features',
      category: 'Safety'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/14.png',
      title: 'Compact Design',
      category: 'Product Design'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/13.png',
      title: 'Modern Aesthetics',
      category: 'Design'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/122.png',
      title: 'Hotel Installation',
      category: 'Commercial'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/121.png',
      title: 'Hospitality Application',
      category: 'Commercial'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/12.png',
      title: 'Quality Construction',
      category: 'Manufacturing'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/11.jpg',
      title: 'Professional Installation',
      category: 'Service'
    },
    {
      url: 'https://github.com/worldbestservices/capsule-bed-assets/raw/main/10.png',
      title: 'Advanced Features',
      category: 'Technology'
    }
  ];

  const categories = ['All', 'Product Design', 'Interior Design', 'Commercial', 'Technology', 'Installation', 'Premium Materials', 'Gaming', 'Safety', 'Design', 'Manufacturing', 'Service'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Project <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our installations, manufacturing process, and the remarkable environments we've created worldwide
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-cyan-500 text-white font-semibold shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-cyan-500 dark:hover:text-cyan-400 border border-gray-300 dark:border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white dark:text-white font-semibold mb-1">{image.title}</h3>
                    <span className="text-cyan-400 text-sm">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400';
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;