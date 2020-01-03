
---
    title: 1-7-4-MySQL数据库高级语法
    date: 2017-09-14 17:36:47
    tags: python
---
## 1. 外键
```
create table scores(
id int primary key auto_increment,
stuid int,
subid int,
score decimal(5,2),
foreign key(stuid) references students(id),
foreign key(subid) references subjects(id)
);
```
