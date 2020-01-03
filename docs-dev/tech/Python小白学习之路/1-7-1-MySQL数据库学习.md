
---
    title: 1-7-1-MySQL数据库学习
    date: 2017-09-11 17:36:47
    tags: python
---
## 1. 数据库命令行学习
1. 进入数据库
```
mysql -uroot -p
```
2. 创建数据库
```
create database my_test charset=utf8;
```
3. 查看数据库列表
```
show databases;
```
4. 删除数据库
```
drop database my_test;
```
5. 使用数据库
```
use my_test
```
6. 查看当前数据库
```
select database();
```

## 2. 表 命令行学习
1. 查看当前数据库所有表
```
show tables;
```
 2. 创建表
```mysql
# create table students(id int auto_increment primary key not null,name varchar(10) not null,gender bit default 1,birthday datetime);
create table students(
id int auto_increment primary key not null,
name varchar(10) not null,
gender bit default 1,
birthday datetime);
```
3. 查看表信息
```
desc my_test;
```
4. 添加列
```
alter table students add isDelete bit default 0;
```
5. 重命名表
```
rename table my_test to my_test2;
```

