import { CREATE_POST, FETCHED_POST, HIDE_LOADER, SHOW_LOADER } from "./types"

export const createPost = (post) => {
    return {
        type: CREATE_POST,
        payload: post,
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function fetchedPost() {
    return async (dispatch) => {
        dispatch(showLoader())

        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );
        const json = await response.json();
        console.log(json)

        setTimeout(() => {
            dispatch({ type: FETCHED_POST, payload: json })
        
            dispatch(hideLoader())
        }, 2000);
    }
}