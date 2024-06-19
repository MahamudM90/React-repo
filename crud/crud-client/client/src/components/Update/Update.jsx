import { useLoaderData } from "react-router-dom"

export default function Update(){

    const userData = useLoaderData();

    const handleUpdate =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        const updateUser= {email,password}

        fetch(`http://localhost:5000/users/${userData._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount >0){
                alert('user updated successfully')
            }
        })


    }
    return(
        <>
        <form onSubmit={handleUpdate}>
        <input type='email' name='email' defaultValue={userData?.email}></input>
        <br></br>
        <input type='password' name='password' defaultValue={userData?.password}></input>
        <br></br>
        <br></br>
        <button>Submit</button>
        </form>
        </>
    )
}