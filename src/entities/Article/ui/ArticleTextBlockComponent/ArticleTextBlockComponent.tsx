import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = memo(
  function ArticleTextBlockComponent(props: ArticleTextBlockComponentProps) {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      ></div>
    );
  }
);
