import React from 'react'
import { NavLink } from 'react-router-dom';

const Agriculture = () => {
    return (
        <>

            

            <section>
                <div className="container-fluid p-0 m-0" >
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-white"  >
                                <div className='position-relative'>
                                    <img className='' style={{ height: "680px", width: "2000px", backgroundPosition: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} src={require("../../Images/Silder3.png")} alt="" srcSet="" />
                                    <div className='position-absolute top-50  translate-middle' style={{ left: "35%" }}>
                                        <h1 className='' style={{ fontSize: "58px" }} >DJI SMARTFARM WEB</h1>
                                        <button className='p-2 mt-3 text-white' style={{ border: "1px solid white", backgroundColor: "#D0BEA4", borderRadius: "50px", height: '50px', width: "30%" }}>Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-white">
                                <div className='position-relative'>
                                    <img className='' style={{ height: "680px", width: "2000px", backgroundPosition: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} src={require("../../Images/Silder2.png")} alt="" srcSet="" />
                                    <div className='position-absolute top-50  translate-middle' style={{ left: "25%" }}>
                                        <h1 className='' style={{ fontSize: "58px" }} >AGRAS T40</h1>
                                        <h6 className='' style={{ fontSize: "28px" }} >one for all</h6>
                                        <button className='p-2 mt-3 text-white' style={{ border: "1px solid white", backgroundColor: "#728683", borderRadius: "50px", height: '50px', width: "70%" }}>Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-white">
                                <div className='position-relative'>
                                    <img className='' style={{ height: "680px", width: "2000px", backgroundPosition: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat", }} src={require("../../Images/Silder1.png")} alt="" srcSet="" />
                                    <div className='position-absolute top-50  translate-middle ' style={{ left: "25%" }}>
                                        <h1 className='' style={{ fontSize: "58px" }} >DJI MAVIC 3M</h1>
                                        <h6 className='' style={{ fontSize: "28px" }}>see more, work smarter</h6>
                                        <button className='p-2 mt-3 text-white' style={{ border: "1px solid white", backgroundColor: "#ABC1CC", borderRadius: "50px", height: '50px', width: "60%" }}>Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </section>

            <section>
                <div className="container-fluid">
                    <div className="container pt-lg-5 ">
                        <div className="row pt-lg-5 d-flex justify-content-center align-items-center" data-aos="fade-in" >
                            <h2 className='text-center' style={{ fontSize: "46px" }} ><b>Better Growth, Better Life</b></h2>
                            <div className='text-center mt-2' style={{ borderBottom: "3px solid #41A337", width: "6%" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid  p-0">
                    <div className="container" style={{ padding: '70px' }}>
                        <div className="row " >
                            <div className="col-lg-6" data-aos="fade-in" style={{ backgroundColor: "#F7F9FA" }}>
                                <div className='p-lg-5'>
                                    <h2 className='fw-bold mb-3 pt-5' style={{ fontSize: "26px" }} >High-precision Plant Stand Count for Corn, Sunflower and Sugar Beet by a Drone and AI</h2>
                                    <p className='' style={{ fontSize: "20px", color: "rgba(0,0,0,.65)" }} >Plant stand count is an essential task in yield management. It allows growers to estimate the plant population, density, germination rate, and plant health and make timely decisions that finally affect the yield.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 p-0" data-aos="fade-in" style={{ backgroundColor: "#F7F9FA" }}>
                                <img className='w-100  p-0' src={require("../../Images/proof.png")} alt="" srcSet="" />
                            </div>

                            <div className="container pt-4  p-0"  >
                                <div className="row ">
                                    <div className="col-lg-4 ">
                                        <div className='h-100' style={{ backgroundColor: "#F7F9FA" }}  >
                                            <img className='w-100 ' src={require("../../Images/11.png")} alt="" srcSet="" />
                                            <h3 className='p-4' style={{ fontSize: "20px", color: "black" }}>DJI AGRAS T40 Makes Its Global Debut at DJI AirWorks 2022</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 "  >
                                        <div className='h-100' style={{ backgroundColor: "#F7F9FA" }}>
                                            <img className='w-100 ' src={require("../../Images/12.png")} alt="" srcSet="" />
                                            <h3 className='p-4' style={{ fontSize: "22px", color: "black" }}>What does agricultural drone spraying of 66.7 million hectares mean to the planet?</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 " >
                                        <div className='h-100' style={{ backgroundColor: "#F7F9FA" }}  >
                                            <img className='w-100 ' src={require("../../Images/13.png")} alt="" srcSet="" />
                                            <h3 className='p-4' style={{ fontSize: "24px", color: "black" }}>Agricultural Drone Industry Insight Report (2021)</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row w-100 text-center d-flex justify-content-center align-items-center" data-aos="fade-in" >
                            <h2 className=''>Solutions</h2>
                            <div className=' mt-3 mb-2 ' style={{ borderBottom: "3px solid #41A337", width: "5%" }}></div>
                            <div className=' d-flex justify-content-center '>
                                <p className=' p-3 w-75' style={{ fontSize: "24px" }}>DJI Agriculture not only empowers agriculture professionals with powerful equipment but also provides intelligent solutions that save time and increase workflow, benefiting a wide range of customers from farmers and growers to agricultural cooperation and service agencies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="container" style={{ padding: '70px' }}>
                        <div className="row">
                            <div className="col-lg-6 p-0" data-aos="fade-right" style={{ backgroundColor: "#F7F9FA" }}>
                                <img className='w-100  p-0' src={require("../../Images/sundrone.png")} alt="" srcSet="" />
                            </div>

                            <div className="col-lg-6" data-aos="fade-right" style={{ backgroundColor: "#F7F9FA" }}>
                                <div className='p-lg-5'>
                                    <h2 className='fw-bold mb-3 pt-5' style={{ fontSize: "28px" }} >Grain Crops</h2>
                                    <p className='' style={{ fontSize: "17px", color: "rgba(0,0,0,.65)" }} >Our solutions provide digital, informative, intelligent, and precise field management for grain crops such as rice, wheat, and corn. This empowers agricultural operators with more convenient and efficient options, reduces operation costs, improves crop quality, and increases yield rate.</p>
                                </div>
                            </div>


                            <div className="container pt-5">
                                <div className="row" data-aos="fade-left" >
                                    <div className="col-lg-6" style={{ backgroundColor: "#F7F9FA" }}>
                                        <div className='p-lg-5'>
                                            <h2 className='fw-bold mb-3 pt-5' style={{ fontSize: "28px" }} >Commercial Crops</h2>
                                            <p className='' style={{ fontSize: "17px", color: "rgba(0,0,0,.65)" }} >We also provide digital, informative, intelligent, and precise management solutions for commercial crops such as cotton, citrus trees, apple trees, and tea plants. As with grain crops, agoperators will find these options more convenient, inexpensive, and beneficial to crop quality and yield rate.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 p-0" style={{ backgroundColor: "#F7F9FA" }}>
                                        <img className='w-100  p-0' src={require("../../Images/sundrone2.png")} alt="" srcSet="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid" style={{ backgroundColor: "#F7F9FA" }} >
                    <div className="container  text-center " style={{ padding: '60px' }}>
                        <h1 className='pt-lg-4 mt-2 mb-3 pb-lg-5' data-aos="fade-in" >Explore</h1>
                        <div className="row text-white pb-lg-5" data-aos="fade-in" >
                            <div className="col-lg-4">
                                <div className='position-relative'>
                                    <img className='w-100  p-0' src={require("../../Images/ladydrone.png")} alt="" srcSet="" />
                                    <div className='position-absolute ' data-aos="fade-up" style={{ bottom: "5%" }} >
                                        <h3 className='mb-4' style={{ fontSize: "30px" }} ><b>User Stories</b></h3>
                                        <p className='text-center w-75 ms-lg-5 mb-4' style={{ fontSize: "16px" }} >Witness ordinary people exceeding their harvest goals thanks to our Agricultural solutions.</p>
                                        <button className='mt-4 text-white' style={{ border: "none", backgroundColor: "transparent", fontSize: "18px" }} >More details <i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className='position-relative'>
                                    <img className='w-100  p-0' src={require("../../Images/droneinsky.png")} alt="" srcSet="" />
                                    <div className='position-absolute ' data-aos="fade-up" style={{ bottom: "5%" }} >
                                        <h3 className='mb-3' style={{ fontSize: "30px" }} ><b>User Cases</b></h3>
                                        <p className='text-center w-75 ms-lg-5 mb-4' style={{ fontSize: "16px" }} >Are you interested in ridding your fields of insects like Panonychus citri (McGregor) with DJI Agriculture Drones? Find out more.</p>
                                        <button className='mt-4 text-white' style={{ border: "none", backgroundColor: "transparent", fontSize: "18px" }} >More details <i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className='position-relative'>
                                    <img className='w-100  p-0' src={require("../../Images/lectureboy.png")} alt="" srcSet="" />
                                    <div className='position-absolute ' data-aos="fade-up" style={{ bottom: "5%" }} >
                                        <h3 className='mb-3' style={{ fontSize: "30px" }} ><b>News</b></h3>
                                        <p className='text-center w-75 ms-lg-5 mb-4' style={{ fontSize: "16px" }} >DJI’s agricultural project has generated over 30,000 new jobs and is committed to strengthening the agriculture industry and benefiting farmers everywhere.</p>
                                        <button className='mt-4 text-white' style={{ border: "none", backgroundColor: "transparent", fontSize: "18px" }} >More details <i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="container text-center " data-aos="fade-in" style={{ padding: '60px' }} >
                        <h2 className='p-lg-5 mb-lg-5' style={{ fontSize: "50px" }} >Support</h2>
                        <div className="row ">
                            <div className="col-lg-4">
                                <div>
                                    <i class="fa-solid fa-cart-shopping" style={{ fontSize: "60px" }} ></i>
                                </div>
                                <div className='pt-4'>
                                    <h3 className='mt-3' style={{ fontSize: "26px" }} >Where to Buy</h3>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-link text-decoration-none fs-5">Find a reliable dealer nearby.</button>
                                </div>
                            </div>
                            <div className="col-lg-4 ">
                                <div className=''>
                                    <i class="fa-solid fa-users" style={{ fontSize: "60px" }} ></i>
                                </div>
                                <div className='pt-4 '>
                                    <h3 className='mt-3' style={{ fontSize: "26px" }} >Become a Dealer</h3>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-link text-decoration-none fs-5">Read our terms and conditions.</button>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className=''>
                                    <i class="fa-solid fa-headphones" style={{ fontSize: "60px" }} ></i>
                                </div>
                                <div className='pt-4 '>
                                    <h3 className='mt-3' style={{ fontSize: "26px" }} >After-Sales Service Policies</h3>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-link text-decoration-none fs-5">Learn about after-sales services and technical support.</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid" style={{ backgroundColor: "#F7F9FA" }} >
                    <div className="container pt-5 pb-5 text-center p-5">
                        <div className="row d-flex justify-content-center align-items-center" data-aos="fade-in" >
                            <h1>Contact Us</h1>
                            <div className=' mt-3 mb-2 ' style={{ borderBottom: "3px solid #41A337", width: "5%" }}></div>
                            <div className='d-flex justify-content-center '>
                                <p className=' p-3 w-75' style={{ fontSize: "24px" }}>If you wish to purchase products or become a dealer, please leave your contact information below. We will be in contact with you shortly.</p>
                            </div>
                            <div>
                                <NavLink to='/contact'><button className='bg-dark text-white  p-2' style={{ border: "none", borderRadius: "50px", width: '15%' }} >Contact Us</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Agriculture