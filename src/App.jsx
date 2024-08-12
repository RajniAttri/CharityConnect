// In this file. Research about createBrowserRouter router from react-router-dom v6.
// We shall switch to createBrowserRouter soon enough.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import CauseDetails from "./pages/causes/CauseDetails";
import Causes from "./pages/causes/Causes";
import DonatePage from "./pages/causes/DonatePage";
import Contact from "./pages/contact/Contact";
import Donners from "./pages/donners/Donners";
import Home from "./pages/home/Home";
import Leadership from "./pages/leadership/Leadership";
import Faqs from "./pages/faqs/Faqs";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/career" element={<Career />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/donners" element={<Donners />} />
        <Route path="/causes/:id" element={<CauseDetails />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<BlogDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
