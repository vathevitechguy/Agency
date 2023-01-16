import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/NavBar/Navbar';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar title="Agency" />
      <Routes>
        <Route path="/" element={<Navigate replace to="/about-us" />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Portfolio />}></Route>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
