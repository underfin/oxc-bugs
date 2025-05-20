import oxc from 'oxc-transform';
import fs from 'fs';

const { code, declaration, errors } = oxc.transform(
  'a.js',
  fs.readFileSync('a.js', 'utf8'),
  {"sourcemap":false,"jsx":{"development":true,"runtime":"automatic","importSource":"react","refresh":true},"lang":"tsx","typescript":{"onlyRemoveTypeImports":false,"removeClassFieldsWithoutInitializer":true},"assumptions":{"setPublicClassFields":true}}
);

fs.writeFileSync('b.js', code);