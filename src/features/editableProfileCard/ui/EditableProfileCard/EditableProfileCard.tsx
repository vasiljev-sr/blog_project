import { ProfileCard } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';

import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { Text } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'features/editableProfileCard/model/types/profileData';
import { useTranslation } from 'react-i18next';

// interface EditableProfileCardProps {
//   className?: string;
// }

export const EditableProfileCard = () => {
  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка на сервере'),
    [ValidateProfileError.NO_DATA]: t('Нет данных'),
    [ValidateProfileError.INCORRECT_AVATAR]: t('Укажите ссылку на аватар'),
    [ValidateProfileError.INCORRECT_AGE]: t('Укажите корректный возраст'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      'Укажите корректные имя и фамилию'
    ),
  };

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ last_name: value }));
    },
    [dispatch]
  );

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first_name: value }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) }));
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  return (
    <>
      {validateErrors?.length &&
        validateErrors.map((error) => (
          <Text
            theme="error"
            key={error}
            text={validateErrorTranslates[error]}
          />
        ))}
      <ProfileCard
        data={form}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeLastname={onChangeLastname}
        onChangeFirstname={onChangeFirstname}
        onChangeAge={onChangeAge}
        onChangeAvatar={onChangeAvatar}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
      />
    </>
  );
};
