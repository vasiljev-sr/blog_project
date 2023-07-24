import { LoginForm } from '../LoginForm/LoginForm';
import { Modal } from 'shared/ui/Modal/Modal';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal = (props: LoginModalProps) => {
  const { className, onClose, isOpen } = props;
  return (
    <Modal isOpen={isOpen} className={className} closeModal={onClose}>
      <LoginForm />
    </Modal>
  );
};
