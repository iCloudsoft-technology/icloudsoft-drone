import React, { useEffect, } from 'react'
import './common/Common.css'
import Addtocart from './Addtocart'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from '../context/productContext'
const API = "http://localhost:3535/product/product"

const SingleProduct = () => {
    const { isSingleLoading, singleProduct, getSingleProduct } = useProductContext();
    const { id } = useParams();
    // console.log(id)
    console.log(singleProduct);

    document.addEventListener("DOMContentLoaded", function (event) {

    });

    const { description, name, price, Stock, images } = singleProduct
    // console.log(singleProduct)


    const arrImg1 = (images ?? {})[0];
    const imgLink1 = (arrImg1 ?? {}).url;
    // const arrImg2 = (images ?? {})[1];
    // const imgLink2 = (arrImg2 ?? {}).url;
    // const arrImg3 = (images ?? {})[2];
    // const imgLink3 = (arrImg3 ?? {}).url;
// 




    useEffect(() => {
        getSingleProduct(`${API}/${id}`)

    }, [])



    if (isSingleLoading) {
        return (
            <>
                ............Loading.............
            </>
        )
    }
    return (
        <>
            <section>
                <div className="container mt-5 mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="images p-3">


                                            <div class="text-center p-4">
                                                <img id="main-image" src={imgLink1} style={{ width: "250px" }} alt="" />
                                            </div>
                                            <div class="thumbnail text-center">
                                                {/* <img src={imgLink2} style={{ width: "70px", height: "100px", margin: "2%" }} alt='' /> */}
                                                {/* <img src={imgLink3} style={{ width: "70px", height: "100px", margin: "2%" }} alt='' /> */}
                                                {/* </div>onClick={change_image(imgLink2)} */}
                                                {/* onClick={change_image(imgLink1)} */}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product p-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">   <NavLink className="text-decoration-none text-dark" exact to="/shop"><span className="ms-1"> <i className="fa fa-long-arrow-left"></i> Back </span></NavLink> </div> <i className="fa fa-shopping-cart text-muted"></i>
                                            </div>
                                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">MENS PLANET </span>
                                                <h5 className="text-uppercase"> {name}</h5>
                                                <div className="price d-flex flex-row align-items-center"> <span className="act-price"> {price} &#8377;</span>
                                                    {/* <div className="ml-2"> <small className="dis-price">$59</small> <span>40% OFF</span> </div> */}
                                                </div>
                                            </div>
                                            <p className="about">{description}</p>

                                            {/* <div className="sizes mt-5">
                                                <h6 className="text-uppercase">Size</h6> <label className="radio"> <input type="radio" name="size" value="S" checked /> <span>S</span> </label> <label className="radio"> <input type="radio" name="size" value="M" /> <span>M</span> </label> <label className="radio"> <input type="radio" name="size" value="L" /> <span>L</span> </label> <label className="radio"> <input type="radio" name="size" value="XL" /> <span>XL</span> </label> <label className="radio"> <input type="radio" name="size" value="XXL" /> <span>XXL</span> </label>
                                            </div> */}


                                            {Stock > 0 && <Addtocart product={singleProduct} />


                                                

                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


        </>
    )
}

export default SingleProduct