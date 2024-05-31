import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config";
import { useState } from "react";
import {FaEye,FaEyeSlash} from 'react-icons/fa'

export default function Register (){
  const [registererror,setRegisterError] = useState('')
  const [success, setSuccess] = useState('');
  const [show,setShow] = useState(false);

    const auth = getAuth(app);

    const mahamudRegister = e => {
      
        
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        if (password.length > 6){
          setRegisterError('please provide only 6 digit')
          return;
        }
        else if (!/[A-Z]/.test(password)){
          setRegisterError('should provide one uppercase')
          return;
        }
        else if (!accepted){
          setRegisterError('please maintain the terms & conditions')
          return;
        }
        setRegisterError('')
        setSuccess('')
      
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            
            setSuccess('done successfully');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setRegisterError(errorMessage);
            // ..
          });

    }
    return(
        <div className="container mx-auto"> 
        <form onSubmit={mahamudRegister}>
        <input type="email" placeholder="Enter your email" className="input input-bordered input-sm w-full max-w-xs mb-4" name='email' />
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
        <div>
          <input type='checkbox' name='terms' id='terms'></input>
          <label htmlFor="terms"> Accept Our<a>Terms&conditions </a></label>
        </div>
        <br></br>
        <button className="btn btn-active btn-neutral mx-auto">Register</button>
        </form>
        {
         registererror&& <p>{registererror}</p> 
        }
        {
          success&& <p>{success}</p>
        }
        </div>
        
    )
}