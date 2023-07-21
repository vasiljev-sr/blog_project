import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <p data-testid="title">{value}</p>
      <Button data-testid="increment-btn" onClick={increment}>
        increment
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
