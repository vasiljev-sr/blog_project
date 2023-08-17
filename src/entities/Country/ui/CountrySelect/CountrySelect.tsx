import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const options: SelectOptions[] = Object.entries(Country).map(
  ([value, option]) => {
    return { value: value, option: option };
  }
);

export const CountrySelect = memo(function CountrySelect(
  props: CountrySelectProps
) {
  const { value, onChange } = props;
  const { t } = useTranslation();

  return (
    <Select
      options={options}
      label={t('Страна')}
      value={value}
      onChangeValue={onChange}
    />
  );
});
