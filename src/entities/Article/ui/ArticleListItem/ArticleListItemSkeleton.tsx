import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo } from 'react';
import { ArticleView } from '../../model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkeleton = memo(function ArticleListItemSkeleton(
  props: ArticleListItemSkeletonProps
) {
  const { className, view = 'gallery' } = props;

  if (view === 'list') {
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height="1rem" className={cls.username} />
            <Skeleton width={100} height="1rem" className={cls.date} />
          </div>
          <Skeleton width={150} height="1.2rem" className={cls.skeletonTitle} />
          <Skeleton width={110} height="1rem" className={cls.types} />
          <Skeleton height={200} className={cls.image} />
          <Skeleton height={200} className={cls.textBlock} />
          <div className={cls.footer}>
            <Skeleton width={60} height="1rem" className={cls.views} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton className={cls.image} />
          <Skeleton width={100} height="1rem" className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={110} height="1rem" className={cls.types} />
          <Skeleton width={60} height="1rem" className={cls.views} />
        </div>
        <Skeleton width={150} height="1.2rem" className={cls.title} />
      </Card>
    </div>
  );
});
