import Firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/auth'



// we need to seed data to firestore


// we need a config here
const config = {
    apiKey: "AIzaSyBEcPhmoixkqrFIiF5F1FshHHvI2UvitUQ",
    authDomain: "netflix-mimic.firebaseapp.com",
    projectId: "netflix-mimic",
    storageBucket: "netflix-mimic.appspot.com",
    messagingSenderId: "366672748161",
    appId: "1:366672748161:web:a128b84e0e7fdfe7aab780",
   measurementId: "G-M31RD1YDK1"
};

const firebase=Firebase.initializeApp(config)





export {firebase};

