import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ProductModal } from './components/ProductModal';
import { OrderForm } from './components/OrderForm';
import { Product } from './data/products';

type Page = 'home' | 'products' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [orderingProduct, setOrderingProduct] = useState<Product | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleOrderProduct = (product: Product) => {
    setOrderingProduct(product);
    setIsOrderFormOpen(true);
  };

  const handleCloseModals = () => {
    setIsProductModalOpen(false);
    setIsOrderFormOpen(false);
    setSelectedProduct(null);
    setOrderingProduct(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
            onOrderProduct={handleOrderProduct}
          />
        );
      case 'products':
        return (
          <Products
            onViewProduct={handleViewProduct}
            onOrderProduct={handleOrderProduct}
          />
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home
            onNavigate={handleNavigate}
            onViewProduct={handleViewProduct}
            onOrderProduct={handleOrderProduct}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
      <Footer />
      
      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseModals}
        onOrder={handleOrderProduct}
      />
      
      {orderingProduct && (
        <OrderForm
          product={orderingProduct}
          isOpen={isOrderFormOpen}
          onClose={handleCloseModals}
        />
      )}
    </div>
  );
}

export default App;