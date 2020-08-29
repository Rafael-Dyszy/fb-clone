import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDjrtP0y-7dHPYJ80hOBIVpd6AyC3pMSMU',
  authDomain: 'facebook-clone-f23b7.firebaseapp.com',
  databaseURL: 'https://facebook-clone-f23b7.firebaseio.com',
  projectId: 'facebook-clone-f23b7',
  storageBucket: 'facebook-clone-f23b7.appspot.com',
  messagingSenderId: '843472546009',
  appId: '1:843472546009:web:d42d55c35535fbdf11b6c8',
  measurementId: 'G-EDQKG1DHHW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
