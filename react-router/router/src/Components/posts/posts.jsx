import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post"

export default function Posts (){
    const posts = useLoaderData()
    
    console.log(posts)
    return(
        <>
        <h1>{posts.length}</h1>
        {
            posts.map((post)=><Post post={post} key={post.id}></Post>)
        }
        </>
    )
}