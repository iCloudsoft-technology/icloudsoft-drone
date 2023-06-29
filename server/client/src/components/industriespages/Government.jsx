import React from 'react'

const Government = () => {
    return (
        <>



            <section>
                <div className='container-fluid position-relative' style={{ backgroundImage: `url(${require("../../Images/GMbg.png")})`, backgroundAttachment: "local", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center', paddingTop: "450px" }}>
                    <div className="row text-white position-absolute " style={{ bottom: '37%', left: "18%" }}>
                        <h1 className='' style={{ fontSize: "3.5rem" }}>GOVERNMENT</h1>
                        <h5 className='' style={{ fontSize: "1.5rem" }}>Secure and Reliable Solutions for Government</h5>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="container text-center p-2">
                        <h2 className=' p-lg-5' style={{ fontSize: "1.6rem" }} >How State, Local and Federal Agencies Can Leverage DJI Drone Technology</h2>
                        <div className="row  d-flex justify-content-center ">
                            <div className="col-lg-3 ">
                                <img className='w-50' src={require("../../Images/GM1.png")} alt="" srcSet="" />
                                <h3 className='mt-3 fw-bold' style={{ fontSize: "1.125rem", color: "#3f3f3f" }}>Enhanced Safety</h3>
                                <p className='' style={{ fontSize: "14px", color: "#3f3f3f" }} >Expand your team’s capabilities with aerial robotic tools that help mitigate hazards and risk during critical operations.</p>
                            </div>

                            <div className="col-lg-3 ">
                                <img className='w-50' src={require("../../Images/GM2.png")} alt="" srcSet="" />
                                <h3 className='mt-3 fw-bold' style={{ fontSize: "1.125rem", color: "#3f3f3f" }}>Improved Efficiency</h3>
                                <p className='' style={{ fontSize: "14px", color: "#3f3f3f" }}>Save time and optimize resources by leveraging aerial intelligence to improve traditional workflows.</p>
                            </div>

                            <div className="col-lg-3 ">
                                <img className='w-50' src={require("../../Images/GM3.png")} alt="" srcSet="" />
                                <h3 className='mt-3 fw-bold' style={{ fontSize: "1.125rem", color: "#3f3f3f" }}>Security & Autonomy</h3>
                                <p className='' style={{ fontSize: "14px", color: "#3f3f3f" }}>Serve your community with industry-leading drone technology that offers secure and accessible solutions.</p>
                            </div>
                        </div>
                        <h2 className='pt-lg-5 mt-lg-4 fw-bold' style={{ fontSize: "1.6rem", color: "#3f3f3f" }} >Government Applications</h2>
                        <h4 className='pt-2 pb-4' style={{ fontSize: "1.4rem", color: "#3f3f3f" }}  >Serve, work and protect with DJI drone solutions</h4>
                    </div>
                </div>
            </section>

            <section>
                <div className='container-fluid position-relative' style={{ backgroundImage: `url(${require("../../Images/GM2bg.png")})`, backgroundAttachment: "local", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: '50%,50%', opacity: "1" }}>
                    <div className="container pt-4 pb-4 text-white">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className=''>
                                    <h2 className='text-center pb-4 pt-3' style={{ fontSize: "35px" }}>Land and Conservation Management</h2>
                                    <h5 className='' style={{ fontSize: "24px" }}>Overview</h5>
                                    <p className='mt-4 mb-4' style={{ fontSize: "19px" }}>Conduct natural resource missions with DJI drone solutions developed to empower users by minimizing on-the-job risk and hazards while maximizing safety and efficiency.</p>
                                </div>

                                <div>

                                    <h5 className='' style={{ fontSize: "24px" }}>Search & Rescue</h5>
                                    <p className='mt-4 mb-4' style={{ fontSize: "19px" }}>Empower first responders in the line of duty with DJI drone solutions. Utilize our industrial drone platforms equipped with thermal sensors for more efficient emergency response, helping first responders take charge with better situational awareness while keeping out of harm’s way.</p>
                                </div>

                                <div>

                                    <h5 className='' style={{ fontSize: "24px" }}>Wildlife Monitoring</h5>
                                    <p className='mt-4 mb-4' style={{ fontSize: "19px" }}>Monitor, manage and protect wildlife with easy to use DJI drone solutions. Utilize our all-in-one drone platforms that are portable and easy to fly, so you can scout and keep track of wildlife around your designated area.</p>
                                </div>

                                <div>

                                    <h5 className='' style={{ fontSize: "24px" }}>Wildfire Mitigation</h5>
                                    <p className='mt-4 mb-4' style={{ fontSize: "19px" }}>Fight fires with agile and powerful drone solutions. Built for the toughest missions, our industrial drone platforms equipped with thermal and optical zoom cameras can help you swiftly scan through smoke and fire, giving you a safer and greater view of the mission at hand for better decision making.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container-fluid position-relative' style={{ backgroundImage: `url(${require("../../Images/GM2_1.png")})`, backgroundAttachment: "local", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: '100%' }}>
                    <div className="container pt-5 pb-4 text-white">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className=''>
                                    <h2 className='text-center pb-4' style={{ fontSize: "35px" }}>Civil Security</h2>
                                    <h5 className='' style={{ fontSize: "24px" }}>Overview</h5>
                                    <p className='mt-4 mb-4' style={{ fontSize: "19px" }}>Enhance the protection of citizens whilst operating in the line of duty. DJI drone solutions enable state and local government teams to act with added confidence and improved situational awareness.</p>
                                </div>

                                <div>
                                    <h5 className='' style={{ fontSize: "24px" }}>Emergency Response</h5>
                                    <p className='mt-4 mb-4' style={{ fontSize: "19px" }}>Get immediate aerial overviews to identify missing persons, analyze site damage and more with DJI drone solutions. With a drone’s live stream, response teams can efficiently direct on-the-ground teams and communicate the situation to off-site stakeholders.</p>
                                </div>

                                <div>
                                    <h5 className='' style={{ fontSize: "24px" }}>Border Protection</h5>
                                    <p className='mt-4 mb-4' style={{ fontSize: "19px" }}>Enhance national security with greater efficiency than ever before. Deploy our latest tools and technologies to obtain a visual feed across large areas and to help monitor your airspace for improved situational awareness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container-fluid position-relative' style={{ backgroundImage: `url(${require("../../Images/GM3bg.png")})`, backgroundAttachment: "local", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: '100%' }}>
                    <div className="container pt-5 pb-4 text-white">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className=''>
                                    <h2 className='text-center pb-4' style={{ fontSize: "35px" }}>Justice Management</h2>
                                    <h5 className='' style={{ fontSize: "24px" }}>Overview</h5>
                                    <p className='mt-4 mb-4' style={{ fontSize: "19px" }}>Deploy DJI drone solutions to help defend the interests of citizens, prevent and mitigate crime, as well as safeguard local and national government teams during critical operations.</p>
                                </div>

                                <div>
                                    <h5 className='' style={{ fontSize: "24px" }}>Crime Scene Investigation</h5>
                                    <p className='mt-4 mb-4' style={{ fontSize: "19px" }}>Utilize DJI drone solutions to quickly map areas after an incident thus preserving the scene for further analysis. By using 3D maps or aerial LiDAR point clouds, forensic units can gain a detailed view of a site and provide an unbiased, visual report to the courts.</p>
                                </div>

                                <div>
                                    <h5 className='' style={{ fontSize: "24px" }}>On-Scene Incident Monitoring</h5>
                                    <p className='mt-4 mb-4' style={{ fontSize: "19px" }}>DJI drone solutions provide remote visuals of a dangerous area to give officers critical information of a situation. By using a thermal sensor, officers can gain visuals through glass and other obstructions, preventing officers from risking their lives when scouting an area.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid" style={{ backgroundColor: "#F2F2F2" }}>
                    <div className="container  p-5">
                        <h4 className='pb-5 text-center'>Essentials for a Secure Government Solution</h4>
                        <div className="row" >
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5 p-5" style={{ backgroundColor: "#FFFFFF" }}>
                                <h4 className='' style={{ fontSize: "23px" }}><b>Drone Detection Platform</b></h4>
                                <p className='pb-4 pt-2' style={{ color: "#3f3f3f", fontSize: "15px" }} >Rapidly identify UAV communication links, gathering telemetry data such as flight status, paths, and other information in real-time. This monitoring data stream helps users make an informed response as soon as possible.</p>

                                <div className="row">
                                    <div className="col-lg-4">
                                        <img className='w-100' src={require("../../Images/123.png")} alt="" srcSet="" />
                                        <div className='mt-3'>
                                            <h6 className='text-center'><b>AeroScope</b> Portable &  Stationary  Detection  Platform </h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <img className='w-100' src={require("../../Images/1234.png")} alt="" srcSet="" />
                                        <div className='mt-3'>
                                            <h6 className='text-center'><b>Backend <br></br> Management </b></h6>
                                            <h6 className='text-center'>Data <br></br> Analysis Tool </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 RMIbtn '>
                                    <button type="button" class="btn btn-link  text-decoration-none ms-lg-2">Request More Info <i class="fa-solid fa-angle-right"></i></button>

                                    <div className='ms-lg-5  borderRMI' style={{}}></div>

                                </div>


                            </div>

                            <div className="col-lg-5" style={{ backgroundColor: "#FFFFFF" }}>
                                <img className='w-100' src={require("../../Images/bag.png")} alt="" srcSet="" />
                            </div>
                            <div className="col-lg-1"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid p-0" style={{ backgroundColor: "#F2F2F2" }}>
                    <div className="container  p-5">
                        <div className="row" >
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5 p-5" style={{ backgroundColor: "#FFFFFF" }}>
                                <h4 className='' style={{ fontSize: "23px" }}><b>DJI Government Edition</b></h4>
                                <p className='pb-4 pt-2' style={{ color: "#3f3f3f", fontSize: "15px" }} >An integrated drone solution created specifically for use in high-security situations by government agencies around the world.</p>

                                <div className="row ">
                                    <div className="col-lg-4">
                                        <img className='w-100' src={require("../../Images/DJP.png")} alt="" srcSet="" />
                                        <div className='mt-3'>
                                            <h6 className='text-center'><b>DJI Pilot PE</b> Customized Flight <br></br> Control App </h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <img className='w-100' src={require("../../Images/DJP1.png")} alt="" srcSet="" />
                                        <div className='mt-3'>
                                            <h6 className='text-center'><b>Controlled Firmware</b> <br></br> Gain Control of Updates </h6>

                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <img className='w-100' src={require("../../Images/DJP2.png")} alt="" srcSet="" />
                                        <div className='mt-3'>
                                            <h6 className='text-center'><b>Restricted Zone Management </b> Discretionary Flight Operations </h6>

                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 RMIbtn '>
                                    <button type="button" class="btn btn-link  text-decoration-none ms-lg-2">Request More Info <i class="fa-solid fa-angle-right"></i></button>
                                    <div className='ms-lg-5  borderRMI' style={{}}></div>
                                </div>
                            </div>
                            <div className="col-lg-5" style={{ backgroundColor: "#FFFFFF" }}>
                                <img className='w-100' src={require("../../Images/GEF.png")} alt="" srcSet="" />
                            </div>
                            <div className="col-lg-1"></div>

                            <div className="container text-center p-0">
                                <div className="row  d-flex justify-content-center " >
                                    <h3 className='pt-5 pb-5'>Trusted Technology for Government Agencies</h3>
                                    <div className="col-lg-5 ">
                                            <div className='h-100 ' style={{ backgroundColor: "#FFFFFF" }}>
                                                <img className='w-100 ' src={require("../../Images/DJIAeroscope.png")} alt="" srcSet="" />
                                                <h2 className='fs-4 p-3  pb-4 pt-4 fw-bold'>Enabling Remote ID as Part of UTM</h2>
                                            </div>
                                    </div>

                                    <div className="col-lg-5 "  >
                                            <div className='h-100 ' style={{ backgroundColor: "#FFFFFF" }}>
                                                <img className='w-100 ' src={require("../../Images/Boy&girl.png")} alt="" srcSet="" />
                                                <h2 className='fs-4 p-3 pb-4 pt-4 fw-bold'>Introducing DJI Government Edition</h2>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pb-5'>
                <div className='container-fluid position-relative ' style={{ backgroundImage: `url(${require("../../Images/BDRONE.png")})`, backgroundAttachment: "local", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: '100%' }}>
                    <div className="container pt-5 pb-4 text-white">
                        <div className="row pb-5">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8 " style={{paddingBottom:"50px"}}>
                                <div className='pb-5'>
                                    <h2 className='text-center pb-4' style={{ fontSize: "38px" }}>TRUSTED BY AGENCIES AROUND THE WORLD</h2>
                                    <p className='mt-4 mb-4 ' style={{ fontSize: "25px" }}>DJI is committed to providing world-class drone solutions that are secure,reliable and easily integrated, assisting government agencies to better serve their communities and society at large.</p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Government