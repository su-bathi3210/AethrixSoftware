import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";
/*import FloatingWhatsApp from "./Components/FloatingWhatsApp";*/

function App() {
    return (
        <Router>
            <NavBar />
            <div className="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Service' element={<Service />} />
                    <Route path='/Portfolio' element={<Portfolio />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
