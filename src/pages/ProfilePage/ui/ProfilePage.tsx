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
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <ProfilePageHeader />
        <EditableProfileCard />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
