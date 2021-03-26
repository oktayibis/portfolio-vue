import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAaO97NmNCHqMNtZiGY2VBXplx2aSj_1wU',
  authDomain: 'my-portfolio-92642.firebaseapp.com',
  databaseURL: 'https://my-portfolio-92642.firebaseio.com',
  projectId: 'my-portfolio-92642',
  storageBucket: 'my-portfolio-92642.appspot.com',
  messagingSenderId: '441256206364',
  appId: '1:441256206364:web:929f71b2b0d9292fb8bfd9',
  measurementId: 'G-YFP32NZ76P'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()
