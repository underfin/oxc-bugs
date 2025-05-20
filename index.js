import oxc from 'oxc-transform';
import fs from 'fs';

const { code, declaration, errors } = oxc.transform(
  'input.js',
  fs.readFileSync('input.js', 'utf8'),
  {"sourcemap":false,"jsx":{"development":true,"runtime":"automatic","importSource":"react","refresh":true},"lang":"tsx","typescript":{"onlyRemoveTypeImports":false,"removeClassFieldsWithoutInitializer":true},"assumptions":{"setPublicClassFields":true}}
);

fs.writeFileSync('output.js', code);