import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
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
import { useSelector } from 'react-redux';
import {
  getArticlesPageInited,
  getArticlesPageLoading,
  getArticlesPageView,
} from '../model/selectors/getArticlesPageData';
import { ArticleViewSwitcher } from 'features/changeArticleView';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPart } from '../model/services/fetchNextArticlesPart/fetchNextArticlesPart';
import { fetchInitialArticlesPart } from '../model/services/fetchInitialArticlesPart/fetchInitialArticlesPart';

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
  const inited = useSelector(getArticlesPageInited);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPart());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchInitialArticlesPart());
  });

  const onViewChange = useCallback(
    (view: ArticleView) => dispatch(articlesPageActions.setView(view)),
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} unmountReducers={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames('', {}, [className])}
        watchScroll={false}
      >
        <ArticleViewSwitcher view={view} onViewChange={onViewChange} />
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
