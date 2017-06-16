let products = [{
    name: 'ipone',
    price: 6000
}, {
    name: 'kindle',
    price: 999
}]

let createProduct = async (ctx, next) => {
    let p = {
        name: ctx.request.body.name,
        price: ctx.request.body.price
    }

    products.push(p)
    ctx.rest({state: 'success'})
}

let delProduct = async (ctx, next) => {
    let name = ctx.request.body.name
    products.forEach((p, index) => {
        if (p.name == name) {
            products.splice(index, 1)
            ctx.rest({state: 'success'})
        } else {

            let data = {
                state: 'falied',
                msg: 'not found'
            }
            ctx.rest(data)
        }
    })


}

module.exports = {
    'GET /api/products': async (ctx, next) => {
        ctx.rest({products})
    },
    'POST /api/products': createProduct,
    'DELETE /api/products': delProduct
}
