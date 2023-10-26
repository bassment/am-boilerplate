const appBar = {
  boxShadow: 'none',
  backgroundColor: 'transparent',
}

const container = {
}

const title = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
}

const titleMobile = {
  mr: 2,
  display: { xs: 'flex', md: 'none' },
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
}

const toolbar = {
  display: 'flex',
  justifyContent: 'space-between',
}

const menuContainer = { display: { xs: 'flex', md: 'none' } }

const menu = {
  display: { xs: 'block', md: 'none' },
}

const externalLogo = { cursor: 'pointer', mr: 1, width: { xs: '60px', md: '120px' }, height: { xs: '30px', md: '60px' } };

const companyLogo = { cursor: 'pointer', mr: 1 }

const pagesContainer = { display: { xs: 'none', md: 'flex' } }

const buttonsContainer = { justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }

const navLink = { my: 2, display: 'block', marginLeft: '48px', textDecoration: 'none', cursor: 'pointer', color: 'text.primary' }

const activeNavLink = { my: 2, display: 'block', marginLeft: '48px', textDecoration: 'none', cursor: 'pointer', color: 'action.active', fontWeight: 700 }

const mobileNavLink = { color: 'text.primary' }

const mobileActiveNavLink = { color: 'action.active', fontWeight: 700 }

const navButton = { my: 2, display: 'block', marginLeft: '16px' }

const userContainer = { flexGrow: 0, display: { xs: 'none' } }

const avatarButton = { p: 0 }

const userMenu = { mt: '45px' }

export default {
  appBar,
  container,
  title,
  titleMobile,
  menuContainer,
  menu,
  toolbar,
  externalLogo,
  companyLogo,
  pagesContainer,
  buttonsContainer,
  navLink,
  activeNavLink,
  mobileNavLink,
  mobileActiveNavLink,
  navButton,
  userContainer,
  avatarButton,
  userMenu
}