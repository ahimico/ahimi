# Contributing to ahimi

We would love for you to contribute to ahimi! Read this document to see how to do it.

## Found an Issue?

If you find a bug in the source code or a mistake in the documentation, you can help us by [submitting an issue](https://github.com/ahimico/ahimi/blob/main/CONTRIBUTING.md#submit-issue) to [our GitHub Repository](https://github.com/ahimico/ahimi). Even better, you can [submit a Pull Request](https://github.com/ahimico/ahimi/blob/main/CONTRIBUTING.md#submit-pr) with a fix.

## Project Structure

Source code and documentation are included in the top-level folders listed below.

- `apps` - Source code for applications and their related e2e tests.
- `libs` - Source code for shared packages such as shared styles, components, configurations.
- `tools` - Miscellaneous scripts for project tasks such as code formatting and possibly nx generators.

### Running Unit Tests

To make sure your changes do not break any unit tests, run the following:

```bash
yarn nx affected --target=test
```

For example, if you need to only run the tests for the specific package, run:

```bash
yarn nx test <package-name>
```

### Running E2E Tests

**Use Node 14 and NPM 6. E2E tests won't work on Node 15 and NPM 7.**

To make sure your changes do not break any E2E tests, run:

```bash
yarn nx e2e <project-name>
```

Running E2E tests can take some time, so it is often useful to run a single test. To run a single suite of tests, run:

```bash
nx e2e e2e-cli -t versions
# Some often add qqqq to their test name so they can use -t qqqq
```

### Developing on Windows

To build Nx on Windows, you need to use WSL.

- Run `yarn install` in WSL. Yarn will compile several dependencies. If you don't run `install` in WSL, they will be compiled for Windows.
- Run `nx affected --target=test` and other commands in WSL.

#### Troubleshooting: `JavaScript heap out of memory`

If you see an error that states: `FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory`, you need to [increase the max memory size of V8's old memory section](https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes):

```bash
export NODE_OPTIONS="--max-old-space-size=4096"
```

After configuring this, try to run `npx nx serve nx-dev` again.

## Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker. An issue for your problem may already exist and has been resolved, or the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. Having a reproducible scenario gives us wealth of important information without going back and forth with you requiring additional information, such as:

- the output of `nx report`
- `yarn.lock` or `yarn.lock`
- and most importantly - a use-case that fails

A minimal reproduction allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem.

We will be insisting on a minimal reproduction in order to save maintainers' time and ultimately be able to fix more bugs. Interestingly, from our experience, users often find coding problems themselves while preparing a minimal reproduction repository. We understand that sometimes it might be hard to extract essentials bits of code from a larger codebase, but we really need to isolate the problem before we can fix it.

You can file new issues by filling out our [issue form](https://github.com/ahimico/ahimi/issues/new/choose).

### <a name="submit-pr"></a> Submitting a PR

Please follow the following guidelines:

- Make sure unit tests pass (`nx affected --target=test`)
  - Target a specific project with: `nx run proj:test` (i.e. `nx run angular:test` to target `packages/angular`)
  - Target a specific unit test file (i.e. `packages/angular/src/utils/ast-command-line-utils.spec.ts`) with `npx jest angular/src/utils/ast-utils` or `npx jest packages/angular/src/utils/ast-utils`
  - For more options on running tests - check `npx jest --help` or visit [jestjs.io](https://jestjs.io/)
  - Debug with `node --inspect-brk ./node_modules/jest/bin/jest.js build/packages/angular/src/utils/ast-utils.spec.js`
- Make sure e2e tests pass (this can take a while, so you can always let CI check those) (`yarn e2e`)
  - Target a specific e2e test (i.e. `/build/e2e/cypress.test.js`) with `yarn e2e cypress`
  - Debug with `node --inspect-brk ./node_modules/jest/bin/jest.js build/e2e/cypress.test.js`
- Make sure you run `yarn format`
- Update documentation with `yarn documentation`. For documentation, check for spelling and grammatical errors.
- Update your commit message to follow the guidelines below (use `yarn commit` to automate compliance)
  - `yarn check-commit` will check to make sure your commit messages are formatted correctly

#### Commit Message Guidelines

The commit message should follow the following format:

```plain
type(scope): subject
BLANK LINE
body
```

##### Type

The type must be one of the following:

- feat - New or improved behavior being introduced (e.g. Updating to new versions of React or Jest which bring in new features)
- fix - Fixes the current unexpected behavior to match expected behavior (e.g. Fixing the library generator to create the proper named project)
- cleanup - Code Style changes that have little to no effect on the user (e.g. Refactoring some functions into a different file)
- chore - Changes that have absolutely no effect on users (e.g. Updating the version of Nx used to build the repo)

##### Scope

The scope must be one of the following:

- app: anything multiverse specific
- me2e: anything multiverse e2e specific
- style: anything Style specific
- testing: anything testing specific (e.g., jest or cypress)
- repo: anything related to managing the repo itself
- core: anything related to managing the repo itself
- misc: misc stuff

##### Subject and Body

The subject must contain a description of the change, and the body of the message contains any additional details to provide more context about the change.

Including the issue number that the PR relates to also helps with tracking.

#### Example

```plain
feat(app): add an option to generate lazy-loadable modules

`nx generate lib styles --lazy` provisions the styles library in eslintrc.json

Closes #15
```

#### Commitizen

To simplify and automate the process of committing with this format,
**ahimi is a [Commitizen](https://github.com/commitizen/cz-cli) friendly repository**, just do `git add` and execute `yarn commit`.

> you might need to install `git-cz` first :)
