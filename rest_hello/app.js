const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const controller = require('./controller')
const cors = require('koa-cors2')
const rest = require('./rest.js')

let app = new Koa()

app.use(rest.restify())
app.use(controller())
app.use(bodyParser())
app.use(cors())
app.use(async (ctx, next) => {
    console.log(ctx.url)
    await next()

})


app.use(static(path.join(__dirname, './')))
app.listen(3000)

console.log('app started at port 3000...')
