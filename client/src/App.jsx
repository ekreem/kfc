import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Campaigns from './pages/Campaigns';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/kampaniyalar" element={<Campaigns />} />
          <Route path="/haqqimizda" element={<About />} />
          <Route path="/elaqe" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<ProtectedRoute adminOnly><Admin /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
