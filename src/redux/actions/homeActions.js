import { SET_VIDEO, SET_MUSIC } from '../constants';

export const set_video = value => ({ type: SET_VIDEO, payload: value });
export const set_music = value => ({ type: SET_MUSIC, payload: value });
