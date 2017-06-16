const request = require('request')
const http = require('http')

let json = {"title": "sdfsdfsdf", "cover": "sdfsf", "content":'{"templates":[{"name":"新建页面","id":"FBE662","msg":"描述。。。。","content":{"background":"","elements":[]},"state":1}],"music":"","name":"我的亿图相册","forms":[]}'}
function delS (options) {
    request(options, (err, res, body) => {
        if (err) {
            console.log(err)
        }
        JSON.parse(body).forEach(item => {
            if (item.id > 218) {
                let data = {"self_scene_ids": [item.id]}

                request({
                    url: 'http://localhost/h5/h5server/public/api/user/1/self-scene',
                    method: 'DELETE',
                    headers: {
                        'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJFZHJhd1NvZnQiLCJleHAiOjE0OTgwMjI5NjIsIm5iZiI6MTQ5NTQzMDk2MiwiaWF0IjoxNDk1NDMwOTYyLCJzdWIiOiJsb2dpbiIsImF1ZCI6IjEifQ.rm82giuLdalt1a9m3o6cUo32lhP_nmOLXVOM9fdEUm0',
                    },
                    form: data
                }, (err, res, body) => {
                    console.log(body)
                })
            }
        })
    })
}
let options = {
    url: 'http://localhost/h5/h5server/public/api/user/1/self-scene?size=1000',
    method: 'GET',
    headers: {
        'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJFZHJhd1NvZnQiLCJleHAiOjE0OTgwMjI5NjIsIm5iZiI6MTQ5NTQzMDk2MiwiaWF0IjoxNDk1NDMwOTYyLCJzdWIiOiJsb2dpbiIsImF1ZCI6IjEifQ.rm82giuLdalt1a9m3o6cUo32lhP_nmOLXVOM9fdEUm0',
    }
}
function creats (options) {
    request(options, (err, res, body) => {
        if (err) {
            console.log(err)
        }
        console.log(body)
    })
}
let creatoptions = {
    url: 'http://localhost/h5/h5server/public/api/user/1/self-scene',
    method: 'POST',
    headers: {
        'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJFZHJhd1NvZnQiLCJleHAiOjE0OTgwMjI5NjIsIm5iZiI6MTQ5NTQzMDk2MiwiaWF0IjoxNDk1NDMwOTYyLCJzdWIiOiJsb2dpbiIsImF1ZCI6IjEifQ.rm82giuLdalt1a9m3o6cUo32lhP_nmOLXVOM9fdEUm0',
    },
    form: json
}

delS(options)
// setInterval(creats,100, creatoptions)
