import { SET_VIDEO } from '../constants';

const initialState = {
    isVideoActive: true,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEO:
            return {
                ...state,
                isVideoActive: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
