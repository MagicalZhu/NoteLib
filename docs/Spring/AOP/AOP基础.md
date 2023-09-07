---
id: AOP基础
title: AOP基础
---


## 代理与 Aspect

首先需要激活 @AspectJ 模块, 一般来说有两种方式:

1. 注解
    - 激活 AspectJ 自动代理: `@EnableAspectJAutoProxy`
    - 声明切面: `@Aspect`
2. XML 配置
    - 激活 AspectJ 自动代理: `<aop:aspectj-autopeoxy/>`
    - 声明切面: `<aop:aspect/>`

### 注解驱动

可以通过 `@EnableAspectJAutoProxy` 来自动创建 AOP 代理, 通过 `@Aspect` 注解可以声明一个 Aspect 切面

下面是通过注解来激活 AspectJ 模块的示例:

```java
/**
 * AspectJ 的简单Demo
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 * @see EnableAspectJAutoProxy 用于启动 AspectJ 的自动代理
 * @see Configuration 声明一个配置类
 * @see Aspect 声明一个切面
 */
@Aspect
@EnableAspectJAutoProxy
@Configuration
public class AspectJDemo {
  public static void main(String[] args) {
      AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
      ctx.register(AspectJDemo.class);
      ctx.refresh();
      // 是被 CGLIB 提升的
      AspectJDemo aspectJDemo = ctx.getBean(AspectJDemo.class);
      ctx.close();
  }
}
```

### 底层 API

使用 API 的方式可以**为指定的对象创建代理对象**

- AspectJ 在 Spring AOP 的底层实现类: `AspectJProxyFactory`
- 一般 API 编程步骤如下:
  1. 创建 Proxy 工厂,并且设置目标对象
  2. 添加 Aspect 切面配置, 且切面中的 Advice 会被添加到 *advisors* 列表中
  3. 添加 Advice 中的增强操作
  4. 获取代理对象,并且利用代理对象进行"操作"

```java
// 声明一个 Aspect 切面
@Aspect
public class AspectConfig {
  // ...
}


/**
 * 利用 API 创建 AspectJ 代理
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class AspectJAPIDemo {
  public static void main(String[] args) {
      // 定义目标对象,假设为 Map
      Map<String,Object> cache = new HashMap<>();

      // 创建代理工厂,并且设置目标对象
      AspectJProxyFactory proxyFactory = new AspectJProxyFactory(cache);

      // 添加切面(Aspect)配置
      proxyFactory.addAspect(AspectConfig.class);

      // 设置 Advice,并且指定增强操作
      proxyFactory.addAdvice(new MethodBeforeAdvice() {
          @Override
          public void before(Method method, Object[] args, Object target) throws Throwable {
              if (method.getName().equals("put")) {
                  System.out.printf("当前存入的数据:key:%s,value:%s\r\n", args[0], args[1]);
              }
          }
      });

      // 获取代理对象,并利用代理对象进行操作
      Map proxy = (Map)proxyFactory.getProxy();
      //out: 当前存入的数据:key:1,value:pacos
      proxy.put("1", "pacos");
      // out: pacos
      System.out.println(proxy.get("1"));
  }
}

```

### XML 配置驱动

> 需要引入 AOP 相关的 Schema

有下面两种实现方法:

1. 配置容器上下文配置文件:
    - `<aop:config>`
    - `<aop:aspectj-autoproxy/>`

2. 使用 `ProxyFactoryBean`

#### 基于 ProxyFactoryBean

ProxyFactoryBean 可以对某个 Bean 创建代理对象,并利用代理对象执行方法

基本步骤:

1. 注册Advice 实现类
2. 配置 ProxyFactoryBean
    - 通过 `target` 属性指定目标对象
    - 通过 `interceptorNames` 属性指定 "Advice" 增强操作,有下面的注意点:
      - 这个 interceptorNames 是一个**List** , 可以将 *Advisor* 、*Interceptor | Advice* 接口的实现类名称添加进入
      - <mark>interceptorName 中可以包含星号,比如 global* 会匹配所有 beanName 以 global 开头的 interceptor</mark>

:::tip 说明
Interceptor 是 Advice 的子接口
:::

下面是基本示例:

首先创建一个 Advice 的实现类:

```java
/**
 * 前置处理(BeforeAdvice)
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 * @see MethodBeforeAdvice
 */
public class EchoServiceMethodBeforeAdvice implements MethodBeforeAdvice {
    @Override
    public void before(Method method, Object[] args, Object target) throws Throwable {
        System.out.println("[EchoServiceMethodBeforeAdvice] 进入方法:" + method.getName());
    }
}
```

然后在 XML 中进行配置:

```xml
<!--创建目标对象-->
<bean id="echoService" class="aop.domain.DefaultEchoService"/>

<!--注册Advice增强处理-->
<bean id="echoServiceMethodBeforeAdvice" class="aop.features.XML.EchoServiceMethodBeforeAdvice"/>

<!--创建ProxyFactoryBean-->
<bean id="echoServiceProxyFactoryBean"
      class="org.springframework.aop.framework.ProxyFactoryBean">
    <!-- 设置目标对象 -->
    <property name="target" ref="echoService"/>

    <!-- 添加拦截处理 -->
    <property name="interceptorNames">
      <list>
          <value>echoServiceMethodBeforeAdvice</value>
      </list>
    </property>
</bean>
```

最后进行测试:

```java
/**
 *  使用 XML 配置 的方式创建 Aspect 代理
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 *
 * @see ProxyFactoryBean
 */
public class AspectJByProxyFactoryBeanDemo1 {
  public static void main(String[] args) {
      String xmlPath = "/META-INF/aop.xml";
      ClassPathXmlApplicationContext ctx= new ClassPathXmlApplicationContext(xmlPath);
      ctx.refresh();
      EchoService defaultEchoService = ctx.getBean("echoServiceProxyFactoryBean", EchoService.class);
      System.out.println(defaultEchoService.echo("Hello,World"));
  }
}
/**
 * out:
 *    [EchoServiceMethodBeforeAdvice] 进入方法:echo
 *    [Echo]:Hello,World
 */
```

### 标准代理工厂API(ProxyFactory)

基本实现类: `ProxyFactory`,它也是基于 API 层面去做的,基本使用方式和[AspectJProxyFactory](AOP基础#底层-api) 很类似

下面是使用示例:

```java
/**
 * 通过建标准代理工厂 {@link ProxyFactory} 创建代理的示例
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 * @see ProxyFactory
 */
public class ProxyFactoryDemo {
  public static void main(String[] args) {
      Map<String,Object> cache = new HashMap<String, Object>();
      // 创建标准代理工厂
      ProxyFactory proxyFactory = new ProxyFactory(cache);

      proxyFactory.addAdvice(new MethodBeforeAdvice() {
          @Override
          public void before(Method method, Object[] args, Object target) throws Throwable {
              if (method.getName().equals("put")) {
                  System.out.printf("当前存入的数据:key:%s,value:%s\r\n", args[0], args[1]);
              }
          }
      });

      // 获取代理对象
      Map proxy = (Map)proxyFactory.getProxy();
      proxy.put("1", "pacos");
      System.out.println(cache.get("1"));
  }
}
```

## Pointcut 指令与表达式

pointcut 确定了一个或者多个连接点, 由于 SpringAOP 仅支持方法级别的连接点,所以**可以认为 pointcut 是与 Bean 的方法相匹配**。

一个 pointcut 声明包含两部分: `由名称和参数组成的签名` 和 `pointcut 表达式`, pointcut 并不负责执行,而是负责`过滤`,真正的执行动作在 `Advice` 中

有两种方式可以配置 Pointcut:

1. **内置配置**
    - 第一个参数(签名)由方法提供,并且该方法返回类型必须是 *void*
    - 第二个参数(pointcut 表达式) 定义在 advice 中

  ```java
  @Before("execution(* transfer(..))")
  public void doBefore() {
      // 自定义逻辑
  }
  ```

2. **注解配置**
    - 第一个参数(签名)由方法提供,并且该方法返回类型必须是 *void*
    - 第二个参数(pointcut 表达式)则通过使用 `@Pointcut` 注解来表示

  ```java
  // 简单的示例:
  @Pointcut("execution(* transfer(..))") // pointcut 表达式
  private void anyOldTransfer() {       // pointcut 签名,返回值必须是 void
    // ...
  }
  ```

### 表达式类型

1. `execution`
2. `within`
3. `this`
4. `target`
5. `args`
6. `@target`
7. `@args`
8. `@within`
9. `@annotation`

#### execution

> 最通用的表达式类型

- **用于匹配方法连接点**

- 格式: **execution([modifier] return-type [declaring-type]name-pattern(param-pattern) [throws-pattern])**
  - `modifier`
    - 修饰符匹配 [可选的]
    - 匹配规则:
      - 可以选择: public、private...
      - 如果省略, 则匹配任意修饰符

  - `return-type`
    - 返回类型(包路径)匹配
    - 匹配规则:
      - 使用 `..` 匹配包及其子包的所有类
      - 使用 `*` 表示任意数量的字符

  - `declaring-type`
    - 类型(包路径)匹配 [可选的]
    - 匹配规则:
      - 使用 `..` 匹配包及其子包的所有类
      - 使用 `*` 表示任意数量的字符
      - 如果省略, 则匹配所有类路径

    - **注意: 如果指定了包名匹配,那么需要在方法名匹配前加上 "."**
  - `name-pattern`
    - 方法名称匹配
    - 匹配规则:
      - 使用 `*` 表示任意数量的字符
        - *匹配任意方法
        - set* 匹配名称以 set 开头的方法

  - `param-pattern`
    - 参数类型和数量匹配
    - 匹配规则:
      - `()` :   匹配没有参数的方法
      - `(..)`:  匹配有任意数量参数的方法
      - `(*)` :  匹配有一个任意类型参数的方法
      - `(*,String)`:  匹配有两个参数的方法，并且第一个为任意类型，第二个为 String 类型

  - `throws-pattern`
    - 抛出异常类型匹配 [可选值]
    - 匹配规则:
      - 如果省略, 则匹配任意类型

:::tip 类型匹配语法

1. `*`: 匹配任意数量的字符
2. `..`: 匹配任意数量的字符的重复
3. `+` : 匹配指定类型及其子类型, 仅能作为后缀放在类型的后边
4. 详细 [Spring AOP的基本使用](https://juejin.cn/post/7256964915134742584)
5. [Pointcut 表达式](https://www.cnblogs.com/rain144576/p/14708717.html)

:::

```java
// 匹配所有的 public 方法
execution(public * *(..))

// 匹配所有类中方法名以 set 开头的方法
execution(* set*(..))

// 匹配 com.xyz.service.AccountService 中的所有方法
execution(* com.xyz.service.AccountService.*(..))

// 匹配 com.xyz.service 包下面所有的方法
execution(* com.xyz.service.*.*(..))

// 匹配 com.xyz.service 包以及子孙包中的所有方法
execution(* com.xyz.service..*.*(..))
```

### 注解

### XML 配置

### API 编程

## 环绕拦截动作(Around)

### 注解

### XML 配置

### API 编程

## 前置拦截动作(Before)

### 注解

### XML 配置

### API 编程

## 后置拦截动作(After)

### 注解

### XML 配置

### API 编程

## 自动动态代理

## 替换 TargetSource

## 总结
