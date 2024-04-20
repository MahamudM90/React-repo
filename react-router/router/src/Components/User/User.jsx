import { Link, useNavigate } from "react-router-dom";
const User = ({user}) => {
    const {name,email,phone,id} = user;
    const navigate = useNavigate()
    const styles = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '5px',
        margin: '5px'
    }
    const handleDetail = () => {
    navigate(`/user/${id}`)
    }
    return (
        <div style={styles}>
       <h1>Name:{name}</h1> 
       <h4>email:{email}</h4>
       <Link to={`/user/${id}`}>Show details</Link>
        <button onClick={handleDetail}>More Info</button>
        </div>
    )
}

export default User;