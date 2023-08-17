import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

type TextThemes = 'primary' | 'error';
type TextAlign = 'center' | 'left' | 'right';
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemes;
  align?: TextAlign;
}
export const Text = memo(function Text(props: TextProps) {
  const { className, title, text, theme = 'primary', align = 'left' } = props;
  return (
    <div
      className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
