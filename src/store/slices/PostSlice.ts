import { createSlice } from '@reduxjs/toolkit';

interface PostState {
	postId: number;
	search: string;
	sort: boolean;
}

const initialState: PostState = {
	postId: 0,
	search: '',
	sort: false,
};

export const PostSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setCurrentPost: (state, action) => {
			state.postId = action.payload;
		},
		setSearchPost: (state, action) => {
			state.search = action.payload;
		},
	},
});

export const { setCurrentPost, setSearchPost } = PostSlice.actions;

export default PostSlice.reducer;
