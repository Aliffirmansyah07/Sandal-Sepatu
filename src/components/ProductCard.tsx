import React from 'react';
import { Eye, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onOrder: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onOrder }) => {
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(product.price);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
            product.category === 'sandal' 
              ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
          }`}>
            {product.category === 'sandal' ? 'Sandal' : 'Sepatu'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
            {formattedPrice}
          </span>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gradient-to-r hover:from-amber-500 hover:to-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
          >
            <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            <span>Detail</span>
          </button>
          <button
            onClick={() => onOrder(product)}
            className="flex-1 bg-gradient-to-r from-amber-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-amber-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
          >
            <ShoppingCart className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
            <span>Pesan</span>
          </button>
        </div>
      </div>
    </div>
  );
};