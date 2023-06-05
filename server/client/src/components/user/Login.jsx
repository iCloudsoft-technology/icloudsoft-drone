import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});
    const handlerLogin = (e) => {
        e.preventDefault();

    }



    return (
        <div>
            {/* {loginError && <div className='text-danger'>{loginError}</div>} */}

            <form onSubmit={handlerLogin} >
                <div className="container " >
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <div className="mb-3 ">
                                <label htmlFor="exampleInputEmail2" className="form-label ">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                                <input type="password2" className="form-control" id="exampleInputPassword2" aria-describedby="PasswordHelp" onChange={e => setPassword(e.target.value)} value={password} />
                            </div>
                            <div className="mb-3 text-center">
                                <NavLink className="text-decoration-none" to="/ ">Forget password ?</NavLink>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary col-12" data-bs-toggle="loginModel"  > Login</button>
                            </div>
                            <div className="mb-3 text-center">
                                Don't have an account?

                                {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                <NavLink className="text-decoration-none" to="/ ">SignUp</NavLink>
                                {/* --------------------------------------------------------------------------------------------------------------------- */}
                            </div>
                        </div>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Login