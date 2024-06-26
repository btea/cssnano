'use strict';
const { test } = require('node:test');
const processCSS = require('./_processCSS');

test(
  'ie 6 underscore hack',
  processCSS('h1 { _color: red }', 'h1 { }', {
    target: 'IE 6',
    unaffected: 'IE 7',
  })
);

test(
  'ie 6 underscore hack (uppercase)',
  processCSS('h1 { _COLOR: red }', 'h1 { }', {
    target: 'IE 6',
    unaffected: 'IE 7',
  })
);

test(
  'ie 6 hyphen hack',
  processCSS('h1 { -color: red }', 'h1 { }', {
    target: 'IE 6',
    unaffected: 'IE 7',
  })
);

test(
  'ie 6 hyphen hack (uppercase)',
  processCSS('h1 { -COLOR: red }', 'h1 { }', {
    target: 'IE 6',
    unaffected: 'IE 7',
  })
);

test(
  'prefixed value must be ignored',
  processCSS(
    'h1 { -moz-tab-size: 10px }',
    'h1 { -moz-tab-size: 10px }',
    { target: 'IE 6', unaffected: 'IE 7' },
    0
  )
);

test(
  'prefixed value must be ignored (uppercase)',
  processCSS(
    'h1 { -MOZ-TAB-SIZE: 10px }',
    'h1 { -MOZ-TAB-SIZE: 10px }',
    { target: 'IE 6', unaffected: 'IE 7' },
    0
  )
);

test(
  'custom property must be ignored',
  processCSS(
    'h1 { --color-foobar: #000; }',
    'h1 { --color-foobar: #000; }',
    { target: 'IE 6', unaffected: 'IE 7' },
    0
  )
);

test(
  'custom property must be ignored (uppercase)',
  processCSS(
    'h1 { --COLOR-FOOBAR: #000; }',
    'h1 { --COLOR-FOOBAR: #000; }',
    { target: 'IE 6', unaffected: 'IE 7' },
    0
  )
);
