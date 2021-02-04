import * as childProcess from 'child_process';
import { workspace, WorkspaceFolder } from 'vscode';

const cwd =  workspace.rootPath;
console.log('CWD:', cwd);

export default async function(command: string, args: string[]): Promise<any> {
  return new Promise((resolve, reject) => {
    let res, stderr = '', stdout = '';

    try {
      const batch = childProcess.spawn(command, args, { cwd });

      batch.stdout.on('data', function(data) {
        stdout += data.toString();
      });
      console.log('STDOUT:', stdout);
      batch.stderr.on('data', data => stdout += data.toString());
      batch.stderr.on('data', data => stderr += data.toString());

      batch.on('close', function() {
        if (stderr !== '')
        {
            console.log('stderr:', stderr);
            return reject(stderr.trim());
        }
        console.log('STDOUT:', stdout);
        resolve(stdout);
      });
    }
    catch (err) {
        console.log('ERR:', err);
      reject(err);
    }
  });
}