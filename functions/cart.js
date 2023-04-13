import axios from "axios";

export const addToUserCart = async (cart, authToken) => {
    return await axios.post(process.env.REACT_APP_API + "/user/cart", {
        cart: cart
    }, {
        headers: {
            authToken: authToken
        }
    });
}

export const getUserCart = async (authToken) => {
    return await axios.get(process.env.REACT_APP_API + "/user/cart", {
        headers: {
            authToken: authToken
        }
    })
}

export const deleteUsercart = async (authToken) => {
    return await axios.delete(process.env.REACT_APP_API + "/user/cart", {
        headers: {
            authToken: authToken
        }
    })
}