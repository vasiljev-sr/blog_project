import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(function ArticleDetailsPage(
  props: ArticleDetailsPageProps
) {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article-details');

  if (!id) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text text="error" title={t('Статья не найдена')} />
      </div>
    );
  }
  return (
    <div className={classNames('', {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
});

export default ArticleDetailsPage;
