---
title: SQL映射
id: SQL映射
cssclasses:
  - wide-page
---

## 映射文件

> MyBatis 的真正强大就是它的 sql 语句映射。它可以让开发者更专注于 sql 代码

sql 映射文件只有很少的几个顶级元素:

1. `cache` :  该命名空间的缓存配置
2. `cache-ref` : 引用其它命名空间的缓存配置
3. `resultMap` : 描述**如何从数据库结果集中加载对象**, 是最复杂也是最强大的元素
4. ~~parameterMap~~
5. `sql` : 可被其它语句引用的可重用 sql 语句
6. `insert` : 插入语句
7. `update` : 更新语句
8. `delete` : 删除语句
9. `select` : 查询语句

## select

> 查询语句是 MyBatis 中最常用的元素之一

### 标签属性

Select 标签有下面的注意点:

1. **如果返回的是集合，那应该设置为集合包含的类型，而不是集合本身的类型**
2. **resultType 和 resultMap 只能使用一个**

| 属性            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| `id`            | sql 语句标识符                                               |
| `parameterType` | **可选值**，设置该 sql 语句参数的类全限定名或别名。<br/> MyBatis 可以根据语句中实际传入的参数推断出应该使用哪个 TypeHandler |
| `resultType`    | 返回结果的类全限定名或别名。<br/>                            |
| `resultMap`     | 对外部 resultMap 的命名引用                                  |
| `flushCache`    | 将其设置为 true 后，只要语句被调用，都会导致本地缓存和二级缓存被清空<br/>**默认值：false** |
| `useCache`      | 将其设置为 true 后，将会导致本条语句的结果被二级缓存缓存起来<br/>默认值：对 select 标签为 true |
| `timeout`       | 超时时间,单位为秒<br/>默认值为未设置（unset）（依赖数据库驱动） |
| `fetchSize`     | JDBC 驱动程序每次批量返回的结果行数等于这个设置值。<br/>默认值为未设置（unset）（依赖驱动） |
| `statementType` | 可选 STATEMENT，PREPARED 或 CALLABLE。<br/>这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement<br/>默认值：PREPARED。 |
| `resultSetType` | FORWARD_ONLY，SCROLL_SENSITIVE, SCROLL_INSENSITIVE 或 DEFAULT 中的一个<br/>默认值为 unset （依赖数据库驱动 |
| `resultOrdered` | 这个设置仅针对嵌套结果 select 语句<br/>如果为 true，则假设结果集以正确顺序（排序后）执行映射，当返回新的主结果行时，将不再发生对以前结果行的引用<br/>默认值：`false` |
| `resultSets`    | 这个设置仅适用于多结果集的情况<br/>它将列出语句执行后返回的结果集并赋予每个结果集一个名称，多个名称之间以逗号分隔 |

### resultType

#### 返回 List

> 有多个数据,使用 List 接收数据

定义 Mapper 接口:

```java
public List<Employee> selectList();
```

然后编写 sql 映射文件:

```xml
<!--返回的是 List 集合,但是 resultType 应该是集合中数据的类型-->
<select id="selectList" resultType="com.pacos.Domain.Employee">
    select * from employee
</select>
```

然后测试:

```java
/**
 * 返回集合
 *  @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class ResultTypeDemo {
    private static final String resource = "META-INF/mybatis-config.xml";
    public static void main(String[] args) throws IOException {
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 设置自动提交事务
        try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
            EmployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
            // 返回 List 查询
            List<Employee> employees = employeeMapper.selectList();
            // out: [Employee(id=1, lastName=tomcat, gender=1, email=tomcat@gmail.com),
            //       Employee(id=2, lastName=spring, gender=0, email=spring@gmail.com),
            //       Employee(id=3, lastName=jetty, gender=1, email=jetty@gmail.com),
            //    ]
            System.out.println(employees);
        }
    }
}
```

#### 返回 Map

> 如果只有一条数据,并且以 Map 的形式返回,即 key 是数据库字段名,value 数据值

- **只需要将 resultMap 设置为 `map` 即可**

首先定义 Mapper 接口:

```java
// 只有一条数据,并且返回 Map 对象
public Map<String,Object> getMap();
```

然后编写 sql 映射文件:

```xml
<!--只有一条数据,并且返回 Map-->
<select id="getMap" resultType="java.util.Map">
	select * from employee where id=1
</select>
```

最后进行测试,结果以 Map 的形式输出

```java
/**
* 返回Map
*  @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
*/
public class ResultTypeByMapDemo1 {
  private static final String resource = "META-INF/mybatis-config.xml";
  public static void main(String[] args) throws IOException {
      InputStream inputStream = Resources.getResourceAsStream(resource);
      SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder()
        																				.build(inputStream);

      // 设置自动提交事务
      try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
          EmployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
          // 返回 List 查询
          Map<String, Object> map = employeeMapper.getMap();
          // out: {gender=1, last_name=tomcat, id=1, email=tomcat@gmail.com}
          System.out.println(map);
      }
  }
}
```

#### 返回Map(多数据)

> 返回多条数据,数据以 Map 的形式展示,即 key 是指定字段的值,value 是该条数据

我们需要使用 `@MapKey` 注解来指定 key 使用哪个字段的值

```java
// 有多条数据,返回Map 的 key 是指定字段的值
// 这里返回 Map 的 key 的值使用 id 字段的值
@MapKey("id")
public Map<Integer,Employee> getMap2();
```

然后编写 sql 映射文件

```xml
<select id="getMap2" resultType="java.util.Map">
    select * from employee
</select>
```

最后进行测试,可以看到结果的 Map 的 key 是 id 字段的值

```java
/**
 * 返回Map
 *  @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class ResultTypeByMapDemo2 {
  private static final String resource = "META-INF/mybatis-config.xml";
  public static void main(String[] args) throws IOException {
      InputStream inputStream = Resources.getResourceAsStream(resource);
      SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder()
        																				  			.build(inputStream);

      // 设置自动提交事务
      try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
          EmployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
          // 返回 List 查询
          Map<Integer, Employee> map = employeeMapper.getMap2();
          // out: {1={gender=1, last_name=tomcat, id=1, email=tomcat@gmail.com},
          //       2={gender=0, last_name=spring, id=2, email=spring@gmail.com},
          //       3={gender=1, last_name=jetty, id=3, email=jetty@gmail.com}
          //     }
          System.out.println(map);
      }
  }
}
```

## resultMap

> 是更加精准的结果集映射方案,上面的 resultType 的示例中,Mybatis 会在"幕后创建"一个 resultMap

### 属性与子标签

- resultMap 的属性
  - `type` :类的完全限定名,或者一个类型别名
  - `id` :唯一标识符

- resultMap 有如下的子标签
  - `<id>`: 处理主键
    - *column*
      - 数据表的字段名
    - *property*
      - javaBean 的属性名
      - 支持级联(比如 address.street.number)
  - `<result>`
    - column、property 和 id 标签一致
  - `<association>` : 处理属性是对象的情况
  - `<collection>` : 处理属性是集合的情况

### 示例-处理字段不匹配

> 在前面的示例中,通过开启驼峰命名映射的方式来处理表字段和 java bean 字段不一致的情况,但是有些情况下,表字段和 java bean 字段不满足驼峰映射的规则,这个时候就需要使用 resultMap 来处理

假设有这么一张 Account 表,表结构如下:

```sql
CREATE TABLE `Account` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '账户ID',
  `name` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '账户名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin
```

但是 javaBean 对应的字段则是:

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account {
    private Integer id;
	  // 无法与表中的 name 字段映射
    private String accountName;
}
```

为了处理字段无法映射的问题,我们在 sql 映射文件中添加 resultMap

```xml
<mapper namespace="com.pacos.Dao.AccountMapper">
  	<!--highlight-start-->
  	<!--创建一个 resultMap 用于处理 Account 表的映射关系-->
    <resultMap id="handleAccount" type="com.pacos.Domain.Account">
        <id property="id" column="id" javaType="Integer"/>
        <result property="accountName" column="name" javaType="String"/>
    </resultMap>
    <!--highlight-end-->
    <select id="getAccounts" resultMap="handleAccount">
        select * from account
    </select>
</mapper>
```

最后通过测试可以发现将数据正确的取出来了:

```java
/**
 * 处理字段映射问题
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class ResultMapDemo1 {
    private static final String resource = "META-INF/mybatis-config.xml";
    public static void main(String[] args) throws IOException {
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
            AccountMapper accountMapper = sqlSession.getMapper(AccountMapper.class);
            List<Account> accounts = accountMapper.getAccounts();
            // out: [Account(id=1, accountName=pacos)]
            System.out.println(accounts);
        }
    }
}
```

:::tip 提示

如果表的字段和 javaBean 的字段是一致的,可以不用配置在 resultMap 中,Mybatis 会自动映射

:::

### association(关联)

> association 用于处理表关联的情况,表现在 java bean 上就是 bean 的属性是另一个 bean 对象

它有如下的属性:

- `property`
  - javaBean 的属性名
- `javaType`
  - 指定这个属性对象的类型, 这个不可以省略
- `jdbcType`
- `select`
  - 设置获取关联数据的 sql 映射语句标识 (namespace+id)
  - 它会从 column 属性指定的列中检索数据，作为参数传递给目标 select 语句
- `column`
  - 调用 select 设置的方法,需要传入 **已经得到的数据集的哪一列作为其入参**
  - 如果需要传入多个字段,可以使用 `column="{prop1=col1,prop2=col2}"` 的方式
- `<id>`、`<result>` : 用法和上面一样
- `<resultMap>`
  - 结果映射的 id, 可以将此关联的嵌套结果集映射到对象中

:::caution 关于 select 和 column

1. select 指向获取关联数据的 sql,而 column 为 select 语句提供了需要的参数
2. column 通过 `{prop1=col1,prop2=col2}` 的方式传入多个参数,其中 propxxx 就是在 select 语句中使用的参数名

:::

MyBatis 有两种不同的方式加载关联：

- 嵌套结果映射
  - 使用嵌套的结果映射来处理连接结果的重复子集
  - 也可以称之为联合查询
- 嵌套 Select 查询
  - 通过执行另外一个 SQL 映射语句来加载期望的复杂类型
  - 也可以称之为分步查询

#### 联合查询

> 简言之,就是将关联数据的查询放在一个 sql 语句中,然后将关联数据集的映射放在 association 中

假设 employee 表和 Account 表有关联 (employee.account_id = Account.id)

```bash
# employee 表的数据
id|last_name|gender|email           |account_id|
--+---------+------+----------------+----------+
 1|tomcat   |1     |tomcat@gmail.com|         1|
 2|spring   |0     |spring@gmail.com|         2|
 3|jetty    |1     |jetty@gmail.com |         3|
 
# Account 表的数据
id|name|
--+----+
 1|基金  |
 2|存折  |
 3|股票  |
 4|黄金  |
```

对应的 java bean 就如下所示:

```java
// employee 表
public class EmployeeNew {
    private Integer id;
    private String lastName;
    private char gender;
    private String email;
    private Account account;
}

// Account 表
public class Account {
    private Integer id;
    private String accountName;
}
```

那么如果需要查询出 Employee 对应的 Account 信息,可以通过**联合查询**的方式。

下面是 sql 映射文件,注意:

1. 关联表 Account 的 resultMap 映射可以提取出来,也可以写在 association 中
2. association 的 resultMap 属性既可以引用当前 sql 映射文件中定义的,还可以引用其他 sql 映射文件中定义的 resultMap

```xml
<!--定义映射 Account 的 resultMap-->
<resultMap id="handleAccount" type="com.pacos.Domain.Account">
    <id property="id" column="id" javaType="Integer"/>
    <result property="accountName" column="name" javaType="String"/>
</resultMap>
<!--定义映射 EmployeeNew 的 resultMap-->
<resultMap id="handleEmployeeNew" type="com.pacos.Domain.EmployeeNew">
    <id column="id" property="id" javaType="int"/>
    <result column="last_name" property="lastName" javaType="string"/>
    <result column="gender" property="gender" javaType="char"/>
    <result column="email" property="email" javaType="string"/>
    <!--用 association 处理对象-->
    <association property="account"
                 javaType="com.pacos.Domain.Account"
                 resultMap="handleAccount">
    </association>
</resultMap>
<select id="getEmployeeNewList" resultMap="handleEmployeeNew">
    Select
        emp.id, emp.last_name,emp.gender,emp.email,acc.name
    from employee emp left join  Account acc on emp.account_id=acc.id
</select>
```

最后进行测试,可以看到 account 属性有数据了:

```java
/**
 * 联合查询
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class ResultMapDemo2 {
  private static final String resource = "META-INF/mybatis-config.xml";
  public static void main(String[] args) throws IOException {
      InputStream inputStream = Resources.getResourceAsStream(resource);
      SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

      // 设置自动提交事务
      try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
          EmployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
          // 返回 List 查询
          List<EmployeeNew> employeeNews = employeeMapper.getEmployeeNewList();
          // out: [EmployeeNew(id=1, lastName=tomcat, gender=1, email=tomcat@gmail.com, 
          //                  account=Account(id=1, accountName=基金)),
          //      EmployeeNew(id=2, lastName=spring, gender=0, email=spring@gmail.com,
          //                  account=Account(id=2, accountName=存折)),
          //      EmployeeNew(id=3, lastName=jetty, gender=1, email=jetty@gmail.com, 
          //                  account=Account(id=3, accountName=股票))]
          System.out.println(employeeNews);
      }
  }
}
```

#### 分步查询

> 除了联合查询之外, association 还支持分步查询

还是上述的例子,但是采用分步查询。示例有如下的说明

1. 分步查询 Account 的 sql 语句写在 Account 对应的 sql 映射文件中,而不是 Employee sql 映射文件中
2. association 中的 column 采用 {propName: colName} 的格式,将指定的数据传给 select 属性指定的 sql 语句

```xml
<!-- AccountMapper.xml -->
<resultMap id="handleAccount" type="com.pacos.Domain.Account">
    <id property="id" column="id" javaType="Integer"/>
    <result property="accountName" column="name" javaType="String"/>
</resultMap>
	<!-- 1.分步查询 Account 表的数据, -->
<select id="getAccountById" resultMap="handleAccount">
    select * from Account where id=#{id}
</select>

<!--EmployeeMapper.xml-->

<resultMap id="handleEmployeeNewByStep" type="com.pacos.Domain.EmployeeNew">
        <id column="id" property="id" javaType="int"/>
        <result column="last_name" property="lastName" javaType="string"/>
        <result column="gender" property="gender"/>
        <result column="email" property="email" javaType="string"/>
        <!--用 association 处理对象-->
        <association property="account"
                     javaType="com.pacos.Domain.Account"
                     select="com.pacos.Dao.AccountMapper.getAccountById"
                     column="{id=account_id}"
                     >
        </association>
    </resultMap>

    <select id="getEmployeeNewByStep" resultMap="handleEmployeeNewByStep">
        Select * from employee
    </select>
```

最后进行测试,结果和联合查询的一致!

```java
/**
 * 分步查询
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class ResultMapDemo3 {
  private static final String resource = "META-INF/mybatis-config.xml";
  public static void main(String[] args) throws IOException {
      InputStream inputStream = Resources.getResourceAsStream(resource);
      SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

      // 设置自动提交事务
      try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
          EmployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
          // 返回 List 查询
          List<EmployeeNew> employeeNews = employeeMapper.getEmployeeNewByStep();
          // out: [EmployeeNew(id=1, lastName=tomcat, gender=1, email=tomcat@gmail.com,
          //                  account=Account(id=1, accountName=基金)),
          //      EmployeeNew(id=2, lastName=spring, gender=0, email=spring@gmail.com,
          //                  account=Account(id=2, accountName=存折)),
          //      EmployeeNew(id=3, lastName=jetty, gender=1, email=jetty@gmail.com,
          //                  account=Account(id=3, accountName=股票))]
          System.out.println(employeeNews);
      }
  }
}
```

### collection

> 查询的时候,除了一对一,还会出现一对多的情况,那么表现在 javaBean 上就是属性是一个集合

Mybatis 通过 `<collection>` 标签处理结果集中有集合的情况, 它有如下的属性:

- `property`
  - javaBean 的属性名
- `ofType`
  - 指定集合中元素的类型

- 子节点: `<id>`、`<result>`, 用法和上面一样

#### 联合查询

假设查询 Account 账户信息以及对应的 Employee 信息,如果使用联合查询的方式:

首先定义 javaBean:

```java
public class AccountNew {
    private Integer id;
    private String accountName;
    private List<Employee> employees;
}

public class Employee {
    private Integer id;
    private String lastName;
    private char gender;
    private String email;
}
```

然后在 Account 的 sql 映射文件中编写 联合查询的 sql 语句:

```xml
<resultMap id="handleAccountByUnion" type="com.pacos.Domain.AccountNew">
    <id property="id" column="id" javaType="Integer"/>
    <result property="accountName" column="name" javaType="String"/>
    <collection property="employees"
                ofType="com.pacos.Domain.Employee">
        <!--这里 column=emp_id 是因为联合查询中存在多个column 为 id  -->
        <id column="emp_id" property="id" javaType="int"/>
        <result column="last_name" property="lastName"/>
        <result column="gender" property="gender"/>
        <result column="email" property="email"/>
    </collection>
</resultMap>
<select id="getAccountByUnion" resultMap="handleAccountByUnion">
    Select emp.last_name ,emp.gender ,emp.email, acc.id, acc.name,emp.id emp_id
    from Account acc ,employee emp
    where acc.id =emp.account_id
    order by acc.id
</select>
```

最后进行测试:

```java
/**
 * 联合查询-Collection
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class ResultMapDemo4 {
    private static final String resource = "META-INF/mybatis-config.xml";
    public static void main(String[] args) throws IOException {
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 设置自动提交事务
        try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
            AccountMapper accountMapper = sqlSession.getMapper(AccountMapper.class);
            // 返回 List 查询
            List<AccountNew> accountNews = accountMapper.getAccountByUnion();
            // out:[AccountNew(id=1, accountName=基金, employees=[
            //          Employee(id=1, lastName=tomcat, gender=1, email=tomcat@gmail.com),
            //          Employee(id=3, lastName=jetty, gender=1, email=jetty@gmail.com)]), 
            //      AccountNew(id=2, accountName=存折, employees=[
            //          Employee(id=2, lastName=spring, gender=0, email=spring@gmail.com)
            //        ])
            //   ]
            System.out.println(accountNews);
        }
    }
}
```

#### 分步查询

> collection 也支持分步查询,使用步骤和 [associattion 的分步查询](SQL映射#分步查询)基本一致

## insert / update / delete

> Mybatis 通过 `<insert>`、`<delete>`、`<update>` 标签分别对 增删改语句进行描述

### 标签属性

> 这三个标签具有一些属性来表达增删改的动作

| 属性               | 描述                                                         |
| :----------------- | :----------------------------------------------------------- |
| `id`               | sql 语句的唯一标识                                           |
| `parameterType`    | **可选值**，设置该 sql 语句参数的类全限定名或别名。<br/> MyBatis 可以根据语句中实际传入的参数推断出应该使用哪个 TypeHandler |
| `flushCache`       | 将其设置为 true 后，只要语句被调用，都会**导致本地缓存和二级缓存被清**空(**针对 insert、update 和 delete 语句**)<br/>默认值： true |
| `timeout`          | 超时时间,单位为秒<br/>默认值为未设置（unset）（依赖数据库驱动） |
| `statementType`    | 可选 `STATEMENT`，`PREPARED` 或 `CALLABLE`<br/>这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement<br/>默认值：PREPARED |
| `useGeneratedKeys` | 让 MyBatis 使用 JDBC 的 `getGeneratedKeys` 方法来取出由数据库内部生成的主键 (**仅适用于 insert 和 update**)<br/>默认值：false |
| `keyProperty`      | 指定能够唯一识别对象的属性 ( **仅适用于 insert 和 update** )<br/>MyBatis 使用 `getGeneratedKeys` 的返回值或 insert 语句的 [selectKey](SQL映射#selectkey-标签) 子元素设置它的值<br/>如果生成列不止一个，可以用逗号分隔多个属性名称 |
| `keyColumn`        | 设置生成键值在表中的列名 ( **仅适用于 insert 和 update** )<br/>在某些数据库中，当主键列不是表中的第一列的时候，是必须设置的。<br/>如果生成列不止一个，可以用逗号分隔多个属性名称。 |

#### 基本示例

> 基本的 增删改语句

对于 增删改来说,可以将接口方法的返回值定义为 `Integer`、`Long`、`Boolean`, Mybatis 分别返回**数据操作的影响行数和是否成功**

在  Mapper 接口中定义 sql

```java
public Integer add(Employee employee);
public boolean delete(Integer id);
public Integer update(Employee employee);
```

然后在 sql 映射文件中定义 sql 语句

```xml
<!--插入数据, parameterType 可以省略-->
<insert id="add" parameterType="Employee">
    insert into employee(last_name, gender,email)
    values (#{lastName},#{gender},#{email})
</insert>

<!--删除数据-->
<delete id="delete">
    delete from  employee where id=#{id}
</delete>

<!--更新数据-->
<update id="update">
    update employee set last_name=#{lastName},gender=#{gender},email=#{email}
    where id=#{id}
</update>
```

最后进行测试:

```java
/**
 * 增删改示例
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class CUDDemo {
    private static final String resource = "META-INF/mybatis-config.xml";
    public static void main(String[] args) throws IOException {
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 设置自动提交事务
        try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
            EmployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
            // out: [Employee(id=1, lastName=tom, gender=1, email=1@163.com)]
            printTable(employeeMapper);

            // 增加
            Integer insertCount = employeeMapper.add(new Employee(2, "pacos", '1', "pacos@gmail.com"));
            // out: insertCount:1
            System.out.println("insertCount:"+ insertCount);
            // out: [Employee(id=1, lastName=tom, gender=1, email=1@163.com),
            //       Employee(id=2, lastName=pacos, gender=1, email=pacos@gmail.com)
            //      ]
            printTable(employeeMapper);

            // 修改
            Integer updateCount = employeeMapper.update(new Employee(2, "pacos_update", '0', "pacos_update@gmail.com"));
            // out: updateCount:1
            System.out.println("updateCount:"+ updateCount);
            // out: [Employee(id=1, lastName=tom, gender=1, email=1@163.com),
            //       Employee(id=2, lastName=pacos_update, gender=0, email=pacos_update@gmail.com)
            //      ]
            printTable(employeeMapper);

            // 删除
            boolean deleted = employeeMapper.delete(2);
            // deleteSuccesses:true
            System.out.println("deleteSuccesses:"+ deleted);
            // out: [Employee(id=1, lastName=tom, gender=1, email=1@163.com)]
            printTable(employeeMapper);

        }
    }
    public static void printTable(EmployeeMapper employeeMapper) {
        List<Employee> employeeList  = employeeMapper.selectAll();
        System.out.println(employeeList);
    }
}
```

#### 获取自增值

> 关于 ***获取自增主键的值?***

有时候在增加或者更新的时候,需要获取到自增的主键,一般通过 `useGeneratedKeys`、`keyProperty`、`keyColumn` 三个数据进行操作

首先在 Mapper 接口中定义:

```java
// 插入获取自增主键
public boolean insertWithIncrementKey(Employee employee);
```

然后在 sql 映射文件中定义 sql 

```xml
<!--
  获取插入的主键
  useGeneratedKeys: 使用 getGeneratedKeys 获取自增的主键
  keyProperty: 绑定到 java bean 的哪个属性
  keyColumn: 表中自增的字段名
-->
<insert id="insertWithIncrementKey"
      useGeneratedKeys="true"
      keyProperty="id"
      keyColumn="id">
  insert into employee(last_name, gender,email)
  values (#{lastName},#{gender},#{email})
</insert>
```

然后进行测试:

```java
/**
 * 获取自增主键的示例
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class GenerateKeyDemo {
    private static final String resource = "META-INF/mybatis-config.xml";
    public static void main(String[] args) throws IOException {
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 设置自动提交事务
        try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
            mployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
            // 增加
            Employee employee = new Employee(null, "pacos", '1', "pacos@gmail.com");
            employeeMapper.insertWithIncrementKey(employee);
            // out: [Employee(id=6, lastName=pacos, gender=1, email=pacos@gmail.com)]
            printTable(employeeMapper);

            // 数据插入完成后,查看创建的对象
            // out: Employee(id=6, lastName=pacos, gender=1, email=pacos@gmail.com)
            System.out.println(employee);
        }
    }
    public static void printTable(EmployeeMapper employeeMapper) {
        List<Employee> employeeList  = employeeMapper.selectAll();
        System.out.println(employeeList);
    }
}
```

:::tip 说明

insert 中使用获取自增主键的功能,可以将数据库的生成的主键设置给 java bean!

:::

### SelectKey 标签[不推荐]

对于不支持自动生成主键列的数据库以及不支持自动生成主键的 JDBC 驱动，MyBatis 有可以通过 *SelectKey* 来生成主键 ( **一般不建议这么使用** )

SelectKey 有如下的属性:

| 属性            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| `keyProperty`   | `selectKey` 语句结果应该被设置到的目标属性。<br/>如果生成列不止一个，可以用逗号分隔多个属性名称。 |
| `keyColumn`     | 返回结果集中生成列属性的列名<br/>如果生成列不止一个，可以用逗号分隔多个属性名称 |
| `resultType`    | 结果的类型, 通常 MyBatis 可以推断出来<br/>MyBatis 允许将任何简单类型用作主键的类型，包括字符串<br/>如果生成列不止一个，则可以使用包含期望属性的 Object 或 Map |
| `order`         | 可以设置为 `BEFORE` 或 `AFTER`<br/>如果设置为 `BEFORE`，那么它首先会生成主键，设置 `keyProperty` 再执行插入语句<br/>如果设置为 `AFTER`，那么先执行插入语句，然后是 `selectKey` 中的语句 |
| `statementType` | MyBatis 支持 `STATEMENT`，`PREPARED` 和 `CALLABLE` 类型的映射语句<br/>分别代表 `Statement`, `PreparedStatement` 和 `CallableStatement` 类型 |

以官方文档的示例为说明:

```xml
<insert id="insertAuthor">
  <!--
	在插入语句前定义一个 SelectKey 的子标签,设置好需要为哪个字段生成主键,以及生成数据的类型
  然后在插入数据的时候会将生成的主键插入到数据中
	-->
  <selectKey keyProperty="id" resultType="int" order="BEFORE">
    select CAST(RANDOM()*1000000 as INTEGER) a from SYSIBM.SYSDUMMY1
  </selectKey>
  insert into Author
    (id, username, password, email,bio, favourite_section)
  values
    (#{id}, #{username}, #{password}, #{email}, #{bio}, #{favouriteSection,jdbcType=VARCHAR})
</insert>
```

## 参数

> 在上面的 sql 映射文件中,已经使用几种简单的参数传递方式

### 基础使用

Mybatis 提供了几种参数传递方式

1. **`单个参数`**

2. **`多个参数`**

3. **`Pojo`**

4. **`命名参数`**
5. **`Map`**

#### 单个参数

> Mybatis 没有额外的处理, 可以接受基本类型 / 对象类型 / 集合类型

- 传入的参数只有一个
- 通过 **#{ 参数名 }** 的方式取出值

假设需要通过 id 获取指定的 员工信息, 那么对应的 Mapper 接口的定义:

```java
public Employee getEmpById(Integer id);
```

然后对应的 sql 映射文件就可以:

```xml
<select id="getEmpById" resultType="com.pacos.Domain.Employee">
    Select * from employee where id=#{id}
</select>
```

#### 多个参数

**Mybatis 会将多个参数封装成 Map 传入 (#{} 就是从 map 中获取指定 key 的值 )**

- key : `param1,param2...` 或者 `arg0,arg1...`
  - param 从 1 开始
  - arg 从 0 开始
- value : 传入的参数

假设需要通过 id 和 lastName 获取员工信息,那么 Mapper 接口的定义:

```java
public Employee getEmpByIdAndName(Integer id,String name);
```

那么可以通过 paramxxxx 或者 argxxx 的方式获取参数

```xml
<select id="getEmpByIdAndName" resultType="com.pacos.Domain.Employee">
    Select * from employee where id=#{arg0} and last_name=#{param2}
</select>
```

#### Pojo

当传入的参数名都属于某个 Pojo 的时候,可以将参数封装为 Pojo 传入

- 通过 **#{Pojo 属性名}** 的方式取出值, 支持**级联属性**

假设通过 email 和 gender 获取 员工信息,且参数都属于 Employee,那么 Mapper 接口定义可以:

```java
public Employee getEmpByEmailAndGender(Employee employee);
```

对应的 sql 映射文件就可以写成:

```xml
<select id="getEmpByEmailAndGender" resultType="com.pacos.Domain.Employee">
    Select * from employee where email=#{email} and gender=#{gender}
</select>
```

#### 命名参数

> 在多个参数的情况下,如果使用 argxxx 或者 paramxxx 的方式会让 sql 映射文件极难维护和理解
>
> 而命名参数这种方式则可以解决这一问题,并且在开发中较为常见

通过 @Param 注解为为参数起别名 ( 明确指定封装参数时 map 的 key )

- 格式 : **`@Param("参数名")`**
- 通过 **#{ Param 的参数名 }** 的方式取出值

假设还是通过 id 和 lastName 获取员工信息,那么在接口命名参数的情况下, Mapper 接口的定义:

```java
public Employee getEmpByIdAndName(@Param("id") Integer id,@Param("lastName") String name);
```

对应的 sql 映射文件就可以写成:

```xml
<select id="getEmpByIdAndName" resultType="com.pacos.Domain.Employee">
    Select * from employee where id=#{id} and last_name=#{lastName}
</select>
```

#### Map

> 我们还可以直接传入一个 Map,将参数名作为 Key,参数值作为 value

假设通过 email 和 id 获取员工信息,那么 Mapper 接口可以这么写:

```java
public Employee getEmpByIdAndEmail(Map<String,Object> param);
```

在调用 Mapper 接口的时候,我们封装一个参数 Map 传入:

```java
private static final String resource = "META-INF/mybatis-config.xml";
  public static void main(String[] args) throws IOException {
      InputStream inputStream = Resources.getResourceAsStream(resource);
      SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

      try (SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
          EmployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
        	// highlight-start
          Map<String,Object> map = new HashMap<>();
          map.put("id", 1);
          map.put("email", "tomcat@gmail.com");
        	// 将封装的参数传入
          Employee emp = employeeMapper.getEmpByIdAndEmail(map);
          // highlight-end
          // out:generally unnecessary.
          //Employee(id=1, lastName=tomcat, gender=1, email=tomcat@gmail.com)
          System.out.println(emp);
      }
  }
```

那么 sql 映射文件就需要这么写( 参数名就是 map 的 key )

```xml
<select id="getEmpByIdAndEmail" resultType="com.pacos.Domain.Employee">
    Select * from employee where id=#{id} and email=#{email}
</select>
```

:::caution 注意点

这种方式在实际开发中较少应用

:::

### 其他类型

如果参数是 `Collection`（List、Set）或者是`数组`, MyBatis 也会把传入的集合或者数组封装在map中:

| 参数类型       | key          |
| -------------- | ------------ |
| **Collection** | `collection` |
| **List**       | `list`       |
| **数组**       | `array`      |

比如下面的 Mapper 接口,取出第一个id的值: `#{list[0]}`

```java
public Employee getEmpById(List<Integer> ids)
```

### 占位符 #{} 和 ${}

> 我们一般使用 #{} 的方式获取参数值,但是 Mybatis 还支持使用 `${}` 的占位符

- #{} 和 ${} 的区别

  - **#{}** 采用预编译的方式,将参数设置到 sql 语句中
  - **${}** 直接将值取出拼接到 sql 语句中,会有 Sql 注入的问题

- 使用思路

  - 大多情况下，我们去参数的值都应该去使用 #{}

  - 原生 jdbc 不支持使用占位符的地方就需要使用 `${}` 进行取值(将取出的值直接拼装在 sql 语句中)

    - 比如分表

      ```sql
      // 按照年份分表拆分
      select * from ${year}_salary where xxx
      ```

    - 比如排序

      ```sql
      Select * from tb1_employee order by ${field_name} ${order}
      ```

## 动态 SQL

> 在 JDBC 中,我们经常需要根据条件拼接 sql 语句,或者循环生成 sql 语句, Mybatis 利用 OGNL 表达式简化了这些操作

OGNL(Object Graph Navigation Language) 对象图导航语言,是一种强大的 表达式语言, 通过它可以非常方便的来操作对象属性

1. 访问对象属性
   - `对象.属性名.xxx`
2. 调用方法:
   - `对象.方法名`
3. 调用静态属性/方法
   - `@Class名.属性@方法名`
4. …

Mybatis 提供常见的标签

1. `if`
2. `choose`、`when`、`otherwise`
3. `trim`、`where`、`set`
4. `foreach`

:::tip 说明

可以在 标签中 直接使用“参数”值

:::

### if 和 where

- `if`
  - 通过 `test` 属性来配置判断表达式
- `where`
  - 用于封装查询条件, 对应 sql 语句中的 where 语句
  - 只有在会在子标签返回内容时才插入 where 语句, 并且如果 where 子句的开头为 `AND` 或 `OR`，where 标签也会将它们去除

:::caution 强烈建议
在使用 where 标签的时候,将 and  或者 or 放在 子标签的开头,这样可以避免**最后一个条件不满足时,sql 语句末尾多出 and 或者 or**
:::

> 假设有如下的查询需求: 如果提供 id,就根据 id 查询,如果提供 email,就根据 email 查询

首先在 Mapper 接口定义方面:

```java
// 采用 Pojo 的方式
public Employee getEmpByIdOrEmail(Employee employee);
```

然后在 sql 映射文件中,利用 if 标签对参数进行判断:

```xml
<select id="getEmpByIdOrEmail" resultType="com.pacos.Domain.Employee">
    Select * from employee
    <where>
        <if test="id != null">
            id=#{id}
        </if>
        <if test="email != null and email != ''">
            and email=#{email}
        </if>
    </where>
</select>
```

### if 和 set

- `set`
  - 用于封装update 中的 set 修改语句
  - **set 标签会去除额外的逗号**

> 假设有需求: 根据传入的对象值修改数据库指定行的数据

首先在 Mapper 接口中有以下的定义:

```java
// 将更新的参数封装为 Employee Pojo
public int updateEmp(Employee emp);
```

然后在 sql 映射文件中,使用 set 标签拼接：

```xml
<update id="updateEmp">
  update employee
  <set>
      <if test="email != null and email != ''">
          email=#{email},
      </if>
      <if test="lastName != null and lastName != ''">
          last_name=#{lastName}
      </if>
  </set>
  <where>
      <if test="id !=null">
          id=#{id}
      </if>
  </where>
</update>
```

### trim

> 1. trim 是一个很强大标签,它可以实现 where 和 set 标签的功能
> 2. 在 where 标签中,无法去除 where 语句末尾的 and 或者 or,但是通过 trim 标签则可以

- 包含的属性:
  - `prefix`
    - 前缀, 为拼接的字符串加一个前缀
    - 比如 where、set
  - `prefixOverrides`
    - 去掉整个字符串前面多余的指定字符
    - 多个字符用 `|` 分隔
  - `suffix`
    - 后缀,为拼接的字符串末尾加上一个后缀
  - `suffixOverrides`
    - 去掉整个字符串末尾多余的指定字符
    - 多个字符用 `|` 分隔

#### trim 与 where 和 set

trim 可以实现 where 标签的功能:

```xml
<trim prefix="WHERE" prefixOverrides="AND |OR ">
  <!--sql 语句-->
</trim>
```

除此之外, trim 还可以实现 set 标签的功能:

```xml
<trim prefix="SET" suffixOverrides=",">
  <!--sql 语句-->
</trim>
```

#### 基础示例

> 在前面的 where 标签中,我们说明过把 and 放在 sql 语句的开头,从而保证末尾不会出现 and。
>
> 那么如何利用 trim 实现去除末尾的 and 呢?

这里直接给出 sql 映射文件中的使用:

```xml
<select id="getEmpByIdOrEmail" resultType="com.pacos.Domain.Employee">
    Select * from employee
    <where>
      	<!--highlight-start-->
        <trim suffixOverrides="AND">
            <if test="id != null">
                id=#{id} and
            </if>
            <if test="email != null and email != ''">
                email=#{email}
            </if>
        </trim>
        <!--highlight-end--> 
    </where>
</select>
```

### choose、when、otherwise

> 我们可以通过 if 标签表达 if 判断语句的功能,有时候我们需要表达 if-else 语义,那么该如何处理?

Mybatis 提供了 `choose、when、other` 来表达 if-else 语义

假设有查询需求: 如果传入了 id,就用 id 查询,否则就用 lastName 查询员工信息,那么在 sql 映射文件中需要:

```xml
<select id="getEmpByIdOrEmail" resultType="com.pacos.Domain.Employee">
    Select * from employee
    <trim prefix="where" prefixOverrides="and">
      <choose>
        	<when test="id !=null">
            	id=#{id}
        	</when>
        	<otherwise>
            	last_name=#{lastName}
        	</otherwise>
      </choose>
		</trim>
</select>
```

### foreach

> 顾名思义,就是遍历的意思,尤其是在构建 in 条件语句的时候

foreach 有如下的属性:

1. `collection`
   - 需要遍历的集合
   - 关于集合参数的参数名,参见[其他类型](SQL映射#其他类型)
2. `item`
   - 遍历过程中的集合项
3. `index`
   - 遍历 list 的时候是index就是索引，item就是当前值
   - 遍历 map 的时候 index 表示的就是 map 的 key，item就是 map 的值
4. `separator`
   - 表示每次循环的结果,用什么拼接
5. `open`
   - 循环开始前, 拼接语句最开始的字符
6. `close`
   - 循环结束后, 拼接语句结束的字符

> 假设有查询需求: 给定 id 的集合,查询出对应的员工信息集合

首先, Mapper 接口中有如下的定义:

```java
public List<Employee> getEmpsById(List<Integer> id);
```

然后再 sql 映射文件中需要定义为:

```xml
<select id="getEmpsById" resultType="com.pacos.Domain.Employee">
    Select * from employee
    <foreach collection="list" item="emp_id" separator=","
             open="where id in (" close=")">
        #{emp_id}
    </foreach>
</select>
```

最后进行测试:

```java
/**
 * 动态 sql - foreach
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class DynamicSqlDemo3 {
    private static final String resource = "META-INF/mybatis-config.xml";
    public static void main(String[] args) throws IOException {
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
            EmployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
            List<Employee> emps = employeeMapper.getEmpsById(Arrays.asList(1,2));
            // out:[Employee(id=1, lastName=tomcat3, gender=1, email=tomcat3@gmail.com), 
            //      Employee(id=2, lastName=spring, gender=0, email=spring@gmail.com)
            //     ]
            System.out.println(emps);
        }
    }
}
```

### bind 

- `bind` 元素可以在 OGNL 表达式以外创建一个变量, 并将其绑定到当前的上下文

假设有查询需求: 根据传入的字符串对 lastName 进行模糊查询

```xml
<select id="getEmpsByLike" resultType="com.pacos.Domain.Employee">
  <bind name="lastName" value="'%' + name + '%'" />
    Select * from employee
  	where last_name like #{lastName}
</select>
```

最后进行测试:

```java
/**
 * 动态 sql - bind
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class DynamicSqlDemo4 {
    private static final String resource = "META-INF/mybatis-config.xml";
    public static void main(String[] args) throws IOException {
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
            EmployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
            List<Employee> emps = employeeMapper.getEmpsByLike("a");
            // out:[Employee(id=1, lastName=tomcat3, gender=1, email=tomcat3@gmail.com),
            //      Employee(id=3, lastName=jetty, gender=1, email=jetty@gmail.com)
            //     ]
            System.out.println(emps);
        }
    }
}
```

:::tip 提示

我们可以利用 bind 标签对传入的参数进行额外的处理后赋给新的参数,然后在后面的 sql 语句中使用新的参数

:::

### sql 和 include

Mybatis 提供 sql 和 include 标签,将重复的 sql 片段抽取出来,也可以使用动态标签

- `sql`
  - 用于定义查询抽取的 sql 片段
- `include`
  - 通过 `refid` 引用已经已经定义的 sql 片段

比如将查询的列名抽取出来:

```xml
<sql id="empCol">
  id,last_name as lastName, gender,email
</sql>
<select id="getEmpBySqlTag" resultType="com.pacos.Domain.Employee">
  Select
  <include refid="empCol"/>
  from employee
</select>
```

## 缓存
