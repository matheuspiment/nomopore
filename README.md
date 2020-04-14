# Nomopore

A repo to ilustre the maintenance and the work in progress of a serverless-monorepo based project.

## Root dependencies

Dependencies like lerna, which are used by all packages, can be installed on the "root project", but to use them for packages inside of `./packages/*` you need to be in the root directory (where lerna is installed) and run the command with `lerna exec` or `lerna nun`. For example: `lerna run test` (for all projects) or `lerna run --scope @matheuspiment/nomopore-endpoint-circle test`.

## Managing self dependencies

Using **yarn workspaces** we faced problems related to installing dependencies:

- https://github.com/yarnpkg/yarn/issues/6148
- https://github.com/yarnpkg/yarn/issues/4206

Without yarn workspaces the dependency package is copied to the `node_modules` folder of the dependent package. To see that, run (from the root directory) the commend `lerna bootstrap --force-local`.

## Publish the package or use as layer

Packages that are dependencies can be published to any registry and fetched in the deployment process of the dependent package as an unusal node_modules dependency. The [`nomopore-common`](https://github.com/matheuspiment/nomopore/packages/176914) published on github is an example.

Another approach is deploy the dependency as a layer. Currently the `nomopore-common` package is using this approach, as you can see [here](packages/common/serverless.yml). Remember to remove the namespace (`@matheuspiment`) folder inside of `node_modules`, once we are using it as layer. You can see an example [here](packages/endpoint-circle/serverless.yml).

## Test and deploy

The output of the `lerna changed` command can be used to get the packages that needs to be tested and / or deployed, but a strategy to generate tags is necessary, once the `lerna changed` command uses tags:

> List local packages that have changed since the last tagged release
