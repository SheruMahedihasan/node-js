// const fs = require('fs');
// fs.writeFileSync('hello.php','how are you');
const http = require('http');
const colors = require('colors');

http.createServer((req,res)=>{
    console.log('server start'.red);
    res.write('Hello, I am Mahedi Hasan');
    res.end();
}).listen(4000);