import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonTheme = 'clear' | 'outlined' | 'background' | 'inverted';
export type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}
export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, theme, children, disabled, square, size, ...otherProps } =
    props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };
  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      type="button"
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
