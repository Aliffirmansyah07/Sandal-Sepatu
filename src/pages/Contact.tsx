import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Halo StepStyle! Saya ingin menanyakan tentang produk Anda.');
    window.open(`https://wa.me/6285808437771?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">Kami</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda! Jangan ragu untuk menghubungi kami jika ada pertanyaan atau butuh bantuan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-amber-600" />
                Informasi Kontak
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg group-hover:from-green-600 group-hover:to-green-700 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Hubungi kami via WhatsApp untuk respon cepat</p>
                    <button
                      onClick={handleWhatsAppContact}
                      className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200"
                    >
                      +62 087 8245 9836
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg group-hover:from-blue-600 group-hover:to-blue-700 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 mb-2">Kirim email untuk pertanyaan detail</p>
                    <a
                      href="mailto:kuroseyuzuka@gmail.com"
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                    >
                      nindia7114@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg group-hover:from-amber-600 group-hover:to-amber-700 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Alamat</h3>
                    <p className="text-gray-600">Mojoagung, Jombang, Jawa Timur, Indonesia</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg group-hover:from-purple-600 group-hover:to-purple-700 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Jam Operasional</h3>
                    <div className="text-gray-600">
                      <p>Senin - Jumat: 09:00 - 21:00</p>
                      <p>Sabtu - Minggu: 09:00 - 19:0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Bagaimana cara memesan produk?</h3>
                  <p className="text-gray-600">
                    Klik tombol "Pesan" pada produk yang diinginkan, isi form pemesanan, dan Anda akan diarahkan ke WhatsApp kami.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Apakah ada garansi produk?</h3>
                  <p className="text-gray-600">
                    Ya, semua produk kami dilengkapi dengan garansi resmi dan layanan after sales terpercaya.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Berapa lama pengiriman?</h3>
                  <p className="text-gray-600">
                    Pengiriman biasanya membutuhkan 2-5 hari kerja tergantung lokasi dan jasa pengiriman yang dipilih.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Apakah bisa COD?</h3>
                  <p className="text-gray-600">
                    Ya, kami menyediakan layanan COD (Cash on Delivery) untuk area tertentu di Jakarta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Segera?</h2>
          <p className="text-xl text-amber-100 mb-6">
            Hubungi kami via WhatsApp untuk mendapatkan respon yang lebih cepat!
          </p>
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chat WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};