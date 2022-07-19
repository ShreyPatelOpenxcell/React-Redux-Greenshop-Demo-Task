import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./actionTypes";

const initialState = {
    cartList: []
}

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_CART_ITEM:
            let updatedList = (state.cartList.filter((item) => item.id !== payload.id));
            return {
                ...state,
                cartList: [
                    ...updatedList,
                    payload
                ]
            };

        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartList: (state.cartList.filter((item) => item.id !== payload))
            };

        default:
            return state;
    }
}

export default cartReducer;