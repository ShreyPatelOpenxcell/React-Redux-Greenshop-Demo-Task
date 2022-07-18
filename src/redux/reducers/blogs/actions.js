import { SET_BLOG_FAILED, SELECTED_BLOG, REMOVE_SELECTED_BLOG, SET_BLOG_REQUEST, SET_BLOGS_SUCCESS } from "./actionTypes";
import axios from "axios";
import { baseURL } from "src/utils/commonConfig";

export const setBlogs = () => async (dispatch) => {
    try {
        dispatch({ type: SET_BLOG_REQUEST })

        const { data } = await axios.get(baseURL + 'blogs');
        if (data?.length) {
            dispatch({
                type: SET_BLOGS_SUCCESS,
                payload: data
            })
        }
    }
    catch (error) {
        dispatch({
            type: SET_BLOG_FAILED,
            payload: error.message ? "Error : <" + error.message + ">  occurred while fetching the Blogs" : "Error occurred while fetching the Blogs"
        })
    }
}

export const selectedBlog = (blogId) => {
    return {
        type: SELECTED_BLOG,
        payload: blogId
    }
}

export const removeSelectedBlog = () => {
    return {
        type: REMOVE_SELECTED_BLOG
    }
}