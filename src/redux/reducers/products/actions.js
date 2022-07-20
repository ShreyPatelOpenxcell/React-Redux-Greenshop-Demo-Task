import { SET_PRODUCTS_FAILED, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT, RESET_FILTER_LIST, SET_PRODUCTS_REQUEST, SET_PRODUCTS_SUCCESS, FILTER_PRODUCT } from "./actionTypes";
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
        if (vType === 'BySearchValue') {
            dispatch({
                type: FILTER_PRODUCT,
                payload: vInitialList.filter((item) => (item.title.toLowerCase().indexOf(vValue.toLowerCase()) !== -1))
            })
        }
        else if (vType === 'ByCategory') {
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
        else if (vType === 'ByHomePage') {
            switch (vValue) {
                case 'All':
                    dispatch({
                        type: FILTER_PRODUCT,
                        payload: vInitialList.slice(0, 8)
                    })
                    break;
                case 'Featured':
                    dispatch({
                        type: FILTER_PRODUCT,
                        payload: vInitialList.filter((item) => (item.IsFeatured === true))
                    })
                    break;
                case 'New':
                    dispatch({
                        type: FILTER_PRODUCT,
                        payload: vInitialList.slice(0, 4)
                    })
                    break;
                case 'Onsell':
                    dispatch({
                        type: FILTER_PRODUCT,
                        payload: vInitialList.slice(0, 4)
                    })
                    break;

                default:
                    dispatch({
                        type: FILTER_PRODUCT,
                        payload: vInitialList.slice(0, 8)
                    })
                    break;
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

export const resetFilterProducts = () => {
    return {
        type: RESET_FILTER_LIST
    }
}

export const removeSelectedProduct = () => {
    return {
        type: REMOVE_SELECTED_PRODUCT
    }
}