
---
    title: 1-8-1-MySQL与Python交互
    date: 2017-09-15 17:36:47
    tags: python
---
## 1. 安装引入模块
1. python
* 安装mysql模块
`sudo apt-get install python-mysql`

* 在文件中引入模块
`import Mysqldb`

2. python3
* 安装mysql模块
`sudo apt-get install pymysql`

* 在文件中引入模块
`import pymysql`

## 2. 使用
```
#!/usr/bin/python

import pymysql


def main():
    try:
        # 与数据库建立连接
        conn = pymysql.connect(
            host='127.0.0.1', port=3306, user='root', passwd=None, db='python3',charset='utf8'
        )
        # 执行sql语句（二把手）
        cur = conn.cursor()

        # 添加数据
        sql = 'insert into stus(name) values("小二")'
        cur.execute(sql)
        # 修改数据需要提交
        conn.commit()

        # 查询数据
        cur.execute("SELECT * FROM stus")
        
        for r in cur:
            print(r)
        cur.close()
        conn.close()
    except Exception:
        print("error")

if __name__ == "__main__":
    main()

```
