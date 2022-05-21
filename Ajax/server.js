//引入express
const { response } = require('express')
const express = require('express')
const req = require('express/lib/request')
const { request } = require('http')

//创建应用对象
const app = express()

//创建路由规则
//·request是对请求报文的封装
//·response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    //设置响应体
    response.send('HELLO AJAX')
})

app.all('/json-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('HELLO AJAX POST')
})

//针对IE缓存
app.get('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('HELLO IE')
})

//延时响应
app.get('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        response.send('延时响应')
    }, 3000)
})

//jQuery服务
app.all('/jquery-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = { name: 'Wayne' }
    //response.send('Hello jQuery Ajax')
    response.send(JSON.stringify(data))
})

//axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = { name: '尚硅谷' }
    response.send(JSON.stringify(data))
})

//监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中');
})