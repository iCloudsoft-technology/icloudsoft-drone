import React from 'react'
import Featuredproducts from './Featuredproducts'
// import { NavLink } from 'react-router-dom'
import './common/Common.css'
import Slider from './Extra/Slider'


const Home = () => {
    


    return (
        <>

            {/* <section>
                <img className='w-100' src={require("../Images/earth1.webp")} alt="" srcSet="" />
            </section> */}

            <section>
                <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" }}  >
                    <source src={require("../Images/DroneHome.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>

            <section>
                <div className="container-fluid " >
                    <div className="row pt-3 pb-3">
                        <div className="col-lg-6 ">
                            <div className='position-relative ' >
                                <img className='w-100' style={{ height: "530px" }} src={require("../Images/Home1.png")} alt="" srcSet="" />

                                <div className='position-absolute text-center' style={{ top: "8%", left: "30%" }}>
                                    <h6 className='' style={{ color: "rgba(0,0,0,.45)", fontSize: "20px" }}>Mini Drone</h6>
                                    <h2 className='mt-2' style={{ fontSize: "40px" }}>DJI MINI 3 PRO</h2>
                                    <h6 className='' style={{ color: "rgba(0,0,0,.85)", fontSize: "24px" }}>Fly Mini, Create Big</h6>
                                    <button type="button" class="btn btn-link text-decoration-none mt-1" style={{ color: "rgba(0,0,0,.85)", fontSize: "18px" }} > Learn More <i class="fa-solid fa-angle-right"></i> </button><button type="button" class="btn btn-link text-decoration-none mt-1" style={{ color: "rgba(0,0,0,.85)", fontSize: "18px" }} >Buy Now <i class="fa-solid fa-angle-right"></i> </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 ">
                            <div className='position-relative  ' >
                                <img className='w-100' style={{ height: "530px" }} src={require("../Images/Home2.png")} alt="" srcSet="" />

                                <div className='position-absolute text-center' style={{ top: "8%", left: "33%" }}>
                                    <h6 className='' style={{ color: "rgba(0,0,0,.45)", fontSize: "20px" }}>Mini Drone</h6>
                                    <h2 className='mt-2' style={{ fontSize: "40px" }}>DJI MINI 3</h2>
                                    <h6 className='' style={{ color: "rgba(0,0,0,.85)", fontSize: "24px" }}> So Fly</h6>
                                    <button type="button" class="btn btn-link text-decoration-none mt-1" style={{ color: "rgba(0,0,0,.85)", fontSize: "18px" }} > Learn More <i class="fa-solid fa-angle-right"></i> </button><button type="button" class="btn btn-link text-decoration-none mt-1" style={{ color: "rgba(0,0,0,.85)", fontSize: "18px" }} >Buy Now <i class="fa-solid fa-angle-right"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid " >
                    <div className="row pt-3 pb-3">
                        <div className="col-lg-6 ">
                            <div className='position-relative ' >
                                <img className='w-100' style={{ height: "550px" }} src={require("../Images/Home3.png")} alt="" srcSet="" />

                                <div className='position-absolute text-center' style={{ top: "6%", left: "30%" }}>
                                    <h6 className='' style={{ color: "rgba(0,0,0,.45)", fontSize: "20px" }}>Easy Tutorials and One-Tap Editing</h6>
                                    <h2 className='' style={{ fontSize: "40px" }}>OSMO MOBILE 6</h2>
                                    <h6 className='' style={{ color: "rgba(0,0,0,.85)", fontSize: "24px" }}>Unfold Your Creativity</h6>
                                    <button type="button" class="btn btn-link text-decoration-none " style={{ color: "rgba(0,0,0,.85)", fontSize: "18px" }} > Learn More <i class="fa-solid fa-angle-right"></i> </button><button type="button" class="btn btn-link text-decoration-none " style={{ color: "rgba(0,0,0,.85)", fontSize: "18px" }} >Buy Now <i class="fa-solid fa-angle-right"></i> </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 ">
                            <div className='position-relative  ' >
                                <img className='w-100' style={{ height: "550px" }} src={require("../Images/Home4.png")} alt="" srcSet="" />

                                <div className='position-absolute text-center' style={{ top: "5%", left: "20%" }}>
                                    <h6 className='' style={{ color: "rgba(0,0,0,.45)", fontSize: "20px" }}>Product Info</h6>
                                    <h2 className='mt-2' style={{ fontSize: "40px" }}>Compare Camera Drones</h2>
                                    <h6 className='' style={{ color: "rgba(0,0,0,.85)", fontSize: "24px" }}> See product overviews and comparisons here</h6>
                                    <button type="button" class="btn btn-link text-decoration-none mt-1" style={{ color: "rgba(0,0,0,.85)", fontSize: "18px" }} > Learn More <i class="fa-solid fa-angle-right"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Slider/>

           



            {/* <div className="container">
                <div className="row">
                    <div
                        id="carouselVideoExample"
                        class="carousel slide carousel-fade"
                        data-mdb-ride="carousel"
                    >

                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-mdb-target="#carouselVideoExample"
                                data-mdb-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target="#carouselVideoExample"
                                data-mdb-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target="#carouselVideoExample"
                                data-mdb-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target="#carouselVideoExample"
                                data-mdb-slide-to="3"
                                aria-label="Slide 4"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target="#carouselVideoExample"
                                data-mdb-slide-to="4"
                                aria-label="Slide 5"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target="#carouselVideoExample"
                                data-mdb-slide-to="5"
                                aria-label="Slide 6"
                            ></button>
                        </div>


                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" }}  >
                                    <source src={require("../Images/s.mp4")} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>


                            <div class="carousel-item">
                                <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" }}  >
                                    <source src={require("../Images/s1.mp4")} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>


                            <div class="carousel-item">
                                <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" }}  >
                                    <source src={require("../Images/s2.mp4")} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div class="carousel-item">
                                <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" }}  >
                                    <source src={require("../Images/s3.mp4")} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div class="carousel-item">
                                <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" }}  >
                                    <source src={require("../Images/s4.mp4")} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div class="carousel-item">
                                <video autoPlay loop muted className='w-100  ' style={{ objectFit: "fill" }}  >
                                    <source src={require("../Images/s5.mp4")} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>


                        </div>

                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-mdb-target="#carouselVideoExample"
                            data-mdb-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-mdb-target="#carouselVideoExample"
                            data-mdb-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div> */}




            {/* <section>
                <div className="container-fluid pt-5 ">
                    <div className="container mt-4">
                        <div className="row">
                            <div className='col-lg-2'></div>
                            <div className="col-lg-3" >
                                <div className="row d-flex justify-content-between">
                                    <div className='col-lg-1'>
                                        <i class="fa-solid fa-earth-africa pt-2" style={{ fontSize: "34px" }}></i>

                                    </div>
                                    <div className='col-lg-10' >
                                        <h6>10 AM  TO 10 PM</h6>
                                        <p>Office Hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3" >
                                <div className="row d-flex justify-content-between">
                                    <div className='col-lg-1'>
                                        <i class=" fa-sharp fa-regular fa-money-bill pt-2" style={{ fontSize: "34px", }}></i>

                                    </div>
                                    <div className='col-lg-10' >
                                        <h6>NO DEPOSIT</h6>
                                        <p>No Security Deposit</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section>
                <div className="container-fluid">
                    <div className="container p-lg-5">
                        <div className="row g-4 p-lg-5">
                            <div className=" col-md-6 ">
                                <div className='HoverEffect'>
                                    <img className='w-100 ' src={require("../Images/crane-2.png")} alt="" srcSet="" />
                                </div>
                                <div className='pt-3 pb-3'>
                                </div>
                                <div className='HoverEffect'>
                                    <img className='w-100' src={require("../Images/canon-mark.png")} alt="" srcSet="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='HoverEffect'>
                                    <img className='w-100' src={require("../Images/dji-mavic-pro.png")} alt="" srcSet="" />
                                </div>
                                <div className='pt-3 pb-3'>
                                </div>
                                <div className='HoverEffect'>
                                    <img className='w-100' src={require("../Images/smooth.png")} alt="" srcSet="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section>
                <div className='container-fluid ' style={{ backgroundImage: `url(${require("../Images/bg_5.png")})`, backgroundAttachment: "local", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center,center', height: "260px" }}>
                    <div className="container p-5">
                        <h2 className='text-center ' style={{ paddingTop: "40px", }}>Rent By Categories</h2>
                        <div className="row p-5">
                            <div className="col-lg-3 ">
                                <div className='position-relative  READMOREBUTTON '>
                                    <img className='w-100 ' src={require("../Images/600-400BOX.png")} alt="" srcSet="" />
                                    <div className='position-absolute top-100 start-50 translate-middle'>
                                        <div className='bg-body p-1 '><b className='p-3 fs-6'>SOUND</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className='position-relative  READMOREBUTTON '>
                                    <img className='w-100 ' src={require("../Images/2.png")} alt="" srcSet="" />
                                    <div className='position-absolute top-100 start-50 translate-middle'>
                                        <div className='bg-body p-1 '><b className='p-3 fs-6'>CAMERA</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className='position-relative   READMOREBUTTON'>
                                    <img className='w-100 ' src={require("../Images/3.png")} alt="" srcSet="" />
                                    <div className='position-absolute top-100 start-50 translate-middle'>
                                        <div className='bg-body p-1 '><b className='p-3 fs-6'>LENS</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className='position-relative READMOREBUTTON  '>
                                    <img className='w-100 ' src={require("../Images/4.png")} alt="" srcSet="" />
                                    <div className='position-absolute top-100 start-50 translate-middle'>
                                        <div className='bg-body p-1 '><b className='p-3 fs-6'>LIGHTS</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section>
                <Featuredproducts />
            </section>



        </>
    )
}

export default Home