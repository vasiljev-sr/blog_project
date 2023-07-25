import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
} from 'react';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  type?: string;
  label?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  fullWidth?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    autoFocus,
    fullWidth = false,
    ...restProps
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {label && <label className={cls.label}>{label}</label>}
      <input
        ref={ref}
        value={value}
        onChange={handleChange}
        className={classNames(cls.input, { [cls.fullWidth]: fullWidth })}
        type={type}
        autoFocus={autoFocus}
        {...restProps}
      />
    </div>
  );
});
