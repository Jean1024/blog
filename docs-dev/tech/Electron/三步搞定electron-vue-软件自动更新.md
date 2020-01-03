
---
    title: 三步搞定electron-vue-软件自动更新
    date: 2017-09-4 17:36:47
    tags: electron
---
![image.png](https://upload-images.jianshu.io/upload_images/5809200-cd8b47a416d7e6fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


1. 安装依赖`npm i electron-updater`,`package.json`配置`build`下`publish`参数如下:
![image.png](https://upload-images.jianshu.io/upload_images/5809200-a4c01efdc14fafd5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 主进程添加代码
```javascript
import { autoUpdater } from 'electron-updater'

// 检测更新，在你想要检查更新的时候执行，renderer事件触发后的操作自行编写
!function updateHandle() {
  let message = {
    error: '检查更新出错',
    checking: '正在检查更新……',
    updateAva: '检测到新版本，正在下载……',
    updateNotAva: '现在使用的就是最新版本，不用更新',
  };
  const os = require('os');
  const uploadUrl = "http://61.4.184.177:7799/download/"; // 下载地址，不加后面的**.exe
  autoUpdater.setFeedURL(uploadUrl);
  autoUpdater.on('error', function (error) {
    sendUpdateMessage(message.error)
  });
  autoUpdater.on('checking-for-update', function () {
    sendUpdateMessage(message.checking)
  });
  autoUpdater.on('update-available', function (info) {
    sendUpdateMessage(message.updateAva)
  });
  autoUpdater.on('update-not-available', function (info) {
    sendUpdateMessage(message.updateNotAva)
  });

  // 更新下载进度事件
  autoUpdater.on('download-progress', function (progressObj) {
    mainWindow.webContents.send('downloadProgress', progressObj)
  })
  autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {

    ipcMain.on('isUpdateNow', (e, arg) => {
      console.log(arguments);
      console.log("开始更新");
      //some code here to handle event
      autoUpdater.quitAndInstall();
    });

    mainWindow.webContents.send('isUpdateNow')
  });

  ipcMain.on("checkForUpdate",()=>{
      //执行自动更新检查
      autoUpdater.checkForUpdates();
  })
}()

// 通过main进程发送事件给renderer进程，提示更新信息
function sendUpdateMessage(text) {
  mainWindow.webContents.send('message', text)
}
```
3. 渲染进程添加代码
```javascript
created(){
    const _this = this
    _this.$electron.ipcRenderer.send("checkForUpdate");
    _this.$electron.ipcRenderer.on("message", (event, text) => {
            console.log(arguments);
            _this.tips = text;
            alert(text)
        });
        _this.$electron.ipcRenderer.on("downloadProgress", (event, progressObj)=> {
            console.log(progressObj);
            _this.downloadPercent = progressObj.percent || 0;
        });
        _this.$electron.ipcRenderer.on("isUpdateNow", () => {
            _this.$electron.ipcRenderer.send("isUpdateNow");
        });
  },
  beforeDestroy(){
    // this.$electron.ipcRenderer.removeAll(["message", "downloadProgress", "isUpdateNow"]);
  }
```
打包，将生成的exe文件和latest.yml文件上传至服务器
![image.png](https://upload-images.jianshu.io/upload_images/5809200-3a3b3f031c192cf6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 引用 [electron-vue autoupdater](https://segmentfault.com/a/1190000012904543)
