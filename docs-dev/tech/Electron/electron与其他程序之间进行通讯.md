
---
    title: electron与其他程序之间进行通讯
    date: 2017-09-8 17:36:47
    tags: electron
---
1. 安装依赖包
`npm install messenger`
2. 使用
```
var messenger = require('messenger');

// here we have 4 servers listening on 4 different ports
var server1 = messenger.createListener(8001);
var server2 = messenger.createListener(8002);
var server3 = messenger.createListener(8003);
var server4 = messenger.createListener('127.0.0.1:8004');

server1.on('a message came', function(m, data){
  // note that m.data and data are equivalent
  console.log('server 1 got data', data);
});

server2.on('a message came', function(m, data){
  console.log('server 2 got data', data);
});

server3.on('a message came', function(m, data){
  console.log('server 3 got data', data);
});

server4.on('a message came', function(m, data){
  console.log('server 4 got data', data);
});

// a client that can be used to emit to all the servers
var client = messenger.createSpeaker(8001, 8002, 8003, 8004);

setInterval(function(){
  client.shout('a message came', {some: data});
}, 1000);
```
3. 参考
[github](https://github.com/weixiyen/messenger.js)
