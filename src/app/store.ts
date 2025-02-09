import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from 'features/posts/postsApi';
import postsReducer from 'features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

// Lấy kiểu dữ liệu của store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
