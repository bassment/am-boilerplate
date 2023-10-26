import {
  Link as MUILink,
  Typography as MUITypography,
  TypographyProps,
} from '@mui/material';

export const Copyright = (props: TypographyProps) => {
  return (
    <MUITypography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <MUILink color="inherit" href="https://nn.nl/" target="_blank">
        NN.NL
      </MUILink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </MUITypography>
  );
};
