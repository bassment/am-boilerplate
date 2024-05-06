const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederationForSSR } = require('@nx/react/module-federation');

const baseConfig = require('./module-federation.config');

const {
  AUTHORIZATION_MF_SERVER_BASE_URL,
  ACCOUNT_MF_SERVER_BASE_URL,
  LANDINGS_MF_SERVER_BASE_URL,
} = process.env;

const defaultConfig = {
  ...baseConfig,
  remotes: [
    ['authorization', AUTHORIZATION_MF_SERVER_BASE_URL],
    ['myaccount', ACCOUNT_MF_SERVER_BASE_URL],
    ['landings', LANDINGS_MF_SERVER_BASE_URL],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact({ ssr: true }),
  withModuleFederationForSSR(defaultConfig)
);
