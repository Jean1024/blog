
---
    title: 1-5-1-Python进程使用----fork
    date: 2017-09-06 17:36:47
    tags: python
---
### 1.进程的创建-fork
> Python的os模块封装了常见的系统调用，其中就包括fork，可以在Python程序中轻松创建子进程：

    import os

    # 注意，fork函数，只在Unix/Linux/Mac上运行，windows不可以
    pid = os.fork()

    if pid == 0:
        print('哈哈1')
    else:
        print('哈哈2')
运行结果：
![3.gif](https://upload-images.jianshu.io/upload_images/5809200-f032c4bacd0618c6.gif?imageMogr2/auto-orient/strip)

说明：
程序执行到os.fork()时，操作系统会创建一个新的进程（子进程），然后复制父进程的所有信息到子进程中
然后父进程和子进程都会从fork()函数中得到一个返回值，在子进程中这个值一定是0，而父进程中是子进程的 id号
在Unix/Linux操作系统中，提供了一个fork()系统函数，它非常特殊。

普通的函数调用，调用一次，返回一次，但是fork()调用一次，返回两次，因为操作系统自动把当前进程（称为父进程）复制了一份（称为子进程），然后，分别在父进程和子进程内返回。

子进程永远返回0，而父进程返回子进程的ID。

这样做的理由是，一个父进程可以fork出很多子进程，所以，父进程要记下每个子进程的ID，而子进程只需要调用getppid()就可以拿到父进程的ID。
 
### 2. getpid()、getppid()
```python
import os

rpid = os.fork()
if rpid<0:
    print("fork调用失败。")
elif rpid == 0:
    print("我是子进程（%s），我的父进程是（%s）"%(os.getpid(),os.getppid()))
    x+=1
else:
    print("我是父进程（%s），我的子进程是（%s）"%(os.getpid(),rpid))

print("父子进程都可以执行这里的代码")
```
运行结果：

我是父进程（19360），我的子进程是（19361）
父子进程都可以执行这里的代码
我是子进程（19361），我的父进程是（19360）
父子进程都可以执行这里的代码

### 3.多进程修改全局变量
```
#coding=utf-8
import os
import time

num = 0

# 注意，fork函数，只在Unix/Linux/Mac上运行，windows不可以
pid = os.fork()

if pid == 0:
    num+=1
    print('哈哈1---num=%d'%num)
else:
    time.sleep(1)
    num+=1
    print('哈哈2---num=%d'%num)
```
运行结果: 
哈哈1---num=1
哈哈2---num=1
> **总结：多进程中，每个进程中所有数据（包括全局变量）都各有拥有一份，互不影响**
### 4. 多次fork问题

如果在一个程序，有2次的fork函数调用，是否就会有3个进程呢？

```

#coding=utf-8
import os
import time

# 注意，fork函数，只在Unix/Linux/Mac上运行，windows不可以
pid = os.fork()
if pid == 0:
    print('哈哈1')
else:
    print('哈哈2')

pid = os.fork()
if pid == 0:
    print('哈哈3')
else:
    print('哈哈4')

time.sleep(1)

```

运行结果： 
 哈哈2
哈哈4
哈哈3
 哈哈1
哈哈4
 哈哈3

#### 说明：

![image.png](https://upload-images.jianshu.io/upload_images/5809200-eea442ce4e29714d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 父子进程的执行顺序： 父进程、子进程执行顺序没有规律，完全取决于操作系统的调度算法


