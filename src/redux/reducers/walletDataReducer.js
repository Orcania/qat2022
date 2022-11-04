import WalletModel from 'src/models/wallet.model';

import { SET_WALLET } from '../constants';

const initialState = {
    wallet: new WalletModel(),
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WALLET:
            return {
                ...state,
                wallet: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
