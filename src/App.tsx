import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { CaseStudies } from './pages/CaseStudies';
import { Resources } from './pages/Resources';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="resources" element={<Resources />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
