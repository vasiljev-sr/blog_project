import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export type ThemeButton = 'clear';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, theme = 'clear', children, ...otherProps } = props;
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
