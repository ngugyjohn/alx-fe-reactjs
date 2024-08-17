import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar'; // Import Navbar

import './App.css'; // Keep your existing styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add Navbar */}
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
