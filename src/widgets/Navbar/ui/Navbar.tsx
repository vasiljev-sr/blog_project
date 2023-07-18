import cls from './Navbar.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={'outlined'}
        className={cls.links}
        onClick={() => setOpen(true)}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={open} closeModal={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa,
        cumque ea error est explicabo facilis harum inventore iste itaque odio
        officiis optio perspiciatis quaerat reiciendis reprehenderit sapiente
        sunt vel?
      </Modal>
    </div>
  );
};
