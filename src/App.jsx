import { BrowserRouter, Routes, Route, Link } from "react-router"
import Home from "./Home"
import Work from "./Work"
import About from "./About"
import Visuals from "./Visuals"
import "./App.css"

function App() {
  return (
    <BrowserRouter basename="/Rohith-Portfolio">
      <header className="header">
        <Link to="/" className="logo">Rohith.</Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/visuals">Visuals</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/visuals" element={<Visuals />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Rohith Sunil</p>
        <div>
          <a href="mailto:rohith.sunil999@gmail.com">Email</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App