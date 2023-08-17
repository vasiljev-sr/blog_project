import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
} from 'react';
import { Mods } from 'shared/lib/types/common';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  type?: string;
  label?: string;
  theme?: 'outlined' | 'outlined-inverted';
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  fullWidth?: boolean;
  readOnly?: boolean;
}

export const Input = memo(function Input(props: InputProps) {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    autoFocus,
    fullWidth = false,
    theme = 'outlined',
    readOnly = false,
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

  const mods: Mods = {
    [cls.readonly]: readOnly,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <div
      className={classNames(cls.inputWrapper, mods, [className, cls[theme]])}
    >
      {label && <label className={cls.label}>{label}</label>}
      <input
        ref={ref}
        value={value}
        onChange={handleChange}
        className={classNames(cls.input, mods)}
        type={type}
        autoFocus={autoFocus}
        readOnly={readOnly}
        {...restProps}
      />
    </div>
  );
});
