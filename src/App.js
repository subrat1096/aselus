import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import NavScroll from "./components/Navbar";
import Brand from "./pages/Brand";
import Career from "./pages/Career";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Company />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
