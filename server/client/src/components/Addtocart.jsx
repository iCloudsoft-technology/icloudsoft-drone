import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';


const Addtocart = ({ product }) => {

  const {addToCart}=useCartContext()
  // console.log(product)

  const { _id, Stock ,description } = product;
  // console.log(_id);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    // console.log(amount)
    // console.log(Stock)
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }

  const setIncrease = () => {
    amount < Stock ? setAmount(amount + 1) : setAmount(Stock)
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <div>
          <button className='btn' onClick={() => setDecrease()}><i class="fa-solid fa-circle-minus"></i></button>
        </div>
        <div>{amount}</div>
        <div>
          <button className='btn' onClick={() => setIncrease()}><i class="fa-solid fa-circle-plus"></i></button>
        </div>
      </div>


      <NavLink exact to="/cart"
        onClick={() => addToCart(_id, amount, product ,description)}>
        <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4" >Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
      </NavLink>


    </>
  )
}

export default Addtocart