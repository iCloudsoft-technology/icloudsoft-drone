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
                <Featuredproducts />
            </section>



        </>
    )
}

export default Home