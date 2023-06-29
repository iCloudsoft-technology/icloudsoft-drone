import React, { useRef, useState } from 'react'
import Loading from './common/Loading'

const Contact = () => {

    const [Fname, setFname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [massage, setMassage] = useState("");
    const [errors, setErrors] = useState({});

    // console.log(Fname);
    // console.log(number);
    // console.log(email);
    // console.log(massage);

    const form = useRef();

    const loginHandle = (e) => {
        e.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length === 0) {
            errors.Fname = ""; errors.number = ""; errors.email = ""; errors.massage = "";
        }
        else {
            setErrors(errors);
        }
    }

    const validateForm = () => {

        const errors = {};
        console.log(errors);

        var mailformat = /\S+@\S+\.\S+/;

        if (!Fname) {
            errors.Fname = 'Name is requried'
        }
        else if (Fname.length < 4) {
            errors.Fname = "Name Required is more than 4 char"
        }

        if (!number) {
            errors.number = "Number is required"
        }
        else if (number.length !== 10) {
            errors.number = "Number have must 10 digit"
        }


        if (!email) {
            errors.email = "Email is reqiured"
        }
        if (email) {
            if (email.match(mailformat)) {

            }
            else {
                errors.email = `Email Must Be In " Text + @ + Text + . + Text " Format`
            }
        }

        if (!massage) {
            errors.massage = "Massage Is Requried";
        }

        return errors;
    }

    return (
        <>
            <div className='container-fluid mb-5 text-white  ' >
                <div className='row text-center d-flex align-items-center ' style={{ height: "350px", background: "rgba(0,0,0,0.6)" }}>
                    <div className="col-md-6 fs-1  "><b>Let's Connect!</b></div>
                </div>
            </div>

            <div className="container-fluid "  >
                <div className="row p-5">
                    <div className="col-lg-6"  >
                        <div className='w-100 '>
                            <Loading />
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex p-3  align-items-center">
                        <form ref={form} onSubmit={loginHandle} className="row g-lg-4 m-2 g-3 rounded p-5 shadow   ">
                            <div className="col-12 ">
                                <input type="text" className="form-control boderRadius " id="inputText1" placeholder="Fullname"
                                    name="Fname"
                                    onChange={e => setFname(e.target.value)}
                                    value={Fname} />
                                {errors.Fname && <div className='text-danger'>{errors.Fname}</div>}
                            </div>

                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="text" className="form-control boderRadius" maxlength="10" id="inputNumber" placeholder="Number"
                                            name="number"
                                            onChange={e => setNumber(e.target.value)}
                                            value={number} />
                                        {errors.number && <div className='text-danger'>{errors.number}</div>}
                                    </div>

                                    <div className="col-6">
                                        <input type="email" className="form-control boderRadius" id="inputEmail4" placeholder="Email address"
                                            name="email"
                                            onChange={e => setEmail(e.target.value)}
                                            value={email} />
                                        {errors.email && <div className='text-danger'>{errors.email}</div>}
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <textarea type="text" className="form-control boderRadius" id="inputText3" placeholder="Massage"
                                    name="massage"
                                    onChange={e => setMassage(e.target.value)}
                                    value={massage}>
                                </textarea>
                                {errors.massage && <div className='text-danger'>{errors.massage}</div>}
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