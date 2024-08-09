// In this file. Research about createBrowserRouter router from react-router-dom v6.
// We shall switch to createBrowserRouter soon enough.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CauseDetails from "./pages/causes/CauseDetails";
import Causes from "./pages/causes/Causes";
import Home from "./pages/home/Home";
import DonatePage from "./pages/causes/DonatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/causes/:id" element={<CauseDetails />} />
        <Route path="/donatePage" element={<DonatePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
