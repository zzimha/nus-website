import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAggOe5oFCIdwMTTvXkJZwpFaf_PPeCfz8',
  authDomain: 'is4301-tut6-1dd05.firebaseapp.com',
  projectId: 'is4301-tut6-1dd05',
  storageBucket: 'is4301-tut6-1dd05.firebasestorage.app',
  messagingSenderId: '1035327103438',
  appId: '1:1035327103438:web:6b44d7b793b507812f8b9f',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
