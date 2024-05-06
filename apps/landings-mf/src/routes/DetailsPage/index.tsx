import { Typography } from '@am/design-system';
import { useTranslation } from 'react-i18next';

export const DetailsPage = () => {
  const { t } = useTranslation();

  return (
    <Typography variant="h3" marginBottom={2}>
      {t('detailsPage.title')}
    </Typography>
  );
};

export default DetailsPage;
