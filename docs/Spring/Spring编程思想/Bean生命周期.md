---
id: Bean生命周期
title: Bean生命周期
---

## 元信息配置阶段

配置 BeanDefinition

1. 面向资源
    - XML 配置
    - Properties 资源配置
2. 面向注解
    - @Bean
    - @Component
    - @Configuration
    - ...
3. 面向 API
    - BeanDefinitionBuilder
    - ...

### XML 配置

这种方式就是定义一个 Spring 的 XML 配置文件,然后通过 XMLBeanDefinitionReader 读取 Bean 的元信息

虽然一直使用 XML 的方式,这里还是再简单的回顾使用下:

```xml title= Spring 的 XML 配置文件
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="admin-user" class="ioc.overview.Domain.User">
        <property name="id" value="1"/>
        <property name="name" value="admin"/>
    </bean>
</beans>
```

```java title=测试代码
/**
 * Bean 元信息配置(XMl)
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeanMetaDataConfigurationDemoByXMl {
  public static void main(String[] args) {
      DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
      XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(beanFactory);
      reader.loadBeanDefinitions("META-INF/BeanMetaConfiguration.xml");

      User bean = beanFactory.getBean(User.class);
      // out: User{id=1, name='admin'}
      System.out.println(bean);
  }
}
```

### Properties 配置

这种方式比较少见,它是基于 PropertiesBeanDefinitionReader 去读取 Bean 的元信息的,它的基本使用方式如下:

1. beanName.(class) : 指定了 bean的名称以及 bean 的class 类
2. beanName.(abstract) : 指定 bean 是不是抽象的
3. beanName.(parent) : 指定 bean 元信息的 parent 属性
4. beanName.(lazy-init) : 指定 bean 是否是懒加载
5. ...

下面展示代码:

**1. 配置一个 Properties 文件**

```ini
guest.(class)=ioc.overview.Domain.User
guest.id=2
guest.name=guest
```

**2.测试代码**

```java
/**
 * Bean 元信息配置(Properties)
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeanMetaDataConfigurationDemoByProperties {
  public static void main(String[] args) {
      DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
      PropertiesBeanDefinitionReader reader = new PropertiesBeanDefinitionReader(beanFactory);
      reader.loadBeanDefinitions("META-INF/BeanMetaConfiguration.properties");

      User bean = beanFactory.getBean(User.class);
      // out: User{id=2, name='guest'}
      System.out.println(bean);
  }
}
```

## 元信息解析阶段

1. **面向资源** BeanDefinition 解析
    - 顶级接口: `BeanDefinitionReader`
    - XML 解析器: `BeanDefinitionParser`
2. **面向注解** BeanDefinition 解析
    - `AnnotatedBeanDefinitionReader`,并没有继承自*BeanDefinitionReader*

> 面向资源的解析,需要指定资源的路径,这个资源可以是本地的文件资源,也可以是网络资源
>
> 面向注解的解析,不再是解析文件资源或者网络资源等,而是解析 Class 类

下面是基于注解的元信息解析的特性:

1. 即使是非 @Component 标注的 Class,也可以被注册
2. 注册的 Bean 的名称默认通过`AnnotationBeanNameGenerator`生成,默认是首字母小写,也可以通过 `AnnotatedBeanDefinitionReader#setBeanNameGenerator` 设置自定义 beanName 生成器

```java
/**
 * 基于 Java 注解的 Bean 元信息的解析
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class AnnotatedBeanDefinitionParserDemo {
  public static void main(String[] args) {
      // 实例化 BeanRegistry
      DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
      AnnotatedBeanDefinitionReader reader = new AnnotatedBeanDefinitionReader(beanFactory);
      // 注册当前类(不是 @Component  注解标注的 Class)
      reader.register(AnnotatedBeanDefinitionParserDemo.class);
      AnnotatedBeanDefinitionParserDemo demo = beanFactory.getBean("annotatedBeanDefinitionParserDemo",
              AnnotatedBeanDefinitionParserDemo.class);

      // out: AnnotatedBeanDefinitionParserDemo@1cd072a9
      System.out.println(demo);
  }
}
```

## 注册阶段

BeanDefinition 注册接口: BeanDefinitionRegistry,具体可以参看[依赖来源中关于 BeanDefinition 的注册](依赖来源#spring-beandefinition)

## BeanDefinition 合并阶段

父子 BeanDefinition 合并

1. 当前 BeanFactory 查找
2. 层次性 BeanFactory 查找

在 Java 中,一个 Class 可以继承另一个 Class,并且会继承另一个 Class 的属性,在 Spring 中也存在类似的特性,以 XML 配置为例:

```xml
<!--没有 parent,同样也是 GenericBeanDefinition,但是合并后成为 RootBeanDefinition -->
<bean class="ioc.overview.Domain.User"
      id="user">
    <property name="name" value="atu"/>
    <property name="id" value="10000"/>
</bean>

<!--
  GenericBeanDefinition,可以设置 parent,合并之后变成了 RootBeanDefinition
-->
<bean class="ioc.overview.Domain.SuperUser"
      id="superUser"
      parent="user"
      primary="true">
    <property name="address" value="常州"/>
</bean>
```

通过 bean 标签的`parent` 属性可以指定这个 bean 继承自哪个 bean,比如这里的 superUser 就继承自 user,那么 superUser 就会继承 user bean 的 name、id 属性。我们通过测试代码就可以看出来

```java
/**
 * BeanDefinition 的合并
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class MergedBeanDefinitionDemo {
  public static void main(String[] args) {
    DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
    XmlBeanDefinitionReader definitionReader = new XmlBeanDefinitionReader(beanFactory);
    // 读取 XML 配置文件
    int loadBeanDefinitions = definitionReader.loadBeanDefinitions("META-INF/MergedBeanDefinition.xml");
    System.out.printf("加载了 %d 个BeanDefinition%n",loadBeanDefinitions);

    // 获取 user Bean
    User user = beanFactory.getBean("user", User.class);
    // out: User{id=10000, name='atu'}
    System.out.println(user);

    // 获取 superUser
    SuperUser superUser = beanFactory.getBean("superUser", SuperUser.class);
    // highlight-start
    // out: SuperUser{address='常州'} User{id=10000, name='atu'}
    // highlight-end
    System.out.println(superUser);
  }
}
```

那么 Spring 如何实现这个功能呢?Spring 的`AbstractBeanFactory#getMergedBeanDefinition` 就是它的入口,由于BeanDefinition 存在和层次性,那么合并的时候就需要考虑 **parent bean 是否在父容器中**

```java title=AbstractBeanFactory#getMergedBeanDefinition
/**
 * 获取合并后的BeanDefinition
 */
@Override
public BeanDefinition getMergedBeanDefinition(String name) throws BeansException {
  String beanName = transformedBeanName(name);
  // 如果指定的 beanName 不在当前的 BeanFactory 中,且有父 BeanFactory
  if (!containsBeanDefinition(beanName) && getParentBeanFactory() instanceof ConfigurableBeanFactory) {
    return ((ConfigurableBeanFactory) getParentBeanFactory()).getMergedBeanDefinition(beanName);
  }
  // 对当前的BeanFactory 中的 指定 bean 进行合并操作
  return getMergedLocalBeanDefinition(beanName);
}
```

对于普通单一层次的Bean 容器来说,就直接去`AbstractBeanFactory#getMergedLocalBeanDefinition` 中合并 BeanDefinition 了

```java title=AbstractBeanFactory#getMergedLocalBeanDefinition
/**
 * 对当前 Bean 容器的指定 bean 进行合并
 */
protected RootBeanDefinition getMergedLocalBeanDefinition(String beanName) throws BeansException {
  // 首先通过 beanName 检查该 BeanDefinition 是否被合并了已经
  RootBeanDefinition mbd = this.mergedBeanDefinitions.get(beanName);
  if (mbd != null && !mbd.stale) {
    return mbd;
  }
  // 没有被合并过,开始合并
  return getMergedBeanDefinition(beanName, getBeanDefinition(beanName));
}

protected RootBeanDefinition getMergedBeanDefinition(String beanName, BeanDefinition bd)
    throws BeanDefinitionStoreException {
  return getMergedBeanDefinition(beanName, bd, null);
}
```

> 这里 Spring 的合并方法都是重载方法

```java title=AbstractBeanFactory#getMergedBeanDefinition
/**
 * 对于给定的一个 bean,返回一个 RootBeanDefinition
 * 如果有父子关系,那么子 BeanDefinition 会复制父 BeanDefinition,并将自身成员复制到该 BeanDefinition 上
 * @param beanName  BeanDefinition 对应的 beanName
 * @param bd 原始的 BeanDefinition
 * @param containingBd  嵌套Bean 的 BeanDefinition
 */
protected RootBeanDefinition getMergedBeanDefinition(
        String beanName,
        BeanDefinition bd, 
        @Nullable BeanDefinition containingBd) throws BeanDefinitionStoreException {

  synchronized (this.mergedBeanDefinitions) {
    RootBeanDefinition mbd = null;
    RootBeanDefinition previous = null;
    if (containingBd == null) {
      // 不是嵌套 Bean 的话,从已经合并的 BeanDefinition 中获取 BeanDefinition
      mbd = this.mergedBeanDefinitions.get(beanName);
    }

    if (mbd == null || mbd.stale) {
      // 处理 RootBeanDefinition: 该 BeanDefinition 没有进行合并,返回一个 RootBeanDefinition
      previous = mbd;
      if (bd.getParentName() == null) {
        if (bd instanceof RootBeanDefinition) {
          mbd = ((RootBeanDefinition) bd).cloneBeanDefinition();
        }
        else {
          mbd = new RootBeanDefinition(bd);
        }
      }
      else {
        // 处理子 BeanDefinition: 复制父 BeanDefinition 并进行合并
        BeanDefinition pbd;
        try {
          String parentBeanName = transformedBeanName(bd.getParentName());
          if (!beanName.equals(parentBeanName)) {
            // 获取父 BeanDefinition
            pbd = getMergedBeanDefinition(parentBeanName);
          }
          else {
            // 从父容器中查找
            BeanFactory parent = getParentBeanFactory();
            if (parent instanceof ConfigurableBeanFactory) {
              pbd = ((ConfigurableBeanFactory) parent).getMergedBeanDefinition(parentBeanName);
            }
            else {
              // ...
            }
          }
        }
        catch (NoSuchBeanDefinitionException ex) {
          // ...
        }
        // 利用父BeanDefinition 构建一个新的子BeanDefinition
        mbd = new RootBeanDefinition(pbd);
        // 将上一步得到的父 BeanDefinition 的备份与子 BeanDefinition 合并
        mbd.overrideFrom(bd);
      }

     // 返回合并后的BeanDefinition
    return mbd;
  }
}
```

可以看到上述的 getMergedBeanDefinition 操作需要注意:

1. 一个 BeanDefinition 默认不是 RootBeanDefinition,但是经过 getMergedBeanDefinition 操作后,就是了
2. 子 BeanDefinition 需要对父 BeanDefinition 进行拷贝,然后与自身定义的 BeanDefinition 合并,得到一个新的 `RootBeanDefinition`

另外,上述操作中的`overrideFrom` 方法会依据付 BeanDefinition 进行一些重写

```java
public void overrideFrom(BeanDefinition other) {
  if (StringUtils.hasLength(other.getBeanClassName())) {
    setBeanClassName(other.getBeanClassName());
  }
  // ...
  if (other instanceof AbstractBeanDefinition) {
    AbstractBeanDefinition otherAbd = (AbstractBeanDefinition) other;
    if (otherAbd.hasPropertyValues()) {
      // 比如对于Bean 属性的操作就是: 在父 BeanDefinition 的基础上进行 add
      getPropertyValues().addPropertyValues(other.getPropertyValues());
    }
    // ...
  }
  // ...
}
```

:::caution 嵌套 Bean
所谓的嵌套 Bean,就是一个 bean 中可以嵌套另一个 bean,比如:

```xml
<bean id="outer" class="...">
  <property name="inner">
      <bean id="inner" class="...."></bean>
  </property>
<bean/>
```

:::

## Class 加载阶段

- ClassLoader 类加载

- Java Security 安全控制

- ConfigurableBeanFactory 临时 ClassLoader

## 实例化前阶段

## 实例化后阶段

## 属性赋值前阶段

## Aware 接口回调阶段

## 初始化前阶段

## 初始化阶段

## 初始化后阶段

## 初始化后完成阶段

## 销毁前阶段

## 销毁阶段

## 垃圾收集
