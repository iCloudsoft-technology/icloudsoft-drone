import React from 'react'
import Featuredproducts from './Featuredproducts'
// import { NavLink } from 'react-router-dom'
import './common/Common.css'


const Home = () => {


    return (
        <>

            <section>
                <img className='w-100' src={require("../Images/earth1.webp")} alt="" srcSet="" />
            </section>

            <section>
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
            </section>

            <section>
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
            </section>

            <section>
                <div className='container-fluid ' style={{ backgroundImage: `url(${require("../Images/bg_5.png")})`, backgroundAttachment: "local", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center,center', height: "260px" }}>
                    <div className="container p-5">
                        <h2 className='text-center ' style={{ paddingTop: "40px", }}>Rent By Categories</h2>
                        <div className="row p-5">
                            <div className="col-3 ">
                            <div className='position-relative  READMOREBUTTON '>
                                    <img className='w-100 ' src={require("../Images/600-400BOX.png")} alt="" srcSet="" />
                                    <div className='position-absolute top-100 start-50 translate-middle'>
                                        <div className='bg-body p-1 '><b className='p-3 fs-6'>SOUND</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                            <div className='position-relative  READMOREBUTTON '>
                                    <img className='w-100 ' src={require("../Images/2.png")} alt="" srcSet="" />
                                    <div className='position-absolute top-100 start-50 translate-middle'>
                                        <div className='bg-body p-1 '><b className='p-3 fs-6'>CAMERA</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                            <div className='position-relative   READMOREBUTTON'>
                                    <img className='w-100 ' src={require("../Images/3.png")} alt="" srcSet="" />
                                    <div className='position-absolute top-100 start-50 translate-middle'>
                                        <div className='bg-body p-1 '><b className='p-3 fs-6'>LENS</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
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
            </section>

            {/* <section>
                <Featuredproducts />
            </section> */}



        </>
    )
}

export default Home