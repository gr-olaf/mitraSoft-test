import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userAPI } from '../services/UserService';
import { postAPI } from '../services/PostsService';
import { commentAPI } from '../services/CommentService';
import postReducer from './slices/PostSlice';

const rootReducer = combineReducers({
	postReducer,
	[userAPI.reducerPath]: userAPI.reducer,
	[postAPI.reducerPath]: postAPI.reducer,
	[commentAPI.reducerPath]: commentAPI.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			userAPI.middleware,
			postAPI.middleware,
			commentAPI.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
