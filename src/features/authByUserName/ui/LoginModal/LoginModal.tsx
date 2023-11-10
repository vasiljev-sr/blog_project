import { LoginFormLazy } from '../LoginForm/LoginFormLazy';
import { Modal } from 'widgets/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal = (props: LoginModalProps) => {
  const { className, onClose, isOpen } = props;
  return (
    <Modal isOpen={isOpen} className={className} closeModal={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
