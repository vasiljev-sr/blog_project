import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { loginActions, LoginModal } from 'features/authByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { getLoginState } from 'features/authByUserName/model/selectors/getLoginState/getLoginState';

interface NavbarProps {
  className?: string;
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  // const [open, setOpen] = useState(false);
  const { isOpenModal } = useSelector(getLoginState);

  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onCloseModal = useCallback(
    () => dispatch(loginActions.closeModal()),
    [dispatch]
  );

  const onOpenModal = useCallback(() => {
    dispatch(loginActions.openModal());
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      {authData ? (
        <>
          <Button theme="clear" className={cls.links} onClick={onLogout}>
            {t('Выйти')}
          </Button>
        </>
      ) : (
        <>
          <Button theme="outlined" className={cls.links} onClick={onOpenModal}>
            {t('Войти')}
          </Button>
          <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
        </>
      )}
    </div>
  );
};
