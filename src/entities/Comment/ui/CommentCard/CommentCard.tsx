import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import appRouter from 'app/providers/Router/ui/AppRouter';
import { routePaths } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(function CommentCard(props: CommentCardProps) {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height="1rem" width={50} />
        </div>
        <Skeleton className={cls.commentText} height="1rem" />
      </div>
    );
  }
  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink
        to={`${routePaths.profile}${comment.user.id}`}
        className={cls.header}
      >
        {comment.user.avatar ? (
          <Avatar src={comment.user.avatar} size={30} />
        ) : null}
        <Text text={comment.user.username} />
      </AppLink>
      <Text className={cls.commentText} text={comment.text} />
    </div>
  );
});
