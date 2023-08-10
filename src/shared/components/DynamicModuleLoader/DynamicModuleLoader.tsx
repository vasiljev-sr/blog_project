import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  unmountReducers?: boolean;
}
export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, unmountReducers = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).map(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `INIT ${name} reducer` });
    });

    return () => {
      if (unmountReducers) {
        Object.keys(reducers).map((name) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `REMOVE ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
