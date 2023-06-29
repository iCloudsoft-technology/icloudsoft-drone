import React from 'react'

const Industries = () => {
    return (
        <>

            <section>
                <div className='container-fluid position-relative ' style={{ backgroundImage: `url(${require("../../Images/industriesBG.png")})`, backgroundAttachment: "local", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center,center', height: "90vh" }}>
                    <div className="container position-absolute  text-dark" style={{ top: "35%", left: "8%" }}>
                        <p className='text-white fw-bold h1FontFamily' style={{ fontSize: "60px" }}>INDUSTRIES</p>
                    </div>
                </div>
            </section>

            <section>
                <div className='container-fluid ' >
                    <div className="container" style={{ padding: "50px" }} >
                        <h2 className='text-center p-3 mb-3 fw-bold SolutionDropDownFontFamily' style={{ color: "#3d2d72", fontSize: "40px" }}>INDUSTRIES SERVED</h2>

                        <div className="row ">
                            <div className="col-lg-6 p-3">
                                <div className='position-relative text-white'  >
                                    <img className='w-100' src={require("../../Images/h5.png")} alt="" srcSet="" />
                                    <div className='position-absolute' style={{ bottom: '5%', left: "5%" }}>
                                        <h2 className='fw-bold SolutionDropDownFontFamily' style={{ fontSize: "34px" }} >Infrastructure</h2>
                                        <p className='mt-3 SolutionDropDownFontFamily' style={{ fontSize: "19px" }} >Our GIS experts are here to advance knowledge toward your projects with highly-equipped UAVs for 3D City models, Pre-Construction Aerial Survey, drone videos with GEO-Tagged info, drone inspection, City Traffic Analysis, etc.</p>
                                        {/* <NavLink className='' to=''><button className=' text-white' style={{ fontSize: "17px", border: "none", backgroundColor: "transparent" }} ><b className='fs-5'>Learn More</b> <i class=" fa-sharp fa-solid fa-circle-arrow-right text-center " style={{ fontSize: '21px' }} ></i></button></NavLink> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 p-3">
                                <div className='position-relative text-white'  >
                                    <img className='w-100' src={require("../../Images/h6.png")} alt="" srcSet="" />
                                    <div className='position-absolute' style={{ bottom: '6%', left: "5%" }}>
                                        <h2 className='fw-bold SolutionDropDownFontFamily' style={{ fontSize: "34px" }} > Agriculture</h2>
                                        <p className='mt-3 SolutionDropDownFontFamily' style={{ fontSize: "19px" }} >Through our aerial survey, mapping, and high-end UAVs pioneering precision agriculture, Crop health analysis, Irrigation Planning, Crop Damage Assessment, soil analysis, etc., we cater successfully to the agricultural community with 98% Accuracy.</p>
                                        {/* <NavLink className='' to=''><button className=' text-white' style={{ fontSize: "17px", border: "none", backgroundColor: "transparent" }} ><b className='fs-5'>Learn More</b> <i class=" fa-sharp fa-solid fa-circle-arrow-right text-center " style={{ fontSize: '21px' }} ></i></button></NavLink> */}
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row ">
                            <div className="col-lg-6 p-3">
                                <div className='position-relative text-white '  >
                                    <img className='w-100 ' src={require("../../Images/h1.png")} alt="" srcSet="" />
                                    <div className='position-absolute' style={{ bottom: '5%', left: "5%" }}>
                                        <h2 className='fw-bold SolutionDropDownFontFamily' style={{ fontSize: "34px" }} >Transportation</h2>
                                        <p className='mt-3 SolutionDropDownFontFamily' style={{ fontSize: "19px" }} >Railway and highway projects supported with GIS, topography surveys, aerial maps, and UAVs crafted with the high-end advanced sensors for surveying, Monitoring & Inspection result in enhanced efficiency and management.</p>
                                        {/* <NavLink className='' to=''><button className=' text-white' style={{ fontSize: "17px", border: "none", backgroundColor: "transparent" }} ><b className='fs-5'>Learn More</b> <i class=" fa-sharp fa-solid fa-circle-arrow-right text-center " style={{ fontSize: '21px' }} ></i></button></NavLink> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 p-3">
                                <div className='position-relative text-white '  >
                                    <img className='w-100' src={require("../../Images/h2.png")} alt="" srcSet="" />
                                    <div className='position-absolute' style={{ bottom: '6%', left: "5%" }}>
                                        <h2 className='fw-bold SolutionDropDownFontFamily' style={{ fontSize: "34px" }} >Renewable Energy</h2>
                                        <p className='mt-3 SolutionDropDownFontFamily' style={{ fontSize: "19px" }} >Promote reliable data acquisition and diminish risks associated with solar and wind turbine inspections. By Employing and investing in AI-Powered Surveys, thermal maps, and thermal inspection, preserve your asset in top-notch condition.</p>
                                        {/* <NavLink className='' to=''><button className=' text-white' style={{ fontSize: "17px", border: "none", backgroundColor: "transparent" }} ><b className='fs-5'>Learn More</b> <i class=" fa-sharp fa-solid fa-circle-arrow-right text-center " style={{ fontSize: '21px' }} ></i></button></NavLink> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row ">
                            <div className="col-lg-6 p-3">
                                <div className='position-relative text-white'  >
                                    <img className='w-100' src={require("../../Images/h3.png")} alt="" srcSet="" />
                                    <div className='position-absolute' style={{ bottom: '5%', left: "5%" }}>
                                        <h2 className='fw-bold SolutionDropDownFontFamily' style={{ fontSize: "34px" }} >Mining</h2>
                                        <p className='mt-3 SolutionDropDownFontFamily' style={{ fontSize: "19px" }} >Keep track of your critical assets with AI-powered Volumetric Measurement and analysis with 99% accuracy. We offer nearly 30x faster data collection for Haul Road Optimisation, Mine Exploration, and countless other UAV Powered Services.</p>
                                        {/* <NavLink className='' to=''><button className=' text-white' style={{ fontSize: "17px", border: "none", backgroundColor: "transparent" }} ><b className='fs-5'>Learn More</b> <i class=" fa-sharp fa-solid fa-circle-arrow-right text-center " style={{ fontSize: '21px' }} ></i></button></NavLink> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 p-3">
                                <div className='position-relative text-white'  >
                                    <img className='w-100' src={require("../../Images/h4.png")} alt="" srcSet="" />
                                    <div className='position-absolute' style={{ bottom: '9%', left: "5%" }}>
                                        <h2 className='fw-bold SolutionDropDownFontFamily' style={{ fontSize: "34px" }} >Utilities </h2>
                                        <p className='mt-3 SolutionDropDownFontFamily ' style={{ fontSize: "19px" }} >We extend our services to detect, track and analyze damage on Utilities using the cutting edge drone UAV Technology backed with guaranteed Centimeter-level Accuracy.</p>
                                        {/* <NavLink className='' to=''><button className=' text-white' style={{ fontSize: "17px", border: "none", backgroundColor: "transparent" }} ><b className='fs-5'>Learn More</b> <i class=" fa-sharp fa-solid fa-circle-arrow-right text-center " style={{ fontSize: '21px' }} ></i></button></NavLink> */}
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row ">
                            <div className="col-lg-6 p-3">
                                <div className='position-relative text-white'  >
                                    <img className='w-100' src={require("../../Images/h7.png")} alt="" srcSet="" />
                                    <div className='position-absolute' style={{ bottom: '5%', left: "5%" }}>
                                        <h2 className='fw-bold SolutionDropDownFontFamily' style={{ fontSize: "34px" }} >Oil and Gas</h2>
                                        <p className='mt-3 SolutionDropDownFontFamily' style={{ fontSize: "19px" }} >Oil and gas companies utilize drones or UAVs for pipeline inspections and other necessary functions to ensure safety, accuracy, and cost-effectiveness.</p>
                                        {/* <NavLink className='' to=''><button className=' text-white' style={{ fontSize: "17px", border: "none", backgroundColor: "transparent" }} ><b className='fs-5'>Learn More</b> <i class=" fa-sharp fa-solid fa-circle-arrow-right text-center " style={{ fontSize: '21px' }} ></i></button></NavLink> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 p-3">
                                <div className='position-relative text-white'  >
                                    <img className='w-100' src={require("../../Images/h8.png")} alt="" srcSet="" />
                                    <div className='position-absolute' style={{ bottom: '7%', left: "5%" }}>
                                        <h2 className='fw-bold SolutionDropDownFontFamily' style={{ fontSize: "34px" }} > Real Estate</h2>
                                        <p className='mt-3 SolutionDropDownFontFamily' style={{ fontSize: "19px" }} >Real Estate drone photography can help enhance residential & commercial property features. Aerial photography with drones is imaginative and attractive.</p>
                                        {/* <NavLink className='' to=''><button className=' text-white' style={{ fontSize: "17px", border: "none", backgroundColor: "transparent" }} ><b className='fs-5'>Learn More</b> <i class=" fa-sharp fa-solid fa-circle-arrow-right text-center " style={{ fontSize: '21px' }} ></i></button></NavLink> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Industries