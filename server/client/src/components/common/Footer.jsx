import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (

    


    <>

      <section>
        <div className="container-fluid pt-lg-3 " style={{ backgroundColor: "#011612" }}>
          <div className="p-3 pt-lg-5">
            <div className="row  ">
              <div className="col-lg-3  ">
               
                  <img className='' src={require("../../Images/iClouDrone.png")} style={{ height: "10rem" }} alt="" />
               
              </div>
              <div className="col-lg-2  text-white ">
                <div className='' >
                  <h6 className='SolutionDropDownFontFamily2 text-decoration-none text-white' style={{ fontSize: "21px" }} >Quick Links</h6>
                </div>
                <div className='w-75 mt-3' style={{ borderTop: "2px solid white", fontSize: "18px" }}  >
                  <nav className='h1FontFamily1 ' style={{ fontSize: "17px", color: "#8e8e8e" }}>
                    <div className='mt-3 fontFamilyHeader1 ' style={{ fontSize: "21px", lineHeight: "17px" }}>
                      <NavLink to='*' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Home</p></NavLink>
                      <NavLink to='/about' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>About</p></NavLink>
                      <NavLink to='/products' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Products</p></NavLink>
                      <NavLink to='/industries' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Industries</p></NavLink>
                      <NavLink to='/contact' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Contact</p></NavLink>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="col-lg-2  text-white">
                <div className='' >
                  <h6 className='SolutionDropDownFontFamily2 text-decoration-none text-white' style={{ fontSize: "21px" }}>Useful Links</h6>
                </div>
                <div className='w-75 mt-3' style={{ borderTop: "2px solid white", fontSize: "18px" }}  >
                  <nav className='h1FontFamily1 ' style={{ borderTop: "1px solid hsla(0,0%,73%,.2)", fontSize: "17px" }} >
                    <div className='mt-3 fontFamilyHeader1' style={{ fontSize: "21px", lineHeight: "17px" }}>
                      <NavLink to='/login' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Login</p></NavLink>
                      <NavLink to='/register' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Register</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Account</p></NavLink>
                    </div>
                  </nav>
                </div>
              </div>

              <div className='col-lg-4 '>
                <div>
                  <h6 className='SolutionDropDownFontFamily2 text-decoration-none text-center text-white pb-3 ' style={{ fontSize: "25px" }}>Contact With Us</h6>
                </div>
                <div className=' mt-3'   >
                  <div className='text-center '>
                    <NavLink className='text-decoration-none text-white ' target='_blank' to='https://www.google.com/maps/dir//Offices+No+601,+6th+Floor,+iCloudsoft+Technology,+Lotus+,+Opp+Joshi+Railway+Museum,+Kothrud,+Pune,+Maharashtra+411038/@18.5013998,73.781925,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2bf285b81dd75:0x344ffe59f81b4da1!2m2!1d73.8200338!2d18.5013998'><i className="fa-solid fa-location-dot fs-2 mb-2"></i> </NavLink>
                    <h6 className='fs-5 mt-3  SolutionDropDownFontFamily text-white'>iCloudsoft Technology Office No 601, 6th Floor, Lotus Building, Opp Joshi Railway Museum, Kothrud, Pune 411038</h6>
                  </div>
                </div>
                <div className='row d-flex justify-content-center pt-4 mt-3'>
                  <div className='col-lg-2 col-3 text-center '>
                    <NavLink to="https://www.facebook.com/icloudsofttechnology " target="_blank"><i className="fa-brands fa-facebook fs-2 text-white"></i></NavLink>
                  </div>

                  <div className='col-lg-2 col-3 text-center'>
                    <NavLink to='https://in.linkedin.com/in/anil-kadam-18b113147' target="_blank"><i className="fa-brands fa-linkedin fs-2 text-white"></i> </NavLink>
                  </div>

                  <div className='col-lg-2 col-3 text-center '>
                    <NavLink to='https://twitter.com/icloudsoftTech' target="_blank"><i className="fa-brands fa-twitter fs-2 text-white"></i> </NavLink>
                  </div>

                  <div className='col-lg-2 col-3 text-center '>
                    <NavLink to='https://instagram.com/icloud_soft' target="_blank"><i className="fa-brands fa-instagram fs-2 text-white"></i> </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center mt-5 text-white  h1FontFamilyFooter ' >
              Copyright © iCloudsoft Technology 2023,Inc. All Rights Reserved. Various trademarks held by their respective owners.
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Footer