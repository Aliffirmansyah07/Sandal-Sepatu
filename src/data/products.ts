export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'sandal' | 'sepatu';
  description: string;
}

export const products: Product[] = [
  // Sandal Products
  {
    id: 'sandal-1',
    name: 'Sandal Slide Minimalis Wanita',
    price: 120000,
    image: 'https://images.pexels.com/photos/9267585/pexels-photo-9267585.jpeg?cs=srgb&dl=pexels-denys-9267585.jpg&fm=jpg',
    category: 'sandal',
    description: 'Sandal slide minimalis dengan desain modern dan nyaman untuk aktivitas sehari-hari. Material berkualitas tinggi dengan bantalan empuk.'
  },
  {
    id: 'sandal-2',
    name: 'Sandal Casual Wanita Elegant',
    price: 135000,
    image: 'https://images.pexels.com/photos/112285/pexels-photo-112285.jpeg?cs=srgb&dl=pexels-mikebirdy-112285.jpg&fm=jpg',
    category: 'sandal',
    description: 'Sandal casual elegant untuk wanita dengan desain yang stylish dan comfortable. Cocok untuk berbagai acara informal.'
  },
  {
    id: 'sandal-3',
    name: 'Sandal High Hell',
    price: 150000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJKF3NW-AvCvGMAULStrsC7MzkdYBAC0CqQ&s',
    category: 'sandal',
    description: ' sandal high hell ini sangat diminati oleh para cewek, dengan desain yang bagus dan harga yang murah .'
  },
  {
    id: 'sandal-4',
    name: 'Sepatu putih',
    price: 180000,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    category: 'sandal',
    description: 'Sepatu ini memiliki kelebihan, cocok digunakan untuk siapa saja dengan desain yang modern dan elegan.'
  },
  {
    id: 'sandal-5',
    name: 'Sandal Pantai Biasa',
    price: 175000,
    image: 'https://images.pexels.com/photos/1756086/pexels-photo-1756086.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200',
    category: 'sandal',
    description: 'Sandal ini biasa nya digunakan saat pergi ke pantai karena model nya yang simpel dan harga nya sangat murah, bahkan kebanyakan turis dari luar mengakui bahwa sandal ini sangat keren.'
  },
  {
    id: 'sandal-6',
    name: 'Sandal Jepit swallow',
    price: 95000,
    image: 'https://images.pexels.com/photos/12454336/pexels-photo-12454336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    category: 'sandal',
    description: 'siapa sih yang tidak kenal dengan sandal jepit yang ber merk swallow, karena seluru rakyat indonesia hampir mempunyai sandal jepit ini. dan sangat tren di zaman dahulu.'
  },
  // Sepatu Products
  {
    id: 'sepatu-1',
    name: 'Sneakers Putih Classic Unisex',
    price: 250000,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    category: 'sepatu',
    description: 'Sneakers putih klasik yang timeless dan versatile. Cocok untuk berbagai outfit dan aktivitas sehari-hari.'
  },
  {
    id: 'sepatu-2',
    name: 'Sepatu Running',
    price: 280000,
    image: 'https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg',
    category: 'sepatu',
    description: 'Sepatu running dengan teknologi cushioning terdepan. Memberikan support maksimal untuk aktivitas lari dan olahraga.'
  },
  {
    id: 'sepatu-3',
    name: 'Sneakers Wanita Casual Trendy',
    price: 265000,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg',
    category: 'sepatu',
    description: 'Sneakers ini di desain dengan warna-warna feminine. Design yang stylish namun tetap comfortable untuk daily wear.'
  },
  {
    id: 'sepatu-4',
    name: 'Sepatu Kulit Formal Pria',
    price: 320000,
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg',
    category: 'sepatu',
    description: 'Sepatu kulit formal premium untuk pria. Cocok untuk acara formal, meeting, atau event penting lainnya.'
  },
  {
    id: 'sepatu-5',
    name: 'Flat Shoes Elegant Wanita',
    price: 210000,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
    category: 'sepatu',
    description: 'Flat shoes elegant dengan desain minimalist. Comfortable untuk dipakai seharian dengan style yang timeless.'
  },
  {
    id: 'sepatu-6',
    name: 'Sepatu sneakers hitam putih',
    price: 350000,
    image: 'https://images.pexels.com/photos/9882675/pexels-photo-9882675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    category: 'sepatu',
    description: 'Sepatu sneakers ini banyak diminati dan sering dibei oleh anak muda jaman sekarang, entah itu cewek/cowok semua pasti punya satu sneakers ideal ini .'
  }
];

export const getFeaturedProducts = () => {
  const featuredSandals = products.filter(p => p.category === 'sandal').slice(0, 3);
  const featuredShoes = products.filter(p => p.category === 'sepatu').slice(0, 3);
  return [...featuredSandals, ...featuredShoes];
};