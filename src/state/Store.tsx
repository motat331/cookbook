import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './reducers/AuthReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const Store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof Store.dispatch;
export default Store;
