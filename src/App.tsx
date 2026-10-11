import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { HowItWorks } from './pages/HowItWorks';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#202833] font-sans antialiased selection:bg-[#C7A56A]/20 selection:text-[#10243A]">
        {/* Persistent Luxury Navigation Header */}
        <Navbar />

        {/* Dynamic Page Views */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        {/* Corporate Multi-Column Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
