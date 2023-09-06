import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetails = (state: StateSchema) => {
  return state.articleDetails?.data;
};
export const getArticleError = (state: StateSchema) => {
  return state.articleDetails?.error;
};
export const getArticleLoading = (state: StateSchema) => {
  return state.articleDetails?.isLoading;
};
