import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { auth, googleProvider } from '../firebase.js'
import { useAuth } from '../AuthContext.jsx'

// Clear explanations for each Firebase error
const messages = {
  'auth/user-not-found': 'No account exists with this email. Please sign up first.',
  'auth/wrong-password': 'Incorrect password. Please try again.',
  'auth/invalid-credential': 'Incorrect email or password. Check your details, or sign up if you do not have an account.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/missing-password': 'Please enter your password.',
  'auth/email-already-in-use': 'An account with this email already exists. Please log in instead.',
  'auth/weak-password': 'Password must be at least 6 characters.',
  'auth/too-many-requests': 'Too many failed attempts. Please wait a moment and try again.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
}

const explain = (error) => messages[error.code] || `Something went wrong (${error.code}). Please try again.`

export default function Login() {
  const { user } = useAuth()
  const location = useLocation()
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [notice, setNotice] = useState(
    location.state?.notice ? { type: 'info', text: location.state.notice } : null
  )

  // Once logged in, go back to the page they wanted (or Home)
  if (user) return <Navigate to={location.state?.from || '/'} replace />

  const handleSubmit = async (e) => {
    e.preventDefault()
    setNotice(null)
    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }
    } catch (error) {
      setNotice({ type: 'error', text: explain(error) })
    }
  }

  const handleGoogle = async () => {
    setNotice(null)
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      setNotice({ type: 'error', text: explain(error) })
    }
  }

  return (
    <section className="auth">
      <h1>{mode === 'login' ? 'Log in' : 'Sign up'}</h1>
      <div className="tabs">
        <button className={mode === 'login' ? 'active' : ''} onClick={() => { setMode('login'); setNotice(null) }}>Log in</button>
        <button className={mode === 'signup' ? 'active' : ''} onClick={() => { setMode('signup'); setNotice(null) }}>Sign up</button>
      </div>

      {notice && <div className={`notice ${notice.type}`} role="alert">{notice.text}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="primary">{mode === 'login' ? 'Log in' : 'Create account'}</button>
      </form>

      <div className="divider">or</div>
      <button className="google" onClick={handleGoogle}>Continue with Google</button>
    </section>
  )
}
