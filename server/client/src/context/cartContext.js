import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer"


const CartContext = createContext();
const getlocalData = () => {
    let newcartData = localStorage.getItem("mensplanet")
    if (newcartData === null || []) {
        return newcartData
    } else {
        return JSON.parse(newcartData);
    }
}
const initialState = {
    cart: getlocalData(),
    total_item: 0,
    total_amount: 0,
    shipping_fee: 50,
    description: ""


}


const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (_id, amount, product, description) => {
        console.log(_id, amount, product, description)
        dispatch({ type: "ADD_TO_CART", payload: { _id, amount, product, description } });

    }

    const setDecrease = (id) => {
        // console.log(id)
        dispatch({ type: "SET_DECREASE", payload: { id } })
    }
    const setIncrease = (id) => {
        // console.log(id)
        dispatch({ type: "SET_INCREASE", payload: { id } })
    }

    const removeItem = (id) => {
        // console.log(id)
        dispatch({ type: "REMOVE_ITEM", payload: { id } })
    };


    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    useEffect(() => {
        dispatch({ type: "TOTAL_CART_ITEM" })
        dispatch({ type: "TOTAL_CART_PRICE" })

        // dispatch({type:"CART_ITEM_PRICE"})

        localStorage.setItem("iCloudsoft", JSON.stringify(state.cart))

    }, [state.cart]);





    return <CartContext.Provider value = {
        {...state, addToCart, removeItem, clearCart, setIncrease, setDecrease } } > { children } < /CartContext.Provider>
};


const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };