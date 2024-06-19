import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"

export default function Users(){
    const loaderUser = useLoaderData()
    const [users,setUser] = useState(loaderUser);

    const handleDelete=(_id)=>{
    fetch(`http://localhost:5000/users/${_id}`, {
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
            alert('Deleted successful')
            const remaining = users.filter(user=> user._id !== _id);
            setUser(remaining)
        }
    })
    }
    return(
        <>
        <p>{loaderUser.length}</p>
        {
            loaderUser.map(u=><p key={u._id}>{u.email}<Link to={`/update/${u._id}`}><button>Update</button></Link><button onClick={()=> handleDelete(u._id)}>X</button></p>)
        }
        </>
    )
}