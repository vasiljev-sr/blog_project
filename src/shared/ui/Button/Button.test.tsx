import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('render', () => {
    render(<Button>BUTTON</Button>);
    expect(screen.getByText('BUTTON')).toBeInTheDocument();
  });

  test('has "clear" class', () => {
    render(<Button theme={'clear'}>BUTTON</Button>);
    expect(screen.getByText('BUTTON')).toHaveClass('clear');
  });
});
