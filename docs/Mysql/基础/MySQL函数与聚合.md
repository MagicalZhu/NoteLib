---
id: MySQL函数与聚合
title: MySQL函数与聚合
---

## 函数

### 函数概述

> 函数可以把我们经常使用的代码封装起来， 需要的时候直接调用即可。这样既 `提高了代码效率` ，又`提高了维护性`  。从函数的定义来说,我们可以将函数分为`内置函数` 与 `自定义函数`
>
> **在 SQL 中我们也可以使用函数 对检索出来的数据进行函数操作**

不同的DBMS之间的差异很大,这就导致了只有很少的函数是被DBMS同时支持的,比如大多数DBMS可以使用 `+` 来拼接字符串,但是在MySQL中只能使用 `concat()`函数进行拼接

### MySQL的内置函数分类

- MySQL提供了很多的内置函数,这些函数从**实现的功能角度来说分为：**

  - `数值函数`

  - `字符串函数`

  - `日期时间函数`
  - `流程控制函数`
  - `加密、解密函数`
  - `获取MySQL信息函数`
  - `聚合函数`
  - …

- 或者也可以将函数分为两类: 
  - `单行函数`
    - 操作数据对象
    - 接受参数返回一个结果
    - **只对一行进行变换 **
    - **每行返回一个结果** 
    - 可以嵌套
    - 参数可以是一列或一个值
  - `聚合函数(或分组函数)`

### 数值函数

**常见的数值函数**

| 函数                    | 用法                                                         |
| ----------------------- | ------------------------------------------------------------ |
| `ABS(n)`                | 返回n的绝对值                                                |
| `SIGN(n)`               | 返回n的符号。正数返回1，负数返回-1,0返回0                    |
| `PI()`                  | 返回圆周率                                                   |
| `CEIL(n)、CEILING(n)`   | 返回大于或者等于n的最小整数                                  |
| `FLOOR(n)`              | 返回小于或者等于某个n的最大整数                              |
| `LEAST(n1,n2,n3...)`    | 返回列表中的最小值                                           |
| `GREATEST(n1,n2,n3...)` | 返回列表中的最大值                                           |
| `MOD(x,y)`              | 返回X除以Y后的余数                                           |
| `RAND()`                | 返回0~1的随机值                                              |
| `RAND(n)`               | 返回0~1的随机值，其中n的值用作种子值，相同的n值会产生相同的随机数 |
| `ROUND(x,y)`            | 返回一个对x的值进行四舍五入后最接近X的值，并保留到小数点后面Y位 |
| `ROUND(x)`              | 返回一个对x的值进行四舍五入后的整数                          |
| `TRUNCATE(x,y)`         | 返回数字x截断为y位小数的结果                                 |
| `SQRT(x)`               | 返回x的平方根。当X的值为负数时，返回NULL                     |



### 字符串函数

:::caution MySQL字符串注意点

MySQL中，字符串的位置是从1开始的。

::: 

| 函数                                | 用法                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| `ASCII(str)`                        | 返回str第一个字符的ASCII码值                                 |
| `CHAR_LENGTH(str)`                  | 返回str 的字符数                                             |
| `LENGTH(str)`                       | 返回字符串s的字节数，和字符集有关(**UTF字符集中 1个中文3个字节**) |
| `CONCAT(s1,s2...)`                  | 拼接字符串                                                   |
| `CONCAT_WS(str, s1,s2,...)`         | 同CONCAT(s1,s2,...)函数，但是每个字符串之间要加上x           |
| `INSERT(str, idx, len, replacestr)` | 将字符串str从第idx位置开始，len个字符长的子串替换为字符串replacestr |
| `REPLACE(str, a, b)`                | 将str中所有出现的a替换为b                                    |
| `UPPER(s) 或 UCASE(s)`              | 将字符串s的所有字母转成大写字母                              |
| `LOWER(s) 或LCASE(s)`               | 将字符串s的所有字母转成小写字母                              |
| `LEFT(str,n)`                       | 返回字符串str最左边的n个字符                                 |
| `RIGHT(str,n)`                      | 返回字符串str最右边的n个字符                                 |
| `LPAD(str, len, pad)`               | 用字符串pad对str最左边进行填充，直到str的长度为len个字符     |
| `RPAD(str ,len, pad)`               | 用字符串pad对str最右边进行填充，直到str的长度为len个字符     |
| `LTRIM(s)`                          | 去掉字符串s左侧的空格                                        |
| `RTRIM(s)`                          | 去掉字符串s右侧的空格                                        |
| `TRIM(s)`                           | 去掉字符串s开始与结尾的空格                                  |
| `TRIM(s1 FROM s)`                   | 去掉字符串s开始与结尾的s1                                    |
| `TRIM(LEADING s1 FROM s)`           | 去掉字符串s开始处的s1                                        |
| `TRIM(TRAILING s1 FROM s)`          | 去掉字符串s结尾处的s1                                        |
| `REPEAT(str, n)`                    | 返回str重复n次的结果                                         |
| `SPACE(n)`                          | 返回n个空格                                                  |
| `STRCMP(s1,s2)`                     | 比较字符串s1,s2的ASCII码值的大小                             |
| `SUBSTR(s,index,len)`               | 返回从字符串s的index位置其len个字符，作用与SUBSTRING(s,n,len)、 MID(s,n,len)相同 |
| `LOCATE(substr,str)`                | 返回指定位置的字符串<br />如果m=1，则返回s1，<br />如果m=2，则返回s2，<br />如 果m=n，则返回sn |
| `FIELD(s,s1,s2,...,sn)`             | 返回字符串s在字符串列表中第一次出现的位置                    |
| `FIND_IN_SET(s1,s2)`                | 返回字符串s1在字符串s2中出现的位置。其中，字符串s2是一个以逗号分 隔的字符串 |
| `REVERSE(s)`                        | 返回s反转后的字符串                                          |
| `NULLIF(value1,value2)`             | 比较两个字符串，如果value1与value2相等，则返回NULL，否则返回 |



### 日期时间函数

#### 获取日期、时间

| 函数                                                         | 用法                            |
| ------------------------------------------------------------ | ------------------------------- |
| `CURDATE()、CURRENT_DATE()`                                  | 返回当前日期，只包含年、 月、日 |
| `CURTIME()、 CURRENT_TIME()`                                 | 返回当前时间，只包含时、 分、秒 |
| `NOW()、SYSDATE()、CURRENT_TIMESTAMP()、LOCALTIME()、LOCALTIMESTAMP()` | 返回当前系统日期和时间          |
| `UTC_DATE()`                                                 | 返回UTC(世界标准时间) **日期**  |
| `UTC_TIME()`                                                 | 返回UTC(世界标准时间) **时间**  |



:::info 获取日期、时间

```sql
-- 通过加0 的方式将时间转为了数字
-- 东八区实际时间比 UTC_TIME() 多8h
SELECT CURDATE(),CURTIME(),NOW(),SYSDATE()+0,UTC_DATE(),UTC_DATE()+0,UTC_TIME(),UTC_TIME()+0 FROM DUAL;
```

![image-20220327125712030](./image/MySQL函数与聚合/image-20220327125712030.png)

:::

#### 日期与时间戳转换

| 函数                       | 用法                                                         |
| -------------------------- | ------------------------------------------------------------ |
| `UNIX_TIMESTAMP()`         | 以UNIX时间戳的形式返回当前时间。SELECT UNIX_TIMESTAMP() - >1634348884 |
| `UNIX_TIMESTAMP(date)`     | 将时间date以UNIX时间戳的形式返回。                           |
| `FROM_UNIXTIME(timestamp)` | 将UNIX时间戳的时间转换为普通格式的时间                       |



####  获取月份、星期、天数等

| 函数                                       | 用法                                            |
| ------------------------------------------ | ----------------------------------------------- |
| `YEAR(date) / MONTH(date) / DAY(date)`     | 返回具体的日期值                                |
| `HOUR(time) / MINUTE(time) / SECOND(time)` | 返回具体的时间值                                |
| `MONTHNAME(date)`                          | 返回月份名称:January，...                       |
| `DAYNAME(date)`                            | 返回星期几名称:MONDAY，TUESDAY.....SUNDAY       |
| `WEEKDAY(date)`                            | 返回周几，注意，周1是0，周2是1，。。。周日是6   |
| `QUARTER(date)`                            | 返回日期对应的季度，范围为1~4                   |
| `WEEKOFYEAR(date) `                        | 返回一年中的第几周                              |
| `DAYOFYEAR(date)`                          | 返回日期是一年中的第几天                        |
| `DAYOFMONTH(date)`                         | 返回日期位于所在月份的第几天                    |
| `DAYOFWEEK(date)`                          | 返回周几，注意:周日是1，周一是2，。。。周六是 7 |

:::info 获取月份、星期等

```sql
/*
	获取月份/天数/星期
*/
Select CURRENT_TIME(), YEAR(CURRENT_TIME()),WEEKOFYEAR(CURRENT_DATE()),DAYOFYEAR(CURRENT_DATE())
```

![image-20220327134538113](./image/MySQL函数与聚合/image-20220327134538113.png)

:::

#### 操作日期

- `EXTRACT(type FROM date)`
  - 返回指定日期中特定的部分，type指定返回的值
  - **type取值及含义**
    - `MICROSECOND` : 返回毫秒数
    - `SECOND` ：返回秒数
    - `MINUTE` ：返回分钟数
    - `HOUR` : 返回小时数
    - `DAY` : 返回天数
    - `WEEK` : 返回一年的第几周
    - `MONTH` :  返回月份
    - `QUARTER` : 返回第几个季度
    - `YEAR` : 返回年份
    - `SECOND_MICROSECOND` ： 返回秒+毫秒值
    - `MINUTE_MICROSECOND` :  返回分钟+毫秒值
    - `MINUTE_SECOND` : 返回分钟+秒值
    - `HOUR_MICROSECOND` : 返回小时+毫秒值
    - `HOUR_SECOND` : 返回小时+秒值
    - `HOUR_MINUTE` : 返回小时+分钟值
    - `DAY_MICROSECOND` : 返回天+毫秒值
    - `DAY_SECOND` : 返回天+秒值
    - `DAY_MINUTE` : 返回天+分钟值
    - `DAT_HOUR` : 返回天+小时
    - `YEAR_MONTH` ： 返回年+月

:::info 操作日期

```sql
Select 
	EXTRACT( YEAR from NOW())  "年",
	EXTRACT( MONTH from NOW()) "月",
	EXTRACT( DAY from NOW()) "日",
	EXTRACT( WEEK from NOW()) "周",
	EXTRACT( QUARTER from NOW()) "季度",
	EXTRACT( YEAR_MONTH from NOW()) "年月",
	EXTRACT( DAY_HOUR from NOW()) "天小时"
```

![image-20220327135205505](./image/MySQL函数与聚合/image-20220327135205505.png)

:::

#### 时间与秒钟转换

| 函数                   | 用法                                          |
| ---------------------- | --------------------------------------------- |
| `TIME_TO_SEC(time)`    | 将 time 转化为秒并返回结果值                  |
| `SEC_TO_TIME(seconds)` | 将 seconds 描述转化为包含小时、分钟和秒的时间 |



#### 计算日期和时间①

| 函数                                     |                                                         |
| ---------------------------------------- | ------------------------------------------------------- |
| `DATE_ADD(datetime, INTERVAL 数值 type)` | 返回给定datetime **加上** 指定INTERVAL时 间段的日期时间 |
| `DATE_SUB(datetime,INTERVAL 数值 type)`  | 返回给定datetime **减去** 指定INTERVAL时 间段的日期时间 |

上述的`type`可以有以下的取值：

1. `HOUR` : 小时
2. `MINUTE` : 分
3. `SECOND` : 秒
4. `YEAR` : 年
5. `MONTH` : 月
6. `DAY` : 日
7. `YEAR_MONTH` : 年+月
8. `DAY_HOUR` : 天+小时
9. `DAY_MINUTE` : 天+分
10. `DAY_SECOND` : 天+秒
11. `HOUR_MINUTE` : 小时+分
12. ` MINUTE_SECOND` : 小时+秒

#### 计算日期和时间②

> time的字符串格式 就是 `'时：分：秒'`

| 函数                           | 用法                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| `ADDTIME(time1,time2)`         | 返回time1加上time2的时间。<br />当time2为一个数字时，代表的是 秒 ，可以为负数 |
| `SUBTIME(time1,time2)`         | 返回time1减去time2后的时间。<br />当time2为一个数字时，代表的 是 秒 ，可以为负数 |
| `DATEDIFF(date1,date2)`        | 返回date1 - date2的日期间隔天数                              |
| `TIMEDIFF(time1, time2)`       | 返回time1 - time2的时间间隔                                  |
| `FROM_DAYS(N)`                 | 返回从0000年1月1日起，N天以后的日期                          |
| `TO_DAYS(date)`                | 返回日期date距离0000年1月1日的天数                           |
| `LAST_DAY(date)`               | 返回date所在月份的最后一天的日期                             |
| `MAKEDATE(year,n)`             | 针对给定年份与所在年份中的天数返回一个日期                   |
| `MAKETIME(hour,minute,second)` | 将给定的小时、分钟和秒组合成时间并返回                       |



:::info 计算日期和时间

```sql
SELECT
		ADDTIME(NOW(),20),
		SUBTIME(NOW(),30),
		SUBTIME(NOW(),'1:1:3'),
		DATEDIFF(NOW(),'2021-10-01'),
		TIMEDIFF(NOW(),'2021-10-25 22:10:10'),
		FROM_DAYS(366),TO_DAYS('0000-12-25'), 
		LAST_DAY(NOW()),
		MAKEDATE(YEAR(NOW()),12),
		MAKETIME(10,21,23)
FROM DUAL;	
```

![image-20220327135832749](./image/MySQL函数与聚合/image-20220327135832749.png)

:::

#### 日期格式化与解析

| 函数                                | 用法                                       |
| ----------------------------------- | ------------------------------------------ |
| `DATE_FORMAT(date,fmt)`             | 按照字符串fmt格式化日期date值              |
| `TIME_FORMAT(time,fmt)`             | 按照字符串fmt格式化时间time值              |
| `GET_FORMAT(date_type,format_type)` | 返回日期字符串的显示格式                   |
| `STR_TO_DATE(str, fmt)`             | 按照字符串fmt对str进行解析，解析为一个日期 |

上述的`fmt`可以有以下的取值：

1. `%Y` : 4位数字表示年份
2. `%y` : 2位数字表示年份
3. `%M` : 月名表示月份(January,....)
4. `%m` : 2位数字表示月份(01,02,03….)
5. `%c` : 数字表示月份(1,2,3,...)
6. `%D` : 英文后缀表示月中的天数(1st,2nd,3rd,...)
7. `%d` : 2位数字表示月中的天数(01,02...)
8. `%e` :  数字形式表示月中的天数 (1,2,3,4,5.....)
9. ….

### 流程控制函数

> 流程处理函数可以根据不同的条件，执行不同的处理流程，可以在SQL语句中实现不同的条件选择。
>
> MySQL中的流程处理函数主要包括IF()、IFNULL()和CASE()函数

| 函数                                                         | 用法                                             |
| ------------------------------------------------------------ | ------------------------------------------------ |
| `IF(value,value1,value2)`                                    | 如果value的值为TRUE，返回value1， 否则返回value2 |
| `IFNULL(value1, value2)`                                     | 如果value1不为NULL，返回value1，否 则返回value2  |
| `CASE WHEN 条件1 THEN 结果1 WHEN 条件2 THEN 结果2 .... [ELSE resultn] END` | 相当于Java的if...else if...else...               |
| `CASE expr WHEN 常量值1 THEN 值1 WHEN 常量值1 THEN 值1 .... [ELSE 值n] END` | 相当于Java的switch...case...                     |



### MySQL信息

| 函数                                                    | 用法                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| `VERSION()`                                             | 返回当前MySQL的版本号                                        |
| `CONNECTION_ID()`                                       | 返回当前MySQL服务器的连接数                                  |
| `DATABASE()、SCHEMA()`                                  | 返回MySQL命令行当前所在的数据库                              |
| `USER()、CURRENT_USER()、SYSTEM_USER()、SESSION_USER()` | 返回当前连接MySQL的用户名<br />返回结果格式为`主机名@用户名` |
| `CHARSET(value)`                                        | 返回字符串value自变量的字符集                                |
| `COLLATION(value)`                                      | 返回字符串value的比较规则                                    |

### 其他函数

> MySQL中有些函数无法对其进行具体的分类，但是这些函数在MySQL的开发和运维过程中也是不容忽视的。

| 函数                             | 用法                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| `FORMAT(value,n)`                | 返回对数字value进行格式化后的结果数据。n表示 四舍五入 后保留 到小数点后n位 |
| `CONV(value,from,to)`            | 将value的值进行不同进制之间的转换                            |
| `INET_ATON(ipvalue)`             | 将以点分隔的IP地址转化为一个数字                             |
| `INET_NTOA(value)`               | 将数字形式的IP地址转化为以点分隔的IP地址                     |
| `BENCHMARK(n,expr)`              | 将表达式expr重复执行n次。用于测试MySQL处理expr表达式所耗费 的时间 |
| `CONVERT(value USING char_code)` | 将value所使用的字符编码修改为char_code                       |



## 聚合函数

- 聚合函数作用于一组数据，并对一组数据返回一个值。聚合函数有有以下的类型：
  - `AVG()`
  - `SUM()`
  - `MAX()`
  - `MIN()`
  - `COUNT()`

- **语法格式**

  ```sql
  Select [columns...], [group function(column)]
  FROM table
  [WHERE 判断条件]
  [GROUP BY 分组字段]
  [ORDER BY 排序字段]
  ```

- **注意**

  - 聚合函数不能嵌套调用。比如不能出现类似“AVG(SUM(字段名称))”形式的调用