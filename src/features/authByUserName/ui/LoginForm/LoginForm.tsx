import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
interface LoginFormProps {
  className?: string;
}
export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (username: string) => {
      dispatch(loginActions.setUsername(username));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch]
  );

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <form className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={error} theme="error" />}
      <Input
        className={cls.input}
        label={t('Логин')}
        autoFocus
        fullWidth
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        label={t('Пароль')}
        fullWidth
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme="outlined"
        onClick={onLogin}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </form>
  );
});
