import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../api'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await axios.post(`${URL}/auth/register`, { name: name, email: email, password: password})
        navigate('/')
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <form action="" onSubmit={handleRegister}>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" />
                    </div>
                </div>
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
                    <button type="submit" className="btn btn-danger">Register</button>
                    <Link to={'/login'} className="btn btn-primary">Log In</Link>
                </div>
            </form>
        </div>
    )
}

export default Register