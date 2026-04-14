import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function goToPage(id) {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  }

  function renderPage() {
    switch (currentPage) {
      case "servicos":
        return <ServicesPage />;
      case "sobre":
        return <AboutPage />;
      case "galeria":
        return <GalleryPage />;
      case "contato":
        return <ContactPage />;
      default:
        return <HomePage goToPage={goToPage} />;
    }
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff7f8_0%,#fffdf9_35%,#fafafa_100%)] text-neutral-900">
      <Header
        currentPage={currentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        goToPage={goToPage}
      />

      {renderPage()}

      <Footer goToPage={goToPage} />
    </main>
  );
}