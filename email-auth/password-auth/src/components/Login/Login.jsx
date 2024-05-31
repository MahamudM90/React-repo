import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config";
import { useRef, useState } from "react"
import {FaEye,FaEyeSlash} from 'react-icons/fa'

const auth = getAuth(app);

export default function Login(){
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('')
    const [show,setShow] = useState(false);
    const emailRef = useRef(null)
    const formHandle = (e)=>{
     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
     setSuccess('')
     setError('')
     signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setSuccess(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
  });
     
    }

    const handlePassword = () => {
      const email = emailRef.current.value;
      if(!email){
        console.log('please provide email',emailRef.current.value);
        return;
      }
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert('please check your email')
      })
      .catch(()=>{
        console.log(error)
      })
    }
    

    return(
        <div className="container mx-auto">
        <form onSubmit={formHandle}>
        <input type="email" placeholder="Enter your email" 
        className="input input-bordered input-sm w-full max-w-xs mb-4" 
        ref={emailRef}
        name='email' />
        <br></br>
        <div className="relative mb-4">
       <input type={show ? 'text' : 'password'} placeholder="Enter your password" className="input input-bordered input-sm w-full max-w-xs " name='password'/>
       <span className='absolute top-3 left-72' onClick={()=>setShow(!show)}>
       {
        show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
       }          
        </span>
       </div>
        <br></br>
       <a onClick={handlePassword} className="label"><label >Forgot Password</label></a>
        <br></br>
        <button className="btn btn-active btn-neutral mx-auto">Login</button>
        </form>
        {
            success && <p>Login Successful</p> 
        }
        {
            error && <p>{error}</p>
        }
        </div>
    )
}