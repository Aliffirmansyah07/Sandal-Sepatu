import React from 'react';
import { X, ShoppingCart, Package, Star } from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOrder: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onOrder }) => {
  if (!isOpen || !product) return null;

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(product.price);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full shadow-lg transition-all duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 md:h-full object-cover rounded-l-2xl md:rounded-r-none rounded-r-2xl"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                product.category === 'sandal' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500'
              }`}>
                {product.category === 'sandal' ? 'Sandal' : 'Sepatu'}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">(4.8/5 dari 124 ulasan)</span>
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
                {formattedPrice}
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Package className="w-5 h-5 mr-2 text-amber-600" />
                Deskripsi Produk
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Keunggulan Produk</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mr-3"></div>
                  Material berkualitas premium dan tahan lama
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mr-3"></div>
                  Desain modern dan mengikuti tren fashion
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mr-3"></div>
                  Kenyamanan maksimal untuk pemakaian sehari-hari
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mr-3"></div>
                  Garansi resmi dan layanan after sales
                </li>
              </ul>
            </div>

            {/* Order Button */}
            <button
              onClick={() => onOrder(product)}
              className="w-full bg-gradient-to-r from-amber-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-amber-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Pesan Sekarang via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};