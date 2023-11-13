import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesOrder = (state: StateSchema) =>
  state.articlesFilter?.order ?? 'asc';
export const getArticlesSort = (state: StateSchema) =>
  state.articlesFilter?.sort ?? 'createdAt';
export const getArticlesSearch = (state: StateSchema) =>
  state.articlesFilter?.search ?? '';
