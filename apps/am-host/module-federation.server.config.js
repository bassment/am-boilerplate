// @ts-check

/**
 * @type {import('@nx/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'am-host',
  remotes: ['landings-mf', 'authorization-mf', 'account-mf'],
};

module.exports = moduleFederationConfig;
