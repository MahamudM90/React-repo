import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleOut = () => {
    logOut()
    .then (()=>console.log('user login'))
    .catch(error=>console.error(error))
  }

    return(
        <>
         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        <li>
          
          <ul className="p-2">
           
          </ul>
        </li>
        <li><a>Login</a></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">Context ApI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/home'>Home</Link></li>
      <li><Link to='/register'>Register</Link></li>
      
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/order'>Order</Link></li>
      {
        user && <>
       <li> <NavLink to='/profile'>Profile</NavLink></li>
       <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </>
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user && <span>{user.email}</span>
    }
    <a onClick={handleOut} className="btn">Logout</a>
  </div>
</div>
        </>
    )
}

export default Header;