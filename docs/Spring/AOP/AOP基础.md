---
id: AOP基础
title: AOP基础
---


## 创建代理

- 激活 @AspectJ 模块
  - 激活注解: `@EnableAspectJAutoProxy`
  - XML 配置: `<aop:aspectj-autopeoxy/>`
- 声明一个 Aspect 切面 : `@Aspect`

### 注解

下面是通过注解来激活 AspectJ 模块,并且声明一个 Aspect 切面:

```java
/**
 * AspectJ 的简单Demo
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 * @see Aspect  用于声明一个 Aspect 切面
 * @see EnableAspectJAutoProxy 用于启动 AspectJ 的自动代理
 * @see Configuration 声明一个配置类
 */

@Aspect
@EnableAspectJAutoProxy
@Configuration
public class AspectJDemo {
  public static void main(String[] args) {
      AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
      ctx.register(AspectJDemo.class);
      ctx.refresh();
      AspectJDemo aspectJDemo = ctx.getBean(AspectJDemo.class);
      ctx.close();
  }
}
```

### API 编程

- AspectJ 在 Spring AOP 的底层实现类: `AspectJProxyFactory`
- 一般 API 编程步骤如下:
  - 创建 Proxy 工厂,并且设置目标对象
  - 设置 Aspect配置类
  - 指定 Advice 中的增强操作
  - 利用代理对象进行操作

```java
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
      // 设置 Advice,并且指定增强操作
      proxyFactory.addAdvice(new MethodBeforeAdvice() {
          @Override
          public void before(Method method, Object[] args, Object target) throws Throwable {
              if (method.getName().equals("put")) {
                  System.out.printf("当前存入的数据:key:%s,value:%s\r\n", args[0], args[1]);
              }
          }
      });

      // 利用代理对象进行操作
      Map proxy = (Map)proxyFactory.getProxy();
      //out: 当前存入的数据:key:1,value:pacos
      proxy.put("1", "pacos");
      // out: pacos
      System.out.println(proxy.get("1"));
  }
}

```

### XML 配置

> 需要引入 AOP 相关的 Schema

有下面两种实现方法:

1. 配置 `ProxyFactoryBean`
2. 配置容器上下文配置文件:
    - `<aop:config>`
    - `<aop:aspectj-autoproxy/>`

#### 基于 ProxyFactoryBean

基本步骤:

1. 注册Advice 实现类
2. 配置 ProxyFactoryBean
    - 通过 `target` 属性指定目标对象
    - 通过 `interceptorNames` 属性指定 advice 的实现

首先: 创建一个 Advice 的实现类:

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
    <property name="interceptorNames" value="echoServiceMethodBeforeAdvice"/>
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

### 标准代理工厂(ProxyFactory)

## PointCut 指令与表达式

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
