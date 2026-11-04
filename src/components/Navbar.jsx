import { NavLink, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.js'
import { useAuth } from '../AuthContext.jsx'

export default function Navbar() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const logout = async () => {
    await signOut(auth)
    navigate('/')
  }

  return (
    <nav className="navbar">
      <span className="brand">NUS</span>
      <div className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/academics">Academics</NavLink>
        <NavLink to="/admission">Admission</NavLink>
        {user ? (
          <>
            <span className="user">{user.email}</span>
            <button onClick={logout}>Log out</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  )
}
