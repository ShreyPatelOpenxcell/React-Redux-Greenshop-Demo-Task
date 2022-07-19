import { REMOVE_CART_ITEM, ADD_CART_ITEM } from "./actionTypes";

export const addCartItem = (vQty, vProduct) => {
    return {
        type: ADD_CART_ITEM,
        payload: { ...vProduct, 'Qty': vQty }
    }
}

export const removeCartItem = (vId) => {
    return {
        type: REMOVE_CART_ITEM,
        payload: vId
    }
}

