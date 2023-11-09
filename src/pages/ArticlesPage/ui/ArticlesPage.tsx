import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
  getArticlesPageHasMore,
  getArticlesPageLimit,
  getArticlesPageLoading,
  getArticlesPageNum,
  getArticlesPageView,
} from '../model/selectors/getArticlesPageData';
import { ArticleViewSwitcher } from 'features/changeArticleView';
import { Page } from 'shared/ui/Page/Page';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(function ArticlesPage(props: ArticlesPageProps) {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView);
  const page = useSelector(getArticlesPageNum);
  const hasMore = useSelector(getArticlesPageHasMore);

  const onLoadNextPart = useCallback(() => {
    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  }, [dispatch, hasMore, isLoading, page]);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  });

  const onViewChange = useCallback(
    (view: ArticleView) => dispatch(articlesPageActions.setView(view)),
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames('', {}, [className])}
      >
        <ArticleViewSwitcher view={view} onViewChange={onViewChange} />
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
