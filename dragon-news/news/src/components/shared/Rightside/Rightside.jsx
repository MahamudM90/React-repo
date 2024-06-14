import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";



export default function RightSide(){
    return(
        <div className="font-poppins">
            <h4 className="font-bold">LogIn with</h4>
            <br></br>
        <button className="border p-2 rounded mb-2 "><FaGoogle className="inline m-1" />Login With Google</button> 
        <button className="border p-2 rounded"><FaGithub className="inline m-1" />
        Login With Github</button>
        <br></br>
        <br></br>
        <h5>Find Us On</h5>
        <br></br>
        <button className="border p-2 w-1/2 h-1/2 rounded"><FaFacebookSquare className="inline m-1" />Facebook</button> 
        <br></br>
        <button className="border p-2 w-1/2 h-1/2 rounded"><CiInstagram className="inline m-1" />Instragram</button>
        <br></br>
        <button className="border p-2 w-1/2 h-1/2 mb-4 rounded"><FaXTwitter className="inline m-1" />Twitter</button>
        
        
        
        </div>
    )
}