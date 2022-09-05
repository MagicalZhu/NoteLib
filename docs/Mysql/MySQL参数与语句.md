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


## 权限管理
### 用户

```sql
```
