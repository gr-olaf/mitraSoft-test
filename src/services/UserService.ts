import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { UserResponse } from '../models/response/UserResponse';

export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: (build) => ({
		getUserById: build.query<UserResponse[], number>({
			query: (id) => ({
				url: `/users?id=${id}`,
			}),
		}),
	}),
});
