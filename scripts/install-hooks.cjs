const { execFileSync } = require('node:child_process');
const { chmodSync } = require('node:fs');
const { join } = require('node:path');

const root = execFileSync('git', ['rev-parse', '--show-toplevel'], {
  encoding: 'utf8',
}).trim();
const hook = join(root, '.githooks', 'pre-commit');

execFileSync('git', ['config', 'core.hooksPath', '.githooks'], {
  cwd: root,
  stdio: 'inherit',
});
chmodSync(hook, 0o755);
console.log('Git hooks installed at .githooks.');
