import { CREATE_POST } from "./types";

const initialState = {
    posts: [1, 2, 3],
    fetchedPosts: [],
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        
        default:
            return state;
    }
}