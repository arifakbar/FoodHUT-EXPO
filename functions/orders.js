import axios from "axios";

export const getUserOrders = async (authToken) => {
    return await axios.get(process.env.REACT_APP_API + "/user/orders", {
        headers: { authToken: authToken },
    });
};

export const createCashOrderForUser = async (authToken, couponApplied, COD) => {
    return await axios.post(
        process.env.REACT_APP_API + "/user/cash-order",
        {
            COD: COD,
            couponApplied: couponApplied,
        },
        {
            headers: {
                authToken: authToken,
            },
        }
    );
};

export const createOrder = async (authToken, stripeResponse) => {
    return await axios.post(
        process.env.REACT_APP_API + "/user/order",
        {
            stripeResponse: stripeResponse,
        },
        {
            headers: { authToken: authToken },
        }
    );
};