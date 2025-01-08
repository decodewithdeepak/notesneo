import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { LoginModal } from './components/LoginModal';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Notes } from './pages/Notes';
import { Favorites } from './pages/Favorites';
import { Blog } from './pages/Blog';
import { Resources } from './pages/Resources';
import { Dashboard } from './pages/Dashboard';
import { FavoritesProvider } from './context/FavoritesContext';
import { NotesFilterProvider } from './context/NotesFilterContext';
import { AuthProvider } from './context/AuthContext';

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function AppContent() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <ScrollToTopOnRouteChange />
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <FavoritesProvider>
          <NotesFilterProvider>
            <AppContent />
          </NotesFilterProvider>
        </FavoritesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;