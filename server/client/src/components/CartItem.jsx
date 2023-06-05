import React from 'react'
import { useCartContext } from '../context/cartContext';



const CartItem = ({ id, name, image, price, amount, max ,description}) => {
    const { removeItem ,setDecrease , setIncrease } = useCartContext();

    



    return (
        <>


            <section>
                <div className='container text-center'>
                    <div className="row d-flex align-items-center justify-content-center row-cols-lg-5 row-cols-4 ">
                        <div className="col">
                            <div className='container'>
                                <div className="row  d-flex align-items-center justify-content-center">
                                    <div className="col-lg-6  ">
                                        <img className='w-75' src={image.url} alt="" srcset="" />
                                    </div>
                                    <div className="col-6  d-none d-lg-block">
                                        {name}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col d-none d-lg-block">{price}</div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <button className='btn' onClick={() => setDecrease(id)}><i class="fa-solid fa-circle-minus"></i></button>
                            {amount}
                            <button className='btn' onClick={() => setIncrease(id)}><i class="fa-solid fa-circle-plus"></i></button>
                        </div>
                        <div className="col ">{price * amount}</div>
                        <div className="col"><i class="fa-solid fa-trash text-danger" onClick={() => removeItem(id)}></i></div>

                    </div>
                    <hr />
                </div>
            </section>




        </>
    )
}

export default CartItem