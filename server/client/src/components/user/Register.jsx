// import React from 'react'
import "../common/Common.css"
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigator = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});
  const form = useRef();


  const validateSignupForm = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    else if (name.length < 3) {
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
    return errors;
  };
  const sendRequest = (user) => {
    axios.post("http://localhost:3535/user/register", user)
      .then((res) => {
        console.log(res);
        alert("res");
        setEmail(""); setName(""); setPassword("");
        navigator("/");
      })
      .catch(err => {
        new Error(err)
        // console.log( err.response.data.message)
        // alert();
        alert(err +" "+err.response.data.message );
      })
  }

  const handelSignup = (e) => {
    e.preventDefault();
    const errors = validateSignupForm();
    if (Object.keys(errors).length === 0) {
      errors.name = ""; errors.email = ""; errors.password = ""; errors.avatar = ""
      const user = {
        name: name,
        email: email,
        password: password,

      }
     return( sendRequest(user))
      // console.log(user)
    }
    else {
      return(setErrors(errors))
    }
  }







  return (
    <>
      <div className=' container-fluid ' style={{ background: "linear-gradient(120deg,rgb(52,183,157,) 30%,  rgba(192,106,197,1)70%)" }}  >
        <div className="container  p-lg-5">
          <div className="row d-flex justify-content-center align-items-center shadow-lg "  >
            <div className="col-md-7  p-0"  >
              <img className=' w-100' style={{ height: "529px" }} src={require("../../Images/sky.png")} alt='' />
            </div>
            <div className="col-md-5   text-dark h1FontFamily1 bg-body"   >
              <div className="row  d-flex justify-content-center align-items-center">
                <form className='p-lg-3 ' ref={form} onSubmit={handelSignup} style={{ width: "80%" }}>
                  <div className='text-center '>
                    <h2 className="fontFamilyHeader mt-2 ">Create Account</h2>
                  </div>
                  <div className="form-outline p-lg-2 mt-3"   >
                    <label className="form-label fw-bold" htmlFor="form2Example1">Name</label>
                    <input type="text" id="form2Example1" className="form-control "
                      onChange={e => setName(e.target.value)} value={name} required />
                    {errors.name && <div className='text-danger'>{errors.name}</div>}
                  </div>
                  <div className="form-outline p-lg-2 mt-2 ">
                    <label className="form-label fw-bold" htmlFor="form2Example1">Email address</label>
                    <input type="email" id="form2Example1" className="form-control"
                      onChange={e => setEmail(e.target.value)} value={email} />
                    {errors.email && <div className='text-danger'>{errors.email}</div>}
                  </div>
                  <div className="form-outline p-lg-2 mt-2">
                    <label className="form-label fw-bold " htmlFor="form2Example2">Password</label>
                    <input type="password" id="form2Example2" className="form-control "
                      onChange={e => setPassword(e.target.value)} value={password} />
                    {errors.password && <div className='text-danger'>{errors.password}</div>}
                  </div>
                  <div className=" p-lg-2 mt-2 ">
                    <button type="submit" className=" btn p-2 border w-100 text-dark fw-bold SIGNUPBUTTON  mt-3" >SIGNUP</button>
                  </div>
                  <div className='fs-6  h1FontFamily1 mt-2 p-lg-3'>
                    <p>Already have an account? <NavLink className=" text-decoration-none" to="/login" target="_blank"><b className='h1FontFamily1 text-dark'> Log in here </b></NavLink></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register