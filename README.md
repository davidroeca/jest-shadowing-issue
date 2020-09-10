# Jest Shadowing Issue

This repo reproduces

Tested locally on `Linux Mint 20 Cinnamon` with the following `node` and `npm` versions:

```shell
node --version
v14.9.0
```

```shell
npm --version
6.14.8
```

## Steps to reproduce

```shell
npm install
# Tests pass here
npm run test
# Tests fail here
npm run failing-test
```

The main config difference is that the failing test's jest config uses a `moduleDirectory` of `./` which prevents jest from resolving `my-package` correctly when a package with the same directory.
