
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCL-bN0fGXeLFMzgrksIixoRvhX_UY3z_c",
  authDomain: "netflix-website-by-abu.firebaseapp.com",
  projectId: "netflix-website-by-abu",
  storageBucket: "netflix-website-by-abu.firebasestorage.app",
  messagingSenderId: "569623856895",
  appId: "1:569623856895:web:e434788a444f4871bd2eca",
  measurementId: "G-MDGCS0B32S"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
async function signup(name,email,password){
    try{
       const res = await createUserWithEmailAndPassword(auth,email,password)
       const user = res.user
       await addDoc(collection(db,"user"),{
        uid :user.uid,
        name,authProvider : "local",
        email
       })

    }catch(err){
        console.log(err)
        toast.error(err.code)


    }
    
}

async function login(email,password){
    try{
        await signInWithEmailAndPassword(auth,email ,password)

    }catch(error){
    toast.error(error.message)
    }
}
async function logout() {
    signOut(auth)
//  alert("you logged out")
    
}
export {auth,db,login,logout,signup}