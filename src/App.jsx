// App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "Home";
import Red from "Red";
import Blue from "Blue";

export default function App() {
  return (
    <div>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>

      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}
