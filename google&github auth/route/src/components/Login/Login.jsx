
import { useState } from "react";
import app from "../firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";

const Login =()=>{
    const[sign, setSign] = useState(null)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const mahamudOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setSign(null);
          }).catch((error) => {
            // An error happened.
          });
      }

    const signHandle = () => {
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const signInUser = result.user;
    setSign(signInUser);
    console.log(signInUser);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  
  
    }
  
    const githubHandle = () => {
      signInWithPopup(auth, githubProvider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const githubUser = result.user;
    setSign(githubUser);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
    }
   
    
  

    return (
        <>
        {
            sign && <h5>
                {sign.displayName}  
               <br></br>
                <img src={sign.photoURL}></img>
                <br></br>
                 <p>{sign.email}</p>
            </h5>
        }
        <h5>This is LoginPage!!!</h5>
        {
            sign?
            <button onClick={mahamudOut}> signOut</button>:
            <div>
          <button onClick={signHandle}>Google</button>
          <button onClick={githubHandle}>Github</button>
            </div>
           
        }
        
        
        </>
    )
}

export default Login;