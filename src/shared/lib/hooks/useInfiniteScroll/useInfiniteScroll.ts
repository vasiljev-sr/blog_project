import { MutableRefObject, useEffect } from 'react';

interface ObserverOptions {
  callback?: () => void;
  targetRef: MutableRefObject<HTMLLIElement>;
  wrapperRef: MutableRefObject<HTMLLIElement>;
}

export const useInfiniteScroll = (props: ObserverOptions) => {
  const { callback, wrapperRef, targetRef } = props;

  useEffect(() => {
    const targetElement = targetRef.current;
    const wrapperElement = wrapperRef.current;
    let observer: IntersectionObserver | null = null;
    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entries]) => {
        if (entries.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(targetElement);
    }

    return () => {
      if (observer && targetElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetElement);
      }
    };
  }, [wrapperRef, targetRef, callback]);
};
