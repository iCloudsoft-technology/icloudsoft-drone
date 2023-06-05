import React from 'react'
import CartItem from './CartItem';
import { useCartContext } from '../context/cartContext'
import { NavLink } from 'react-router-dom';


const Cart = () => {
    const { cart, clearCart, total_amount, shipping_fee } = useCartContext();
    // console.log(total_amount, shipping_fee, cart)
    if (cart === null || cart.length === 0) {
        return (
            <>

                <div className='text-center p-2'>
                    <h1>NO ITEMS</h1>
                    <NavLink to="/shop"><button className='btn bg-primary'>Go To Shoping </button> </NavLink>

                </div>
            </>
        )
    }


    // console.log(cart)
    return (

        <>


            <div className='container text-center'>
                <div className="row row-cols-lg-5 row-cols-4 fs-4 ">
                    <div className="col">Items</div>
                    <div className="col d-none d-lg-block">Price</div>
                    <div className="col">Qunatity</div>
                    <div className="col ">Sub Total</div>
                    <div className="col">Remove</div>
                </div>
                <hr />

            </div>

            <div>
                {
                    cart.map((i) => {
                        return <CartItem key={i} {...i} />
                    })
                }

            </div>
            <hr />

            <section>
                <div className="container">
                    <div className=" d-flex justify-content-between">

                        <NavLink exact to="/product"><button className='btn bg-primary'>Continue Shoping </button> </NavLink>
                        <button onClick={clearCart} className='btn bg-warning'>Clear All Items</button>

                    </div>


                </div>

            </section>
            <hr />

            <section>



                <div className="container mt-2 mb-2">
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-4 shadow bg-light">
                            <div className='d-flex p-2 justify-content-between'>
                                <div> Order Price </div>
                                <div> <b>{total_amount}</b></div>
                            </div>
                            <div className='d-flex p-2 justify-content-between'>
                                <div> Delivery Charges </div>
                                <div> <b>  {shipping_fee}</b></div>
                            </div>
                            <hr />
                            <div className='d-flex p-2 justify-content-between'>
                                <div>  Total </div>
                                <div> <b>{total_amount + shipping_fee}</b></div>
                            </div>

                            <div>




                                <NavLink to="/checkout"   >
                                    <button className='btn border w-100 p-2 mb-2 bg-primary'>Checkout</button>

                                </NavLink>

                            </div>
                        </div>
                    </div>
                </div>






            </section>

        </>

    )
}

export default Cart;