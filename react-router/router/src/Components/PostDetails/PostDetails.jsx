import { useLoaderData, useNavigate } from "react-router-dom"

export default function PostDetails(){
    const PostDetails = useLoaderData();
    const {title} = PostDetails; 

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)

    }

return(
    <div>
        <h4>{title}</h4>
        <button onClick={handleGoBack}>Go Back</button>
    </div>
)
}