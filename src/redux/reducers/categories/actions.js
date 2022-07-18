import { SET_CATEGORIES } from "./actionTypes";
import axios from "axios";
import { baseURL } from "src/utils/commonConfig";

export const setCategories = () => async (dispatch) => {
    try {
        const { data } = await axios.get(baseURL + 'categories');
        if (data.length) {
            dispatch({
                type: SET_CATEGORIES,
                payload: data
            });
        }
        else {
            dispatch({
                type: SET_CATEGORIES,
                payload: []
            });
        }
    }
    catch (error) {
        dispatch({
            type: SET_CATEGORIES,
            payload: []
        });
    }
}

