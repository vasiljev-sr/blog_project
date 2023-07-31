import { StoryFn } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/authByUserName/model/slice/loginSlice';

// eslint-disable-next-line react/display-name

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  authForm: loginReducer,
};
export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  (Story: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}
      >
        <Story />
      </StoreProvider>
    );
