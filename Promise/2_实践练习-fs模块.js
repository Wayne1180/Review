const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// //回调函数 形式
// fs.readFile('./resource/context.txt', (err, data) => {
//     //如果出错，则抛出错误
//     if (err) throw err
//     //输出文件内容
//     console.log(data.toString());
// })

//Promise 形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/context.txt', (err, data) => {
        //如果出错
        if (err) reject(err)
        //如果成功
        resolve(data)
    })
})

p.then((value) => {
    console.log(value.toString());
}, (reason) => {
    console.log(reason);
})
