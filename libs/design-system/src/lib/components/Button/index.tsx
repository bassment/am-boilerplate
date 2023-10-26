import { Button as MUIButton, ButtonProps } from '@mui/material';

export const Button = (props: ButtonProps) => {
  let style = { ...props.sx };
  if (props.variant === 'contained') {
    style = { color: 'white', textTransform: 'uppercase', ...style };
  }
  if (props.variant === 'outlined') {
    style = { textTransform: 'uppercase', ...style };
  }

  return <MUIButton {...props} sx={style} />;
};
