import React from 'react';
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { getFeaturedProducts, Product } from '../data/products';

interface HomeProps {
  onNavigate: (page: string) => void;
  onViewProduct: (product: Product) => void;
  onOrderProduct: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onViewProduct, onOrderProduct }) => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Step into{' '}
                  <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
                    Style
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  Koleksi sandal dan sepatu premium dengan desain terkini. 
                  Kualitas terbaik, kenyamanan maksimal, dan gaya yang tak tertandingi.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-gradient-to-r from-amber-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-amber-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Lihat Produk</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gradient hover:bg-gradient-to-r hover:from-amber-500 hover:to-blue-600 hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Tentang Kami
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
                    4.9★
                  </div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
                    12
                  </div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg"
                  alt="Featured Shoes"
                  className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-blue-600 rounded-2xl opacity-20 blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">StepStyle</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman berbelanja terbaik dengan produk berkualitas premium
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kualitas Premium</h3>
              <p className="text-gray-600">Material terbaik dengan standar kualitas internasional</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Garansi Resmi</h3>
              <p className="text-gray-600">Jaminan kualitas dengan layanan after sales terpercaya</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">Gratis ongkir se-Indonesia dengan berbagai pilihan ekspedisi</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Brand</h3>
              <p className="text-gray-600">Dipercaya ribuan customer di seluruh Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Produk <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">Unggulan</span>
            </h2>
            <p className="text-gray-600">Pilihan terbaik sandal dan sepatu untuk gaya hidup Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProduct}
                onOrder={onOrderProduct}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('products')}
              className="bg-gradient-to-r from-amber-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-amber-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Lihat Semua Produk</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};