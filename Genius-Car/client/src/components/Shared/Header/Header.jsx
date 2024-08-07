import { useContext } from 'react'
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'

export default function Header(){
  const {user,logOut} = useContext(AuthContext)

  const handleButton =()=>{
    logOut()
    .then()
    .catch()

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
        <li><a>Home</a></li>
        <li>
          <a>About</a>
          <a>Services</a>
          <a>Blog</a>
          <a>Contact</a>
        </li>
       
      </ul>
    </div>
    <Link to='/'><img className='w-4/5 h-4/5' src={logo}></img></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      {
       user?.email ? 
       <>
        <li><Link to='/order'>Order</Link></li>
       <li><button onClick={handleButton}>SignOut</button></li> 
       </>
       :
       <li><Link to='/login'>Login</Link></li>

      }
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/service'>Services</Link></li>
     
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Appointment</a>
  </div>
</div>
        </>
    )
}