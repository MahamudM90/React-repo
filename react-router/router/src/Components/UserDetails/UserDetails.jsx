import { useLoaderData, useNavigate } from "react-router-dom"

export default function UserDetails(){
const user = useLoaderData();
const {name,email} = user;
const navigate = useNavigate();

const handleDetail = () => {
 navigate(-1)
}
    return(
        
        <>
        <h1>User Info:</h1>
        <h2>{name}</h2>
        <h5>{email}</h5>
        <button onClick={handleDetail}>Go Back</button>
        </>
    )
}