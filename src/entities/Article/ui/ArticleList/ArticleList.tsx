import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

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
          className={cls.card}
        />
      );
    },
    [isLoading, view]
  );

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {new Array(view === 'gallery' ? 9 : 3).fill(0).map((item, index) => (
          <ArticleListItemSkeleton view={view} key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});
