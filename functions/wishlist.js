import axios from "axios";

export const getUserWishlist = async (authToken) => {
    return await axios.get(process.env.REACT_APP_API + "/user/wishlists", {
        headers: { authToken: authToken }
    })
}

export const addToUserWishlist = async (authToken, productId) => {
    return await axios.post(
        process.env.REACT_APP_API + "/user/wishlist",
        {
            productId: productId,
        },
        {
            headers: {
                authToken: authToken,
            },
        }
    );
};

export const removeFromUserWishlist = async (authToken, productId) => {
    return await axios.put(
        process.env.REACT_APP_API + "/user/wishlist/" + productId,
        {},
        {
            headers: {
                authToken: authToken,
            },
        }
    );
};