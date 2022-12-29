import * as React from "react";
import { Routes, Route, } from "react-router-dom";
import './Styles/App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Error404 from './Pages/Error404'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FicheLogements from './Pages/FicheLogements'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="error" element={<Error404 />} />
        <Route path="logements/:id" element={<FicheLogements />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;