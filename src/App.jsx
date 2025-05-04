import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense ,useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import generateRandomData from './utils/test';

const Home = lazy(() => import('./pages/Home'));
const Journal = lazy(() => import('./pages/Journal'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  useEffect(() => {
    const entries = localStorage.getItem('journalEntries');
    if (!entries) {
      console.log("Dummy data added for stats");
      generateRandomData();
    }
  }, []); // runs only once on mount
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
