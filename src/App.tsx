import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Offer from './pages/Offer';
import Volunteering from './pages/Volunteering';
import Projects from './pages/Projects';
import News from './pages/News';
import Support from './pages/Support';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="o-nas" element={<About />} />
          <Route path="oferta" element={<Offer />} />
          <Route path="wyjazdy" element={<Volunteering />} />
          <Route path="projekty" element={<Projects />} />
          <Route path="aktualnosci" element={<News />} />
          <Route path="wesprzyj-nas" element={<Support />} />
          <Route path="kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
