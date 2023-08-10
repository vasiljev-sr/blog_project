import { useEffect } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} unmountReducers>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
