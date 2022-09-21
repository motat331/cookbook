export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';
export const SWITCHAUTH = 'SWITCHAUTH';
import auth from '@react-native-firebase/auth';
import userApi from '../../api/UserService';

export const setDidTryAL = () => {
    return { type: SET_DID_TRY_AL };
};

export const authenticate = (userId: string, email: string) => {
    return (dispatch: any) => {
        dispatch({ type: AUTHENTICATE, userId, email });
    };
};

export const login = (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const logUserIn = await auth().signInWithEmailAndPassword(
                email,
                password
            );
            console.log('logUserIn -> ', logUserIn);
            if (logUserIn.user) {
                const user = await userApi.getUser(logUserIn.user.uid);
                dispatch(authenticate(user.firebase_id, email));
            } else throw new Error('No user found');
        } catch (err: any) {
            console.log('ERR: ', err);
            throw new Error(err.message);
        }
    };
};

export const logout = () => {
    return async (dispatch: any) => {
        try {
            await auth().signOut();
            dispatch({ type: LOGOUT });
        } catch (err: any) {
            throw new Error(err.message);
        }
    };
};

export const checkState = () => {
    return new Promise<any>((resolve, reject) => {
        auth().onAuthStateChanged((user) => resolve(user));
    });
};
