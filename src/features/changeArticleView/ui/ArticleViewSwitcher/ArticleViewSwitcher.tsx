import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSwitcher.module.scss';
import { memo } from 'react';
import { ArticleView } from 'entities/Article';
import GalleryIcon from 'shared/assets/icons/gallery.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticleViewSwitcherProps {
  className?: string;
  view: ArticleView;
  onViewChange?: (view: ArticleView) => void;
}

const views = [
  {
    view: 'gallery',
    icon: GalleryIcon,
  },
  {
    view: 'list',
    icon: ListIcon,
  },
];

export const ArticleViewSwitcher = memo(function ArticleViewSwitcher(
  props: ArticleViewSwitcherProps
) {
  const { className, view, onViewChange } = props;

  const onClick = (view: ArticleView) => () => {
    onViewChange?.(view);
  };
  return (
    <div className={classNames(cls.ArticleViewSwitcher, {}, [className])}>
      {views.map((item) => (
        <Button key={item.view} onClick={onClick(item.view as ArticleView)}>
          <Icon
            Svg={item.icon}
            className={classNames('', {
              [cls.notSelectedView]: item.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});
