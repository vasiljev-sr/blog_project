import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <form className={classNames(cls.LoginForm, {}, [className])}>
      <Input className={cls.input} label={t('Логин')} autoFocus />
      <Input className={cls.input} label={t('Пароль')} />
      <Button className={cls.loginBtn} theme="outlined">
        {t('Войти')}
      </Button>
    </form>
  );
};
