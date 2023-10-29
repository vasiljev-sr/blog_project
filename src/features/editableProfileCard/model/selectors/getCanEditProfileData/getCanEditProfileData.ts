import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'features/editableProfileCard';
import { createSelector } from '@reduxjs/toolkit';

export const getCanEditProfileData = createSelector(
  [getProfileData, getUserAuthData],
  (profile, user) => {
    return user?.id === profile?.id;
  }
);
