import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { PostsResponse } from '../models/response/PostsResponse';

export const postAPI = createApi({
	reducerPath: 'postAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: (build) => ({
		getAllPosts: build.query<PostsResponse[], number>({
			query: (_limit) => ({
				url: `/posts`,
				params: {
					_limit: _limit,
				},
			}),
		}),
		getPostById: build.query<PostsResponse[], number>({
			query: (userId) => ({
				url: `/posts`,
				params: {
					userId: userId,
				},
			}),
		}),
	}),
});
