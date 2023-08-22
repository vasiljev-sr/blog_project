import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'features/editableProfileCard';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = memo(function ProfilePageHeader(
  props: ProfilePageHeaderProps
) {
  const { className } = props;
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button theme="outlined" onClick={onEdit}>
          {t('Редактировать')}
        </Button>
      ) : (
        <div className={cls.buttons}>
          <Button theme="outlined" onClick={onSave} color="success">
            {t('Сохранить')}
          </Button>
          <Button theme="outlined" onClick={onCancelEdit} color="error">
            {t('Отмена')}
          </Button>
        </div>
      )}
    </div>
  );
});
