import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: Country) => void;
  disabled?: boolean;
}

const options: SelectOptions[] = Object.entries(Country).map(
  ([value, option]) => {
    return { value: value, option: option };
  }
);

export const CountrySelect = memo(function CountrySelect(
  props: CountrySelectProps
) {
  const { value, onChange, className, disabled } = props;
  const { t } = useTranslation();

  const onHandleChange = useCallback(
    (value: string) => onChange?.(value as Country),
    [value, onChange]
  );
  return (
    <Select
      options={options}
      label={t('Страна')}
      value={value}
      onChangeValue={onHandleChange}
      className={className}
      disabled={disabled}
    />
  );
});
