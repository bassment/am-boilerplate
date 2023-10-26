// This file can be replaced during build by using the `fileReplacements` array.

import { isServer } from '../utils/isServer';

// When building for production, this file is replaced with `environment.prod.ts`.
export const environment = {
  production: false,
  // put here your local ip address for server to be able to call(it can't call localhost, only client can)
  beUrl: !isServer ? 'http://localhost:1880' : 'http://192.168.2.82:1880',
};
