import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TopNavbar } from './components/TopNavbar';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { CaseStudies } from './pages/CaseStudies';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
