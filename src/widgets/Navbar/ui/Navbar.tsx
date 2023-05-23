import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} className={cls.mainLink} theme={'secondary'}>
          Home
        </AppLink>
        <AppLink to={'/about'} theme={'secondary'}>
          About
        </AppLink>
      </div>
    </div>
  );
};
