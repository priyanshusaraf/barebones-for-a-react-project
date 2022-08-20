import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={[]} />
        <Route path="about" element={<h1>hello</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
