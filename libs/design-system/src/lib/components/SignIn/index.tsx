import {
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { Button } from '../Button';
import { Copyright } from '../Copyright';

import styles from './styles';
import { Paper } from '../Paper';
import { useTranslation } from 'react-i18next';

export interface SignInProps {
  errorMessage?: string;
  onSubmit?: (email?: string, password?: string) => void;
  onSignUpLinkClick?: () => void;
  onForgotPasswordLinkClick?: () => void;
}

export const SignIn = ({
  errorMessage,
  onSubmit,
  onSignUpLinkClick,
  onForgotPasswordLinkClick,
}: SignInProps) => {
  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();

    if (onSubmit) {
      onSubmit(email, password);
    }
  };

  return (
    <Container sx={styles.container} component="main" maxWidth="xs">
      <Paper sx={styles.paper}>
        <Box sx={styles.icon}>
          <img
            width={100}
            height={100}
            src="../../assets/signin.png"
            alt="Log In"
          />
        </Box>
        <Box sx={styles.content}>
          <Typography component="h1" variant="h5" mt={4}>
            {t('common.signIn.title')}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={styles.formContainer}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={t('common.signIn.email')}
              name="email"
              autoComplete="email"
              autoFocus
              error={!!errorMessage}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t('common.signIn.password')}
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errorMessage}
              helperText={errorMessage}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t('common.signIn.rememberMe')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={styles.submitButton}
            >
              {t('common.buttons.signIn')}
            </Button>
            <Grid container justifyContent="center">
              {onForgotPasswordLinkClick && (
                <Grid item>
                  <Link onClick={onForgotPasswordLinkClick} variant="body2">
                    {t('common.signIn.forgotPassword')}
                  </Link>
                </Grid>
              )}
              {onSignUpLinkClick && (
                <Grid item display="flex">
                  <Typography variant="body2" color="text.secondary">
                    {t('common.signIn.noAccount')}
                  </Typography>
                  <Link
                    sx={styles.signUpLink}
                    onClick={onSignUpLinkClick}
                    variant="body2"
                    ml={0.5}
                  >
                    {t('common.buttons.signUp')}
                  </Link>
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </Paper>
      <Copyright sx={styles.copyright} />
    </Container>
  );
};
