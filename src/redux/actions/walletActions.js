/* eslint-disable import/prefer-default-export */
import { SET_WALLET } from '../constants';

export const set_wallet = data => {
    return {
        type: SET_WALLET,
        payload: data,
    };
};
