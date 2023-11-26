import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './styles/main.css';

// Components
import Navbar from './Components/Navbar';
import MobileMenu from './Components/MobileMenu';
import MobileConfirm from './Components/MobileConfirm';
import ServicesPosts from './Components/ServicesPosts';
import WorkshopPosts from './Components/WorkshopPost';
import Footer from './Components/Footer';

// Hooks
import useCustomiser from './Hooks/useCustomizer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {

  const [showMobileConfirm, setShowMobileConfirm] = useState(false);

  const handleContactButtonClick = () => {
    // Perform any necessary actions before showing the confirmation screen
    setShowMobileConfirm(true);
  };

  const handleCloseMobileConfirm = () => {
    // Handle closing the confirmation screen
    setShowMobileConfirm(false);
  };

  const {backgroundColor, fontFamily, navbarColor} = useCustomiser()

  useEffect(() => {
    // apply the bg color to our body element 
    document.body.style.backgroundColor = `#${backgroundColor}`

    // Change the font based on the returned value
    if (fontFamily === 'Eb Garamond') {
      document.body.style.fontFamily = `'Eb Garamond', serif`
    }
    if (fontFamily === 'Poppins') {
      document.body.style.fontFamily = `'Poppins', sans-serif`
    }
    if (fontFamily === 'Ubuntu') {
      document.body.style.fontFamily = `'Ubuntu', sans-serif`
    }

    // change nav colour
    document.querySelector("nav").style.backgroundColor = `${navbarColor}`
  }, [backgroundColor, fontFamily, navbarColor])


  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicesposts/:id" element={<ServicesPosts />} />
          <Route path="/workshopposts/:id" element={<WorkshopPosts />} />
          <Route path="/contact" element={<Contact onContactButtonClick={handleContactButtonClick} />} />
        </Routes>

        {showMobileConfirm && (
        <MobileConfirm onClose={handleCloseMobileConfirm} />
        )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
