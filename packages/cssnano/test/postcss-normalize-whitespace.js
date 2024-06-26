'use strict';
const { test } = require('node:test');
const processCss = require('./_processCss');

test(
  'should trim whitespace from nested functions (preset)',
  processCss(
    'h1{width:calc(10px - ( 100px / var(--test) ))}',
    'h1{width:calc(10px - 100px/var(--test))}'
  )
);
