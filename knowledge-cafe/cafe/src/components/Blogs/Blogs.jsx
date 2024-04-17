import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"
import PropTypes from 'prop-types'
export default function Blogs({handleAddToBookmark, handleMarkAsRead}){
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    return(
        <div className="md:w-2/3"> 
        <h1>Blog</h1>
        <h5>{blogs.length}</h5>
        {
            blogs.map((blog)=><Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
        }
        </div>
    )
}
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}