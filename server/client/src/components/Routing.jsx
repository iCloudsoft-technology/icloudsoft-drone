import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Header from './common/Header'
import Footer from './common/Footer'
import Product from './Product'
import Contact from './Contact'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import About from './About'
import Register from './user/Register'
import Checkout from './Checkout'
import Login from './user/Login'
import Government from './industriespages/Government'
import Agriculture from './industriespages/Agriculture'
import Slider from './Extra/Slider'


const Routing = () => {
    return (
        <>
            <React.Fragment>
                <header className='sticky-top'>
                    <Header />
                </header>
                <main >
                    <Routes>
                        <Route to path="*" element={<Home />} />
                        <Route to path="/about" element={<About />} />
                        <Route to path="/products" element={<Product />} />


                        <Route to path="/register" element={<Register />} />
                        <Route to path="/login" element={<Login />} />





                        <Route to path="/contact" element={<Contact />} />
                        <Route to path="/singleproduct/:id" element={<SingleProduct />} />
                        <Route to path="/cart" element={<Cart />} />

                        <Route to path='/checkout' element={<Checkout />} />
                        
                        <Route to path='/industries/goverment' element={<Government />} />
                        <Route to path='/industries/agriculture' element={<Agriculture />} />

                        
                        
                        








                    </Routes>

                </main>
                <footer>
                    <Footer />

                </footer>

            </React.Fragment>
        </>
    )
}

export default Routing