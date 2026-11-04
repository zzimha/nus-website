import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../AuthContext.jsx'

// Only shows the page if the user is logged in; otherwise sends them to /login
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <p>Loading...</p>
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname, notice: 'Please log in to view this page.' }}
      />
    )
  }
  return children
}
