const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())
app.use(async (ctx, next) => {
    console.log(`methos: ${ctx.request.method}, url:${ctx.request.url}`)
    await next()
})

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
                        <form action="/signin" method="post">
                            <p>Name: <input name="name" value="koa"></p>
                            <p>Password: <input name="password" type="password"></p>
                            <p><input type="submit" value="Submit"></p>
                        </form>`
})

router.post('/signin', async (ctx, next) => {
    let name = ctx.request.body.name || ''
    let password = ctx.request.body.password || ''
    console.log(ctx.request.body)
    if (name === 'yoler' && password === '1') {
        ctx.response.body = `<h1>welcome, ${name}!</h1>`
    } else {
        ctx.response.body = `<h1>failed!</h1>
                            <p><a href="/">Try again</a></p>`
    }
})



app.use(router.routes())
app.listen(3000)
