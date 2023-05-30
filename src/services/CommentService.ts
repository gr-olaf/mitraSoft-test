import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { CommentResponse } from '../models/response/CommentResponse';

export const commentAPI = createApi({
	reducerPath: 'commentAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: (build) => ({
		getAllComments: build.query<CommentResponse[], any>({
			query: () => ({
				url: `/comments`,
			}),
		}),
		getCommentById: build.query<CommentResponse[], number>({
			query: (postId) => ({
				url: `/comments`,
				params: {
					postId: postId,
				},
			}),
		}),
	}),
});
