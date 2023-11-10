import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

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
  const dispatch = useAppDispatch();
  const mountedReducers = store.reducerManager.getMountedReducers();

  useEffect(() => {
    Object.entries(reducers).map(([name, reducer]) => {
      // Добавляем новый редюсер если его нет в словаре
      if (!mountedReducers[name as StateSchemaKey]) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (unmountReducers) {
        Object.keys(reducers).map((name) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@REMOVE ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
