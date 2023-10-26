import React from "react";
import { ThemeProvider as MUIThemeProvider, ThemeWithProps } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export interface AuthProviderProps {
  children: React.ReactNode;
  theme: ThemeWithProps;
}

export const ThemeProvider = ({ children, theme }: AuthProviderProps) => {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
