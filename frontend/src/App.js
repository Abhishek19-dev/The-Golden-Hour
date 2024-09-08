import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/FirstPage/HeroSection/HeroSection';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HeroSection />}/>
    </Routes>
    </>
  );
}

export default App;
