import { combineReducers } from "redux";
// import contactUsReducer from "src/redux/reducers/contactUs/reducer";
import blogReducer from "src/redux/reducers/blogs/reducer"
// import categoryReducer from "src/redux/reducers/category/reducer"

const rootReducer = combineReducers({
    blogReducer
});


export default rootReducer;