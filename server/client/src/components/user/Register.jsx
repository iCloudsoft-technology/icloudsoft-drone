// import React from 'react'
import "../common/Common.css"
import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {

  const history = useNavigate();

  const [inputs, setInputes] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInputes(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

  };

  const sendRequest = async () => {
    const res = await axios.post('http://localhost:3005/api/signup', {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/login"));
  };

  return (
    <>
      <div className=' container-fluid ' style={{ background: "linear-gradient(164deg, rgba(99,82,236,1) 50%, rgba(192,106,197,1) 100%)" }}  >
        <div className="container  p-lg-5">
          <div className="row d-flex justify-content-center align-items-center shadow-lg "  > 
          {/* style={{ backgroundImage: `url(${require("../../Images/sky.png")})`, backgroundAttachment: "local", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: '100%' }}   */}

            <div className="col-md-7  p-0"  >
              {/* <div className="p-4">
                <h2 className="fontFamilyHeader1 fw-bold mt-2 text-white text-center fw-bold mb-4" style={{fontSize:"2.5rem"}}>Welcome to <br></br><b className="" style={{fontSize:"3.5rem"}}> ICLOUDRONE</b></h2>
                <h4 className="h1FontFamily1 fw-bold mt-3 text-white fs-5" style={{ lineHeight: "30px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ex accusamus aliquid excepturi ratione aspernatur cum quibusdam nihil perferendis enim, suscipit tempore ipsum error. Neque natus adipisci eum non nisi.</h4>
              </div> */}
              <img className=' w-100' style={{  height:"529px"}} src={require("../../Images/sky.png")} alt='' />            </div>

            <div className="col-md-5   text-dark h1FontFamily1 bg-body"   >
              <div className="row  d-flex justify-content-center align-items-center">
                <form className='p-lg-3 ' onSubmit={handleSubmit} style={{ width: "80%" }}>

                  <div className='text-center '>
                    <h2 className="fontFamilyHeader mt-2 ">Create Account</h2>
                  </div>

                  <div className="form-outline p-lg-2 mt-3"   >
                    <label className="form-label fw-bold" htmlFor="form2Example1">Name</label>
                    <input type="text" id="form2Example1" className="form-control "
                      name="name"
                      onChange={handleChange}
                      value={inputs.name} required />
                  </div>

                  <div className="form-outline p-lg-2 mt-2 ">
                    <label className="form-label fw-bold" htmlFor="form2Example1">Email address</label>
                    <input type="email" id="form2Example1" className="form-control"
                      name="email"
                      onChange={handleChange}
                      value={inputs.email} required />
                  </div>

                  <div className="form-outline p-lg-2 mt-2">
                    <label className="form-label fw-bold " htmlFor="form2Example2">Password</label>
                    <input type="password" id="form2Example2" className="form-control "
                      name="password"
                      onChange={handleChange}
                      value={inputs.password} required />
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

      {/* <div class="wrapper">
                <div class="container main">
                    <div class="row1">
                        <div class="col-md-6 side-image">

                            <img src="images/white.png" alt="" />
                            <div class="text">
                                <p>Join the community of developers <i>- ludiflex</i></p>
                            </div>
                        </div>
                        <div class="col-md-6 right">
                            <div class="input-box">
                                <header>Create account</header>
                                <div class="input-field">
                                    <input type="text" class="input" id="email" required autocomplete="off" />
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field">
                                    <input type="password" class="input" id="password" required />
                                    <label for="password">Password</label>
                                </div>
                                <div class="input-field">
                                    <input type="submit" class="submit" value="Sign Up" />

                                </div>
                                <div class="signin">
                                    <span>Already have an account? <a href="#">Log in here</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

    </>
  )
}

export default Register