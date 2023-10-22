import { UserSchema } from 'entities/User';
import { NavigateFunction } from 'react-router-dom';
import { LoginSchema } from 'features/authByUserName';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'features/editableProfileCard';
import { ArticlesSchema } from 'entities/Article/';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { CommentFormSchema } from 'features/addCommentForm';
export interface StateSchema {
  user: UserSchema;
  authForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticlesSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: CommentFormSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
