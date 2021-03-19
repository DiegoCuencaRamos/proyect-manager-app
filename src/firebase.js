// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app'

// These imports load individual services into the firebase namespace.
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const auth = firebase.auth()
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider()
const TwitterAuthProvider = new firebase.auth.TwitterAuthProvider()
const GithubAuthProvider = new firebase.auth.GithubAuthProvider() 

export { 
    database as default,
    auth, 
    GoogleAuthProvider, 
    FacebookAuthProvider,
    TwitterAuthProvider,
    GithubAuthProvider
}

