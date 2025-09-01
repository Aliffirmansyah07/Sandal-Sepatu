import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent">
              StepStyle
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Toko online terpercaya untuk koleksi sandal dan sepatu berkualitas premium. 
              Kami menghadirkan produk fashion footwear terbaik dengan desain modern dan kenyamanan maksimal.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-amber-600 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  +62 858 0843 7771
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-amber-600 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  kuroseyuzuka@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-amber-600 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Jakarta, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Follow Kami</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-amber-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-amber-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-amber-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Ikuti media sosial kami untuk update produk terbaru dan promo menarik!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 StepStyle. All rights reserved. Made with ❤️ for fashion lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};