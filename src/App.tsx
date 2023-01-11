import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import ContactUsPage from './pages/ContactUsPage';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactUsPopup from './components/contactUsPopup';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/products/:category/:id" element={<ProductPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
      <ContactUsPopup />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
