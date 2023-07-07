import cls from './Navbar.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
  className?: string;
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={RoutePaths.main}
          className={cls.mainLink}
          theme={'secondary'}
        ></AppLink>
      </div>
    </div>
  );
};
