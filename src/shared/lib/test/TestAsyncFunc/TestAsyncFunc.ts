import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, RejectedValue>;

export function testAsyncFunc<Return, Arg, RejectedValue>(
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
) {
  const dispatch: jest.MockedFn<any> = jest.fn();
  const getState: () => StateSchema = jest.fn();

  const callThunk = (arg: Arg) => {
    const action = actionCreator(arg);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return action(dispatch, getState, undefined);
  };

  return {
    callThunk,
    dispatch,
  };
}
