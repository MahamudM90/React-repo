import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider"

export default function Register(){

    const {signupUser} = useContext(AuthContext);

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    

    const handleRegister = (e)=>{
        e.preventDefault();
        const name= e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSuccess('')
        setError('')
        e.target.reset();
        signupUser(email,password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            setSuccess('Registration succesful')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            // ..
          });
        


    }

    return(
        <>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register now!!!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account? <Link to='/login'><span className="text-red-500">Login</span></Link></p>
      </form>
    </div>
    {
        success && <p className="text-yellow-900">Registration Successful</p>
    }
    {
        error && <p className="text-yellow-900">Registration Failed</p>
    }
  </div>
</div>
        </>
    )
}