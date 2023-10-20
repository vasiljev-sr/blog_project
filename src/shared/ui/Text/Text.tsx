import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

type TextThemes = 'primary' | 'error';
type TextAlign = 'center' | 'left' | 'right';
type TextSize = 'size_m' | 'size_l';
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemes;
  align?: TextAlign;
  size?: TextSize;
}
export const Text = memo(function Text(props: TextProps) {
  const {
    className,
    title,
    text,
    theme = 'primary',
    align = 'left',
    size = 'size_m',
  } = props;
  return (
    <div
      className={classNames(cls.Text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
