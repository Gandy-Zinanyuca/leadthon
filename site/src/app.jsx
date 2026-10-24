import { Router } from "preact-router";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { Jerarquia } from "./pages/Jerarquia.jsx";
import { Areas } from "./pages/Areas.jsx";
import { AreaDetail } from "./pages/AreaDetail.jsx";
import { EligeTuEquipo } from "./pages/EligeTuEquipo.jsx";

export function App() {
  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <Jerarquia path="/jerarquia" />
        <Areas path="/areas" />
        <AreaDetail path="/areas/:id" />
        <EligeTuEquipo path="/elige-tu-equipo" />
      </Router>
      <Footer />
    </>
  );
}
