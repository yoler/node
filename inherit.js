function A (name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        console.log(this.name)

    }
}

A.prototype = {
    hello () {console.log(this.age)},
}

function B (name, age) {
    A.apply(this, [name, age])
}
B.prototype = new A()
B.prototype.hello = function () {
    console.log(`yyyyyyyy ${this.name}`)
}
let a = new A('a', 12)
a.say()
a.hello()
let b = new B('b', 13)
b.say()
b.hello()

let arr = [12,12,14,15,12,13,1,3,14,1,5,1,6]
let brr = arr.filter((item, index, arr) => {
    if (arr.indexOf(item) == index) {
        return true
    }
})
console.log(brr)

let dic = {}
let newarr = []
arr.forEach((item, index) => {
    if (!dic[item]) {
        dic[item] = 1
        newarr.push(item)
    }
})
console.log(newarr)
let sarr = new Set(arr)
console.log(sarr.values())
