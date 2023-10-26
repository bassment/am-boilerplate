import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  HeaderPagesType,
  Snackbar,
  Layout,
  HeaderButtonsType,
  Box,
  Container,
} from '@am/design-system';
import { NotificationType } from '@am/types';
import { Alert, BoxProps } from '@mui/material';
import { useStore } from '../../..';
import styles, { Wrapper } from './styles';

export interface LayoutWithNavigationProps {
  children: React.ReactNode;
}

export const AMLogo = (props: BoxProps) => (
  <Box {...props}>
    <img
      width="100%"
      height="auto"
      src="../../assets/background.png"
      alt="AM Logo"
    />
  </Box>
);

export const LayoutWithNavigation = ({
  children,
}: LayoutWithNavigationProps) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState<NotificationType>();
  const location = useLocation();
  const navigate = useNavigate();
  const { store } = useStore();
  const { t } = useTranslation();

  useEffect(() => {
    if (store.notifications.length > 0) {
      const notification = store.notifications[store.notifications.length - 1];
      setNotification(notification);
      setShowNotification(true);
    }
  }, [store]);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleDetailsClick = () => {
    navigate('/details');
  };

  const handleAccountClick = () => {
    navigate('/account');
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const loggedOutPages: HeaderPagesType = [
    {
      name: t('common.layout.pages.home'),
      link: '/',
      onClick: handleLogoClick,
    },
    {
      name: t('common.layout.pages.details'),
      link: '/details',
      onClick: handleDetailsClick,
    },
    {
      name: t('common.layout.pages.account'),
      link: '/account',
      onClick: handleAccountClick,
    },
  ];

  const loggedOutButtons: HeaderButtonsType = [
    {
      name: t('common.layout.buttons.signup'),
      variant: 'outlined',
      onClick: handleSignUpClick,
    },
    {
      name: t('common.layout.buttons.signin'),
      variant: 'contained',
      onClick: handleSignInClick,
    },
  ];

  const pages: HeaderPagesType = loggedOutPages;
  const buttons: HeaderButtonsType = loggedOutButtons;

  if (
    location?.pathname.includes('/signin') ||
    location?.pathname.includes('/signup')
  ) {
    return <div>{children}</div>;
  }

  return (
    <Wrapper>
      <Layout
        pages={pages}
        buttons={buttons}
        Logo={AMLogo}
        onLogoClick={handleLogoClick}
      >
        <Container component="main" sx={styles.container}>
          {children}
          <Snackbar
            open={showNotification}
            sx={{ marginTop: { xs: '0px', md: '60px' } }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={3000}
            onClose={() => setShowNotification(false)}
          >
            <Alert
              onClose={() => setShowNotification(false)}
              severity={notification?.severity}
              sx={{ width: '100%' }}
            >
              {notification?.message}
            </Alert>
          </Snackbar>
        </Container>
      </Layout>
    </Wrapper>
  );
};

export default LayoutWithNavigation;
