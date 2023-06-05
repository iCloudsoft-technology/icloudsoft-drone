import React, { useState, useRef } from 'react'
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom'
import './Common.css'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/index';
import { useCartContext } from '../context/cartContext';



const Header = () => {
    const { total_item } = useCartContext();


    // let backdrop =null
    // if (backdrop === undefined) {
    //     document.getElementById("browser-not-supported-container").classList.remove("d-none");}
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [avatar, setAvatar] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginError, setloginError] = useState();
    const navigator = useNavigate();
    const [errors, setErrors] = useState({});
    const form = useRef();
    // console.log(avatar);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();


    const validateSignupForm = () => {
        const errors = {};
        if (!name) {
            errors.name = 'Name is required';
        }
        else if (name.length < 4) {
            errors.name = "Name must be greater than four chacters"
        }
        if (!email) {
            errors.email = 'Email is required';
        }
        if (!password) {

            errors.password = 'Password is required';
        }
        else if (password.length < 8) {
            errors.password = 'Password Must be greater than eight charcters'
        }
        if (!avatar) {

            errors.avatar = 'Profile Photo is required';
        }



        return errors;
    };





    const handelSignup = (e) => {
        e.preventDefault();
        const errors = validateSignupForm();
        if (Object.keys(errors).length === 0) {
            errors.name = ""; errors.email = ""; errors.password = ""; errors.avatar = ""
            const user = {
                name: name,
                email: email,
                password: password,
                avatar: avatar
            }
            console.log(user)
            axios.post("http://localhost:8858/user/register", user)
                .then((res) => {
                    console.log(res);

                    console.log(user, "nnnn")
                    alert("User Signup Success");
                    alert(res);

                    navigator("/");
                })
                .catch(err => { new Error(err) })
        }
        else {
            setErrors(errors);
        }



    }




    const handlerLogin = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        console.log(user)
        axios.post("http://localhost:8858/user/login", user)
            .then(async (res) => {
                // console.log(res)
                const data = await res.data.user._id
                setId(data)

                // console.log(data);
                // id=data.user._id
                // if (data.user.email === "admin@gmail.com") {
                //     alert("admin login");
                //     navigator("/");
                // } else {
                //     navigator("/");
                //     alert("user login");
                // }
                setloginError("")

            })
            .then(() => { dispatch(authActions.login()) })
            .catch(err => {
                setloginError(err.response.data.message)

            })
    }
    const sendLogout = async (url) => {
        try {
            const res = await axios.get(url)
            console.log(res)
            // alert("logout success")
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleLogout = () => {
        const API = "http://localhost:8858/user/logout"
        sendLogout(API)
            // .then(() => { dispatch(authActions.logout()) })

            .catch(err => {
                console.log(err.response.data.message)

            })

    }
    return (
        <>
            {/* Header started here */}
            {/* bg-transparent */}
            {/* style={{ backgroundImage: `url(${require("../Images/earth1.webp")})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",  }}  */}

            <nav className="navbar navbar-expand-lg  bg-body   p-2" >

                {/* logo start*/}
                <NavLink  to="/"><img className='ps-3 pe-3' style={{ height: "10.5rem" }} src={require("../Images/logo.png")} alt="" /></NavLink>
                {/* logo end */}

                {/* toggler button start */}
                <button className="navbar-toggler " type="button " data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>
                {/* toggler button end */}

                {/* navbar start */}

                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    {/* search from start here */}
                    <form className="d-flex  " role="search">
                        <input className="rounded w-100 " style={{ borderColor: "#04627e" }} type="" />
                        <button className="btn" type="submit" style={{ marginLeft: "-40px" }}><i className="fa-solid fa-magnifying-glass"> </i></button>
                    </form>
                    {/* search from end here */}

                    {/* nav items */}
                    <ul className="navbar-nav w-100 d-flex justify-content-around align-items-lg-center ">
                        {/* <NavLink className="shade4 fs-4" to="/"><i className="fa-solid fa-user"></i></NavLink> */}
                        <NavLink className="text-decoration-none shade4 " to="/cart" >
                            <div>
                                <div className='w-100 text-center'>
                                    {/* <div>
                                        <div className='position-relative'><div>
                                            <i className="fa-solid fa-cart-shopping fs-4"></i>
                                        </div>
                                            <div className='position-absolute bottom-0 start-50 translate-middle  text-warning  rounded-circle ' >{total_item}</div>
                                        </div>
                                    </div> */}
                                     <i className="fa-solid fa-cart-shopping fs-4"></i> <span>{total_item}</span>

                                </div>

                                <div className='w-100 text-center'><b>Cart</b></div>
                            </div>
                        </NavLink>
                        <NavLink className="text-decoration-none shade4 " to="/shop" >
                            <div>
                                <div className='w-100 text-center'><i className="fa-solid fa-shop fs-4"></i>
                                </div>
                                <div className='w-100 text-center'><b>Shop</b></div>
                            </div>
                        </NavLink>
                        <NavLink className="text-decoration-none shade4 " to="/" >
                            <div>
                                <div className='w-100 text-center'><i className="fa-solid fa-heart fs-4"></i>
                                </div>
                                <div className='w-100 text-center'><b>Watch List</b></div>
                            </div>
                        </NavLink>
                        <NavLink className="text-decoration-none shade4 " to="/" >
                            <div>
                                <div className='w-100 text-center'><i className="fa-solid fa-circle-info fs-4"> </i>
                                </div>
                                <div className='w-100 text-center'><b>About Us</b></div>
                            </div>
                        </NavLink>
                        <NavLink className="text-decoration-none shade4 " to="/contact" >
                            <div>
                                <div className='w-100 text-center'><i className="fa-solid fa-address-card fs-4"></i>
                                </div>
                                <div className='w-100 text-center'><b>Contact Us</b></div>
                            </div>
                        </NavLink>

                        {!isLoggedIn &&
                            // <li className="nav-item"><NavLink className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal" ><i className="fa-solid fa-user"></i></NavLink>   </li>
                            <NavLink className="text-decoration-none shade4 " data-bs-toggle="modal" data-bs-target="#loginModel" to="/" >
                                <div>
                                    <div className='w-100 text-center'><i className="fa-solid fa-user fs-4"></i>
                                    </div>
                                    <div className='w-100 text-center'><b>Login</b></div>
                                </div>
                            </NavLink>
                        }

                        {/* data-bs-backdrop="true" data-bs-keyboard="false" data-backdrop="true"  */}
                        <div className="modal fade" id="loginModel" tabIndex="-1" role="document" aria-labelledby="exampleModalLabel" aria-hidden="true"   >
                            <div className="modal-dialog ">
                                <div className="modal-content  p-2 ">
                                    <div className="modal-header">
                                        <h5 className="modal-title col-12 text-center" id="exampleModalLabel">Login</h5>
                                        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <form onSubmit={handlerLogin} >

                                        <div className="container " >
                                            <div className="row justify-content-center">
                                                <div className="mb-3 ">

                                                    <label htmlFor="exampleInputEmail2" className="form-label ">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} value={email} />


                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                                                    <input type="password2" className="form-control" id="exampleInputPassword2" onChange={e => setPassword(e.target.value)} value={password} />

                                                </div>
                                                {loginError && <div className='text-danger'>{loginError}</div>}
                                                <div className="mb-3 text-center">
                                                    <NavLink style={{ textDecoration: 'none' }}>Forget password ?</NavLink>
                                                </div>
                                                <div className="mb-3">
                                                    <button type="submit" className="btn btn-primary col-12" data-bs-toggle="loginModel"  > Login</button>
                                                </div>
                                                <div className="mb-3 text-center">
                                                    Don't have an account?
                                                    {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                                    <NavLink data-bs-toggle="modal" data-bs-target="#signupModal" style={{ textDecoration: 'none' }}>SignUp</NavLink>
                                                    {/* --------------------------------------------------------------------------------------------------------------------- */}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="modal-footer">
                                        <div className="mb-3  col-12 ">
                                            <button type="button" className="btn btn-outline-primary col-12"> <i className="fa-brands fa-google"></i> Login with Google</button>
                                        </div>
                                        <div className="mb-3 col-12 ">
                                            <button type="button" className="btn btn-outline-warning col-12" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" modal-backdrop="false" aria-hidden="true"  >
                            <div className="modal-dialog ">
                                <div className="modal-content p-3 ">
                                    <div className="modal-header">
                                        <h5 className="modal-title col-12 text-center" id="exampleModalLabel">SignUp</h5>
                                        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <form ref={form} onSubmit={handelSignup} >

                                        <div className='container'>
                                            <div className='row justify-content-center'>

                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputText1" className="form-label">Name</label>
                                                    <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" onChange={e => setName(e.target.value)} value={name} />
                                                    {errors.name && <div className='text-danger'>{errors.name}</div>}

                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} value={email} />
                                                    {errors.email && <div className='text-danger'>{errors.email}</div>}
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                    <input type="password1" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" onChange={e => setPassword(e.target.value)} value={password} />
                                                    {errors.password && <div className='text-danger'>{errors.password}</div>}
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputText2" className="form-label">Last Name</label>
                                                    <input type="file" className="form-control" id="exampleInputText2" aria-describedby="textlHelp" onChange={e => setAvatar(e.target.files[0])} value={avatar} />
                                                    {errors.avatar && <div className='text-danger'>{errors.avatar}</div>}
                                                </div>
                                                <div className='mb-3 '>
                                                    <button type="submit" className="btn btn-primary col-12"  > SignUp</button>
                                                </div>

                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </form>
                                    <div className="modal-footer">
                                        {/* <div className="mb-3  col-12 ">
                <button type="button" className="btn btn-outline-primary col-12"> <i className="fa-brands fa-google"></i> Login with Google</button>
              </div> */}
                                        <div className="mb-3 col-12 ">
                                            <button type="button" className="btn btn-outline-warning col-12" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isLoggedIn &&

                            // <button data-bs-dismiss="modal" onClick={handleLogout} >
                            //     <div>
                            //         <div className='w-100 text-center'><i className="fa-solid fa-right-from-bracket"></i>
                            //         </div>
                            //         <div className='w-100 text-center'><b>Logout</b></div>
                            //     </div>
                            // </button>
                            <NavLink className="text-decoration-none shade4 " data-bs-dismiss="modal" onClick={handleLogout}  >
                                <div>
                                    <div className='w-100 text-center'><i className="fa-solid fa-right-from-bracket"></i>
                                    </div>
                                    <div className='w-100 text-center'><b>Logout</b></div>
                                </div>
                            </NavLink>
                        }




















                        {/* <NavLink className="text-decoration-none shade4 fs-4" to="/" > <i className="fa-solid fa-address-card"></i> </NavLink> */}

                    </ul>
                    {/* nav items */}

                </div>
            </nav>
            {/* navbar end  */}


            {/* Header ended here */}
        </>
    )
}

export default Header