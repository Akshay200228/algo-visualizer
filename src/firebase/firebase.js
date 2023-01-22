// import firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyADzK3Y1rSI-tg47CB3_rVg1JyNAyioCQw",
//     authDomain: "visual-algorithm.firebaseapp.com",
//     databaseURL: "https://visual-algorithm.firebaseio.com",
//     projectId: "visual-algorithm",
//     storageBucket: "visual-algorithm.appspot.com",
//     messagingSenderId: "422609339633",
//     appId: "1:422609339633:web:02a19ef7311cdb03ab5550"
// };

// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();

import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD0RZj74ez1L9XBiJYerzc1h21MEEy9D5U",
  authDomain: "algovisulizer.firebaseapp.com",
  projectId: "algovisulizer",
  storageBucket: "algovisulizer.appspot.com",
  messagingSenderId: "783054170316",
  appId: "1:783054170316:web:e786a1452c1e9633c97a69"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();