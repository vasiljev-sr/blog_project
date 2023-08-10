import {
  KeyboardEvent,
  MouseEvent,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from 'shared/ui/Portal/Portal';
import { Mods } from 'shared/lib/types/common';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  closeModal?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 200;
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, closeModal, lazy } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const onClose = useCallback(() => {
    if (closeModal) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        closeModal();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [closeModal]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      // clearTimeout(timerRef.current) так не работает, почему не понятно;
      if (!isOpen) {
        clearTimeout(timerRef.current);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }
  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={onClose}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
