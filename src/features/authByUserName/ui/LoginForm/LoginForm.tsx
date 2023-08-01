import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  authForm: loginReducer,
};
const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getLoginError);

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
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={t('Указаны неверные данные')} theme="error" />}
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
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
