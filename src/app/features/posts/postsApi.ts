import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: [ 'Post' ], // Định nghĩa tags để cache dữ liệu
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
      providesTags: [ 'Post' ],
    }),

    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: [ 'Post' ],
    }),

    updatePost: builder.mutation<Post, Partial<Post>>({
      query: (updatedPost) => ({
        url: `/posts/${updatedPost.id}`,
        method: 'PUT',
        body: updatedPost,
      }),
      invalidatesTags: [ 'Post' ],
    }),

    deletePost: builder.mutation<{ id: number }, number>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [ 'Post' ],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
