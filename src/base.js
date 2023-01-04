import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAU5QvCvewSb0AtywubxRnBZkfTzxn3m00',
  authDomain: 'nordstone-8adff.firebaseapp.com',
  projectId: 'nordstone-8adff',
  storageBucket: 'nordstone-8adff.appspot.com',
  messagingSenderId: '504604769715',
  appId: '1:504604769715:web:0d66e1d71a0129067e1fc6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
//Firebase storage reference
export const imageStorage = getStorage(app)
