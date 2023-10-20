import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  function ArticleTextBlockComponent(props: ArticleTextBlockComponentProps) {
    const { className, block } = props;

    const { title, paragraphs } = block;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {title && <Text title={title} className={cls.title} />}
        {paragraphs &&
          paragraphs.map((text, index) => (
            <Text text={text} key={index} className={cls.paragraph} />
          ))}
      </div>
    );
  }
);
