import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
  className?: string;
}
export const PageError = (props: PageErrorProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p className={cls.title}>{t('Что-то пошло не так')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
