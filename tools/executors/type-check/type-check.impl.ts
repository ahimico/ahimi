// https://github.com/petrkrejcik/nx-test
import { ExecutorContext } from '@nrwl/devkit';
import { detectPackageManager } from '@nrwl/tao/src/shared/package-manager';
import { spawn } from 'child_process';

interface ExecutorOptions {
  outputPath: string;
  tsConfig: string;
}

export default async function tscExecutor(
  tscOptions: ExecutorOptions,
  context: ExecutorContext,
) {
  const packageManager = detectPackageManager();
  const packageManagerCmd =
    packageManager === 'pnpm'
      ? 'pnpx'
      : packageManager === 'yarn'
      ? 'yarn'
      : 'npx';

  const libRoot = context.workspace.projects[context.projectName!].root;
  const { tsConfig = libRoot, outputPath } = tscOptions;
  const executionCode = await new Promise(resolve => {
    let commands = ['tsc', '--noEmit', '-p', tsConfig, '--incremental'];
    if (outputPath) commands = [...commands, '--outDir', outputPath];
    const child = spawn(packageManagerCmd, commands, { stdio: 'inherit' });
    child.on('data', args => console.log(args));
    child.on('close', code => resolve(code));
  });

  return { success: executionCode === 0 };
}
