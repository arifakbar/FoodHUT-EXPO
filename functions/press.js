import axios from "axios";

import { REACT_APP_API } from '@env';

export const getNews = async () => {
    return await axios.get(REACT_APP_API + "/news");
}