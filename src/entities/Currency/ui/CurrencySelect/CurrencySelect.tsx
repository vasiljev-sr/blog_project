import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { classNames } from 'shared/lib/classNames/classNames';

interface CurrencySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: Currency) => void;
  disabled?: boolean;
}

const options: SelectOptions[] = Object.entries(Currency).map(
  ([value, option]) => {
    return { value: value, option: option };
  }
);

export const CurrencySelect = memo(function CurrencySelect(
  props: CurrencySelectProps
) {
  const { value, onChange, className, disabled } = props;
  const { t } = useTranslation();

  const onHandleChange = useCallback(
    (value: string) => onChange?.(value as Currency),
    [value, onChange]
  );

  return (
    <Select
      options={options}
      label={t('Валюта')}
      value={value}
      onChangeValue={onHandleChange}
      className={className}
      disabled={disabled}
    />
  );
});
