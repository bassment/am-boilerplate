import {
  TextField,
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

export interface SignUpProps {
  errorMessage?: string;
  onSubmit?: (email?: string, password?: string) => void;
  onSignInLinkClick?: () => void;
}

export const SignUp = ({
  errorMessage,
  onSubmit,
  onSignInLinkClick,
}: SignUpProps) => {
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
            src="../../assets/signup.png"
            alt="Register"
          />
        </Box>
        <Box sx={styles.content}>
          <Typography component="h1" variant="h5" mt={4}>
            {t('common.signUp.title')}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={styles.formContainer}
          >
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={t('common.signUp.email')}
                  name="email"
                  autoComplete="email"
                  error={!!errorMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={t('common.signUp.password')}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={!!errorMessage}
                  helperText={errorMessage}
                />
              </Grid>
              {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={styles.submitButton}
            >
              {t('common.buttons.signUp')}
            </Button>
            {onSignInLinkClick && (
              <Grid container justifyContent="center">
                <Grid item display="flex">
                  <Typography variant="body2" color="text.secondary">
                    {t('common.signUp.alreadyHaveAccount')}
                  </Typography>
                  <Link
                    sx={styles.signInLink}
                    onClick={onSignInLinkClick}
                    variant="body2"
                    ml={0.5}
                  >
                    {t('common.buttons.signIn')}
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
      </Paper>
      <Copyright sx={styles.copyright} />
    </Container>
  );
};

export default SignUp;
