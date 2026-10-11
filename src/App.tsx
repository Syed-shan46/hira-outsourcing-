import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
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
import CustomerTrackingPage from './pages/CustomerTrackingPage';

// Helper component to cleanly distinguish direct Order IDs from corporate routes
function TrackingOrNotFound() {
  const { id } = useParams<{ id: string }>();
  const staticRoutes = new Set([
    'services', 'how-it-works', 'products', 'about', 'contact', 'privacy-policy', 'terms', 'tracking'
  ]);

  if (!id || staticRoutes.has(id.toLowerCase())) {
    return <Navigate to="/" replace />;
  }

  return <CustomerTrackingPage />;
}

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

            {/* Direct Order Tracking Routes */}
            {/* e.g. hiraoutsourcing.com/tracking/HIRA-1234 or hiraoutsourcing.com/HIRA-1234 */}
            <Route path="/tracking/:token" element={<CustomerTrackingPage />} />
            <Route path="/tracking" element={<CustomerTrackingPage />} />
            <Route path="/:id" element={<TrackingOrNotFound />} />

            <Route path="*" element={<Navigate to="/" replace />} />
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
