import { combineReducers } from "redux";
import blogReducer from "src/redux/reducers/blogs/reducer"
import productsReducer from "src/redux/reducers/products/reducer"
import categoriesReducer from "src/redux/reducers/categories/reducer"

const rootReducer = combineReducers({
    blog: blogReducer,
    product: productsReducer,
    category: categoriesReducer
});


export default rootReducer;