import React from 'react'
import Featuredproducts from './Featuredproducts'
import './common/Common.css'



const Home = () => {

    return (
        <>

            <section>

                <img className='w-100' src={require("../Images/earth1.webp")} alt="" srcSet="" />
            </section>

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

            <section>
                <div className="container-fluid">
                    <div className="container p-3">
                        <h1 className='text-center p-5'>Explore DJI Products in Different Fields</h1>
                        <div className="row text-white  text-center">

                            <div className="col-lg-4">
                                <div className='position-relative HoverEffect'>
                                    <img className='w-100 ' src={require("../Images/drone1.png")} alt="" srcSet="" />
                                    <div className='position-absolute ' style={{ top: "10%", left: "17%" }}>
                                        <h3 className='' style={{ fontSize: "36px" }} >Video Production</h3>
                                        <p className='mt-3' style={{ fontSize: "18px", color: "#fff" }}>Professional Aerial and Ground <br></br> Filmmaking Tools</p>
                                        <button className='text-white' style={{ border: "none", backgroundColor: "transparent", fontSize: "18px" }} >Learn More <i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className='position-relative HoverEffect'>
                                    <img className='w-100' src={require("../Images/drone2.png")} alt="" srcSet="" />
                                    <div className='position-absolute ' style={{ top: "10%", left: "12%" }}>
                                        <h3 className='' style={{ fontSize: "36px" }}>Enterprise</h3>
                                        <p className='mt-3' style={{ fontSize: "18px", color: "#fff" }}>Drone Solutions for a New Generation <br /> of Work</p>
                                        <button className='text-white' style={{ border: "none", backgroundColor: "transparent", fontSize: "18px" }} >Learn More <i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className='position-relative HoverEffect'>
                                    <img className='w-100' src={require("../Images/drone3.png")} alt="" srcSet="" />
                                    <div className='position-absolute ' style={{ top: "10%", left: "27%" }}>
                                        <h3 className='text-center' style={{ fontSize: "36px" }}>Agriculture</h3>
                                        <p className='mt-3' style={{ fontSize: "18px", color: "#fff" }}>Efficient and Intelligent  <br /> Agricultural Solution </p>
                                        <button className='text-white' style={{ border: "none", backgroundColor: "transparent", fontSize: "18px" }} >Learn More <i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid  mt-5" style={{ backgroundColor: "#F7F9FA" }}>
                    <div className="container p-5 pt-5">
                        <div className="row text-center p-3 pt-5" >
                            <div className="col-lg-4">
                                <i class="fa-sharp fa-solid fa-bag-shopping" style={{ fontSize: "80px" }} ></i>
                                <h2 className='mt-3 pt-2'>Where To Buy</h2>
                                <button className='mt-2' style={{ border: "none", color: "rgba(0,0,0,.85)", fontSize: "17px", backgroundColor: "#F7F9FA" }} >Learn More <i class="fa-solid fa-angle-right"></i></button>
                            </div>

                            <div className="col-lg-4">
                                <i class="fa-solid fa-headphones" style={{ fontSize: "80px" }} ></i>
                                <h2 className='mt-3 pt-2'>Support</h2>
                                <button className='mt-2' style={{ border: "none", color: "rgba(0,0,0,.85)", fontSize: "17px", backgroundColor: "#F7F9FA" }} >Learn More <i class="fa-solid fa-angle-right"></i></button>
                            </div>

                            <div className="col-lg-4 ">
                                <i class="fa-sharp fa-solid fa-location-dot" style={{ fontSize: "80px" }} ></i>
                                <h2 className='mt-3 pt-2'>Fly Safe</h2>
                                <button className='mt-2' style={{ border: "none", color: "rgba(0,0,0,.85)", fontSize: "17px", backgroundColor: "#F7F9FA" }} >Learn More <i class="fa-solid fa-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>

                <Featuredproducts />
            </section>



        </>
    )
}

export default Home