import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import ScrollToTop from "./utils/ScrollToTop";
import {ScrollToHash} from "./utils/ScrollToHash";

const App = () => {
 
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
