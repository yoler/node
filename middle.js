const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const path = require('path')

const app = new Koa()
app.use(bodyParser())

app.use(async (ctx, next) => {
    let url = ctx.url
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring
    let query = ctx.query
    let querystring = ctx.querystring
    if (ctx.url == '/api' && ctx.method == 'POST') {
        let postData = ctx.request.body
        ctx.body = postData
    } else {
        ctx.body = {
            url,
            req_query,
            req_querystring,
            query,
            querystring,
            request,
            ctx
        }
    }
}).listen(3000)
