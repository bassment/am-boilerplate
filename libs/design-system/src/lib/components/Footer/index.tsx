import { Box, IconButton, Link, SvgIconProps } from '@mui/material';
import { Typography } from '../Typography';
import {
  Factory as FactoryIcon,
  Phone as PhoneIcon,
  MailOutline as MailOutlineIcon,
} from '@mui/icons-material';
import styles from './styles';
import { Container } from '../Container';
import { useTranslation } from 'react-i18next';

type FooterProps = {
  title?: string;
  Logo?: React.ComponentType<SvgIconProps>;
  onLogoClick?: () => void;
};

export const Footer = ({ title, Logo, onLogoClick }: FooterProps) => {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={styles.footer}>
      <Container sx={styles.container} maxWidth="xl">
        <Box sx={styles.logoContainer}>
          <Box onClick={onLogoClick}>
            {Logo ? (
              <Logo sx={styles.logo} />
            ) : (
              <Box display="flex">
                <FactoryIcon sx={styles.companyLogo} />
                <Typography
                  variant="h6"
                  noWrap
                  onClick={onLogoClick}
                  sx={styles.title}
                >
                  {title}
                </Typography>
              </Box>
            )}
          </Box>
          <Typography mt={1} variant="body2">
            {t('common.layout.footer.copyright.year')}{' '}
            <Link href="https://nn.nl">
              {t('common.layout.footer.copyright.company')}
            </Link>{' '}
            {t('common.layout.footer.copyright.rights')}
          </Typography>
        </Box>
        <Box sx={styles.iconsContainer}>
          <IconButton size="large">
            <PhoneIcon sx={styles.icon} />
          </IconButton>
          <IconButton
            size="large"
            onClick={() => {
              window.open('mailto:anton.perebyinis@nn.nl');
            }}
          >
            <MailOutlineIcon sx={styles.icon} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
