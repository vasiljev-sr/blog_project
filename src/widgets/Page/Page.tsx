import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getScrollByPath,
  scrollSavingSliceActions,
} from 'features/scrollPositionSaving';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
  watchScroll?: boolean;
}

export const Page = memo(function Page(props: PageProps) {
  const { className, children, onScrollEnd, watchScroll = true } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLLIElement>;
  const targetRef = useRef() as MutableRefObject<HTMLLIElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname)
  );

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  useInfiniteScroll({
    targetRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (watchScroll) {
      dispatch(
        scrollSavingSliceActions.setScrollPosition({
          path: pathname,
          position: e.currentTarget.scrollTop,
        })
      );
    }
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onScrollEnd && <div ref={targetRef} className={cls.trigger} />
      }
    </section>
  );
});
