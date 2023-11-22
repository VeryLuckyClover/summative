import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './styles/main.css';

// Components
import Navbar from './Components/Navbar';
import MobileMenu from './Components/MobileMenu';
import MobileConfirm from './Components/MobileConfirm';
import ServicesPosts from './Components/ServicesPosts';
import Footer from './Components/Footer';

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

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicesposts/:id" element={<ServicesPosts />} />
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
