import React from 'react'
import { useParams } from 'react-router-dom'


const BlogPage = ({ posts }) => {
    const { blogId } = useParams()

    console.log("id parametro", blogId)
    console.log(posts)

    const blog = posts.find((post) => {
        return post._id === blogId
    })

    console.log("blog solicitado", blog)

    if (blog == undefined) {
        console.log("undefinido", blog)
    }


    return (
        <div>BlogPage Info </div>
    )
}

export default BlogPage