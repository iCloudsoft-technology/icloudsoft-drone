import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
// import { NavLink } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch();
    // const [id, setId] = useState();
    // console.log(id);
    const navigator = useNavigate();
    const [loginError, setloginError] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handlerLogin = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        // console.log(user)
        axios.post("http://localhost:3535/user/login", user)
            .then(async (res) => {
                // const data = await res.data.user._id
                // setId(data)
                setloginError("")
                alert("user login");

            })
            .then(() => {
                dispatch(authActions.login())
                // navigator("/");
            })
            .catch(err => {
                setloginError(err.response.data.message)

            })
    }
    // const sendLogout = async (url) => {
    //     try {
    //         const res = await axios.get(url)
    //         console.log(res)
    //         // alert("logout success")
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    // const handleLogout = () => {
    //     const API = "http://localhost:8858/user/logout"
    //     sendLogout(API)
    //         // .then(() => { dispatch(authActions.logout()) })

    //         .catch(err => {
    //             console.log(err.response.data.message)

    //         })

    // }


    return (

        <div className=' container-fluid ' style={{ background: "linear-gradient(164deg, rgba(99,82,236,1) 50%, rgba(192,106,197,1) 100%)" }}  >
            <div className="container pt-5 pb-5 p-lg-5" >
                <div className="row  row-cols-md-2 row-cols-1 d-flex justify-content-center align-items-center shadow-lg" >

                    <div className="col  p-0"  >
                        <img className=' w-100' style={{ height: "530px" }} src={require("../../Images/LoginPageImg.jpg")} alt='' />
                    </div>

                    <div className="col p-0  text-dark fw-bold h1FontFamily1 bg-body"  >
                        <div className="row  d-flex justify-content-center align-items-center">

                            <form className='p-lg-5  ' onSubmit={handlerLogin} style={{ height: "530px", width: "75%" }}>
                                <div className='text-center '>
                                    <h2 className="fontFamilyHeader1 fw-bold mt-2">Hello Again</h2>
                                    <h4 className="h1FontFamily1 fw-bold mt-3 ">Welcome back you've <br></br> been missed</h4>
                                </div>


                                <div className="form-outline p-3  mt-4">
                                    <label className="form-label" for="form2Example1">Email address</label>

                                    <input type="email" id="form2Example1" className="form-control"
                                        onChange={e => setEmail(e.target.value)} value={email} required />
                                </div>

                                <div className="form-outline p-3 ">
                                    <label className="form-label " for="form2Example2">Password</label>

                                    <input type="password" id="form2Example2" className="form-control"
                                        onChange={e => setPassword(e.target.value)} value={password} required />
                                </div>
                                {loginError && <div className='text-danger'>{loginError}</div>}


                                <div className=" p-lg-3 p-3  h1FontFamily1">
                                    <button type="submit" className=" p-2 border w-100 text-dark LOGINBUTTON    mt-3" ><b>LOGIN</b></button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login