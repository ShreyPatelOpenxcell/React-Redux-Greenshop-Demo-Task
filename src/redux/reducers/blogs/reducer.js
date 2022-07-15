import { SET_BLOG_FAILED, SELECTED_BLOG, REMOVE_SELECTED_BLOG, SET_BLOG_REQUEST, SET_BLOGS_SUCCESS } from "./actionTypes";

const initialState = {
    blogs: [],
    selectedBlog: {},
    errorMessage: ''
}

const blogReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_BLOG_REQUEST:
            return {
                ...state,
                blogs: [],
                selectedBlog: {},
                errorMessage: ''
            };

        case SET_BLOGS_SUCCESS:
            return {
                ...state,
                blogs: payload
            };

        case SET_BLOG_FAILED:
            return {
                ...state,
                errorMessage: payload
            };

        case SELECTED_BLOG:
            return {
                ...state,
                selectedBlog: (state.blogs.find((item) =>
                    (item.id === payload)
                ))
            };

        case REMOVE_SELECTED_BLOG:
            return {
                ...state,
                selectedBlog: {}
            };

        default:
            return state;
    }
}

export default blogReducer;