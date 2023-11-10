import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <Page>
      <h1>{t('Главная')}</h1>
    </Page>
  );
};

export default HomePage;
