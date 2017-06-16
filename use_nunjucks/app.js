const nunjucks = require('nunjucks')

function createEnv(path, opts) {
    let autoescape = opts.autoescape && true,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache,
                watch,
            }), {
                autoescape,
                throwOnUndefined,
            })
    if (opts.filters) {
        for (let f in opts.filters) {
            env.addFilter(f, opts.filters[f])
        }
    }
    return env
}

let env = createEnv('views', {
    watch: true,
    filters: {
        hex () {
            return '0x' + n.toString(16)
        }
    }
})

let s = env.render('hello.html', { name: '小明' });
console.log(s);
