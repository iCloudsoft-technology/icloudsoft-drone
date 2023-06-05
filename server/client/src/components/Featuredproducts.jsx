import React from 'react'
import { useProductContext } from '../context/productContext';
import { NavLink } from 'react-router-dom';
import  "./common/Common.css"

const Featuredproducts = () => {
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) {
        return (
            <>
                ............Loading.............
            </>
        )
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="row g-2  mt-2 mb-2">
                        {
                            featureProducts.map((curElem => {
                                console.log(curElem)
                                return (
                                    <>
                                        <div className='col-lg-3'>
                                            <div className='' >
                                                <div className='position-relative blacktransformparent'>
                                                     <img className='w-100  ' src={curElem.images[0].url} alt="" />
                                                    <div className='blacktransform'>
                                                        <div className='w-100 h-100 d-flex align-items-center justify-content-center' >
                                                            <NavLink className="nav-link  text-decoration-none " to={`/singleproduct/${curElem._id}`} ><button className='blacktransformchild'><b>Expolre</b></button> </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )
                            }))
                        }

                    </div>
                </div>
            </section>
        </>

    )
}

export default Featuredproducts