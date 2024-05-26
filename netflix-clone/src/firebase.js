import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCs5IhwqqnxUlof2DCr0UBhgncPFGb4n0Q",
    authDomain: "netflix-clone-971ef.firebaseapp.com",
    projectId: "netflix-clone-971ef",
    storageBucket: "netflix-clone-971ef.appspot.com",
    messagingSenderId: "702074088533",
    appId: "1:702074088533:web:d23b8b3af6bacd8c0638dc"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  
  export { auth, db };
  export default firebaseApp;
