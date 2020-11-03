import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCspgaTXqdIn1IDHylXFqNX17gvjaYNVjI",
  authDomain: "discord-clone-ac1cf.firebaseapp.com",
  databaseURL: "https://discord-clone-ac1cf.firebaseio.com",
  projectId: "discord-clone-ac1cf",
  storageBucket: "discord-clone-ac1cf.appspot.com",
  messagingSenderId: "293699348384",
  appId: "1:293699348384:web:54ff96ca8853f74a0fa6c5",
  measurementId: "G-VHCSHG2GF7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
