import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetails,
  getArticleError,
  getArticleLoading,
} from '../../model/selectors/articleDetails';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articlesReducer,
};
export const ArticleDetails = memo(function ArticleDetails(
  props: ArticleDetailsProps
) {
  const { className, id } = props;
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();

  // const isLoading = useSelector(getArticleLoading);
  const isLoading = useSelector(getArticleLoading);
  const error = useSelector(getArticleError);
  const article = useSelector(getArticleDetails);

  useInitialEffect(() => dispatch(fetchArticleById(id)));

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case 'CODE':
        return (
          <ArticleCodeBlockComponent
            block={block}
            className={cls.block}
            key={block.id}
          />
        );
      case 'IMAGE':
        return (
          <ArticleImageBlockComponent
            block={block}
            className={cls.block}
            key={block.id}
          />
        );
      case 'TEXT':
        return (
          <ArticleTextBlockComponent
            block={block}
            className={cls.block}
            key={block.id}
          />
        );
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.skeleton} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        theme="error"
        title={t('Произошла ошибка при загрузке статьи')}
        align="center"
      />
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          {article?.img && (
            <Avatar size={200} src={article?.img} className={cls.avatar} />
          )}
        </div>
        <Text
          title={article?.title}
          text={article?.subtitle}
          size="size_l"
          className={cls.title}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map((block) => renderBlock(block))}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
