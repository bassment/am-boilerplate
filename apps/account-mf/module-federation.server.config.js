// @ts-check

/**
 * @type {import('@nx/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'account-mf',
  exposes: {
    './Module': 'apps/account-mf/src/remote-entry.ts',
  },
  shared: (lib, config) => {
    if (
      lib === '@am/design-system' ||
      lib === '@am/shared' ||
      lib === '@am/types'
    ) {
      return {
        ...config,
        singleton: true,
        eager: true,
      };
    }
  },
};

module.exports = moduleFederationConfig;
