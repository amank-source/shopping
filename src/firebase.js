import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBxNQZ9cchpSDxxwcy074vs8XR0CzelRbQ',
  authDomain: 'clone-4c0b9.firebaseapp.com',
  databaseURL: 'https://clone-4c0b9-default-rtdb.firebaseio.com/',
  projectId: 'clone-4c0b9',
  storageBucket: 'clone-4c0b9.appspot.com',
  messagingSenderId: '241833437018',
  appId: '1:241833437018:web:40b646ab453aeb9b18f563',
  measurementId: 'G-F4YXB037EW',
})
// const db = firebase.firestore()
const auth = firebase.auth()
export { auth }
