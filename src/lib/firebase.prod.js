import Firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/auth'



// we need to seed data to firestore


// we need a config here
const config = {
  
};

const firebase=Firebase.initializeApp(config)





export {firebase};

