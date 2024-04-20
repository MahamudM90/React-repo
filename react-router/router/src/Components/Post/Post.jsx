import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {title,id} = post;
    const navigate = useNavigate()

    const postStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '5px',
        margin: '5px'
    }

    const handleDetail = () =>{
     navigate(`/post/${id}`)
    }

    return(
        <div style={postStyle}>
        <p>{title}</p>
        <Link to={`/post/${id}`}>post</Link>
        <button onClick={handleDetail}>Click See Details</button>
        </div>
    )

}

export default Post;