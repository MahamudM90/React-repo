import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Leftside(){

    const [category,setCategory] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(response=> response.json())
        .then(data=> setCategory(data))
    },[])

    return (
        <div className="font-poppins">
        <h1 className="font-bold">All Category</h1>
        <br></br>
        <h5 className="bg-zinc-300 rounded w-full h-full p-2 font-semibol">National News: {category.length}</h5>
        <br></br>
        {
            category.map((c)=> <p><Link to={`all/${c.id}`} className="font-poppins" key={c.id}>{c.name}</Link></p>)
        }
        </div>
    )
}