import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesReducer } from 'entities/Article';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo(function ArticlesPage(props: ArticlesPageProps) {
  const { className } = props;
  const { t } = useTranslation();
  return <div className={classNames('', {}, [className])}>ARTICLE PAGE</div>;
});

export default ArticlesPage;