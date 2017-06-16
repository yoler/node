
let mongodb = require('mongodb').MongoClient
let DB_CONN_STR = 'mongodb://localhost:27017/test'

let inserData = function (db, callback) {
    let collection = db.collection('test')
    //插入数据
    let data = [{"name":'wilson001',"age":21},{"name":'wilson002',"age":22}]
    collection.insert(data, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err)
            return
        }
        callback(result)
    });
}

let selectData = (db, callback) => {
    let collection = db.collection('test')

    let whereStr = {'name': 'yoler'}
    collection.find(whereStr).toArray((err, result) => {
        if (err) {
            console.log(err)
            return
        }
        callback(result)
    })
}
let updateData = (db, callback) => {
    let collection = db.collection('test')
    let whereStr = {'name': 'yoler'}
    let updateStr = {$set: {'age': 20}}

    collection.update(whereStr, updateStr, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        callback(result)
    })
}

mongodb.connect(DB_CONN_STR, (err, db) => {
    console.log('success')
    // inserData(db, (result) => {
    //     console.log(result)
    //     db.close()
    // })
    selectData(db, (result) => {
        console.log(result)
        db.close()
    })
    updateData(db, (result) => {
        // console.log(result)
        db.close()
    })
    selectData(db, (result) => {
        console.log(result)
        db.close()
    })
})
