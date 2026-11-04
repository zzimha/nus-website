import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Academics from './pages/Academics.jsx'
import Admission from './pages/Admission.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}
