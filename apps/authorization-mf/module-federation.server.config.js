// @ts-check

/**
 * @type {import('@nx/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'authorization-mf',
  exposes: {
    './Module': 'apps/authorization-mf/src/remote-entry.ts',
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
