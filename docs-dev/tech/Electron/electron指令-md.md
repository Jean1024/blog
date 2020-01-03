
---
    title: electron指令-md
    date: 2017-09-10 17:36:47
    tags: electron
---
### 1. 主进程向渲染进程发送指令
> 主进程代码

``` javascript
  const electron = require('electron');
  // 控制应用生命周期的模块
  const {app} = electron;
  // 创建本地浏览器窗口的模块
  const {BrowserWindow} = electron;
  ipc.on('sy-show',function() {
      var  win = new BrowserWindow({  fullscreen:true,useContentSize:true,resizable:false,autoHideMenuBar:true,frame: false,webPreferences: {plugins: true}});
      // console.log('http://'+HTTP._getIPAddress()+':'+CONFIG.port+'/'+defaultUrl)
      win.loadURL(`file://${__dirname}/index.html`+'?http://'+HTTP._getIPAddress()+':'+CONFIG.port+'/'+defaultUrl );//指定渲染的页面
      
      win.webContents.on('did-finish-load', () => {
        win.webContents.send('ping', 'whoooooooh!')
      })
        // 打开开发工具页面
        // win.webContents.openDevTools();
  })
```

> 渲染进程代码

``` javascript
	var ipc = electron.ipcRenderer;
	var BrowserWindow = electron.remote.BrowserWindow;
          ipc.on('ping', (event, message) => {
        console.log(message)  // Prints 'whoooooooh!'
    })
```
### 2. 渲染进程向主进程发送指令
> 渲染进程代码

``` javascript
 ipc.send('dianPing','点屏要传的参数')  //向主线程发送点屏指令
```

> 主进程代码

``` javascript
    ipc.on('dianPing',function(event, arg) {
      console.log(arg)
      var  win = new BrowserWindow({ fullscreen:true,useContentSize:true,resizable:false,autoHideMenuBar:true,frame: false,webPreferences: {plugins: true}});
       win.loadURL(`file://${__dirname}/dianPing.html`);//指定渲染的页面
        // 打开开发工具页面
        // win.webContents.openDevTools();
  })
```
