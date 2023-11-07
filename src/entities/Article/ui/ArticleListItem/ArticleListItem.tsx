import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo, useCallback } from 'react';
import {
  Article,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleListItem = memo(function ArticleListItem(
  props: ArticleListItemProps
) {
  const { className, article, view = 'gallery', isLoading } = props;
  const { user, img, title, views, createdAt, type, blocks, id } =
    props.article;
  const { t } = useTranslation('article-details');
  const navigate = useNavigate();

  const articleTitle = <Text className={cls.title} text={title} />;
  const articleViews = (
    <>
      {' '}
      <Text className={cls.views} text={String(views)} />
      <Icon Svg={EyeIcon} />
    </>
  );

  const articleTypes = <Text className={cls.types} text={type.join(', ')} />;

  const onOpenArticle = useCallback(() => {
    navigate(routePaths.articleDetails + id);
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <ArticleListItemSkeleton view={view} />
      </div>
    );
  }

  if (view === 'list') {
    const textBlock = blocks.find(
      (block) => block.type === 'TEXT'
    ) as ArticleTextBlock;
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            {user.avatar && <Avatar src={user.avatar} size={30} />}
            <Text text={user.username} className={cls.username} />
            <Text text={createdAt} className={cls.date} />
          </div>
          {articleTitle}
          {articleTypes}
          <img src={img} alt={title} className={cls.image} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <Button theme="outlined" onClick={onOpenArticle}>
              {t('Читать далее')}
            </Button>
            {articleViews}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          <img src={img} alt={title} className={cls.image} />
          <Text text={createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {articleTypes}
          {articleViews}
        </div>
        {articleTitle}
      </Card>
    </div>
  );
});
