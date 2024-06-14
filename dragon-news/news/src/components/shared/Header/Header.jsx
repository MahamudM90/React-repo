import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"

export default function Header(){
  const {logOut,user} = useContext(AuthContext);
 
    const handleLogout=()=>{
      logOut().
      then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

    }
    return(
        <>
        <div className="navbar bg-base-100 font-poppins">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      
      <li><a>About</a></li>
      
      <li><a>Career</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
  <div className="">
          <img alt="Tailwind CSS Navbar component"  className='w-10 rounded-full h-10' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
         
        </div>
        {
          
          user?
          <button onClick={handleLogout} className="btn btn-neutral w-1/4 h-1/5">SignOut</button>
          :
          <Link to='/login' className="btn btn-neutral w-1/4 h-1/5">LogIn</Link>
          
        }
        
  </div>
</div>
        </>
    )
}