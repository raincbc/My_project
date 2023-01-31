import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';


const app = firebase.initializeApp({
    apiKey: "AIzaSyDtkMb1ickCeDtoNFjzmnT-X02-OAQNvt8",
    authDomain: "yalp-app.firebaseapp.com",
    projectId: "yalp-app",
    storageBucket: "yalp-app.appspot.com",
    messagingSenderId: "423793853285",
    appId: "1:423793853285:web:981c10b5923e225f5d978c"
});

export default app;

export const auth = getAuth(app);