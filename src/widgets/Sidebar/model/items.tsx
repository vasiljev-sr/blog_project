import React from 'react';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
export interface SidebarItemType {
  path: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  title: string;
  authOnly?: boolean;
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: routePaths.main,
    title: 'Главная',
    Icon: HomeIcon,
  },
  {
    path: routePaths.about,
    title: 'О проеке',
    Icon: AboutIcon,
  },
  {
    path: routePaths.profile,
    title: 'Профиль',
    Icon: ProfileIcon,
    authOnly: true,
  },
];
