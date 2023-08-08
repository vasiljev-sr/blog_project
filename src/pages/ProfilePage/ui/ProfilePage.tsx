import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers} unmountReducers>
      <div>
        <h1>{t('Профиль')}</h1>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
