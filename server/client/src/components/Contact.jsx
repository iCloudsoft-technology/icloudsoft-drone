import React from 'react'

const Contact = () => {
    return (
        <>


            <div className='container-fluid mb-5 text-white  ' >
            {/* style={{ backgroundImage: `url(${require("../Images/about.png")})` }} */}

                <div className='row text-center d-flex align-items-center ' style={{ height: "350px", background: "rgba(0,0,0,0.6)" }}>
                    <div className="col-md-6 fs-1  "><b>Let's Connect!</b></div>
                    {/* <div className="col-md-6">Home/ Contact</div> */}
                </div>


            </div>
            <div className="container-fluid "  >
                <div className="row">
                    <div className="col-lg-6"  >
                        <div className='w-100 '>
                            {/* <img className='w-75 p-4' src={require("../Images/Contact.png")} alt="" /> */}
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex p-2  align-items-center">
                        <form className="row g-lg-4 m-2 g-3 rounded p-3 shadow   ">
                            <div className="col-12 ">
                                <input type="text" className="form-control boderRadius " id="inputText1" placeholder="Fullname" name="Fname" value="" />
                            </div>
                            <div className="col-12">
                                <input type="number" className="form-control boderRadius" id="inputNumber" placeholder="Number" name="number" value="" />
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control boderRadius" id="inputEmail4" placeholder="Email address" name="email" value="" />
                            </div>
                            <div className="col-12">
                                <textarea type="text" className="form-control boderRadius" id="inputText3" placeholder="Message" name="message"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn boderRadius text-white" value="Send" style={{ backgroundColor: "#011e40" }} >Send Message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact