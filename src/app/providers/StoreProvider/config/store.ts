import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
  const rooReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rooReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
