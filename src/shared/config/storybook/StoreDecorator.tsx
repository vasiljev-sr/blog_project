import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

import { loginReducer } from 'features/authByUserName';
import { ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'features/editableProfileCard';
import { articlesReducer } from 'entities/Article';
import { commentFormReducer } from 'features/addCommentForm';
import { articleCommentsReducer } from 'pages/ArticleDetailsPage';

// eslint-disable-next-line react/display-name

const defaultAsyncReducers: ReducersList = {
  authForm: loginReducer,
  profile: profileReducer,
  articleDetails: articlesReducer,
  addCommentForm: commentFormReducer,
  articleDetailsComments: articleCommentsReducer,
};
export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducer?: ReducersList) =>
  (Story: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}
      >
        <Story />
      </StoreProvider>
    );
