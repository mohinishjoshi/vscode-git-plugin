import exec from './exec';

export default async function(branch: string): Promise<any> {
  const command = 'git';
  const args = ['checkout', `${branch}`];

  return exec(command, args);
}