import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';

type AppLinkTheme = 'primary' | 'secondary';
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
export const AppLink = memo(function AppLink(props: AppLinkProps) {
  const { className, theme = 'primary', children, ...otherProps } = props;
  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
