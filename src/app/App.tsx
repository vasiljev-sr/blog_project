import './styles/index.scss';
import { Link } from 'react-router-dom';

import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>Change theme</button>
      <AppRouter />
    </div>
  );
};
