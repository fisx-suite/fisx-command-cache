fisx-command-cache
======

[![Dependency Status](https://david-dm.org/wuhy/fisx-command-cache.svg)](https://david-dm.org/wuhy/fisx-command-cache) [![devDependency Status](https://david-dm.org/wuhy/fisx-command-cache/dev-status.svg)](https://david-dm.org/wuhy/fisx-command-cache#info=devDependencies) [![NPM Version](https://img.shields.io/npm/v/fisx-command-cache.svg?style=flat)](https://npmjs.org/package/fisx-command-cache)

> Clear components or scaffold install cache

## How to use

### View the cache directory

```shell
fisx cache dir # view the cache root dir
fisx cache dir --type scaffold # view the scaffold cache dir
fisx cache dir --type component # view the component cache dir
```

### Clear cache

```shell
fisx cache clear # clear all cache
fisx cache clear --type scaffold # clear all scaffold cache
fisx cache clear --type component # clear all component cache
fisx cache clear etpl # clear named etpl component and scaffold cache
fisx cache clear npm:jquery --type component # clear npm component cache
fisx cache clear github:fisx-scaffold/npm-module --type scaffold # clear github scaffold cache
```
