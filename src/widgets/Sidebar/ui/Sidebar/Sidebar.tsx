import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}
export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };
  return (
    <div data-testid={'sidebar'} className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button data-testid={'sidebar-toggle'} theme={'outlined'} onClick={onToggle}>
        {t('Переключить')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
