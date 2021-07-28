//call back---
const add = (x, y, cb) => {
    setTimeout(() => {
        cb(x + y);
    }, 3000)
}

add(4,6,function(result) {
    console.log(result);
})

//call back chaining---
const add = (x, y, cb) => {
    setTimeout(() => {
        cb(x + y);
    }, 3000)
}
const sub = (x, y, cb) => {
    setTimeout(() => {
        cb(x - y);
    }, 3000)
}
const multi = (x, y, cb) => {
    setTimeout(() => {
        cb(x * y);
    }, 3000)
}
const div = (x, y, cb) => {
    setTimeout(() => {
        cb(x / y);
    }, 3000)
}
add(4, 4, function (result1) {
    console.log(result1);
    sub(result1, 5, function (result2) {
        console.log(result2);
        multi(result2, 2, function (result3) {
            console.log(result3);
            div(result3, 2, function (result4) {
                console.log(result4);
            })
        })
    })
})
