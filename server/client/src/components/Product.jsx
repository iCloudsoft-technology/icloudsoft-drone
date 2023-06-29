import React from 'react'
import "./common/Common.css"
import { useProductContext } from '../context/productContext';
import { NavLink } from 'react-router-dom';
import Loading from './common/Loading';


const Product = () => {
    const { isLoading, products } = useProductContext();

    const getUniqueData = (data, property) => {
        let newVal = data.map((currEle) => {
            return currEle[property]
        });
        return newVal = ["All", ...new Set(newVal)]
    }
    const categoryData = getUniqueData(products, "name")


    if (isLoading) {
        return (
            <>
                {/* <Loading /> */}
            </>
        )
    }

    return (
        <>
            <section >
                <div className='container-fluid bg-c1 text-white'>
                    <div className="row ">
                        <div className="d-flex  ">
                            <button className=' bg-c1 text-white border-0 ' > Home </button>
                            {
                                categoryData.map((row, index) => {

                                    return (
                                        <>
                                            <button className=' bg-c1 text-white border-0  p-2'>{categoryData[index]}</button>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <section  >
                    <div className="container-fluid ">
                        <div className="row  pt-5 pb-5 " >
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-10 " >
                                <div className="container">
                                    <div className="row  g-3">
                                        {
                                            products.length === 0 || products === "undefined" || products === null ? <> <h1> Tempory Uavialble All products</h1></> :
                                                products.map((row) => {
                                                    return (
                                                        <>
                                                            <div className="col-lg-4 ">
                                                                <div className="card shadow-lg" style={{ height: "26rem" ,backgroundColor:"#34B79D",border:'none'}} >
                                                                    <img src={row.images[0].url} className="card-img-top " alt="..." style={{ overflow: "hidden" }} />
                                                                    <div className="card-body  text-center "   >
                                                                        <h5 className="card-title fs-4 fw-bold">{row.name}</h5>
                                                                        <p className="card-text fw-bold">{row.price}</p>

                                                                        <div className='container-fluid bg ' >
                                                                            <div className="row g-1 text-center d-flex justify-content-center ">


                                                                                {/* <div className='col-5 rounded  p-2  w-75  BUYBUTTON' >
                                                                                    <NavLink className="text-decoration-none  text-white" to={`/singleproduct/${row._id}`} > BUY </NavLink>
                                                                                </div> */}


                                                                                <div className='col-5 rounded  p-2' style={{ backgroundColor: "#fb641b" }}>
                                                                                    <NavLink className="text-decoration-none text-white" to={`/singleproduct/${row._id}`} >RENT</NavLink>

                                                                                </div>

                                                                            </div>


                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </>
                                                    )
                                                })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </section>
        </>
    )
}
export default Product