const Koa = require('koa')
const static = require('koa-static')
const path = require('path')

let app = new Koa()

app.use(static(path.join(__dirname, './')))
app.listen(40)
