import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Styles from "./css/styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

function App() {

    return (
        <div className="container">
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}>Home</Route>
                    <Route path="/About" element={<About />}>About</Route>
                    <Route path="/Contact" element={<Contact />}>Contact</Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App