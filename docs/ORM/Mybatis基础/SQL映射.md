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



#### 分步查询

### collection

它有如下的属性:

- *property*
  - javaBean 的属性名
- *ofType*
  - 指定集合中元素的类型

它包含了子节点: `<id>`、`<result>`, 用法和上面一样

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

#### 示例 1

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

#### 示例 2

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

## 动态 SQL

## 缓存

