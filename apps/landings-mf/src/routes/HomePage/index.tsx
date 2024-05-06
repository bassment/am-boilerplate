import { Typography } from '@am/design-system';
import { useTranslation } from 'react-i18next';

import styles from './styles';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Typography variant="h4" sx={styles.title}>
      {t('homePage.title')}
    </Typography>
  );
};

export default HomePage;
