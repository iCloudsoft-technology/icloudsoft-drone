import React from 'react'
import "./Common.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <section className='font   border-c1' >
                <div className="container-fluid ps-5 pe-5 pt-2 pb-2">
                    <div className="row p-1 text-lg-center d-flex justify-content-lg-between align-items-center">
                        <div className='col d-none d-lg-block text-start '>
                            <div className="row">
                                <div className="col-6">
                                    <NavLink to="tel:9527468898" className="text-decoration-none navHead-link " > <i className="fa-solid fa-phone"></i> <b>+91 9527468898</b> </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='col d-none d-lg-block ' ></div>

                        <div className='col '>
                            <div className="row w-100 d-flex justify-content-around">
                                <div className='col-3'><NavLink className="text-decoration-none navHead-link " to="/products">RENT</NavLink></div>
                                <div className='col-3 '><NavLink className="text-decoration-none navHead-link" to="/login" >LOG IN</NavLink></div>
                                <div className='col-3'><NavLink className="text-decoration-none navHead-link" to="/register">REGISTER</NavLink></div>
                                <div className='col-3 '><NavLink className="text-decoration-none navHead-link" to="/" >ACCOUNT</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='navBar-top bg border-c1'>
                <nav className="navbar  navbar-expand-lg mt-lg-0 d-flex justify-content-center ps-5 pe-5      ">
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src={require("../../Images/iClouDrone.png")} style={{ height: "5rem" }} className=" ps-lg-5 pe-lg-5 pt-lg-2 pb-lg-2" alt="" />
                    </div>

                    <div className="collapse navbar-collapse mt-lg-0 " id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto  ">
                            <li className="nav-item ">
                                <NavLink className="nav-link  " to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link  " to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link  " to="/products">PRODUCT</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink to='/industries' className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    INDUSTRIES
                                </NavLink>
                                <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item " to="/industries/agriculture">Agriculture</NavLink>
                                    <NavLink className="dropdown-item" to="/industries/goverment">Government</NavLink>
                                    <NavLink className="dropdown-item" to="/industries/">Infrastructure</NavLink>
                                    <NavLink className="dropdown-item" to="/">Mining</NavLink>
                                    <NavLink className="dropdown-item" to="/">Oil And Gas</NavLink>
                                    <NavLink className="dropdown-item" to="/">Real Estate</NavLink>
                                    <NavLink className="dropdown-item" to="/">Transportation</NavLink>
                                    <NavLink className="dropdown-item" to="/">Renewable Energy</NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='d-flex justify-content-center align-items-center ps-5 pe-5 pt-2 pb-2'>
                        <div className=' pe-2  d-flex justify-content-between align-items-center  '>
                            <button className='border-0 rounded bg-c1 text-white fs-5 ps-1 pe-1 ' >   <i className="fa-brands fa-phoenix-squadron "   ></i>   RENTAL  </button>

                        </div>

                        <div className=''>
                            <ul className='navbar-nav  ' >
                                <div className='d-flex '>
                                    <li className="nav-item p-2">

                                        <NavLink className="nav-link" to="/"><i class="fa-solid fa-magnifying-glass"></i></NavLink>
                                    </li>
                                    <li className="nav-item p-2">
                                        <NavLink className="nav-link" to="/"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <button className="navbar-toggler border-0  text-center w-100" type="button " data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </nav>

            </section >


            {/* <section className='navBar-top'>
                <nav className="navbar  navbar-expand-lg   ">
                    <div className=" row w-100  m-0   d-flex justify-content-center align-items-center " >
                        <div className="col-lg-2 p-0 ">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={require("../../Images/iClouDrone.png")} style={{ height: "5rem" }} className=" ps-lg-5 pe-lg-5 pt-lg-2 pb-lg-2" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-10   ">
                           
                            <div className='d-flex justify-content-center  align-items-center float-content ps-5 pe-5 pt-2 pb-2'>
                                <div className=' pe-2  d-flex justify-content-between align-items-center  '>
                                    <button className='border-0 rounded bg-c1 text-white'> RENTAL </button>
                                </div>
                                <div className=''>
                                    <ul className='navbar-nav  ' >
                                        <div className='d-flex '>
                                            <li className="nav-item p-2">
                                                <NavLink className="nav-link" to="/"><i class="fa-solid fa-magnifying-glass"></i></NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink className="nav-link" to="/"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <button className="navbar-toggler border-0  text-center w-100" type="button " data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa-solid fa-bars"></i>
                            </button>
                            <div className='  '>
                                <div className="collapse navbar-collapse mt-lg-0    " id="navbarNavDropdown">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <NavLink className="nav-link  " to="/">HOME</NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink className="nav-link  " to="/">ABOUT</NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink className="nav-link  " to="/">PRODUCT</NavLink>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                INDUSTRIES
                                            </NavLink>
                                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                                <NavLink className="dropdown-item " to="/">Agriculture</NavLink>
                                                <NavLink className="dropdown-item" to="/">Government</NavLink>
                                                <NavLink className="dropdown-item" to="/">Infrastructure</NavLink>
                                                <NavLink className="dropdown-item" to="/">Mining</NavLink>
                                                <NavLink className="dropdown-item" to="/">Oil And Gas</NavLink>
                                                <NavLink className="dropdown-item" to="/">Real Estate</NavLink>
                                                <NavLink className="dropdown-item" to="/">Transportation</NavLink>

                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/">CONTACT</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section > */}
        </>
    )
}

export default Header
