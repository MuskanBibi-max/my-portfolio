import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/ProjectsPage";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
