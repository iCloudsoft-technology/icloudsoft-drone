const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { _id, amount, product, description } = action.payload;

        if (state.cart === null) {


            return {
                ...state,
                cart: []


            }
        } else {



            let exitProduct = state.cart.find(
                (curItem) => curItem.id === _id);
            if (exitProduct) {

                let updateproduct = state.cart.map((currElem) => {

                    if (currElem.id === _id) {
                        // console.log(currElem)
                        let newAmount = currElem.amount + amount;
                        if (newAmount > product.Stock) {
                            newAmount = product.Stock
                        }
                        // console.log(newAmount)

                        return {
                            ...currElem,
                            amount: newAmount,

                        };
                    } else {
                        return currElem
                    }
                });
                return {
                    ...state,

                    cart: updateproduct

                }

            } else {
                let cartProduct;

                cartProduct = {
                    id: _id,
                    amount,
                    description: product.description,
                    name: product.name,
                    image: product.images[0],
                    price: product.price,
                    max: product.Stock
                };
                console.log(state, cartProduct);
                return {

                    ...state,

                    cart: [...state.cart, cartProduct]
                };

            }

        }




    }

    if (action.type === "REMOVE_ITEM") {
        // console.log(state.cart, action.payload)
        let updatedCart = state.cart.filter(
                (currele) => currele.id !== action.payload.id)
            // console.log(updatedCart)
        return {
            ...state,
            cart: updatedCart
        }
    }


    if (action.type === "CLEAR_CART") {

        return {
            ...state,
            cart: [],
        };

    }


    if (action.type === "TOTAL_CART_ITEM") {
        if (state.cart === null) {
            return {
                ...state,
                total_item: 0
            }

        } else {
            let updatedItemVal = state.cart.reduce((intialVal, currElem) => {
                let { amount } = currElem
                intialVal = intialVal + amount;
                // intialVal = intialVal + 1;
                return intialVal
            }, 0)
            return {
                ...state,
                total_item: updatedItemVal
            }
        }
    }

    if (action.type === "TOTAL_CART_PRICE") {
        if (state.cart === null) {
            return {
                ...state,
                total_amount: 0
            }

        } else {

            let subTotalprice = state.cart.reduce(

                (intialVal, currElem) => {

                    let { price, amount } = currElem;
                    intialVal = intialVal + price * amount;
                    return intialVal
                }, 0)

            return {
                ...state,
                total_amount: subTotalprice
            }

        }


        // let upadted
    }







    if (action.type === "SET_INCREASE") {
        let updatedProduct = state.cart.map((currElem) => {
                if (currElem.id === action.payload.id) {
                    // console.log(currElem.id, action.payload.id)
                    let Increament = currElem.amount + 1
                    console.log(currElem)
                    if (Increament > currElem.max) {
                        Increament = currElem.max
                    }
                    return {

                        ...currElem,
                        amount: Increament
                    }
                } else {
                    return currElem
                }


            })
            // console.log(updatedProduct)
        return {...state, cart: updatedProduct }

    }

    if (action.type === "SET_DECREASE") {
        let updatedProduct = state.cart.map((currElem) => {
                if (currElem.id === action.payload.id) {
                    // console.log(currElem.id, action.payload.id)
                    let Decreament = currElem.amount - 1
                    console.log(currElem)
                    if (Decreament < 1) {
                        Decreament = 1
                    }
                    return {

                        ...currElem,
                        amount: Decreament
                    }
                } else {
                    return currElem
                }


            })
            // console.log(updatedProduct)
        return {...state, cart: updatedProduct }

    }





    return state;



};

export default cartReducer