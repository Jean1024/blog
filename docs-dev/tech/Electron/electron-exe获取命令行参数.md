
---
    title: electron-exe获取命令行参数
    date: 2017-09-25 17:36:47
    tags: electron
---
> 最近做项目的时候，有个需求是通过命令行启动程序，并且获取里面的参数

1. 例如： 
```bash
~/myapp.exe --args name=qiu
```
2. 使用主进程中 `process` 模块获取失败
3. 在渲染进程使用`remote`模块下`process`获取成功 
```javascript
const remote = require('electron').remote
alert(remote.process.argv)
```
