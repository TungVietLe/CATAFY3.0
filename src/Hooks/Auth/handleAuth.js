//firebase
import { signInWithPopup, signOut } from "firebase/auth"
import {auth, googleProvider} from '../../firebase/config'



export const handleGoogleSignIn = () => {
    return new Promise((resolve, reject)=>{
        signInWithPopup(auth, googleProvider)  
        .catch( (error)=> alert(error) )
    })
}


export const handleSignOut = () => {
    signOut(auth)
    .catch( (error)=> alert(error) )
}