const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');

const baseConfig = require('./module-federation.config');

const GENERIC_MF_BASE_URL =
  process.env.GENERIC_MF_BASE_URL || 'http://localhost:4201';
const AUTHORIZATION_MF_BASE_URL =
  process.env.AUTHORIZATION_MF_BASE_URL || 'http://localhost:4202';
const ACCOUNT_MF_BASE_URL =
  process.env.ACCOUNT_MF_BASE_URL || 'http://localhost:4203';

const prodConfig = {
  ...baseConfig,
  remotes: [
    ['authorization', AUTHORIZATION_MF_BASE_URL],
    ['myaccount', ACCOUNT_MF_BASE_URL],
    ['generic', GENERIC_MF_BASE_URL],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
