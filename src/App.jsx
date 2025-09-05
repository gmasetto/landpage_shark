import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssistenciaTecnicaTemplate from "./AssistenciaTecnicaTemplate";
import QuemSomos from "./QuemSomos";  // com a inicial maiúscula
import PoliticaPrivacidade from "./PoliticaPrivacidade"; // idem
import CookieBanner from "./CookieBanner";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssistenciaTecnicaTemplate />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
      </Routes>
      <CookieBanner />
    </Router>
  );
}
