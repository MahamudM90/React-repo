import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Header(){
    return(
        <div>
            <ul> 
                <Link href="/">Home</Link>
                <Link href='/about'>about</Link>
                <Link href='/contact'>contact</Link>
            </ul>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}