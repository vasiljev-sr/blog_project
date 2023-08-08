import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/sun-fill.svg';
import DarkIcon from 'shared/assets/icons/moon-fill.svg';
import { Button } from 'shared/ui/Button/Button';
import { memo, useEffect } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo(function ThemeSwitcher(
  props: ThemeSwitcherProps
) {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Button
      theme="clear"
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
