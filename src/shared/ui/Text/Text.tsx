import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

type TextThemes = 'primary' | 'error';
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemes;
}
export const Text = memo(function Text(props: TextProps) {
  const { className, title, text, theme = 'primary' } = props;
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
