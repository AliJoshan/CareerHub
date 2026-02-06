import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Jobs from './pages/Jobs'
import SavedJobs from './pages/SavedJobs';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/saved" element={<SavedJobs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
