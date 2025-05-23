# Change Log

## 7.0.1

### Patch Changes

- 5672148: fix: update PostCSS peer dependency to version without vulnerabilities

## 7.0.0

### Major Changes

- 0d10597: chore: drop support for Node.js 14 and 16

## 6.0.2

### Patch Changes

- enable “go to definition” via declaration maps

## 6.0.1

### Patch Changes

- 18331a6: fix: update cssnano peer dependency to 8.4.31 to avoid security issue

## 6.0.0

### Major Changes

- ca9d3f55: Switch minimum supported Node version to 14 for all packages

## 5.1.1

### Patch Changes

- fix: preserve empty custom properties and ensure they work in Chrome

## 5.1.0

### Minor Changes

- feature: add TypeScript type declarations

## 5.0.4

### Patch Changes

- Publish untranspiled CommonJS source

## 5.0.3

### Patch Changes

- refactor: remove implicit boolean conversion
- refactor: replace array with set

## 5.0.2 (2022-01-07)

### Patch Changes

- refactor: use Map as a cache

## [5.0.1](https://github.com/cssnano/cssnano/compare/postcss-normalize-whitespace@5.0.0...postcss-normalize-whitespace@5.0.1) (2021-05-19)

**Note:** Version bump only for package postcss-normalize-whitespace

# [5.0.0](https://github.com/cssnano/cssnano/compare/postcss-normalize-whitespace@5.0.0-rc.2...postcss-normalize-whitespace@5.0.0) (2021-04-06)

**Note:** Version bump only for package postcss-normalize-whitespace

# [5.0.0-rc.2](https://github.com/cssnano/cssnano/compare/postcss-normalize-whitespace@5.0.0-rc.1...postcss-normalize-whitespace@5.0.0-rc.2) (2021-03-15)

**Note:** Version bump only for package postcss-normalize-whitespace

# [5.0.0-rc.1](https://github.com/cssnano/cssnano/compare/postcss-normalize-whitespace@5.0.0-rc.0...postcss-normalize-whitespace@5.0.0-rc.1) (2021-03-04)

**Note:** Version bump only for package postcss-normalize-whitespace

# 5.0.0-rc.0 (2021-02-19)

### Bug Fixes

- normalize-whitespace for var/env/contant function ([#835](https://github.com/cssnano/cssnano/issues/835)) ([c8ff54f](https://github.com/cssnano/cssnano/commit/c8ff54f4f6a168ca2a6f74d6fdbef5f28dc89282))

### chore

- minimum require version of node is 10.13 ([#871](https://github.com/cssnano/cssnano/issues/871)) ([28bda24](https://github.com/cssnano/cssnano/commit/28bda243e32ce3ba89b3c358a5f78727b3732f11))

### Features

- migrate to PostCSS 8 ([#975](https://github.com/cssnano/cssnano/issues/975)) ([40b82dc](https://github.com/cssnano/cssnano/commit/40b82dca7f53ac02cd4fe62846dec79b898ccb49))

### BREAKING CHANGES

- minimum supported `postcss` version is `8.2.1`
- minimum require version of node is 10.13

## 4.1.9 (2019-02-12)

### Performance Improvements

- **postcss-normalize-whitespace:** increase perf ([#699](https://github.com/cssnano/cssnano/issues/699)) ([fe19120](https://github.com/cssnano/cssnano/commit/fe19120a4fc1e3c8cb014c40fc0e01cb95ffac5a))

## 4.1.5 (2018-10-17)

## 4.1.1 (2018-09-24)

### Bug Fixes

- **postcss-merge-longhand:** not mangle border output ([#555](https://github.com/cssnano/cssnano/issues/555)) ([9a70605](https://github.com/cssnano/cssnano/commit/9a706050b621e7795a9bf74eb7110b5c81804ffe)), closes [#553](https://github.com/cssnano/cssnano/issues/553) [#554](https://github.com/cssnano/cssnano/issues/554)
