import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}
export const SidebarItem = memo(function SidebarItem(props: SidebarItemProps) {
  const { item, collapsed } = props;
  const { title, path, Icon } = item;
  const { t } = useTranslation();

  return (
    <AppLink
      to={path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme="secondary"
    >
      <Icon className={cls.icon} />
      <span className={cls.link}> {t(title)}</span>
    </AppLink>
  );
});
