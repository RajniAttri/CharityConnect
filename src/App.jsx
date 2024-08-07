// In this file. Research about createBrowserRouter router from react-router-dom v6.
// We shall switch to createBrowserRouter soon enough.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/components/About"
import Causes from "./pages/causes/Causes"
import Contact from "./pages/contact/components/Contact";
import Career from "./pages/career/components/Career";
import Volunteer from "./pages/volunteer/components/Volunteer";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/causes" element={<Causes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/volunteer" element={<Volunteer />} />

        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
