import { Typography } from '@am/design-system';
import { useTranslation } from 'react-i18next';
import { NotificationEventType } from '@am/types';
import styles from './styles';
import { useNotification } from '@am/shared';

export const AccountPage = () => {
  const { t } = useTranslation();
  const notifictions = useNotification();
  const accountNotification: NotificationEventType = 'USER_DELETED';

  console.log('Account MF APP', notifictions, accountNotification);

  return (
    <Typography color="primary.main" variant="h3" sx={styles.title}>
      {t('accountPage.title')}
    </Typography>
  );
};

export default AccountPage;
