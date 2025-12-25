import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { PageTransition } from './components/layout/PageTransition';
import { Landing } from './pages/Landing';
// Import pages
import { Dashboard } from './pages/Dashboard';
import { Orchestration } from './pages/Orchestration';
import { Services } from './pages/Services';
import { GovernmentServices } from './pages/GovernmentServices';
import { BusinessIntelligence } from './pages/BusinessIntelligence';
import { DocumentAI } from './pages/DocumentAI';

// Placeholder
const Assistant = () => <div className="p-10 font-mono text-xl text-primary">AI Assistant Module Loading...</div>;

// AnimatedRoutes component to handle useLocation hook (which must be inside BrowserRouter)
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Landing /></PageTransition>} />

        {/* Protected App Routes - Wrapped in Main Layout */}
        <Route path="/*" element={
          <Layout>
            <Routes location={location} key={location.pathname}>
              <Route path="dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
              <Route path="orchestration" element={<PageTransition><Orchestration /></PageTransition>} />
              <Route path="services" element={<PageTransition><Services /></PageTransition>} />

              {/* Solution Verticals */}
              <Route path="solutions/government" element={<PageTransition><GovernmentServices /></PageTransition>} />
              <Route path="solutions/business" element={<PageTransition><BusinessIntelligence /></PageTransition>} />
              <Route path="solutions/documents" element={<PageTransition><DocumentAI /></PageTransition>} />

              <Route path="assistant" element={<PageTransition><Assistant /></PageTransition>} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
