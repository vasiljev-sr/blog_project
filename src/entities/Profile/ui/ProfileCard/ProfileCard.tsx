import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}
export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileLoading);
  // const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button theme="outlined">{t('Редактировать')}</Button>
      </div>
      <div className={cls.content}>
        <Input
          className={cls.input}
          value={data?.first_name}
          label={t('Имя')}
          theme="outlined"
        />
        <Input
          className={cls.input}
          value={data?.last_name}
          label={t('Фамилия')}
        />
      </div>
    </div>
  );
};
