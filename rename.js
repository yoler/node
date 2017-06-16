'use strict'
let fs = require('fs')
let http = require('http')
let url = require('url')
let path = require('path')

let pathname = path.resolve('./') + '/test'
fs.readdir(pathname, (err, files) => {
    files.forEach((filename, index) => {
        let oldpath = pathname + '/' + filename
        let newpath = pathname + '/' + index + '.txt'
        fs.rename(oldpath, newpath, (err) => {
            if (!err) {
                console.log('success')
            }
        })
    })
})
