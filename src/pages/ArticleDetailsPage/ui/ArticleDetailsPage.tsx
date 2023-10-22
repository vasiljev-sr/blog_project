import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';
import { CommentList } from 'entities/Comment';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleCommentsReducer,
  getArticleComments,
} from '../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsLoading } from '../model/selectors/articleCommentsSelectors/articleCommentsSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleCommentsReducer,
};

const ArticleDetailsPage = memo(function ArticleDetailsPage(
  props: ArticleDetailsPageProps
) {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsLoading);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  if (!id) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text text="error" title={t('Статья не найдена')} />
      </div>
    );
  }
  return (
    <DynamicModuleLoader reducers={reducers} unmountReducers>
      <div className={classNames('', {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} className={cls.commentTitle} />
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
