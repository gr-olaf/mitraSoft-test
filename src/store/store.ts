import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userAPI } from '../services/UserService';
import { postAPI } from '../services/PostsService';

const rootReducer = combineReducers({
	[userAPI.reducerPath]: userAPI.reducer,
	[postAPI.reducerPath]: postAPI.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userAPI.middleware, postAPI.middleware),
});

export default store;
