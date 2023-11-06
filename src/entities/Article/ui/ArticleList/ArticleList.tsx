import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = memo(function ArticleList(props: ArticleListProps) {
  const { className, articles, view = 'gallery', isLoading } = props;
  const { t } = useTranslation();

  const renderArticle = useCallback(
    (item: Article) => {
      return (
        <ArticleListItem
          article={item}
          view={view}
          isLoading={isLoading}
          key={item.id}
        />
      );
    },
    [isLoading, view]
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});
