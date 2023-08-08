import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = memo(function LangSwitcher(
  props: LangSwitcherProps
) {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggleLang}
      className={classNames('', {}, [className])}
      theme="clear"
    >
      {t('Язык')}
    </Button>
  );
});
