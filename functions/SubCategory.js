import axios from "axios";

import { REACT_APP_API } from '@env';

export const getAllSubCategories = async () => {
    return await axios.get(REACT_APP_API + '/sub-categories');
}

export const getSubByParent = async (id) => {
    return await axios.get(REACT_APP_API + `/sub-category-by-parent/${id}`);
}