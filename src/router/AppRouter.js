import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { NavbarScreen } from "../components/ui/NavbarScreen";
import { HomePage } from "../components/pages/HomePage";
import { NotFoundPage } from "../components/pages/NotFoundPage";
import { Footer } from "../components/ui/Footer";

export const AppRouter = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarScreen />
        <Routes>
          <Route index element={ <HomePage /> } />

          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
