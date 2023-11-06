import { HTMLAttributes, FC, memo, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
export const Card: FC<CardProps> = memo(function Card(props: CardProps) {
  const { className, children, ...restProps } = props;

  return (
    <div className={classNames(cls.Card, {}, [className])} {...restProps}>
      {children}
    </div>
  );
});
