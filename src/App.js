import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Partials/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Footer from "./components/Partials/Footer";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
