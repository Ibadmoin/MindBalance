import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));
const Journal = lazy(() => import('./pages/Journal'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Tips = lazy(() => import('./pages/Tips'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
