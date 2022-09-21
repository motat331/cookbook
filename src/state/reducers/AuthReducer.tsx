import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL } from '../actions/auth';
import { User } from '../models/User';

const initialState: User = {
    id: '',
    email: '',
    didTryAutoLogin: false,
};

export default (state = initialState, action: any): User => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                id: action.userId,
                email: action.email,
                didTryAutoLogin: true,
            };
        case SET_DID_TRY_AL:
            return {
                ...state,
                didTryAutoLogin: true,
            };
        case LOGOUT:
            return {
                ...initialState,
                didTryAutoLogin: true,
            };
        default:
            return state;
    }
};
