import { SET_VIDEO, SET_MUSIC } from '../constants';

const initialState = {
    isVideoActive: true,
    isMusicActive: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEO:
            return {
                ...state,
                isVideoActive: action.payload,
            };

        case SET_MUSIC:
            return {
                ...state,
                isMusicActive: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
