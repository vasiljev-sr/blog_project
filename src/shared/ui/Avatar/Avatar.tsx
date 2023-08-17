import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
  className?: string;
  size?: number;
  alt?: string;
  src: string;
}
export const Avatar = (props: AvatarProps) => {
  const { className, size, alt, src } = props;

  const style = useMemo((): CSSProperties => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);

  return (
    <img
      style={style}
      src={src}
      alt={alt || 'Image'}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};
