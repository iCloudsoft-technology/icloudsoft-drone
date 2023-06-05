import React from 'react'
import { useCartContext } from '../context/cartContext'
// import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
    const { cart, clearCart, removeItem, setDecrease, setIncrease, total_amount, shipping_fee, total_item  } = useCartContext();
    console.log(cart);
    const handleOpenRazorpay = (data) => {
        const options = {
            key: "rzp_test_6qNKTSXJ7h7EIQ",
            amount: Number(data.order.amount),
            currency: data.order.currency,
            name: "iCloudSoft",
            order_id: data.order.id,
            handler: function (response) {
                console.log(response, "got it")
                axios.post("http://localhost:3535/payment/verification", { response: response })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            // ,
            // prefill:{
            //     name:

            // }
        }
        const rzp = new window.Razorpay(options)

        rzp.open()

    }
    const handlePayment = (amount) => {
        let data = { amount: amount }

        axios.post("http://localhost:3535/payment/checkout", data)
            .then(res => {
                console.log(res.data, "success")
                handleOpenRazorpay(res.data)
            }

            )
            .catch(err => {
                console.log(err, "unsuccess")
            }

            )

    }
    return (




        <>
            {/* <section>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form action="" method="post">
                                <div className="mb-3">
                                    <h5>Billing Address</h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label for="billingFirstName" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="billingFirstName" name="billingFirstName" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="billingLastName" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="billingLastName" name="billingLastName" required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="billingAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="billingAddress" name="billingAddress" required />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label for="billingCity" className="form-label">City</label>
                                            <input type="text" className="form-control" id="billingCity" name="billingCity" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="billingState" className="form-label">State</label>
                                            <select className="form-select" id="billingState" name="billingState" required>
                                                <option value="">Choose...</option>
                                                <option value="CA">California</option>
                                                <option value="NY">New York</option>
                                                <option value="TX">Texas</option>
                                                <option value="FL">Florida</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label for="billingZip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="billingZip" name="billingZip" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="billingPhoneNumber" className="form-label">Phone Number</label>
                                            <input type="Number" className="form-control" id="billingPhoneNumber" name="billingPhoneNumber" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h5>Payment</h5>
                                    <div className="mb-3">
                                        <label for="cardNumber" className="form-label">Card Number</label>
                                        <input type="text" className="form-control" id="cardNumber" name="cardNumber" required />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                        </div>
                                    </div>
                                </div>
                            </form></div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </section> */}
            <section className='  bg-light'>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className='bg-body mt-3 p-2 shadow-sm border-rounded '>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex justify-content-around  '>
                                        <div>
                                            <p className='bg-light text-primary p-2 '> 1</p>
                                        </div>
                                        <div className='ms-3'>
                                            <h5>
                                                Login
                                            </h5>
                                            <p><b>Ganesh Jagrut  </b> +91 9623221289 </p>
                                        </div>
                                    </div>
                                    <div>

                                        <button className='btn shadow-sm border '> Change </button>

                                    </div>
                                </div>

                            </div>
                            <div className='bg-body mt-3 p-2 shadow-sm border-rounded '>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex justify-content-around  '>
                                        <div>
                                            <p className='bg-light text-primary p-2'> 2</p>
                                        </div>
                                        <div className='ms-3'>
                                            <h5>
                                                Delivery Address
                                            </h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis culpa repellendus, sed, nostrum voluptatum necessitatibus error, quaerat neque nisi beatae. Ullam, quasi fugit praesentium consequuntur laborum est cum id?</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btn shadow-sm border '> Change </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-body mt-3 p-2 shadow-sm border-rounded '>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex justify-content-around  '>
                                        <div>
                                            <p className='bg-light text-primary p-2'> 3 </p>
                                        </div>
                                        <div className='ms-3'>
                                            <h5>
                                                Order Summary
                                            </h5>
                                            {cart.map((row, index) => {
                                                return (
                                                    <>
                                                        <div className="container">
                                                            <div className="row g-2 p-2">
                                                                <div className="col-3">
                                                                    <div>
                                                                        <img className='w-100' src={row.image.url} alt="" srcset="" />
                                                                    </div>
                                                                    <div className="col d-flex align-items-center justify-content-center">
                                                                        <button className='btn' onClick={() => setDecrease(row.id)}><i class="fa-solid fa-circle-minus"></i></button>
                                                                        {row.amount}
                                                                        <button className='btn' onClick={() => setIncrease(row.id)}><i class="fa-solid fa-circle-plus"></i></button>
                                                                    </div>
                                                                </div>
                                                                <div className="col-9">
                                                                    <div className='p-2 fs-2'>
                                                                        <p>{row.name}</p>
                                                                    </div>
                                                                    <div >
                                                                        <p>{row.description}</p>

                                                                    </div>
                                                                    <div>
                                                                        <div className="btn bg-light" onClick={() => removeItem(row.id)}> REMOVE </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btn shadow-sm border '> Change </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-body mt-3 p-2 shadow-sm border-rounded '>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex justify-content-around  '>
                                        <div>
                                            <p className='bg-light text-primary p-2'> 4 </p>
                                        </div>
                                        <div className='ms-3'>
                                            <h5>
                                                Payment
                                            </h5>
                                            <p><b>Ganesh Jagrut  </b> +91 9623221289 </p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btn shadow-sm border '> Change </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3 p-0">
                            <div className=' p-3 bg-body  shadow-sm' >
                                <p className='text-secondary'>PRICE DETAILS</p>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <div>  Price (<b>{total_item}</b> Item)</div>
                                    <div>{total_amount}</div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div> Delivery Charges</div>
                                    <div>{shipping_fee}</div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <div><b>Amount Payable</b></div>
                                    <div><b>{total_amount + shipping_fee}</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>













                


                    <button className='btn w-50 bg-info' onClick={() => handlePayment(total_amount + shipping_fee)}>
                        Make Payment
                    </button>

            </section>




        </>



    )
}

export default Checkout