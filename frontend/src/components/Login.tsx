import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { URL } from "../api"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        try {
            const res = await axios.post(`${URL}/auth/login`, {
                email:email, password:password
            })
            alert(res.data.message)
            localStorage.setItem('token', res.data.token)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <h1>Log In</h1>
            <form action="" onSubmit={handleLogin}>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
                    </div>
                </div>

                <div className="d-flex gap-2">  
                    <button type="submit" className="btn btn-danger">Log In</button>
                    <Link to={'/register'} className="btn btn-primary">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login