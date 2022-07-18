import { SET_CATEGORIES } from "./actionTypes";

const initialState = {
    categories: []
}

const categoriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            };

        default:
            return state;
    }
}

export default categoriesReducer;