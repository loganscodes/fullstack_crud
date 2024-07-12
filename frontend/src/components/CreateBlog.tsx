import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { URL } from "../api"

const CreateBlog = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const handleStore = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        await axios.post(URL, { title: title, content: content })
        navigate('/')

    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Create Entry Blog</h3>
                    <form action="" onSubmit={handleStore}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Clean Code" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Content Blog</label>
                            <textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control" ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Store</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog