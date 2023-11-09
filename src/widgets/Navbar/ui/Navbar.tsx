import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/authByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}
export const Navbar = memo(function Navbar(props: NavbarProps) {
  const { className } = props;
  const [open, setOpen] = useState(false);

  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onCloseModal = useCallback(() => setOpen(false), []);

  const onOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      {authData ? (
        <>
          <Button theme="clear" className={cls.links} onClick={onLogout}>
            {t('Выйти')}
          </Button>
        </>
      ) : (
        <>
          <Button theme="clear" className={cls.links} onClick={onOpenModal}>
            {t('Войти')}
          </Button>
          <LoginModal isOpen={open} onClose={onCloseModal} />
        </>
      )}
    </header>
  );
});
