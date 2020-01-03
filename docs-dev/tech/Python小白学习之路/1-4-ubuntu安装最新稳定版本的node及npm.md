
---
    title: 1-4-ubuntu安装最新稳定版本的node及npm
    date: 2017-09-05 17:36:47
    tags: python
---
## 背景
-------------
通过ubuntu官方apt安装工具安装的node是最新LTS版本的，而本人是个有点强迫症的人，喜欢追求新的东西，也就是想方设法想要去安装最新版本的node，所以本文也就产生了，附上ubuntu安装node和npm的命令行命令:
```sh
sudo apt install nodejs-legacy
sudo apt install npm
```
## 最新版本安装方法
---------------
1. 安装`npm`
```sh
sudo apt install npm
```
2、升级npm为最新版本
```sh
sudo npm install npm@latest -g
```
此时通过npm -v可以发现npm版本号为最新版本3.10.3;
3、安装用于安装`nodejs`的模块`n`

```
sudo npm install -g n
```

4、然后通过`n`模块安装指定版本的`nodejs`，`n`模块更多介绍请参考[官方文档](https://www.npmjs.com/package/n)

```
//安装官方最新版本
sudo n latest
//安装官方稳定版本
sudo n stable
//安装官方最新LTS版本
sudo n lts
```

我们通过安装稳定版本的`nodejs`，然后通过`node -v`可以发现`node`安装成功，并且版本号为`v6.2.0`稳定版本
