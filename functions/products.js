import axios from 'axios';

import { REACT_APP_API } from '@env';

export const getFilterProducts = async (filter) => {
    return await axios.post(REACT_APP_API + "/filter/products", {
        filter
    });
}

export const getProduct = async (id) => {
    return await axios.get(REACT_APP_API + `/product/${id}`);
}

export const searchProducts = async (query) => {
    return await axios.post(REACT_APP_API + '/products/search', {
        query
    });
}

export const getAllProducts = async () => {
    return await axios.get(REACT_APP_API + "/products");
}