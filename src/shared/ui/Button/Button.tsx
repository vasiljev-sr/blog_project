import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export type ButtonTheme = 'clear' | 'outlined' | 'background' | 'inverted';

export type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}
export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, theme, children, square, size, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };
  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      {...otherProps}
      type={'button'}
    >
      {children}
    </button>
  );
};
