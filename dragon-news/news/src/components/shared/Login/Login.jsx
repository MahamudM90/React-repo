import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"


export default function Login(){

    const {signinUser} = useContext(AuthContext);

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const  password = e.target.password.value;
        setSuccess('')
        setError('')
        e.target.reset();
        signinUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate(location?.state ? location.state: '/')
            setSuccess('Login Successful')
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
      <form onSubmit={handleLogin} className="card-body">
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
          <p>New here? <Link to='/register'><span className="text-red-500">Register</span></Link></p>
        </div>
      </form>
    </div>
    {
        success&&<p className="text-yellow-900">Login Successful</p>
    }
    {
        error&&<p className="text-yellow-900">Login Failed</p>
    }
  </div>
</div>
        </>
    )
}