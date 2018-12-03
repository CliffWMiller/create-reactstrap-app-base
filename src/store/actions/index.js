import * as types from './types';

export const changeName = (name) => {
    const type = types.USER_CHANGE_NAME;
    return({
        type,
        payload: {
            name
        }
    });
}