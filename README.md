fisx-command-cache
======
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
fisx cache clear --type component # clear all compnent cache
fisx cache clear npm:jquery --type component # clear npm component cache
fisx cache clear github:fisx-scaffold/npm-module --type scaffold # clear github scaffold cache
```
