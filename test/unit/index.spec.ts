// test/unit/index.test.js

import { expect } from 'chai';

import { readFileSync } from 'fs';

import { add, version } from '../../src/index';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

describe('The template source code', function () {
  it('should have the same version as package.json', function () {
    expect(version).to.equal(pkg.version);
  });

  it('should add numbers', function () {
    expect(add(2, 2)).to.equal(4);
  });
});
