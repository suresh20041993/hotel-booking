import { readFileSync, writeFileSync } from 'fs';

const readJSON = (filePath: string) => {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
};

const writeJSON = (filePath: string, data: any) => {
  writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

export { readJSON, writeJSON };
