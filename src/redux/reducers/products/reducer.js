import { SET_PRODUCTS_FAILED, SELECTED_PRODUCT, RESET_FILTER_LIST, REMOVE_SELECTED_PRODUCT, SET_PRODUCTS_REQUEST, SET_PRODUCTS_SUCCESS, FILTER_PRODUCT } from "./actionTypes";

const initialState = {
    products: [],
    filterList: [],
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
                filterList: payload,
            };

        case FILTER_PRODUCT:
            return {
                ...state,
                filterList: payload,
            };

        case RESET_FILTER_LIST:
            return {
                ...state,
                filterList: state.products,
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