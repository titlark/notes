
# MySQL 常用命令

请注意：

- 命令输入在 `mysql>` 之后；
- 命令用 `;` 或 `\g` 结束，换句话说，仅按 Enter 不执行命令；
- 输入 `help` 或 `\h` 获得帮助，也可以输入更多的文本获得特定命令的帮助（如，输入 `help select` 获得使用 `SELECT` 语句的帮助）；
- 输入 `quit` 或 `exit` 退出命令行实用程序。




## 连接 MySQL

```sql
mysql [-h 主机地址 [-P 端口号]] -u 用户名 -p[密码]
```

> ps：-h和主机地址、-P和端口号、-u和用户名之间要不要空格都可以，但是，-p和密码不能有空格。

## 列出所有的数据库

```sql
show databases;
```

## 选择数据库

```sql
use 数据库名;
```

## 列出所有的表

```sql
show tables;
```

## 查看表结构

```sql
desc 表名;
或
describe 表名;
或
show columns from 表名;
```

## 显示广泛的服务器状态信息

```sql
show status;
```

## 显示创建特定数据库或表的 MySQL 语句；

```sql
show create database 数据库名;
show create table 表名;
```







































