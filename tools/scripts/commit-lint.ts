#!/usr/bin/env node

// @ts-ignore
import { scopes, types } from '../../.cz-config.js';

type Types = { value: string; name: string }[];
type Scopes = { name: string; description: string }[];

console.log('🐳🐳🐳 Validating git commit message 🐳🐳🐳');
const gitMessage = require('child_process')
  .execSync('git log -1 --no-merges')
  .toString()
  .trim();

const allowedTypes = (types as Types).map(type => type.value);
const allowedScopes = (scopes as Scopes).map(scope => scope.name);

const commitMsgRegex = `(${allowedTypes.join('|')})\\((${allowedScopes.join(
  '|',
)})\\):\\s(([a-z0-9:\-\s])+)`;

const matchCommit = new RegExp(commitMsgRegex, 'g').test(gitMessage);
const matchRevert = /Revert/gi.test(gitMessage);
const matchRelease = /Release/gi.test(gitMessage);
const exitCode = +!(matchRelease || matchRevert || matchCommit);

if (exitCode === 0) {
  console.log('Commit ACCEPTED 👍');
} else {
  console.log(
    '[Error]: Oh no! 😦 Your commit message: \n' +
      '-------------------------------------------------------------------\n' +
      gitMessage +
      '\n-------------------------------------------------------------------' +
      '\n\n 👉️ Does not follow the commit message convention specified in the CONTRIBUTING.MD file.',
  );
  console.log('\ntype(scope): subject \n BLANK LINE \n body');
  console.log('\n');
  console.log(`possible types: ${allowedTypes.join('|')}`);
  console.log(
    `possible scopes: ${allowedScopes.join('|')} (if unsure use "core")`,
  );
  console.log(
    '\nEXAMPLE: \n' +
      'feat(app): add an option to generate lazy-loadable modules\n',
  );
}
process.exit(exitCode);
