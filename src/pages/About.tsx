import React from 'react';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Tentang <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">StepStyle</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami adalah toko online terpercaya yang menghadirkan koleksi sandal dan sepatu berkualitas premium 
            dengan desain modern dan kenyamanan maksimal untuk gaya hidup Anda.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Cerita Kami</h2>
            <p className="text-gray-600 leading-relaxed">
              StepStyle lahir dari passion untuk memberikan pengalaman berbelanja footwear terbaik di Indonesia. 
              Kami memahami bahwa sepatu dan sandal bukan hanya sekedar alas kaki, tetapi bagian dari ekspresi diri 
              dan gaya hidup setiap individu.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan pengalaman bertahun-tahun di industri fashion, kami berkomitmen untuk menyediakan produk-produk 
              berkualitas tinggi yang menggabungkan style, comfort, dan durability dalam setiap item yang kami tawarkan.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Kepercayaan ribuan customer di seluruh Indonesia menjadi motivasi kami untuk terus berinovasi dan 
              memberikan pelayanan terbaik dalam setiap transaksi.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1489111/pexels-photo-1489111.jpeg"
              alt="About Us"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-600/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Menjadi destinasi utama untuk koleksi sepatu dan sandal terbaik di Indonesia, dengan memberikan 
              pengalaman berbelanja yang exceptional dan produk berkualitas world-class yang accessible untuk semua kalangan.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
            </div>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mr-3 mt-2"></div>
                Menyediakan produk footwear berkualitas premium dengan harga yang kompetitif
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mr-3 mt-2"></div>
                Memberikan pelayanan customer service yang excellent dan responsif
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mr-3 mt-2"></div>
                Menghadirkan trend fashion terkini yang sesuai dengan gaya hidup modern
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mr-3 mt-2"></div>
                Membangun komunitas fashion yang inspiring dan supportive
              </li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nilai-nilai <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">Kami</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                Kami passionate dalam memberikan produk dan layanan terbaik untuk kepuasan customer
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                Kualitas adalah prioritas utama dalam setiap produk yang kami tawarkan
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-600">
                Membangun kepercayaan melalui transparansi dan integritas dalam berbisnis
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl shadow-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Pencapaian Kami</h2>
            <p className="text-amber-100">Angka-angka yang menunjukkan kepercayaan customer kepada kami</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-amber-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-amber-100">Premium Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-amber-100">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-amber-100">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};