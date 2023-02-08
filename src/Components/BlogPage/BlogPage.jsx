import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const BlogPage = ({ posts }) => {
    const [itemSelected, setItemSelected] = useState({})
    const { blogId } = useParams()

    console.log("id url", blogId)

    useEffect(() => {
        for (let index = 0; index < posts.length; index++) {
            const item = posts[index];
            if (item._id === blogId) {
                setItemSelected(item)
            }
        }
    },)



    console.log("seleccionado", itemSelected)


    return (
        <div>BlogPage Info {itemSelected.titulo}</div>
    )
}

export default BlogPage