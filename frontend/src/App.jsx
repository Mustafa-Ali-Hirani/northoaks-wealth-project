import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicesPage from './pages/ServicesPage';
import Insights from './pages/Insights';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login'; // Added this

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* SECURITY ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin-secret-dashboard" element={<AdminDashboard />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;