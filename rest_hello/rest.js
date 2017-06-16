module.exports = {
    restify: (pathPrefix) => {
        pathPrefix = pathPrefix || '/api/'
        return async (ctx, next) => {
            if (ctx.request.path.startsWith(pathPrefix)) {
                ctx.rest = (data) => {
                    ctx.response.type = 'application/json'
                    ctx.response.body = data
                    ctx.set('Access-Control-Allow-Origin', '*')
                }
                await next()
            }
            else {
                await next()
            }
        }
    }
}
