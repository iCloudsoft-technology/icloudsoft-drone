import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (

    <>
      {/* <section>
        <div className="container-fluid bg-dark">
          <div className="container text-white" style={{ padding: "70px" }}>
            <div className="row d-flex justify-content-center ">
              <div className="col-lg-3">
                <div className='' >
                  <h2 className='' style={{ fontSize: "17px" }}  >Popular Products</h2>
                </div>
                <div className='mt-3' >
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Mavic 3M</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}> Consumer</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Professional</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Enterprise</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Components</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>DJI Agriculture</h4></NavLink>
                </div>
              </div>

              <div className="col-lg-3">
                <div className='' >
                  <h2 className='' style={{ fontSize: "17px" }}> Where to Buy </h2>
                </div>
                <div className='mt-3' style={{ color: "#9fa3a6" }}>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>DJI Online Store</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Flagship Stores</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>DJI-Operated Stores</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Retail Stores</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Enterprise Retailers</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Agricultural Drone Dealer</h4></NavLink>
                </div>
              </div>

              <div className="col-lg-3">
                <div className='' >
                  <h2 className='' style={{ fontSize: "17px" }}> Community </h2>
                </div>
                <div className='mt-3' style={{ color: "#9fa3a6" }}>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}> SkyPixel </h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}> DJI Forum </h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}> Developer </h4></NavLink>
                  
                </div>
              </div>

              <div className="col-lg-3">
                <div className='' >
                  <h2 className='' style={{ fontSize: "17px" }}  >Explore  </h2>
                </div>
                <div className='mt-3' style={{ color: "#9fa3a6" }}>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Newsroom</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Showcase</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>Events</h4></NavLink>
                  <NavLink className='text-decoration-none ' style={{ color: "#9fa3a6" }} to='/' ><h4 className='' style={{ fontSize: "16px", lineHeight: "24px" }}>STEAM Education</h4></NavLink>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container-fluid " style={{ backgroundColor: "#262626" }}>
          <div className="container pt-lg-3 ">
            <div className="row ps-lg-5 ms-lg-5 ">
              <div className="col-lg-6 p-0">
                <div className="row row-cols-lg-6 pt-5 pb-5 p-2  row-cols-4 ">
                  <div className='SolutionDropDownFontFamily col' style={{ fontSize: "18px", }} >
                    <NavLink to='' className='text-decoration-none text-white p-lg-2' >English</NavLink>
                  </div>

                  <div className='SolutionDropDownFontFamily col ' style={{ fontSize: "18px", }} >
                    <NavLink to='' className='text-decoration-none p-lg-2 FOOTERLINK' >Deutsch</NavLink>
                  </div>

                  <div className='SolutionDropDownFontFamily col' style={{ fontSize: "18px", }} >
                    <NavLink to='' className='text-decoration-none p-lg-2 FOOTERLINK' >Italiano</NavLink>
                  </div>

                  <div className='SolutionDropDownFontFamily col' style={{ fontSize: "18px", }} >
                    <NavLink to='' className='text-decoration-none p-lg-2 FOOTERLINK' >Francais</NavLink>
                  </div>

                  <div className='SolutionDropDownFontFamily col' style={{ fontSize: "18px", }} >
                    <NavLink to='' className='text-decoration-none p-lg-2 FOOTERLINK'>Espanol</NavLink>
                  </div>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid pt-lg-3 pb-lg-5" style={{ backgroundColor: "#262626" }}>
          <div className="container">
            <div className="row ms-lg-5 ps-lg-5 row-cols-lg-4 row-cols-1 row-cols-md-2  ">
              <div className="col  text-white ">
                <div className='' >
                  <h6 className='SolutionDropDownFontFamily2 text-decoration-none text-white' style={{ fontSize: "17px" }} >Quick Links</h6>
                </div>
                <div className='w-75' style={{ borderTop: "1px solid hsla(0,0%,73%,.2)", fontSize: "18px" }}  >
                  <nav className='h1FontFamily1 ' style={{ fontSize: "17px", color: "#8e8e8e" }}>
                    <div className='mt-3 fontFamilyHeader1 ' style={{ fontSize: "16px", lineHeight: "17px" }}>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Home</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW in your country</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW Group Careers</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>EU Detergents <br></br> Regulation</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Reach Regulation</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Compatibility Check</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Software Update</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Accessories Update</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Connected Test Vehicle</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Service Page Charging<br></br> Products</p></NavLink>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="col  text-white">
                <div className='' >
                  <h6 className='SolutionDropDownFontFamily2 text-decoration-none text-white' style={{ fontSize: "17px" }}>More BMW Websites</h6>
                </div>
                <div className='w-75' style={{ borderTop: "1px solid hsla(0,0%,73%,.2)", fontSize: "18px" }}  >
                  <nav className='h1FontFamily1 ' style={{ borderTop: "1px solid hsla(0,0%,73%,.2)", fontSize: "17px" }} >
                    <div className='mt-4 fontFamilyHeader1' style={{ fontSize: "16px", lineHeight: "17px" }}>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW M</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW M Motorsport</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW Golfsport</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW M Driving <br></br> Experience</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW Welt</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW Group Classic</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW Corporate/Direct <br></br>Sales</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW Group</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW Group Culture</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>BMW ConnectedDrive<br></br> Upgrades</p></NavLink>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="col  text-white">
                <div className='' >
                  <h6 className='SolutionDropDownFontFamily2 text-decoration-none text-white' style={{ fontSize: "17px" }}>BMW.com</h6>
                </div>
                <div className='w-75' style={{ borderTop: "1px solid hsla(0,0%,73%,.2)", fontSize: "18px" }}  >
                  <nav className='h1FontFamily1' style={{ fontSize: "17px", }} >
                    <div className='mt-4 fontFamilyHeader1 ' style={{ fontSize: "16px", lineHeight: "17px" }}>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>About BMW.com</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Contact</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Cookies</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Imprint</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Legal Notice / Data <br></br>protection</p></NavLink>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="col  text-white">
                <div className='' >
                  <h6 className='SolutionDropDownFontFamily2 text-decoration-none text-white ' style={{ fontSize: "17px" }} >Visit us on</h6>
                </div>
                <div className='w-75' style={{ borderTop: "1px solid hsla(0,0%,73%,.2)", fontSize: "18px" }}  >
                  <nav className='h1FontFamily1' style={{ fontSize: "17px", }} >
                    <div className='mt-4 fontFamilyHeader1' style={{ fontSize: "16px", lineHeight: "17px" }}>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Facebook</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Twitter</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>Instagram</p></NavLink>
                      <NavLink to='' className='text-decoration-none ' style={{ color: "#8e8e8e" }} ><p className='FOOTERLINK'>YouTube</p></NavLink>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <div className='ms-lg-5 ps-lg-5 pt-lg-4 pb-lg-3 ' style={{ fontSize: "18px" }}>
              <div className='text-white SolutionDropDownFontFamily2 p-2 '>© BMW AG 2023</div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Footer