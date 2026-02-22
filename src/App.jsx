import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { ToastProvider } from './components/ui/use-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

import Cart from './components/Cart';
import LiveChat from './components/LiveChat';
import ServiceDetailPage from './components/ServiceDetailPage';
import CheckoutPage from './components/CheckoutPage';
import SuccessPage from './components/SuccessPage';
import './App.css';

function HomePage() {
  return (
    <>
      <Header />

      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <Router>
          <div className="min-h-screen bg-slate-950">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/success" element={<SuccessPage />} />
            </Routes>
            <Cart />
            <LiveChat />
          </div>
        </Router>
      </ToastProvider>
    </CartProvider>
  );
}

export default App;
