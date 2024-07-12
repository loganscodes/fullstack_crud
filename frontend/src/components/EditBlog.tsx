import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { URL } from "../api"

const EditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const handleUpdate = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axios.put(`${URL}/blogs/${id}`, {
            title: title,
            content: content
        })
        navigate('/')
    }

    const getBlogById = useCallback(
        async() => {
            const res = await axios.get(`${URL}/blogs/${id}`)
            setTitle(res.data.title)
            setContent(res.data.content)
        },[id]) 

    useEffect(() => {
        getBlogById()
    },[getBlogById])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Edit Entry Blog</h3>
                    <form action="" onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Clean Code" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Content Blog</label>
                            <textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control" ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditBlog