import { useEffect } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  EditableProfileCard,
  fetchProfileData,
  profileReducer,
} from 'features/editableProfileCard';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} unmountReducers>
      <ProfilePageHeader />
      <EditableProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
