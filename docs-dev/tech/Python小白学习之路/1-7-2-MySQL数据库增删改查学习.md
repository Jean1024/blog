
---
    title: 1-7-2-MySQL数据库增删改查学习
    date: 2017-09-12 17:36:47
    tags: python
---
## 1. 增 
1. 添加一整条数据
```
insert into my_test values(0,'小明',0,'1999-1-1',0);
```
2. 添加不完整数据
```
insert into my_students(name) values('小家电');
```
3. 添加多条数据
```
insert into my_test(name) values('阿姨'),('神雕'),('郭襄');
```
## 2. 删
1. 物理删除
```
delete from stus where id=5;
```
## 3. 改
1. 修改某条数据
```
update students set birthday='1990-2-2' where id=2
```

## 4. 查

1. 查看列表所有数据
```
select * from my_test;
```
2. 筛选数据
```
select * from stus where isdelete=0;
```
3. 逻辑与运算与或非 `and` , `or` , `not`
```
select * from stus where name='小米' and isdelete=0;
```
4. 模糊查询
```
# %表示任意多个字符
select * from stus where name like '小%';
```
![image.png](https://upload-images.jianshu.io/upload_images/5809200-3f70778182c95441.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
# 下划线数量表示占位符数量
select * from stus where name like '小_'；
```
5. 范围查询
```
select * from stus where id in (1,4,6);
```
![image.png](https://upload-images.jianshu.io/upload_images/5809200-f77b201dde32c320.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
# 编号3-8的男生
select * from stus where id between 3 and 8 and gender=1;
```
![image.png](https://upload-images.jianshu.io/upload_images/5809200-370b56ac6fa3816d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
6. 空判断
```
# null 与 ‘’ 是不同的
select * from stus where birthday is null;
select * from stus where birthday is not null;
```
7. 优先级
```
# 小括号>not>比较运算符>逻辑运算符
# and > or 
```
### 4.1 聚合
1. 求总数 count()
```
select count(*) from stus where isDelete=0;
```
2. 最大值 max()
```
select max(id) from stus;
```
3. 最大值 min()
```
select min(id) from stus;
```
4. 平均值 avg()
```
select avg(id) from stus;
```
5. 求和 sum()
```
select sum(id) from stus where gender=1;
```
### 4.2 分组
1. 统计男女生人数
```
select gender,count(*) from stus group by gender;
```
2. 分组后筛选
```
select gender,count(*) from stus group by gender having gender=0;
select gender,count(*) from stus group by gender having count(*)>2;
select gender,count(*) as rs from stus group by gender having rs>2;
```
![image.png](https://upload-images.jianshu.io/upload_images/5809200-37139a6bb7ee3898.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 4.3 排序 `select * from 表 order by 列1 asc|desc,列2 asc|desc,...`
1. 默认由小到大
```
# 男生按id降序排列
select * from stus where isDelete=0 and gender=1 order by id desc;
```
### 4.4 分页
> 语法 `select * from 表 limit start,count;`  从start开始，获取count条数据，start索引从0开始
```
select * from stus where isDelete=0 limit 1,3;
```
![image.png](https://upload-images.jianshu.io/upload_images/5809200-b14dc193f8f5e4fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
 每页显示m条数据，当前是n页，n从1开始
```
select * from stus where idDelete=0 limit (n-1)*m,m;
```

