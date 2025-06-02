import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import VehiclePage from './pages/VehiclePage';
import HomeKitchenPage from './pages/HomeKitchenPage';
import HardwareToolsPage from './pages/HardwareToolsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vehicles" element={<VehiclePage />} />
            <Route path="/home-kitchen" element={<HomeKitchenPage />} />
            <Route path="/hardware-tools" element={<HardwareToolsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;