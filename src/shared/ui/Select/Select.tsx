import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectProps {
  className?: string;
  label?: string;
}
export const Select = (props: SelectProps) => {
  const { className, label } = props;
  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select className={cls.select}>
        <option>Value 1</option>
        <option>Value 2</option>
      </select>
    </div>
  );
};
