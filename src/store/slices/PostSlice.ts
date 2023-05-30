import { createSlice } from '@reduxjs/toolkit';

interface PostState {
	postId: number;
}

const initialState: PostState = {
	postId: 0,
};

export const PostSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setCurrentPost: (state, action) => {
			state.postId = action.payload;
		},
	},
});

export const { setCurrentPost } = PostSlice.actions;

export default PostSlice.reducer;
