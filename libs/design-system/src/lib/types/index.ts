export type HeaderPagesType = Array<{
  name: string;
  link: string;
  onClick: () => void;
}>

export type HeaderButtonsType = Array<{
  name: string;
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  onClick: () => void;
}>

export type HeaderSettingsType = Array<{
  name: string;
  onClick: () => void;
}>
