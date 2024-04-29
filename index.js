// const fs = require('fs');
// fs.writeFileSync('hello.php','how are you');
const http = require('http');
const colors = require('colors');
// const chalk = require('chalk');

http.createServer((req,res)=>{
    console.log('server start'.red);
    // console.log(chalk.blue('Hello Chalk'));
    res.write('Hello, I am Mahedi Hasan');
    res.end();
}).listen(4000);