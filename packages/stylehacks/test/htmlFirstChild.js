'use strict';
const { test } = require('node:test');
const processCSS = require('./_processCSS');

test(
  'opera html:first-child hack',
  processCSS('html:first-child h1 { color: red }', '', {
    target: 'opera9',
    unaffected: 'Chrome 58',
  })
);

test(
  'opera html:first-child hack (uppercase)',
  processCSS('HTML:FIRST-CHILD H1 { color: red }', '', {
    target: 'opera9',
    unaffected: 'Chrome 58',
  })
);
