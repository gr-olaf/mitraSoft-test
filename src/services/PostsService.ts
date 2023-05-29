import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { PostsResponse } from '../models/response/PostsResponse';

export const postAPI = createApi({
	reducerPath: 'postAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: (build) => ({
		getAllPosts: build.query<PostsResponse[], any>({
			query: () => ({
				url: `/posts`,
			}),
		}),
		getPostById: build.query<PostsResponse, number>({
			query: (id) => ({
				url: `/posts`,
				params: {
					userId: id,
				},
			}),
		}),
	}),
});
