import { useEffect, useState } from "react"
import MiddleDetails from "../MiddleDetails/MiddleDetails";

export default function Middle(){
    const [news,setNews] = useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(response=> response.json())
        .then(data=>setNews(data));
    },[])
    return(
        <>
        <p className="font-bold">Dragon News Home </p>
        <br></br>
        
        {
            news.map((n)=> <MiddleDetails n={n} key={n._id}></MiddleDetails>)
        }
        </>
    )
}