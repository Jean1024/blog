
---
    title: 1-1-Linux常用服务器构建-samba
    date: 2017-09-02 17:36:47
    tags: python
---
## 1. 介绍
Samba是在Linux和UNIX系统上实现SMB协议的一个免费软件，能够完成在windows、mac操作系统下访问linux系统下的共享文件
## 2. 安装
使用apt命令安装samba
![image.png](https://upload-images.jianshu.io/upload_images/5809200-f97f9187b310ff49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 3. 配置
### 3.1 创建存放共享文件的路径
在home路径下操作：
![image.png](https://upload-images.jianshu.io/upload_images/5809200-5105f30064b6789a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
修改其权限：

![image.png](https://upload-images.jianshu.io/upload_images/5809200-b4b271f5d04b6c5f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
修改samba的配置文件：
![image.png](https://upload-images.jianshu.io/upload_images/5809200-f2799ec91e4378f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-f012ade66d22a04b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 3.2 创建samba账户

![image.png](https://upload-images.jianshu.io/upload_images/5809200-7a726977f7f787cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-5b66822cf454c3df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 4 重启samba

当对配置进行了更新，需要重启samba软件后才可生效

重启命令如下：

![image.png](https://upload-images.jianshu.io/upload_images/5809200-e0559c25198c047a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 5\. 访问共享文件

### 5.1 mac下访问方式

![image.png](https://upload-images.jianshu.io/upload_images/5809200-cbeb526facfed10d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![image.png](https://upload-images.jianshu.io/upload_images/5809200-bcab74efa5a417eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/5809200-9fafd53545c56826.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/5809200-5bfe67b3c0a15f2b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 5.2 windows下访问方式

![image.png](https://upload-images.jianshu.io/upload_images/5809200-90a507b4d5a547a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-129c000e1f7be3a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




