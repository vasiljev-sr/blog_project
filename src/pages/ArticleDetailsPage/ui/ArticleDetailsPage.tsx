import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
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
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { Button } from 'shared/ui/Button/Button';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  const onGoBack = useCallback(() => {
    navigate(routePaths.articles);
  }, [navigate]);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  if (!id) {
    return (
      <Page className={classNames('', {}, [className])}>
        <Text text="error" title={t('Статья не найдена')} />
      </Page>
    );
  }
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames('', {}, [className])}>
        <Button theme="outlined" onClick={onGoBack}>
          {t('Назад к списку')}
        </Button>
        <ArticleDetails id={id} />
        <AddCommentForm onSendComment={onSendComment} />
        <Text title={t('Комментарии')} className={cls.commentTitle} />
        <CommentList isLoading={isLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
