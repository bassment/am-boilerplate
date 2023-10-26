import { Linter } from '@nx/linter';

export interface Schema {
  name: string;
  uiBuilder?: boolean;
  directory?: string;
  port?: number;
  rootProject?: boolean;
  docker?: boolean;
}

export type NodeJsFrameWorks = 'express' | 'koa' | 'fastify' | 'none';
