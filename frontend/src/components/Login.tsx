import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="container">
            <h1>Log In</h1>
            <form action="">
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" />
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