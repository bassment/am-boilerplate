const footer = {
  width: '100%',
  height: 'auto',
  backgroundColor: 'footer.background',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  marginTop: '2rem',
}

const container = {
  display: 'flex',
  justifyContent: { xs: 'flex-start', md: 'space-between' },
  alignItems: {xs: 'center', md: 'flex-start'},
  flexDirection: { xs: 'column', md: 'row' },
}

const logoContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: {xs: 'center', md: 'flex-start'},
}

const logo = {
  cursor: 'pointer',
  width: '60px',
  height: '30px',
}

const companyLogo = { cursor: 'pointer', mr: 1 }

const title = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontWeight: 700,
  color: 'inherit',
  cursor: 'pointer',
}

const iconsContainer = {
  display: 'flex',
}

const icon = {
  backgroundColor: 'primary.main',
  color: 'icon.secondary',
  borderRadius: '50%',
  padding: '8px',
}

const styles = {
  footer,
  container,
  logoContainer,
  companyLogo,
  logo,
  title,
  iconsContainer,
  icon,
}

export default styles;