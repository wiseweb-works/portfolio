import { BrowserRouter, Route, Routes } from 'react-router';
import {
  Home,
  About,
  Articles,
  Contact,
  NotFound,
  Projects,
  ReadArticle,
} from './pages/';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar active={''} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ReadArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
