import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

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
    <div
      data-testid={'sidebar'}
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.items}>
        <AppLink to={RoutePaths.main} className={cls.item} theme={'secondary'}>
          <HomeIcon className={cls.icon} />
          <span className={cls.link}> {t('Главная')}</span>
        </AppLink>
        <AppLink to={RoutePaths.about} theme={'secondary'} className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}> {t('О проеке')}</span>
        </AppLink>
      </div>
      <Button
        data-testid={'sidebar-toggle'}
        theme={'inverted'}
        onClick={onToggle}
        className={cls.collapsedBtn}
        square
        size={'size_l'}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
