/**
 * @file 入口模块，基于 `fis3-command-init` 模块修改
 * @author sparklewhy@gmail.com
 */

exports.name = 'cache [command] <components> --type scaffold | component';
exports.desc = 'clear components and scaffold cache';
exports.options = {
    '-h, --help': 'print this help message',
    '-t, --type <type>': 'specify cache type to clear: `scaffold` | `component`, or clear all by default'
};

exports.commands = {
    dir: 'show the cache directory',
    clear: 'clear the cache: clear <component> or clear --type component'
};

exports.run = function (argv, cli, env) {
    if (argv.h || argv.help) {
        return cli.help(exports.name, exports.options, exports.commands);
    }

    argv._.shift();
    var options = {
        root: env.cwd
    };

    var pkgManage = require('fisx-package');
    var cmds = argv._;
    return pkgManage.initProjectRoot(env.configNameSearch[0], options, fis)
        .then(pkgManage.loadUserConfig.bind(this, env.configNameSearch[0], options, fis))
        .then(function () {
            var cacheManage = pkgManage.cache(fis);

            var type = argv.t || argv.type;
            if (cmds.indexOf('dir') !== -1 || !cmds.length) {
                cacheManage.showCacheDir((type === true || !type) ? null : type);
                return;
            }

            if (cmds[0] !== 'clear') {
                fis.log.warn('unknown sub command: %s', cmds[0]);
                return;
            }

            cmds.shift();
            cacheManage.clearCache(type === true ? null : type, cmds);
        });
};
