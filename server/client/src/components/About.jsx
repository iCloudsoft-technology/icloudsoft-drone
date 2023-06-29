import React from 'react'

const About = () => {
  return (
    <>

      <section>

      </section>

      {/* <section>
       <div  className='AboutUS_bgImg'>
        
       </div>
        
      </section> */}

      {/* <section>
        <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" ,height:"90vh" }}  >
          <source src={require("../Images/s5.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section> */}

      {/* <section className='AboutUS_bgImg' style={{ height: "100vh" }}>
        <div className=' sd' >
          <div className="pt-lg-5 p-lg-5">
            <div className="row text-white p-3 d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
              <div className="col-lg-2 pt-lg-5 mt-5">
                <div className=''>
                  <img className='w-100' src={require("../Images/BoyImg.png")} alt="" srcSet="" />
                </div>
              </div>

              <div className="col-lg-2 pt-lg-5 mt-5">
                <div className='mt-lg-4'>
                  <img className='w-100 mt-3' src={require("../Images/BoyImg2.png")} alt="" srcSet="" />
                </div>
              </div>

              <div className="col-lg-4 pt-lg-5 mt-5 mt-lg-5 pt-lg-5">
                <div className=' mt-lg-5'>
                  <h3 className='fw-bold mt-lg-5 text-center' style={{ fontSize: "60px" }}>About Us</h3>
                  <p className='mt-lg-3' style={{ fontSize: '18px' }}>Drone inspection makes it possible to access areas that may pose health, safety and environmental risks in a faster way without posing any health or safety risks.</p>
                </div>
              </div>

              <div className="col-lg-2 pt-lg-5 mt-5 mt-5 pt-lg-5 ">
                <div className='mt-5  '>
                  <img className='w-100 mt-5' src={require("../Images/BoyImg3.png")} alt="" srcSet="" />
                </div>
              </div>

              <div className="col-lg-2 pt-lg-5 mt-5 mt-lg-5  ">
                <div className=''>
                  <img className='w-100' src={require("../Images/BoyImg4.png")} alt="" srcSet="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}




      <section>
        <div className='container-fluid position-relative ' style={{ backgroundImage: `url(${require("../Images/aboutBanner.png")})`, backgroundAttachment: "local", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center,center', height: "80vh" }}>
          <div className="container position-absolute  text-dark" style={{ bottom: "10%", left: "7%" }}>
            <div className="row " >
              <h2 className='  SolutionDropDown' >Company Profile</h2>
              <p className='fs-5 fontFamilyHeader1'>At iCloud Drone, we are passionate about pushing the boundaries of aerial technology and unlocking the full potential of drones. In addition to our cutting-edge drones, we offer a comprehensive range of services tailored to our clients' specific needs. We believe in going beyond the sale of a product and strive to establish long-term partnerships with our clients, supporting them throughout their drone journey.</p>
            </div>
          </div>

        </div>
      </section>



      <section className='' >
        <div className="container-fluid ">
          <div className="container p-lg-4">
            <div className="row FontFamily g-4 p-3 text-dark">

              <div className="col-lg-6">
                <div className=' mb-5'>
                  <h3 className=' fontFamilyHeader1 ' style={{ fontSize: "34px" }}>Mission</h3>
                  <p className=' fontFamilyHeader' style={{  fontWeight:"inherit",fontSize: "20px" }}>our mission, we strive to make drones accessible, reliable, and transformative for businesses and individuals alike. We are dedicated to empowering our customers, driving innovation, and positively impacting the industries we serve.</p>
                </div>

                <div className=' '>
                  <h3 className=' fontFamilyHeader1' style={{ fontSize: "34px" }}>Vision</h3>
                  <p className=' fontFamilyHeader' style={{ fontWeight:"inherit",fontSize: "20px" }}>our vision, we aim to empower businesses, improve efficiency, and drive positive change in various industries. We are dedicated to creating a future where drones are an integral part of everyday life, enabling new perspectives, driving innovation, and transforming the world around us.</p>
                </div>


              </div>


              <div className="col-lg-6 ">
                <div className=''>
                  <img className='w-100' src={require("../Images/Dm.png")} alt="" srcSet="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid" style={{ backgroundColor: "#F5F5F5" }}>
          <div className="container p-lg-5">
            <div className="row FontFamily1">
              <h3 className='p-2 text-center  fontFamilyHeader1' style={{ fontSize: "40px" }}>Why choose us </h3>
              <p className='p-2 fontFamilyHeader1' style={{ marginBottom: "2rem", fontSize: "22px" }}>When you choose us, you are choosing a trusted partner that is dedicated to your success. We are committed to providing the best-in-class drone solutions, personalized support, and industry expertise to help you unlock the full potential of aerial technology and achieve your business objectives.</p>
            </div>
          </div>
        </div>

        {/* <div className="container-fluid" style={{ backgroundColor: "#F5F5F5" }}>
          <div className="container p-lg-5">
            <div className="row FontFamily1">
              <h6 className='fw-bold'>Why Choose Us</h6>
              <h1 className='FontFamily1 mt-lg-4' style={{ fontSize: "35px" }}><b>By putting highly qualified, licenced, and trained employees under experienced leadership, we want to succeed. Our primary goal is to adapt global services to local requirements.</b></h1>
            </div>
          </div>
        </div> */}
      </section>

      {/* <section>
        <div className="container-fluid" style={{ backgroundColor: "#F5F5F5" }}>
          <div className="container p-lg-5">
            <div className="row FontFamily">
              <div className="col-lg-6">
                <div className=''>
                  <p className='' style={{ fontSize: "18px", lineHeight: "35px" }}>Visual inspection by an unmanned drone is a quick and cost effective inspection method of critical areas in onshore and offshore constructions. Drone inspection enables access to otherwise inaccessible structures and details, offering immediate action as an alternative to more traditional, time consuming and costly inspection methods like sky-lifts, cherry pickers and scaffolding.</p>
                  <h5 className='fw-bold mt-lg-4 mb-lg-4'> The Advantages of DroneMaster: </h5>
                  <ul className='' style={{ fontSize: "18px", lineHeight: "35px" }}>
                    <li>Utilize the most up-to-date technologies with the greatest levels of accuracy.</li>
                    <li>The team of consultants, engineers, and technicians is highly skilled in their professions with latest trainings exercised.</li>
                    <li>Choose a comprehensive strategy to address the issues by building a productive environment.</li>
                    <li>Turnkey integrity solutions for the whole asset lifespan. Cross-functional integrated industrial service teams with multi-ticketed personnel.</li>
                    <li>We simply aim to acquire repeat business from clients by offering excellent services.</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className='' style={{ fontSize: "18px", lineHeight: "35px" }}>
                  <p><b>Our Mission </b>Providing Quality Assurance, Testing, Inspection, Certification, and Engineering services to ensure that our clients’ operations run smoothly and without interruption. Providing services to our customers that meet worldwide standards.</p>
                  <p><b>Our Vision</b>To become the most reputable institution in the world for quality assurance.</p>
                  <p><b>Code of Ethics – </b>At DroneMaster, we are aware that the management’s practices are conveyed to the entire team and, therefore, to the outcomes of the job completed by the organization. Every task we do is conducted with values, honor, and honesty, therefore we can proudly declare that we adhere to building our market reputation and excellent standards in the sector. At our institution, impartiality on the basis of any reason is not recognized.</p>
                  <p><b>Drone Advantage: </b>Drone inspection enables quick and secure access to places that could otherwise provide concerns to one’s health, safety, or environment. Anywhere, both inside and outside of buildings, can benefit from aerial inspections. It is necessary to consider any restrictions imposed by municipal or national legislation. Additionally, any safety regulations set forth by the facility owner must be followed.</p>
                </div>
              </div>

              <h4 className=' fw-bold' style={{ fontSize: "18px" }}>Specialized Engineering Consultancy Advantage: </h4>
              <p className='mt-lg-4' style={{ fontSize: "17px", lineHeight: "30px" }}>The majority of the specialised engineering consultations (SECs) offered by DroneMaster are focused on power plants. Our goal in this vertical is to provide the power industry with comprehensive specialised services that span all facets of project management, planning, engineering, procurement, construction & commissioning oversight, and operation & maintenance. Either a Non-EPC basis or an Engineering, Procurement & Construction (EPC) basis is used to carry out these projects. To guarantee that the project is successfully completed within the intended timeline and budgeted cost, this calls for the creation of clear specifications and intensive vendor and contractor communication. In order to eliminate unnecessary obstacles or bottlenecks in these processes, we may provide our clients with specialist methodologies to simplify such large-scale initiatives.</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className='Office_Team_bgImg ' >
        <div className='abc'>
          <div className="container-fluid ">
            <div className="container pt-lg-5 pb-5 text-white">
              <div className='mt-lg-5 pt-lg-5'>
                <div className='mt-lg-5 pt-lg-5'>
                  <h6 className=' fontFamilyHeader1' style={{ fontSize: "25px" }}>We constantly strive to deliver outstanding service, establish long-lasting relationships.</h6>
                  <h5 className='mt-3 fontFamilyHeader1' style={{ fontSize: "35px", lineHeight: "1.3em" }}>Our strategy for building our resources makes plain the claims of our commitment. We take precautions at the most basic level while assembling any team and carrying out any work.</h5>
                </div>
              </div>
              {/* <div className="row d-flex justify-content-between  pt-4 pb-5"> */}
                {/* <div className="col-3 ">
                  <div className='bg-light text-dark  ' style={{ height: "340px", borderRadius: '10px 10px 10px 10px' }}>
                    <div className='text-center' >
                      <img className='w-50 mt-lg-4' style={{ borderRadius: '10px 10px 10px 10px' }} src={require("../Images/1.png")} alt="" srcSet="" />
                    </div>
                    <div className='text-center FontFamily'>
                      <h2 className='mb-lg-3 mt-lg-4' style={{ fontSize: '24px' }}><b>Prateek  kakulate</b></h2>
                      <p>FOUNDER</p>
                    </div>
                    <div className='text-center  '>
                      <i class="p-3 fa-brands fa-facebook"></i>
                      <i class="p-3 fa-brands fa-linkedin"></i>
                      <i class="p-3 fa-brands fa-twitter"></i>
                    </div>
                  </div>

                </div> */}

                {/* <div className="col-3 ">
                  <div className='bg-light text-dark  ' style={{ height: "340px", borderRadius: '10px 10px 10px 10px' }}>
                    <div className='text-center' >
                      <img className='w-50 mt-lg-4' style={{ borderRadius: '10px 10px 10px 10px' }} src={require("../Images/DepakChpade.png")} alt="" srcSet="" />
                    </div>
                    <div className='text-center FontFamily'>
                      <h2 className='mb-lg-3 mt-lg-4' style={{ fontSize: '24px' }}><b>Dipak Chopade</b></h2>
                      <p>ADVISOR</p>
                    </div>
                    <div className='text-center  d-flex justify-content-center align-items-center'>
                      <i class="p-3 fa-brands fa-facebook"></i>
                      <i class="p-3 fa-brands fa-linkedin"></i>
                      <i class="p-3 fa-brands fa-twitter"></i>
                    </div>
                  </div>

                </div> */}

                {/* <div className="col-3 ">
                  <div className='bg-light text-dark  ' style={{ height: "340px", borderRadius: '10px 10px 10px 10px' }}>
                    <div className='text-center' >
                      <img className='w-50 mt-lg-4' style={{ borderRadius: '10px 10px 10px 10px' }} src={require("../Images/sg.png")} alt="" srcSet="" />
                    </div>
                    <div className='text-center FontFamily'>
                      <h2 className='mb-lg-3 mt-lg-4' style={{ fontSize: '24px' }}><b>Saurabh Gala</b></h2>
                      <p>DRONE OPERATION OFFICER</p>
                    </div>
                    <div className='text-center  d-flex justify-content-center align-items-center'>
                      <i class="p-3 fa-brands fa-facebook"></i>
                      <i class="p-3 fa-brands fa-linkedin"></i>
                      <i class="p-3 fa-brands fa-twitter"></i>
                    </div>
                  </div>

                </div> */}

                {/* <div className="col-3 ">
                  <div className='bg-light text-dark  ' style={{ height: "340px", borderRadius: '10px 10px 10px 10px' }}>
                    <div className='text-center' >
                      <img className='w-50 mt-lg-4' style={{ borderRadius: '10px 10px 10px 10px' }} src={require("../Images/rk.png")} alt="" srcSet="" />
                    </div>
                    <div className='text-center FontFamily'>
                      <h2 className='mb-lg-3 mt-lg-4' style={{ fontSize: '24px' }}><b>Rashmi Kakulte</b></h2>
                      <p>HR - HEAD</p>
                    </div>
                    <div className='text-center  d-flex justify-content-center align-items-center'>
                      <i class="p-3 fa-brands fa-facebook"></i>
                      <i class="p-3 fa-brands fa-linkedin"></i>
                      <i class="p-3 fa-brands fa-twitter"></i>
                    </div>
                  </div>

                </div> */}
              </div>




            </div>
          </div>
        {/* </div> */}
        {/* <section className='pt-lg-5' style={{ backgroundColor: "#000" }}>
          <div className='container-fluid pt-lg-5'>
            <div className="container pt-lg-5 pb-lg-5 text-white">
              <div className="row ">
                <div>
                  <h1 className='text-center'>We Work With</h1>
                </div>

                <div className="col-4 pt-lg-3">
                  <img className='w-100 ' src={require("../Images/pc.png")} alt="" srcSet="" />
                </div>

                <div className="col-4 pt-lg-3">
                  <img className='w-100 ' src={require("../Images/RGS-Logo.png")} alt="" srcSet="" />
                </div>

                <div className="col-4 pt-lg-3">
                  <img className='w-100 ' src={require("../Images/NA.png")} alt="" srcSet="" />
                </div>


                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-2 ">
                    <img className='w-75' src={require("../Images/sp.png")} alt="" srcSet="" />
                  </div>

                  <div className="col-lg-2 ">
                    <img className='w-100 ' src={require("../Images/brook.png")} alt="" srcSet="" />
                  </div>

                  <div className="col-lg-2 ">
                    <img className='w-100' src={require("../Images/se.png")} alt="" srcSet="" />
                  </div>

                  <div className="col-lg-2 ">
                    <img className='w-50 ' src={require("../Images/indianOIL.png")} alt="" srcSet="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </section>

      {/* <section>
        <div className="container-fluid" style={{ backgroundColor: "#F5F5F5" }}>
          <div className="container ">
            <div className="row  " style={{ borderBottom: "1px solid #4A4A4A" }}>
              <div className="col-md-6  " >
                <div className='p-lg-4 pt-lg-5'>
                  <div className='p-lg-5 pt-lg-5'>
                    <h4 className='' style={{ fontSize: "30px", color: "#4A4A4A" }}><b>We are a team of business specialists who specialise in "Solutioneering" and offer drone solutions for many industries.</b></h4>
                    <div className='mt-lg-4' style={{ width: "13%", borderBottom: "5px solid black" }}></div>
                    <h5 className='mt-lg-4 mb-lg-4' style={{ fontSize: "16px", color: "#4A4A4A" }}>GET IN TOUCH</h5>
                    <div>
                      <h4 className='' style={{ fontSize: "25px", color: "#4A4A4A" }}><b>Level 2, The POWER House – Aurum Avenue, Balewadi High Street, Baner, Pune – 411045, INDIA</b></h4>
                      <p className='mt-3' style={{ fontSize: "25px", color: "#4A4A4A" }}><b>+91 20 6648 4899</b></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 " style={{ borderLeft: "1px solid #4A4A4A" }}>
                <div className='p-lg-4 pt-lg-5'>
                  <div className='p-lg-4 pt-lg-5'>
                    <form>
                      <h3 className='mb-lg-4' style={{ fontSize: "16px", color: "#4A4A4A" }}><b>SEND ME A MESSAGE</b></h3>

                      <div class="mb-3 mt-2">
                        <input type="text" class="form-control" style={{ borderRadius: "0px", height: "50px", width: "85%" }} placeholder='Name*' id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>

                      <div class="mb-3 mt-lg-4">
                        <input type="email" class="form-control" style={{ borderRadius: "0px", height: "50px", width: "85%" }} placeholder='Email*' id="exampleInputPassword1" />
                      </div>

                      <div class="mb-3 mt-lg-4">
                        <input type="number" class="form-control" style={{ borderRadius: "0px", height: "50px", width: "85%" }} placeholder='Contact No.*' id="exampleInputPassword1" />
                      </div>

                      <div class="mb-3 mt-lg-4">
                        <input type="text" class="form-control" style={{ borderRadius: "0px", height: "50px", width: "85%" }} placeholder='Subject*' id="exampleInputPassword1" />
                      </div>

                      <div class="mb-3 mt-lg-4">
                        <textarea class="form-control" style={{ borderRadius: "0px", height: "70px", width: "85%" }} placeholder='Message*' id="exampleFormControlTextarea1"></textarea>
                      </div>

                      <button type="submit" class="btn p-2 mt-lg-2" style={{ border: "2px solid black", borderRadius: "50px" }}><b className='p-lg-4'>Submit</b></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

    </>
  )
}

export default About