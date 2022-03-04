# Template module

> Template for a TypeScript module (browser + node).

## Getting Started: in a web page

Current major browsers are supported but not Internet Explorer (edit `targets`
in `rollup.config.js` and run `npm run build` to change this).

Load the script from the CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/template-ts@1"></script>
```

The module is exported as `TemplateTs`:

```html
<script>
  document.write(TemplateTs.version);
</script>
```

## Getting Started: in Node.js

Node >= 12 is currently supported in the distributed modules.

Install from `npm`:

```console
$ npm i template-ts
```

Require CommonJS module:

```js
// Default should work...
const TemplateTs = require('template-ts');
// ...or specify CommonJS module.
const TemplateTs = require('template-ts/dist/cjs');
```

or import as an ES6 module:

```js
// Default should work...
import TemplateTs from 'template-ts';
// ...or specify ES6 module.
import TemplateTs from 'template-ts/dist/esm';
```

### Using

## Documentation

## Contributing

## License

Distributed under the MIT License. See [LICENSE] for more information.

## Contact

## Acknowledgements
