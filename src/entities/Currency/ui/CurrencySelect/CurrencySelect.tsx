import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const options: SelectOptions[] = Object.entries(Currency).map(
  ([value, option]) => {
    return { value: value, option: option };
  }
);

export const CurrencySelect = memo(function CurrencySelect(
  props: CurrencySelectProps
) {
  const { value, onChange } = props;
  const { t } = useTranslation();

  return (
    <Select
      options={options}
      label={t('Валюта')}
      value={value}
      onChangeValue={onChange}
    />
  );
});
