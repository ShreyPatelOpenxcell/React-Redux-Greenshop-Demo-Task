import { SET_PRODUCTS_FAILED, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT, SET_PRODUCTS_REQUEST, SET_PRODUCTS_SUCCESS, FILTER_PRODUCT } from "./actionTypes";
import axios from "axios";
import { baseURL } from "src/utils/commonConfig";

export const setProducts = () => async (dispatch) => {
    try {
        dispatch({ type: SET_PRODUCTS_REQUEST })

        const { data } = await axios.get(baseURL + 'products');
        if (data.length) {
            dispatch({
                type: SET_PRODUCTS_SUCCESS,
                payload: data
            })
        }
    }
    catch (error) {
        dispatch({
            type: SET_PRODUCTS_FAILED,
            payload: error.message ? "Error : <" + error.message + ">  occurred while fetching the Products" : "Error occurred while fetching the Products"
        })
    }
}

export const filterProduct = (vType, vValue, vInitialList) => async (dispatch) => {
    try {
        if (vType === 'Search Value') {
            dispatch({
                type: FILTER_PRODUCT,
                payload: vInitialList.filter((item) => (item.title.toLowerCase().indexOf(vValue.toLowerCase()) !== -1))
            })
        }
        else {
            if (vValue === 'All') {
                try {
                    dispatch({ type: SET_PRODUCTS_REQUEST })
                    const { data } = await axios.get(baseURL + 'products');
                    if (data.length) {
                        dispatch({
                            type: SET_PRODUCTS_SUCCESS,
                            payload: data
                        })
                    }
                }
                catch (error) {
                    dispatch({
                        type: SET_PRODUCTS_FAILED,
                        payload: error.message ? "Error : <" + error.message + ">  occurred while fetching the Products" : "Error occurred while fetching the Products"
                    })
                }
            }
            else {
                const { data } = await axios.get(baseURL + 'categories/' + vValue);
                if (data) {
                    dispatch({
                        type: FILTER_PRODUCT,
                        payload: data.products
                    })
                }
            }

        }
    }
    catch (error) {
        dispatch({
            type: FILTER_PRODUCT,
            payload: []
        })
    }
}

export const selectedProduct = (productId) => {
    return {
        type: SELECTED_PRODUCT,
        payload: productId
    }
}

export const removeSelectedProduct = () => {
    return {
        type: REMOVE_SELECTED_PRODUCT
    }
}