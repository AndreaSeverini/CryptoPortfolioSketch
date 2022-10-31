import "./App.css";

import { Navigate, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";

// Questo è un componente funcione
function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
