import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(function CommentList(props: CommentListProps) {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard
            className={cls.comment}
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t('Нет комментариев')} />
      )}
    </div>
  );
});
