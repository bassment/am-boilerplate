# Node-RED Application Generator with Nx Workspace

This is a generator for creating a Node-RED application within an Nx Workspace. With this generator, you can quickly set up a Node-RED application with a user interface builder option.

## Prerequisites

Before using this generator, you should have the following installed on your machine:

- Node.js
- NX CLI
- Nx Workspace

### Usage

To generate a new Node-RED application with a user interface builder option, use the following command:

```bash
nx workspace-generator node-red --name=<app-name> --uiBuilder=true
```

Replace <app-name> with the desired name of your application.

The node-red folder contains the Node-RED application code.

To start the Node-RED application, run the following command:

```bash
 nx run <app-name>:serve
```

### Options

The following options are available when generating a new Node-RED application:

- `name`: The name of the Nx Workspace and the Node-RED application. Required.
- `uiBuilder`: Whether to include the user interface builder option. Defaults to false.

## License

This generator is licensed under the MIT License. See the LICENSE file for details.
