import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetails,
  getArticleError,
} from '../../model/selectors/articleDetails';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

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
  const isLoading = true;
  const error = useSelector(getArticleError);
  const article = useSelector(getArticleDetails);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

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
    content = 'Article details';
  }

  return (
    <DynamicModuleLoader reducers={reducers} unmountReducers={true}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
