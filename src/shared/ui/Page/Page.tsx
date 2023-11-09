import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(function Page(props: PageProps) {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLLIElement>;
  const targetRef = useRef() as MutableRefObject<HTMLLIElement>;

  useInfiniteScroll({
    targetRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <div ref={targetRef} />
      }
    </section>
  );
});
