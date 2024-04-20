import { useLoaderData } from "react-router-dom"
import User from "../User/User";
export default function Users (){
    const users = useLoaderData();
    console.log(users)
    return (
        <>
       <h1>All List of data:{users.length}</h1>
       {
        users.map((user)=><User key={user.id} user={user}></User>)
       }
        </>
    )
}