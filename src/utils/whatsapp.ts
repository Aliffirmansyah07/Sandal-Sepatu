export interface OrderData {
  product: {
    id: string;
    name: string;
    price: number;
  };
  customer: {
    name: string;
    phone: string;
    address: string;
    shipping: string;
    payment: string;
  };
}

export const generateWhatsAppMessage = (orderData: OrderData): string => {
  const { product, customer } = orderData;
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(product.price);

  const message = `*PEMESANAN PRODUK*

📦 *Detail Produk:*
• Nama: ${product.name}
• Harga: ${formattedPrice}

👤 *Data Pembeli:*
• Nama: ${customer.name}
• Telepon: ${customer.phone}
• Alamat: ${customer.address}

🚚 *Pengiriman & Pembayaran:*
• Jasa Pengiriman: ${customer.shipping}
• Metode Pembayaran: ${customer.payment}

Terima kasih atas pesanan Anda! 🙏`;

  return encodeURIComponent(message);
};

export const openWhatsApp = (message: string, phoneNumber: string = '6285808437771') => {
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
};