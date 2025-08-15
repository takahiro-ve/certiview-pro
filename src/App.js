import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.js";
import NotFound from "./pages/NotFound.js";

const App = () => {
  return (
    <BrowserRouter future={{ 
      v7_relativeSplatPath: true,
      v7_startTransition: true 
    }}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/certiview-pro/" element={<Index />} />
        <Route path="/certiview-pro" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
