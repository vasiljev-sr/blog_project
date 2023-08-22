import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, useCallback, useMemo } from 'react';

export interface SelectOptions {
  value?: string;
  option: string;
}
interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChangeValue?: (value: string) => void;
  disabled?: boolean;
}
export const Select = (props: SelectProps) => {
  const { className, label, options, value, onChangeValue, disabled } = props;

  const onHandleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChangeValue?.(e.target.value);
    },
    [onChangeValue]
  );

  const selectOptions = useMemo(
    () =>
      options?.map((item) => (
        <option value={item.value} key={item.value} className={cls.option}>
          {item.option}
        </option>
      )),
    [options]
  );
  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onHandleChange}
        disabled={disabled}
      >
        {selectOptions}
      </select>
    </div>
  );
};
