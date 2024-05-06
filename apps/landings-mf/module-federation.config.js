/**
 * @type {import('@nx/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'landings-mf',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
