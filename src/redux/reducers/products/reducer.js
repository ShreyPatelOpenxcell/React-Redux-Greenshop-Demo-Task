import { SET_PRODUCTS_FAILED, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT, SET_PRODUCTS_REQUEST, SET_PRODUCTS_SUCCESS, FILTER_PRODUCT } from "./actionTypes";

const initialState = {
    products: [],
    selectedProduct: {},
    errorMessage: ''
}

const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS_REQUEST:
            return {
                ...state,
                products: [],
                selectedProduct: {},
                errorMessage: ''
            };

        case SET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: payload,
            };

        case FILTER_PRODUCT:
            return {
                ...state,
                products: payload,
            };

        case SET_PRODUCTS_FAILED:
            return {
                ...state,
                errorMessage: payload
            };

        case SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: (state.products.find((item) => (item.id === payload)))
            };

        case REMOVE_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: {}
            };

        default:
            return state;
    }
}

export default productsReducer;