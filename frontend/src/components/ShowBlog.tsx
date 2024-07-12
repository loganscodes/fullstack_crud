import axios from "axios"
import { useEffect, useState } from "react"
import { BlogProps } from "../interfaces/blogs-interface"
import { Link } from "react-router-dom"
import { URL } from "../api"


const ShowBlog = () => {

    const [blogs, setBlogs] = useState<BlogProps[]>([])

    useEffect(() => {
        getBlogs()
    },[])

    const getBlogs = async() => {
        const res = await axios.get(`${URL}/blogs`)
        setBlogs(res.data)
    }

    const deleteBlog = async(id: number) => {
        await axios.delete(`${URL}/blogs/${id}`)
        getBlogs()
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to={'/create'} className="btn btn-primary mt-2 mb-2">Create</Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map((blog) => (
                                    <tr key={blog.id}>
                                        <td>{blog.title}</td>
                                        <td>{blog.content}</td>
                                        <td className="d-flex gap-2">
                                            <Link to={`/edit/${blog.id}`} className="btn btn-info">Edit</Link>
                                            <button onClick={ () => deleteBlog(blog.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShowBlog