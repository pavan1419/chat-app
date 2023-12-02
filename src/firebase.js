// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAPML_a0yOKln1tcjcg4wegbnUtVcoj_kc',
  authDomain: 'chat-app-8c627.firebaseapp.com',
  databaseURL: 'https://chat-app-8c627-default-rtdb.firebaseio.com',
  projectId: 'chat-app-8c627',
  storageBucket: 'chat-app-8c627.appspot.com',
  messagingSenderId: '158074103150',
  appId: '1:158074103150:web:2313d9570cfdc28281cd7f',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, ref, push, onValue };
