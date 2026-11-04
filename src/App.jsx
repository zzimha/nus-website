import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Home from './pages/Home.jsx'
import Academics from './pages/Academics.jsx'
import Admission from './pages/Admission.jsx'
import Login from './pages/Login.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<ProtectedRoute><Academics /></ProtectedRoute>} />
          <Route path="/admission" element={<ProtectedRoute><Admission /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}
