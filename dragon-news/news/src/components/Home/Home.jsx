import Header from "../shared/Header/Header";
import Leftside from "../shared/Leftside/Leftside";
import Middle from "../shared/Middle/Middle";
import Navbar from "../shared/Navbar";
import RightSide from "../shared/Rightside/Rightside";

export default function Home(){
    return(
        <>
        <Navbar></Navbar>
        <Header></Header>
        <br></br>
        <div className="lg:grid grid-cols-4 gap-2 font-poppins">
            
            <div className="">
            <Leftside></Leftside>
            </div>
            
             <div className="col-span-2 ">
               
                <Middle></Middle>
            
             </div>
             <div className="">
             <RightSide></RightSide>
             </div>
            
        </div>
        </>
    )
}