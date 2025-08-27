import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShoppingCart, Package, Truck, Shield, Calculator, MessageCircle, Mail } from 'lucide-react';
import { products, productSeries } from '../data/products';

const OrderNow: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    variant: productSeries[0].id,
    qty: 1,
    color: 'White',
    material: 'ABS',
    optPanels: false,
    optTV: false,
    optBedding: false,
    optSafe: false,
    optCard: false,
    optTable: false,
    custName: '',
    custPhone: '',
    custEmail: '',
    custCompany: '',
    custGST: '',
    custCity: '',
    custAddr: '',
    custNotes: ''
  });

  const [pricing, setPricing] = useState({
    base: 0,
    delivery: 0,
    options: 0,
    taxable: 0,
    gst: 0,
    total: 0
  });

  // Set initial variant based on URL parameter
  useEffect(() => {
    const seriesParam = searchParams.get('series');
    if (seriesParam && productSeries.find(s => s.id === seriesParam)) {
      setFormData(prev => ({
        ...prev,
        variant: seriesParam
      }));
    }
  }, [searchParams]);

  const PRICING_CONFIG = {
    basePerSet: 500000,
    deliveryPerSet: 15000,
    gstRate: 0.18,
    options: {
      panels: 25000,
      tv: 30000,
      bedding: 6000,
      safe: 8000,
      card: 5000,
      table: 4000
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const calculatePricing = () => {
    const qty = Math.max(1, formData.qty);
    const base = PRICING_CONFIG.basePerSet * qty;
    const delivery = PRICING_CONFIG.deliveryPerSet * qty;

    let options = 0;
    if (formData.optPanels) options += PRICING_CONFIG.options.panels * qty;
    if (formData.optTV) options += PRICING_CONFIG.options.tv * qty;
    if (formData.optBedding) options += PRICING_CONFIG.options.bedding * qty;
    if (formData.optSafe) options += PRICING_CONFIG.options.safe * qty;
    if (formData.optCard) options += PRICING_CONFIG.options.card * qty;
    if (formData.optTable) options += PRICING_CONFIG.options.table * qty;

    const taxable = base + delivery + options;
    const gst = Math.round(taxable * PRICING_CONFIG.gstRate);
    const total = taxable + gst;

    setPricing({ base, delivery, options, taxable, gst, total });
  };

  useEffect(() => {
    calculatePricing();
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              name === 'qty' ? parseInt(value) || 1 : value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const generateMessage = () => {
    const selectedSeries = productSeries.find(s => s.id === formData.variant);
    const seriesName = selectedSeries ? selectedSeries.name : 'Unknown Series';
    
    const selectedOptions = [];
    if (formData.optPanels) selectedOptions.push('Panels');
    if (formData.optTV) selectedOptions.push('TV Module');
    if (formData.optBedding) selectedOptions.push('Bedding Set');
    if (formData.optSafe) selectedOptions.push('Safe Box');
    if (formData.optCard) selectedOptions.push('Card Access');
    if (formData.optTable) selectedOptions.push('Foldable Side Table');

    return `Capsule Beds Enquiry

Series: ${seriesName}
Qty (sets): ${formData.qty}
Color: ${formData.color}
Material: ${formData.material}
Add-ons: ${selectedOptions.length ? selectedOptions.join(', ') : 'None'}

Price (ex-GST): ₹${formatNumber(pricing.taxable)}
GST @18%: ₹${formatNumber(pricing.gst)}
Total (incl. GST): ₹${formatNumber(pricing.total)}

Buyer:
Name: ${formData.custName}
Phone: ${formData.custPhone}
Email: ${formData.custEmail}
Company: ${formData.custCompany || '-'}
GSTIN: ${formData.custGST || '-'}
City/State: ${formData.custCity}
Address: ${formData.custAddr}
Access notes: ${formData.custNotes || '-'}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.custName || !formData.custPhone || !formData.custEmail || !formData.custCity || !formData.custAddr) {
      alert('Please fill Name, Phone, Email, City/State and Delivery Address.');
      return;
    }

    const message = encodeURIComponent(generateMessage());
    const whatsappNumber = '91XXXXXXXXXX'; // Replace with actual WhatsApp number
    const fallbackEmail = 'sales@biduapods.com';

    // Try WhatsApp first, fallback to email
    if (whatsappNumber && !whatsappNumber.includes('XXXXXXXXXX')) {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    } else {
      window.open(`mailto:${fallbackEmail}?subject=Capsule%20Beds%20Enquiry&body=${message}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Buy Capsule <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Beds</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Hotel-grade sleeping pods with intelligent LED controls, secure lock, fresh-air ventilation and compact footprint. 
            Choose model, color and options—send your enquiry and our team will contact you with a GST invoice and delivery date.
          </p>
          
          {/* Key Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-cyan-500/20 border border-cyan-400/40 rounded-full px-6 py-2 flex items-center space-x-2">
              <Package className="h-5 w-5 text-cyan-400" />
              <span className="text-gray-900 dark:text-white font-semibold">1 set = 2 pods (upper + lower)</span>
            </div>
            <div className="bg-cyan-500/20 border border-cyan-400/40 rounded-full px-6 py-2 flex items-center space-x-2">
              <Shield className="h-5 w-5 text-cyan-400" />
              <span className="text-gray-900 dark:text-white font-semibold">GST 18% applies</span>
            </div>
            <div className="bg-cyan-500/20 border border-cyan-400/40 rounded-full px-6 py-2 flex items-center space-x-2">
              <Truck className="h-5 w-5 text-cyan-400" />
              <span className="text-gray-900 dark:text-white font-semibold">Delivery ₹15,000 / set (India)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Dynamic Product Cards */}
            {products.slice(0, 4).map((product, index) => (
              <div key={product.id} className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-cyan-500/20 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p><strong>Size:</strong> {product.specifications.dimensions}</p>
                  <p><strong>Material:</strong> {product.specifications.materials}</p>
                  <p><strong>Colors:</strong> {product.specifications.colors}</p>
                  <p><strong>Power:</strong> {product.specifications.ratedVoltage}</p>
                  <p><strong>Ventilation:</strong> {product.specifications.freshAirVentilation}</p>
                </div>
                <div className="mt-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-12 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-cyan-500/20 overflow-hidden shadow-2xl">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <ShoppingCart className="h-8 w-8 text-cyan-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Configure & Enquire</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">Choose your model and options. We'll WhatsApp/email you a formal GST quote and delivery date.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Product Configuration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Variant</label>
                    <select
                      name="variant"
                      value={formData.variant}
                      onChange={handleInputChange}
                      className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      required
                    >
                      {productSeries.map((series) => (
                        <option key={series.id} value={series.id}>
                          {series.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Quantity (sets)</label>
                    <input
                      type="number"
                      name="qty"
                      value={formData.qty}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Color</label>
                    <select
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      required
                    >
                      <option>White</option>
                      <option>Pink</option>
                      <option>Yellow</option>
                      <option>Black</option>
                      <option>Blue</option>
                      <option>Orange</option>
                      <option>Grey</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Material</label>
                    <select
                      name="material"
                      value={formData.material}
                      onChange={handleInputChange}
                      className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      required
                    >
                      {(() => {
                        const selectedSeries = productSeries.find(s => s.id === formData.variant);
                        return selectedSeries?.availableMaterials.map((material) => (
                          <option key={material} value={material}>
                            {material === 'Wood' ? 'Wood (eco multi-layer board)' : material}
                          </option>
                        )) || [<option key="ABS" value="ABS">ABS</option>];
                      })()}
                    </select>
                  </div>
                </div>

                {/* Options */}
                <div className="bg-gray-100 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-300 dark:border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Options (per set)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: 'optPanels', label: 'Panels (Side/Back/Top)', price: PRICING_CONFIG.options.panels },
                      { key: 'optTV', label: 'TV Module', price: PRICING_CONFIG.options.tv },
                      { key: 'optBedding', label: 'Bedding Set', price: PRICING_CONFIG.options.bedding },
                      { key: 'optSafe', label: 'Safe Box', price: PRICING_CONFIG.options.safe },
                      { key: 'optCard', label: 'Card Access', price: PRICING_CONFIG.options.card },
                      { key: 'optTable', label: 'Foldable Side Table', price: PRICING_CONFIG.options.table }
                    ].map((option) => (
                      <label key={option.key} className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">
                        <input
                          type="checkbox"
                          name={option.key}
                          checked={formData[option.key as keyof typeof formData] as boolean}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-cyan-400 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-cyan-400 focus:ring-2"
                        />
                        <span>{option.label} (+₹{formatNumber(option.price)})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Customer Details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Buyer Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="custName"
                        value={formData.custName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="custPhone"
                        value={formData.custPhone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="custEmail"
                        value={formData.custEmail}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="custCompany"
                        value={formData.custCompany}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">GSTIN (if any)</label>
                      <input
                        type="text"
                        name="custGST"
                        value={formData.custGST}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 dark:text-white font-medium mb-2">City / State</label>
                      <input
                        type="text"
                        name="custCity"
                        value={formData.custCity}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Delivery Address</label>
                    <textarea
                      name="custAddr"
                      value={formData.custAddr}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Access Notes (stairs, lift, timings, etc.)</label>
                    <textarea
                      name="custNotes"
                      value={formData.custNotes}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-gray-100 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-300 dark:border-cyan-500/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <Calculator className="h-6 w-6 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Price Summary</h3>
                  </div>
                  {(() => {
                    const selectedSeries = productSeries.find(s => s.id === formData.variant);
                    const seriesName = selectedSeries ? selectedSeries.name : 'Unknown Series';
                    return (
                  <div className="space-y-2 font-mono text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between">
                      <span>Series:</span>
                      <span className="text-right break-words max-w-[60%]">{seriesName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span>{formData.qty} set{formData.qty > 1 ? 's' : ''} (1 set = 2 pods)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Color:</span>
                      <span>{formData.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Material:</span>
                      <span>{formData.material}</span>
                    </div>
                    <hr className="border-gray-300 dark:border-gray-600 my-3" />
                    <div className="flex justify-between">
                      <span>Base:</span>
                      <span>₹{formatNumber(PRICING_CONFIG.basePerSet)} × {formData.qty} = ₹{formatNumber(pricing.base)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span>₹{formatNumber(PRICING_CONFIG.deliveryPerSet)} × {formData.qty} = ₹{formatNumber(pricing.delivery)}</span>
                    </div>
                    {pricing.options > 0 && (
                      <div className="flex justify-between">
                        <span>Options:</span>
                        <span>₹{formatNumber(pricing.options)}</span>
                      </div>
                    )}
                    <hr className="border-gray-300 dark:border-gray-600 my-3" />
                    <div className="flex justify-between">
                      <span>Taxable:</span>
                      <span>₹{formatNumber(pricing.taxable)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST @18%:</span>
                      <span>₹{formatNumber(pricing.gst)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                      <span>Total:</span>
                      <span>₹{formatNumber(pricing.total)}</span>
                    </div>
                  </div>
                    );
                  })()}
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
                    GST 18% on (Base + Delivery + Options). Lead time: 25–35 days after deposit.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2 group shadow-lg hover:shadow-cyan-500/25"
                  >
                    <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Enquire Now (WhatsApp / Email)</span>
                  </button>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
                  By enquiring you agree to be contacted via WhatsApp/Email for quote and delivery details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pricing Note (India)</h3>
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-cyan-500/20 shadow-xl">
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>• Base price: <strong className="text-gray-900 dark:text-white">₹5,00,000 per set (ex-GST)</strong> - Factory Direct</p>
              <p>• Delivery: <strong className="text-gray-900 dark:text-white">₹15,000 per set</strong> (added before GST)</p>
              <p>• <strong className="text-gray-900 dark:text-white">GST 18%</strong> on (base + delivery + options)</p>
              <p>• Lead time: <strong className="text-gray-900 dark:text-white">25–35 days</strong> after deposit (direct from manufacturing facility)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderNow;