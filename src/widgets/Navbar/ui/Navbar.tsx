import cls from './Navbar.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features';

interface NavbarProps {
  className?: string;
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const [open, setOpen] = useState(false);
  const closeModal = useCallback(() => setOpen(false), []);

  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme="outlined"
        className={cls.links}
        onClick={() => setOpen(true)}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={open} onClose={closeModal} />
    </div>
  );
};
