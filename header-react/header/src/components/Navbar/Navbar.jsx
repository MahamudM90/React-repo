import { useState } from "react"
import Link from "../Link/Link"
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

export default function Navbar(){
    const [open,setOpen] = useState(false)
    const routes = [
        {
            id:1, path:'/', name: 'Home'
        },
        {
            id:2, path:'/about', name: 'About'
        },
        {
            id:3, path:'/services', name: 'Services'
        },
        {
            id:4, path:'/contact', name: 'Home'
        },
        {
            id:5, path:'#', name: 'NotFound'
        }
    ]
    return(
        <nav>
            <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                {
                    open===true ? <AiOutlineClose></AiOutlineClose>:  <AiOutlineMenu></AiOutlineMenu>
                }
           
            </div>
           
        <ul className={`md:flex duration-1000 absolute md:static ${open? 'top-16': '-top-60'} bg-yellow-200 px-6 shadow-lg`}>
            {
             routes.map((route)=><Link key={route.id} route={route}></Link>)
            }
        </ul>
        </nav>
    )
}
