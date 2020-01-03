
---
    title: 1-2-Linux常用服务器构建-ftp服务器
    date: 2017-09-03 17:36:47
    tags: python
---
### ftp服务器

FTP 是File Transfer Protocol（文件传输协议）的英文简称，而中文简称为“文传协议”。

用于Internet上的控制文件的双向传输。

同时，它也是一个应用程序（Application）。基于不同的操作系统有不同的FTP应用程序，而所有这些应用程序都遵守同一种协议以传输文件。

在FTP的使用当中，用户经常遇到两个概念："下载"（Download）和"上传"（Upload）。

"下载"文件就是从远程主机拷贝文件至自己的计算机上；

"上传"文件就是将文件从自己的计算机中拷贝至远程主机上。用Internet语言来说，用户可通过客户机程序向（从）远程主机上传（下载）文件。

![image.png](https://upload-images.jianshu.io/upload_images/5809200-ffaa71ab8753e42b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


1.安装vsftpd服务器

```
sudo apt-get install vsftpd

```

![image.png](https://upload-images.jianshu.io/upload_images/5809200-56f9f98c06ee70b2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-7a39a19da5b4d4e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


2.配置vsftpd.conf文件

```
sudo vi /etc/vsftpd.conf

```
![image.png](https://upload-images.jianshu.io/upload_images/5809200-cc693dd95fe51ef2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/5809200-1919176dcb815674.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-f8eabb9946c10d82.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-622a19ba4b33e83e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-44d7def45f3a81f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-39214f23d56cf474.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-699340183043a44a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-1e9600bc495bbac6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-04d9bbe779a63a42.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5809200-5265374a78cd51ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/5809200-7f53d635f45c85c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3.测试上传功能，登陆ftp服务器

```
ftp  IP

```

![image.png](https://upload-images.jianshu.io/upload_images/5809200-c41510e2e3092153.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


4.上传命令，可以把文件上传到ftp服务器

```
put somefile

```

5.下载命令，可以把ftp服务器上的文件下载到本地

```
get somefile

```

### 图形界面的ftp客户端(filezilla)

![image.png](https://upload-images.jianshu.io/upload_images/5809200-6370709791273b7e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

