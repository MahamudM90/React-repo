import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {useNavigate} from 'react-router-dom'

export default function Login(){
  const {signIn} = useContext(AuthContext)
  const [sucess,setSucess] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  

    const loginHandle =(e)=> {
     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
     signIn(email,password)
     .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setSucess('Login Done');
      e.target.reset();
      navigate('/')
      console.log('sucess')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    });
  
    
    }

    return(
        <>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!!!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={loginHandle} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {
        sucess&&<p className="text-red-400">Login Done</p>
      }
      {
        error&&<p className="text-red-400"> Login Failed</p>
      }
    </div>
  </div>
</div>
        </>
    )
}