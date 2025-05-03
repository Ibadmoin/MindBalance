// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Dashboard from './pages/Dashboard';
import Tips from './pages/Tips';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
      <Navbar />
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
        <Footer />
     
    </Router>
  );
}

export default App;

