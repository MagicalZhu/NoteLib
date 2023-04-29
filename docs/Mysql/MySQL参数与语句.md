---
id: MySQL参数与命令
title: MySQL参数与命令
---

## 字符集相关
### 查看字符集

```sql
  -- 查看 MySQL 默认使用的字符集
  show variables like 'character%';

  -- 查看 MySQL 默认使用的排序规则
  show variables like 'collation%';

  -- 查看支持的字符集
  show charset; 
```

### 设置服务器字符集(配置文件)

> 服务器重启后有效

```ini title="/etc/my.conf"
[mysqld]
# 字符集
character_set_server=utf8

# 排序规则
collation_server=utf8mb4_0900_ai_ci 
```

### 设置服务器字符集(SQL语句)

> 服务器重启后失效

```sql
set character_set_server = {编码}
```

### 修改当前库表的字符集与排序规则

> 基本格式: `character set '{编码}' collate '{排序规则}'` 

```sql
-- 修改已经创建的数据库的字符集
alter database {数据库名} character set '{编码}' collate '{排序规则}'

-- 修改已经创建的表的字符集
alter table {数据表名} character set '{编码}' collate '{排序规则}'

-- 修改已经创建的表的某个列的字符集
alter table {数据表名} modify column {列名} character set '{编码}' collate '{排序规则}'

-- 修改已经创建的数据表的字符集,并且已有数据
alter table {数据表名} convert to character set '{编码}'

```

## 目录结构有关
> MySQL 默认的目录结构

```sql
-- 查看数据库文件的存放路径
show variables like 'datadir'
```

**其他目录**
1. 命令及配置文件: `/usr/share/mysql-8.0 或 /usr/share/mysql`

2. MySQL 配置文件: `/etc/my.cnf`

3. 命令目录
   - `/usr/bin`  : 存放 mysqladmin、mysqlbinlog、mysqldump 等命令
   - `/usr/sbin` : 存放 mysqld 等命令

4. 默认日志文件路径: `/var/log/mysqld.log`

## 用户权限管理
### 用户
> 用户的基本信息: `'{用户名}'@'{主机host}'`
> 
> 比如: 'admin'@'localhost'

```sql
/*
  创建用户(密码为可选项)
  创建的用户默认只有 usage 权限
*/
create USER 用户1 [identified by '{密码1}'], ... 用户n [identified by '{密码n}']

-- 查看用户(mysql.user)
select HOST,USER,PASSWORD from mysql.user

--修改用户名
rename USER '{旧用户名1}' TO '{新用户名1}', ...,'{旧用户名n}' TO '{新用户名n}'

--或者
update mysql.user set USER= '{新用户名}' WHERE USER='{旧用户名}'
FLUSH PRIVILEGES;

--删除用户
drop USER 用户1[,...用户n]
FLUSH PRIVILEGES

--修改当前用户密码
ALTER USER USER() identified by '{密码}'

-- 修改指定用户的密码
ALTER USER 用户1 [identified by '{密码1}'], ... 用户n [identified by '{密码n}']

```

### 权限

```sql
--查看所有的权限
show privileges;

-- 为指定用户分配指定的权限
grant 权限1,...,权限n on {数据库名}.{数据表名} to 用户1[,...用户n]

-- 为指定用户分配所有的权限
grant all privileges on {数据库名}.{数据表名} to 用户1[,...用户n]

-- 查看当前用户权限
show grants
show grants for CURRENT_USER()

-- 查看指定用户权限
show grants for 用户

-- 删除/回收指定权限
revoke 权限1,...,权限n on {数据库名}.{数据表名} from 用户1[,...用户n]

-- 删除/回收所有权限
revoke all privileges on {数据库名}.{数据表名} from 用户1[,...用户n]

```

### 角色
> 角色可以简单的理解为多个权限的集合体,基本格式: `'{角色名称}'@'{主机Host}'`

```sql
-- 创建角色
create role 角色1,...,角色n

-- 删除角色
drop role 角色1,...,角色n

-- 为指定角色授予指定权限
grant 权限1,...,权限n on {数据库名}.{数据表名} to 角色1[,...角色n]

-- 为指定角色授予所有权限
grant all privileges on {数据库名}.{数据表名} to 角色1[,...角色n]

-- 查看角色的权限
show grants for 角色


/**
  用户与角色
*/

-- 删除/回收角色指定权限
revoke 权限1,...,权限n on {数据库名}.{数据表名} from 角色1[,...角色n]

-- 删除/回收角色所有权限
revoke all privileges on {数据库名}.{数据表名} from 角色1[,...角色n]

-- 将角色赋予指定用户
grant 角色1,...,角色n to 用户1[,...用户n]

-- 查看当前角色
select CURRENT_ROLE();

-- 删除当前用户指定角色
revoke 角色1,...,角色n from 用户1[,...用户n]


/**
  激活角色(方式 1)
    None: 删除用户的角色(no roles)
    all: 将所有的角色设置给用户
    role: 将指定的角色设置给用户
*/
set default role { None | all| 角色1[,...,角色n] } TO 用户1[,...,用户n]

```
