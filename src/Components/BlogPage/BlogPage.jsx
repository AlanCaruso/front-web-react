import React from 'react'
import { useParams } from 'react-router-dom'


const BlogPage = ({ blogs }) => {
    const { blogId } = useParams()
    console.log("all blogs", blogs)
    console.log("blog id", blogId)

    const blog = blogs.data.find(blog => blog.creador._id === blogId)

    console.log("blog solicitado", blog)

    return (
        <div>BlogPage Info {blog.titulo}</div>
    )
}

export default BlogPage