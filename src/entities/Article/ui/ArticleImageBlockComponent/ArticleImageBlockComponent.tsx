import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  function ArticleImageBlockComponent(props: ArticleImageBlockComponentProps) {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        <div className={cls.imgWrapper}>
          <img src={block.src} alt={block.title} className={cls.img} />
        </div>
        {block.title && <Text text={block.title} align="center" />}
      </div>
    );
  }
);
