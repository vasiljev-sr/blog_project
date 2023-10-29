import { createSelector } from '@reduxjs/toolkit';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { getUserAuthData } from 'entities/User';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
  const sidebarItemsList: SidebarItemType[] = [
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
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        path: routePaths.profile + authData.id,
        title: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: routePaths.articles,
        title: 'Статьи',
        Icon: ProfileIcon,
        authOnly: true,
      }
    );
  }
  return sidebarItemsList;
});
