import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactUsPopup from './components/contactUsPopup';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      <ContactUsPopup />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
