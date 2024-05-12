import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Sign from "./page/Sign";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
