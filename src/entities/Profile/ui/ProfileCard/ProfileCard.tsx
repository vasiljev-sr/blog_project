import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { ProfileData } from 'features/editableProfileCard';
import { Text } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface ProfileCardProps {
  className?: string;
  data?: ProfileData;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
}
export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeAge,
    onChangeAvatar,
    onChangeCity,
    onChangeUsername,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.isLoading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('Произошла ошибка при загрузке')}
          text={t('Попробуйте обновить страницу')}
          theme="error"
          align="center"
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      {data?.avatar && <Avatar src={data.avatar} alt={t('Аватар')} />}
      <Input
        className={cls.input}
        value={data?.first_name}
        label={t('Имя')}
        theme="outlined"
        readOnly={readonly}
        onChange={onChangeFirstname}
      />
      <Input
        className={cls.input}
        value={data?.last_name}
        label={t('Фамилия')}
        readOnly={readonly}
        onChange={onChangeLastname}
      />
      <Input
        className={cls.input}
        value={data?.age}
        label={t('Возраст')}
        readOnly={readonly}
        onChange={onChangeAge}
      />
      <Input
        className={cls.input}
        value={data?.username}
        label={t('Имя пользователя')}
        readOnly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        className={cls.input}
        value={data?.city}
        label={t('Город')}
        readOnly={readonly}
        onChange={onChangeCity}
      />
      <Input
        className={cls.input}
        value={data?.avatar}
        label={t('Ссылка на аватар')}
        readOnly={readonly}
        onChange={onChangeAvatar}
      />
    </div>
  );
};
