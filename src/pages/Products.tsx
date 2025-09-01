import React, { useState } from 'react';
import { Search, Filter, Package } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products, Product } from '../data/products';

interface ProductsProps {
  onViewProduct: (product: Product) => void;
  onOrderProduct: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({ onViewProduct, onOrderProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sandal' | 'sepatu'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Katalog <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">Produk</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan koleksi sandal dan sepatu terbaik dengan kualitas premium dan desain terkini
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari produk..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Filter:</span>
              </div>
              <div className="flex space-x-2">
                {[
                  { id: 'all', label: 'Semua' },
                  { id: 'sandal', label: 'Sandal' },
                  { id: 'sepatu', label: 'Sepatu' }
                ].map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id as any)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-amber-500 to-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-amber-500 hover:to-blue-600 hover:text-white hover:scale-105'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Package className="w-6 h-6 text-amber-600" />
            <span className="text-lg text-gray-700">
              Menampilkan {filteredProducts.length} produk
              {searchTerm && ` untuk "${searchTerm}"`}
            </span>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProduct}
                onOrder={onOrderProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-amber-100 to-blue-100 rounded-full flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Produk tidak ditemukan</h3>
            <p className="text-gray-500 mb-6">
              Coba ubah kata kunci pencarian atau filter kategori Anda
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-amber-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-amber-500 transition-all duration-300"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};