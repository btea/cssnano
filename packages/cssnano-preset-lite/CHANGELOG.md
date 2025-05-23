# Change Log

## 4.0.4

### Patch Changes

- 5672148: fix: update PostCSS peer dependency to version without vulnerabilities
- Updated dependencies [171b669]
- Updated dependencies [4772407]
- Updated dependencies [5672148]
  - postcss-discard-comments@7.0.4
  - postcss-normalize-whitespace@7.0.1
  - postcss-discard-empty@7.0.1
  - cssnano-utils@5.0.1

## 4.0.3

### Patch Changes

- Updated dependencies [1d65a10]
  - postcss-discard-comments@7.0.3

## 4.0.2

### Patch Changes

- Updated dependencies [dff5c42]
  - postcss-discard-comments@7.0.2

## 4.0.1

### Patch Changes

- Updated dependencies [9e8606a]
  - postcss-discard-comments@7.0.1

## 4.0.0

### Major Changes

- 0d10597: chore: drop support for Node.js 14 and 16

### Patch Changes

- Updated dependencies [0d10597]
  - postcss-normalize-whitespace@7.0.0
  - postcss-discard-comments@7.0.0
  - postcss-discard-empty@7.0.0
  - cssnano-utils@5.0.0

## 3.1.0

### Minor Changes

- feat: add preset and plugin options for browserslist

### Patch Changes

- enable “go to definition” via declaration maps
- Updated dependencies
  - cssnano-utils@4.0.2
  - postcss-discard-comments@6.0.2
  - postcss-discard-empty@6.0.3
  - postcss-normalize-whitespace@6.0.2

## 3.0.2

### Patch Changes

- Updated dependencies [4bf74ef]
  - postcss-discard-empty@6.0.2

## 3.0.1

### Patch Changes

- 18331a6: fix: update cssnano peer dependency to 8.4.31 to avoid security issue
- Updated dependencies [18331a6]
  - cssnano-utils@4.0.1
  - postcss-discard-comments@6.0.1
  - postcss-discard-empty@6.0.1
  - postcss-normalize-whitespace@6.0.1

## 3.0.0

### Major Changes

- ca9d3f55: Switch minimum supported Node version to 14 for all packages

### Patch Changes

- Updated dependencies [ca9d3f55]
  - postcss-normalize-whitespace@6.0.0
  - postcss-discard-comments@6.0.0
  - postcss-discard-empty@6.0.0
  - cssnano-utils@4.0.0

## 2.1.3

### Patch Changes

- chore: update TypeScript and improve types
- Updated dependencies
  - postcss-discard-comments@5.1.2

## 2.1.2

### Patch Changes

- fix: correct package.json dependency version specifier

## 2.1.1

### Patch Changes

- fix: improve type declarations

## 2.1.0

### Minor Changes

- feature: add TypeScript type declarations

### Patch Changes

- Updated dependencies
  - cssnano-utils@3.1.0
  - postcss-discard-comments@5.1.0
  - postcss-discard-empty@5.1.0
  - postcss-normalize-whitespace@5.1.0

## 2.0.3

### Patch Changes

- Publish untranspiled CommonJS source
- Updated dependencies
  - cssnano-utils@3.0.2
  - postcss-discard-comments@5.0.3
  - postcss-discard-empty@5.0.3
  - postcss-normalize-whitespace@5.0.4

## 2.0.2 (2022-01-07)

### Patch Changes

- refactor: remove getMatch function from cssnano-utils

  The getMatch function allows nested arrays to emulate a map.
  It is better to replace this function with a regular Map().
  It's unlikely this function is used outside of cssnano as it requires
  a very specific nested array struture.

- Updated dependencies
  - cssnano-utils@3.0.0
  - postcss-normalize-whitespace@5.0.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/cssnano/cssnano/compare/cssnano-preset-lite@2.0.0...cssnano-preset-lite@2.0.1) (2021-05-19)

**Note:** Version bump only for package cssnano-preset-lite

# [2.0.0](https://github.com/cssnano/cssnano/compare/cssnano-preset-lite@2.0.0-rc.2...cssnano-preset-lite@2.0.0) (2021-04-06)

**Note:** Version bump only for package cssnano-preset-lite

# [2.0.0-rc.2](https://github.com/cssnano/cssnano/compare/cssnano-preset-lite@2.0.0-rc.1...cssnano-preset-lite@2.0.0-rc.2) (2021-03-15)

**Note:** Version bump only for package cssnano-preset-lite

# [2.0.0-rc.1](https://github.com/cssnano/cssnano/compare/cssnano-preset-lite@2.0.0-rc.0...cssnano-preset-lite@2.0.0-rc.1) (2021-03-04)

**Note:** Version bump only for package cssnano-preset-lite

# 2.0.0-rc.0 (2021-02-19)

### Features

- migrate to PostCSS 8 ([#975](https://github.com/cssnano/cssnano/issues/975)) ([40b82dc](https://github.com/cssnano/cssnano/commit/40b82dca7f53ac02cd4fe62846dec79b898ccb49))

### BREAKING CHANGES

- minimum supported `postcss` version is `8.2.1`
