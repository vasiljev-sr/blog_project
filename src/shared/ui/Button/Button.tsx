import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { Mods } from 'shared/lib/types/common';

export type ButtonTheme = 'clear' | 'outlined' | 'background' | 'inverted';
export type ButtonSize = 'size_m' | 'size_l' | 'size_xl';
export type ButtonColor = 'primary' | 'error' | 'success';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  color?: ButtonColor;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}
export const Button: FC<ButtonProps> = memo(function Button(
  props: ButtonProps
) {
  const {
    className,
    theme = 'clear',
    children,
    disabled,
    square,
    size = 'size_m',
    color = 'primary',
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };
  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
        cls[color],
      ])}
      type="button"
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
