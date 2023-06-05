import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import ProductReducer from "../reducer/ProductReducer";
// import reducer from "../reducer/ProductReducer";
const AppContext = createContext();

const API = "http://localhost:3535/product/products"


const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts:[],
    isSingleLoading: false,
    singleProduct: {}
};


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);


    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url)
            const products = res.data.products
            // console.log(products) 
            dispatch({ type: "SET_API_DATA", payload: products })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }

    }


    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url)
            // console.log(url)
            // console.log(res)
            const singleProduct = res.data.product
            // console.log(singleProduct)
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })
        }
        catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }

    }

    


    useEffect(() => {
        getProducts(API);

    }, [])
    // console.log(res)

    return <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>

}



const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext }