import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  convertNxGenerator,
  generateFiles,
  GeneratorCallback,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  ProjectConfiguration,
  TargetConfiguration,
  Tree,
} from '@nx/devkit';
import { runTasksInSerial } from '@nx/workspace/src/utilities/run-tasks-in-serial';
import { join } from 'path';

import { Schema } from './schema';

export interface NormalizedSchema extends Schema {
  appProjectRoot: string;
}

function getServeConfig(
  project: ProjectConfiguration,
  options: NormalizedSchema
): TargetConfiguration {
  return {
    executor: 'nx:run-script',
    outputs: [],
    options: {
      script: 'start',
    },
  };
}

function addProject(tree: Tree, options: NormalizedSchema) {
  const project: ProjectConfiguration = {
    root: options.appProjectRoot,
    sourceRoot: joinPathFragments(options.appProjectRoot, '.'),
    projectType: 'application',
    targets: {},
  };

  project.targets = project.targets || {};
  project.targets.serve = getServeConfig(project, options);
  addProjectConfiguration(tree, options.name, project);
}

function addAppFiles(tree: Tree, options: NormalizedSchema) {
  generateFiles(tree, join(__dirname, './files'), options.appProjectRoot, {
    ...options,
    tmpl: '',
    name: options.name,
    root: options.appProjectRoot,
  });
  tree.rename(
    joinPathFragments(options.appProjectRoot, '.env.example'),
    joinPathFragments(options.appProjectRoot, '.env')
  );
}

function addProjectDependencies(
  tree: Tree,
  options: NormalizedSchema
): GeneratorCallback {
  const nodeRedDependencies = {
    dotenv: '^16.0.3',
  };

  if (options.uiBuilder) {
    nodeRedDependencies['node-red-contrib-uibuilder'] = '~6.0.0';
  }

  return addDependenciesToPackageJson(
    tree,
    {},
    {
      ...nodeRedDependencies,
    },
    `${options.appProjectRoot}/package.json`
  );
}

export async function applicationGenerator(tree: Tree, schema: Schema) {
  const options = normalizeOptions(tree, schema);
  const tasks: GeneratorCallback[] = [];

  addAppFiles(tree, options);
  addProject(tree, options);
  tasks.push(addProjectDependencies(tree, options));

  return runTasksInSerial(...tasks);
}

function normalizeOptions(host: Tree, options: Schema): NormalizedSchema {
  const appsDir = getWorkspaceLayout(host).appsDir;

  const appDirectory = names(options.name).fileName;

  const appProjectName = appDirectory.replace(new RegExp('/', 'g'), '-');

  const appProjectRoot = options.rootProject
    ? '.'
    : joinPathFragments(appsDir, appDirectory);

  return {
    ...options,
    name: names(appProjectName).fileName,
    appProjectRoot,
    rootProject: options.rootProject ?? false,
    port: options.port ?? 3000,
  };
}

export default applicationGenerator;
export const applicationSchematic = convertNxGenerator(applicationGenerator);
