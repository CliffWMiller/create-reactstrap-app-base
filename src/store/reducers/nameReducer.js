import {APP_CHANGE_NAME, APP_CHANGE_DISPLAY_NAME} from '../actions/types';

const initialState = {
    display: "",
    actual: ""
}

export const NameReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_CHANGE_NAME:
            return {
                ...state,
                actual: action.payload.actual
            };
        case APP_CHANGE_DISPLAY_NAME:
            return {
                ...state,
                display: action.payload.display
            };
        default:
            return state;
    }
}

export default NameReducer;