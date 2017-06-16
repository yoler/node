const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

const URL = 'http://ysir.me'

function openRequest (url, isLoad) {
    let req = request({
        url: url,
        method: 'GET'
    }, (err, res, body) => {
        if (err) {
            console.log(URL)
            console.log(err)
            return
        }
        parseData(body)
    })
    if (isLoad) {
        req.pipe(fs.createWriteStream('text.html'))
    }

}

function parseData(data) {
    const $ = cheerio.load(data)
    let articles = $('article')

    for (let i = 0; i  < articles.length; i++) {
        let article = articles[i]
        let descDoms = $(article).find('.post-title-link')
        let link = $(article).find('link')
        let time = $(article).find('time')
        let filepath = link.attr('href')

        if (i < 1) {
            console.log(filepath)
            request({
                url: filepath,
                method: 'GET'
            }, (err, res, body) => {
                if (err) {
                    console.log(URL)
                    console.log(err)
                    return
                }
             console.log(body)
             console.log(res)
            }).pipe(fs.createWriteStream('doc/hhhhh' + i +'.html'))
        }

    }
}

openRequest(URL, false)
