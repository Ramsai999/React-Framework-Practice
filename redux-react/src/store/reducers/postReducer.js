import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
} from '../actions/postActions'; // Correct relative path

const initialState = {
    post: [],
    loading: false,
    error: null,
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload,
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};