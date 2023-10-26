import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  SvgIconProps,
  Link,
  Dialog,
  List,
  ListItem,
  Slide,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Factory as FactoryIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { Location, useLocation } from 'react-router-dom';
import {
  HeaderButtonsType,
  HeaderPagesType,
  HeaderSettingsType,
} from '../../types';
import styles from './styles';
import { Button } from '../Button';
import { TransitionProps } from '@mui/material/transitions';

export interface HeaderProps {
  title: string;
  pages?: HeaderPagesType;
  buttons?: HeaderButtonsType;
  settings?: HeaderSettingsType;
  Logo?: React.ComponentType<SvgIconProps>;
  onLogoClick?: () => void;
  onSignInClick?: () => void;
  onSignUpClick?: () => void;
  onLogoutClick?: () => void;
}

const linkIsActive = (path: string, location?: Location) => {
  const pathName = location?.pathname || '';
  if (pathName === '/' && path === '/') {
    return true;
  } else if (pathName.includes(path) && path !== '/') {
    return true;
  } else {
    return false;
  }
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Header = ({
  title,
  pages,
  buttons = [],
  settings,
  Logo,
  onLogoClick,
}: HeaderProps) => {
  const location = useLocation();
  const theme = useTheme();
  const mobileDialogBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={styles.appBar} color="default" position="static">
      <Container sx={styles.container} maxWidth="xl">
        <Toolbar sx={styles.toolbar} disableGutters>
          {Logo ? (
            <Box onClick={onLogoClick}>
              <Logo sx={styles.externalLogo} />
            </Box>
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

          <Box sx={styles.menuContainer}>
            {pages && (
              <IconButton size="large" onClick={handleOpenDialog}>
                <MenuIcon
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'icon.secondary',
                    borderRadius: '50%',
                    padding: '8px',
                  }}
                />
              </IconButton>
            )}
            <Dialog
              fullScreen={mobileDialogBreakpoint}
              open={dialogOpen}
              onClose={handleCloseDialog}
              TransitionComponent={Transition}
            >
              <AppBar sx={styles.appBar} color="default" position="static">
                <Container sx={styles.container} maxWidth="xl">
                  <Toolbar sx={styles.toolbar} disableGutters>
                    {Logo ? (
                      <Box onClick={onLogoClick}>
                        <Logo sx={styles.externalLogo} />
                      </Box>
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
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleCloseDialog}
                      aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                  </Toolbar>
                </Container>
              </AppBar>
              <Container sx={styles.container} maxWidth="xl">
                <List>
                  {pages &&
                    pages.map((page) => (
                      <ListItem
                        key={page.name}
                        sx={{ paddingLeft: 0 }}
                        button
                        onClick={() => {
                          page.onClick && page.onClick();
                          handleCloseDialog();
                        }}
                      >
                        <Typography
                          sx={
                            linkIsActive(page.link, location)
                              ? styles.mobileActiveNavLink
                              : styles.mobileNavLink
                          }
                        >
                          {page.name}
                        </Typography>
                      </ListItem>
                    ))}
                </List>
                {buttons &&
                  buttons.map((button) => (
                    <Button
                      key={button.name}
                      sx={{ ...styles.navButton, marginLeft: 0 }}
                      variant={button.variant}
                      onClick={() => {
                        button.onClick && button.onClick();
                        handleCloseDialog();
                      }}
                    >
                      {button.name}
                    </Button>
                  ))}
              </Container>
            </Dialog>
          </Box>
          <Box sx={styles.pagesContainer}>
            {pages &&
              pages.map((page) => (
                <Link
                  key={page.name}
                  sx={
                    linkIsActive(page.link, location)
                      ? styles.activeNavLink
                      : styles.navLink
                  }
                  onClick={() => {
                    page.onClick && page.onClick();
                    handleCloseDialog();
                  }}
                >
                  {page.name}
                </Link>
              ))}
          </Box>
          <Box sx={styles.buttonsContainer}>
            {buttons &&
              buttons.map((button) => (
                <Button
                  key={button.name}
                  size="small"
                  sx={styles.navButton}
                  variant={button.variant}
                  onClick={() => {
                    button.onClick && button.onClick();
                    handleCloseDialog();
                  }}
                >
                  {button.name}
                </Button>
              ))}
          </Box>

          <Box sx={styles.userContainer}>
            {settings && (
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={styles.avatarButton}
                >
                  <Avatar alt="Bildi Digital" />
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={styles.userMenu}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings &&
                settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => {
                      setting.onClick && setting.onClick();
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
