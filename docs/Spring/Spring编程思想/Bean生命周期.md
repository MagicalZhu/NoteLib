---
id: Bean生命周期
title: Bean生命周期
---

## 元信息配置

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

## 元信息解析

1. **面向资源** BeanDefinition 解析
    - 顶级加载接口: `BeanDefinitionReader`
    - XML 解析器: `BeanDefinitionParser`
      - *AnnotationConfigBeanDefinitionParser*
      - *AbstractBeanDefinitionParser*
      - ...
2. **面向注解** BeanDefinition 解析
    - 加载接口:`AnnotatedBeanDefinitionReader`,并没有继承自*BeanDefinitionReader*

> - 面向资源的解析,需要指定资源的路径,这个资源可以是本地的文件资源, 所以 BeanDefinitionReader 解析资源的方法会传入 Resource
>
> - 面向注解的解析,不再是解析文件资源或者网络资源等,而是解析 Class 类,所以这个 Reader 没有继承 BeanDefinitionReader

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

## 元信息注册

BeanDefinition 注册接口: BeanDefinitionRegistry,具体可以参看[Spring BeanDefinition 的注册](依赖来源#spring-beandefinition)

## 元信息(BeanDefinition)合并

父子 BeanDefinition 合并需要围绕下面两个处理:

1. 当前 BeanFactory 查找 BeanDefinition
2. 层次性的 BeanFactory 查找 BeanDefinition

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

通过 bean 标签的**parent** 属性可以指定这个 bean 继承自哪个 bean,比如这里的 superUser 就继承自 user,那么 superUser 就会继承 user bean 的 name、id 属性。我们通过测试代码就可以看出来

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
    System.out.printf("加载了 %d 个 BeanDefinition%n",loadBeanDefinitions);

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

那么 Spring 如何实现这个功能呢?Spring 的`AbstractBeanFactory#getMergedBeanDefinition` 就是它的入口(实现了 ConfigurableBeanFactory 接口),因为 BeanFactory 存在着层次性(HierarchicalBeanFactory),那么合并的时候就需要考虑 **parent bean 是否在父容器中**

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
 * @param bd 当前的 BeanDefinition
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
          // 利用当前的 BeanDefinition 获取 parent beanName
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
2. 子 BeanDefinition 需要对父 BeanDefinition 进行**拷贝**,然后与自身定义的 BeanDefinition **合并**,得到一个新的 `RootBeanDefinition`

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

## Class 加载

> BeanDefinition 合并完成之后,在 Bean 被创建之前,需要利用类加载器(ClassLoader) 将 Bean 所对应的 Class 类进行加载

- ClassLoader 类加载

- Java Security 安全控制

- ConfigurableBeanFactory 临时 ClassLoader

在 `AbstractBeanFactory#doGetBean` 方法中除了可以返回外部Bean、进行 BeanDefinition 的合并,还会进行`createBean`操作

```java title=AbstractBeanFactory#doGetBean
if (mbd.isSingleton()) {
  sharedInstance = getSingleton(beanName, () -> {
    try {
      // highlight-start
      // 创建 Bean
      return createBean(beanName, mbd, args);
      // highlight-end
    }
    catch (BeansException ex) {
      destroySingleton(beanName);
      throw ex;
    }
  });
  bean = getObjectForBeanInstance(sharedInstance, name, beanName, mbd);
}
```

在 createBean 的时候会通过`resolveBeanClass` 方法从而进一步调用 `doResolveBeanClass` 来获取 **类加载器** 去加载 Bean Class,从而将 BeanDefinition 中定义字符串的 class 字符串信息变为 Class 对象

```java title=AbstractBeanFactory#doResolveBeanClass
@Nullable
private Class<?> doResolveBeanClass(RootBeanDefinition mbd, Class<?>... typesToMatch)
    throws ClassNotFoundException {
  
  // 获取类加载器
  ClassLoader beanClassLoader = getBeanClassLoader();
  ClassLoader dynamicLoader = beanClassLoader;
  boolean freshResolve = false;

  // ...

  String className = mbd.getBeanClassName();
  if (className != null) {
    // 评估 BeanDefinition
    Object evaluated = evaluateBeanDefinitionString(className, mbd);
    if (!className.equals(evaluated)) {
      if (evaluated instanceof Class) {
        return (Class<?>) evaluated;
      }
      else if (evaluated instanceof String) {
        className = (String) evaluated;
        freshResolve = true;
      }
      else {
        throw new IllegalStateException("Invalid class name expression result: " + evaluated);
      }
    }
    if (freshResolve) {
      if (dynamicLoader != null) {
        try {
          return dynamicLoader.loadClass(className);
        }
        catch (ClassNotFoundException ex) {
          if (logger.isTraceEnabled()) {
            logger.trace("Could not load class [" + className + "] from " + dynamicLoader + ": " + ex);
          }
        }
      }
      return ClassUtils.forName(className, dynamicLoader);
    }
  }
  // 这里会将 BeanDefinition 中定义的 String 类型 转为 Bean Class 对应的类
  return mbd.resolveBeanClass(beanClassLoader);
}
```

## 实例化前(阻断实例化过程)

> - InstantiationAwareBeanPostProcessor 会在 Bean 被实例化之前调用,它继承并拓展了 `BeanPostProcessor`
>
> - 利用这个 BeanPostProcessor 可以在实例化某个 Bean 之前,拦截这个 Bean 并且返回自定义的 Bean 对象,从而**替换 Spring IOC 容器中默认的实现类**

**非主流的生命周期**

- 入口点: InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation

我们看下该接口默认方法的定义,可以看到 **如果此方法返回非空对象，则会短路掉目标 bean 的默认实例化,使用自定义的 bean 对象替换容器中的 bean,无需进行后续的 bean 实例化、初始化等操作**

```java title=InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation
/**
 * 在目标bean实例化之前应用此BeanPostProcessor,返回的bean对象可以是代理，以代替目标bean
 */
@Nullable
default Object postProcessBeforeInstantiation(Class<?> beanClass, String beanName) throws BeansException {
  return null;
}
```

### 源码分析

在 `createBean` 的 `doCreateBean` 方法执行之前,会调用 `resolveBeforeInstantiation`,这里可以返回一个 Bean 来绕过 Bean 的实例化以及后续的初始化步骤

```java title=AbstractAutowireCapableBeanFactory#createBean
protected Object createBean(String beanName,
                            RootBeanDefinition mbd, 
                            @Nullable Object[] args) throws BeanCreationException {

  RootBeanDefinition mbdToUse = mbd;
  // 解析处理 Bean Class
  Class<?> resolvedClass = resolveBeanClass(mbd, beanName);
  if (resolvedClass != null && !mbd.hasBeanClass() && mbd.getBeanClassName() != null) {
    mbdToUse = new RootBeanDefinition(mbd);
    mbdToUse.setBeanClass(resolvedClass);
  }
  // ...
  try {
    // highlight-start
    // 调用 InstantiationAwareBeanPostProcessor ,可以返回一个 Bean 对象
    // 比如返回一个代理对象来代替目标 Bean
    Object bean = resolveBeforeInstantiation(beanName, mbdToUse);
    if (bean != null) {
      return bean;
    }
    // highlight-end
  }
  // 如果返回 null,再继续执行后续创建 Bean 的操作
  try {
    Object beanInstance = doCreateBean(beanName, mbdToUse, args);
    return beanInstance;
  }
  // ...
}
```

我们观察下 `resolveBeforeInstantiation` 的源码:

```java title=AbstractAutowireCapableBeanFactory#resolveBeforeInstantiation
protected Object resolveBeforeInstantiation(String beanName, RootBeanDefinition mbd) {
  Object bean = null;
  if (!Boolean.FALSE.equals(mbd.beforeInstantiationResolved)) {
    if (!mbd.isSynthetic() && hasInstantiationAwareBeanPostProcessors()) {
      Class<?> targetType = determineTargetType(beanName, mbd);
      if (targetType != null) {
        // highlight-start
        // 应用 InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation
        bean = applyBeanPostProcessorsBeforeInstantiation(targetType, beanName);
        if (bean != null) {
          // 应用 BeanPostProcessor#postProcessAfterInitialization
          bean = applyBeanPostProcessorsAfterInitialization(bean, beanName);
        }
        // highlight-end
      }
    }
    mbd.beforeInstantiationResolved = (bean != null);
  }
  return bean;
}
```

`postProcessBeforeInstantiation` 发返回 null 的话,则会继续执行后续的 `doCreateBean` 操作(实例化、初始化...),下面通过代码演示:

### 示例代码

```java
/**
 * 演示 Bean 实例化生命周期前阶段 {@link org.springframework.beans.factory.config.InstantiationAwareBeanPostProcessor}
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeanInstantiationLifestyleDemo {
    public static void main(String[] args) {
        DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
        PropertiesBeanDefinitionReader reader = new PropertiesBeanDefinitionReader(beanFactory);
        beanFactory.addBeanPostProcessor(new CustomInstantiationAwareBeanPostProcessor());
        // 加载了 BeanDefinition (id: 2, name: guest)
        reader.loadBeanDefinitions("META-INF/BeanMetaConfiguration.properties");
        User bean = beanFactory.getBean("guest", User.class);
        System.out.println(bean);
    }
    // 自定义InstantiationAwareBeanPostProcessor,对指定的 BeanDefinition 返回特殊的 bean
    static class CustomInstantiationAwareBeanPostProcessor implements InstantiationAwareBeanPostProcessor {
        @Override
        public Object postProcessBeforeInstantiation(Class<?> beanClass, String beanName) throws BeansException {
            System.out.println("执行CustomInstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation");
            if (ObjectUtils.nullSafeEquals(beanName, "guest")) {
                User afterUser = new User();
                afterUser.setId(3L);
                afterUser.setName("after guest");
                return afterUser;
            }
            // 返回 null 则执行后续的 doCreateBean 操作
            return null;
        }
    }
}
/**
 * out: 
 *  执行CustomInstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation
 *  User{id=3, name='after guest'}    
 */
```

:::tip 提示

通过这个说明了, Bean 的实例化是可以被"绕开"的,而且还是可以通过实现 `BeanPostProcessor#postProcessAfterInitialization` 自定义 Bean 初始化后的动作

:::

## 实例化 Bean

> 在 `AbstractAutowireCapableBeanFactory#doCreateBean` 中,除了上面利用 InstantiationAwareBeanPostProcessor 绕开 Bean 的实例化,之后就准备 Bean 的正常实例化

Bean 正常实例化的入口在:`AbstractAutowireCapableBeanFactory#createBeanInstance`,该入口中有两种实例化方法的分支:

1. 传统实例化方式
    - 实例化策略: `InstantiationStrategy`
    - 方法入口: **instantiateBean**

2. 构造器依赖注入
    - 方法入口: **autowireConstructor**

```java title=AbstractAutowireCapableBeanFactory#createBeanInstance
protected BeanWrapper createBeanInstance(String beanName,
                                        RootBeanDefinition mbd,
                                        @Nullable Object[] args) {
  Class<?> beanClass = resolveBeanClass(mbd, beanName);  
  if (beanClass != null &&
      !Modifier.isPublic(beanClass.getModifiers()) &&
      !mbd.isNonPublicAccessAllowed()) {
    throw new BeanCreationException(mbd.getResourceDescription(), beanName,
        "Bean class isn't public, and non-public access not allowed: " + beanClass.getName());
  }
  // 从 BeanDefinition 中获取实例化的函数式接口
  Supplier<?> instanceSupplier = mbd.getInstanceSupplier();
  if (instanceSupplier != null) {
    return obtainFromSupplier(instanceSupplier, beanName);
  }
  // 如果设置了 factory-method
  if (mbd.getFactoryMethodName() != null) {
    return instantiateUsingFactoryMethod(beanName, mbd, args);
  }
  // ...
  // highlight-start
  // 利用 SmartInstantiationAwareBeanPostProcessor 来决定 bean 的构造器对象
  Constructor<?>[] ctors = determineConstructorsFromBeanPostProcessors(beanClass, beanName);
  /**
   * 满足下面四种情况中的任意一种,就会采用构造器依赖注入
   *    1. 如果有构造器对象 
   *    2. 如果BeanDefinition 的 AutowireMode 是 AUTOWIRE_CONSTRUCTOR
   *    3. 有构造参数
   *    4. 传入的参数不为空,这个参数是 getBean 重载方法中的可变参数
   */
  if (ctors != null || mbd.getResolvedAutowireMode() == AUTOWIRE_CONSTRUCTOR ||
      mbd.hasConstructorArgumentValues() || !ObjectUtils.isEmpty(args)) {
    return autowireConstructor(beanName, mbd, ctors, args);
  }
  // highlight-end

  // Preferred constructors for default construction?
  ctors = mbd.getPreferredConstructors();
  if (ctors != null) {
    return autowireConstructor(beanName, mbd, ctors, null);
  }

  // No special handling: simply use no-arg constructor
  // 没有特殊的处理: 简单的使用无参构造器
  return instantiateBean(beanName, mbd);
}
```

可以发现,传统实例化方式走 [instantiateBean](Bean生命周期#instantiatebean) 的方式,如果设置了使用构造函数实例化,那么就走 [autowireConstructor](Bean生命周期#autowireconstructor) 的方式

### instantiateBean

这是传统实例化方式,通过获取实例化策略并进行初始化 Bean,Spring 使用的初始化策略是`SimpleInstantiationStrategy`

这种方式通过反射获取构造器 Class 对象 `Constructor`,然后利用 `Constructor.newInstance` 创建并返回一个Bean实例

```java title=AbstractAutowireCapableBeanFactory#instantiateBean
protected BeanWrapper instantiateBean(final String beanName,
                                      final RootBeanDefinition mbd) {
  try {
    Object beanInstance;
    final BeanFactory parent = this;
    if (System.getSecurityManager() != null) {
      // ...
    }
    else {
      // 获取实例化策略并进行初始化
      beanInstance = getInstantiationStrategy().instantiate(mbd, beanName, parent);
    }
    BeanWrapper bw = new BeanWrapperImpl(beanInstance);
    initBeanWrapper(bw);
    return bw;
  }
  catch (Throwable ex) {
    throw new BeanCreationException(
        mbd.getResourceDescription(), beanName, "Instantiation of bean failed", ex);
  }
}
```

### autowireConstructor

构造器的注入会优先按照构造器参数类型进行匹配,如果匹配的有多个 Bean ,那么就按照参数名进行匹配。也就是优先 byType,然后 byName

#### 测试

给定一个 UserHolder 的 Java Bean

```java
@ToString
public class UserHolder {
  final User user;

  public UserHolder(User user) {
      this.user = user;
  }
}
```

然后再 XML 中定义,开启 `autowire-mode`:

```xml
<!--注册UserHolder, 并且设置为自动注入-->
<bean id="userHolder" class="Bean.UserHolder" autowire="constructor"/>
```

我们对**3种**情况进行测试:

**1. 多个 User 类型,且设置了primary=true**

在 XML 上下文配置文件中是这样配置定义的两个 User 对象的

```xml
<!--注册 User-->
<bean id="user" class="ioc.overview.Domain.User">
    <property name="id" value="11"/>
    <property name="name" value="athu"/>
</bean>

<!--注册 SuperUser(Primary)-->
  <bean  id="superUser" class="ioc.overview.Domain.SuperUser"
          parent="user"
          primary="true">
      <property name="address" value="常州市"/>
  </bean>
```

我们运行测试代码,查看 UserHolder 中存储的对象是啥:

```java
/**
 * Bean 是如何实例化的 - 构造器的依赖注入
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeanInstantiationCtorDemo {
    public static void main(String[] args) {
        DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
        XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(beanFactory);
        reader.loadBeanDefinitions("META-INF/BeanLifecycleInstantiation.xml");

        UserHolder userHolder = beanFactory.getBean("userHolder", UserHolder.class);
        // UserHolder(user=SuperUser{address='常州市'} User{id=11, name='athu'})
        System.out.println(userHolder);
    }
}
```

可以看到,UserHolder 构造器注入的是 User 类型,且 参数名为 user,但是这里是 SuperUser,所以可以很正常猜测到时通过 byType,然后由于 SuperUser 设置了 primary=true,所以就找到了 superUser,也就是与参数名无关

**2. 多个 User 类型,但没有设置primary,但是参数名是 beanName**

这里测试的时候,只需要修改 XML 上下文配置文件:

```xml
<!--注册 User-->
<bean id="user" class="ioc.overview.Domain.User">
    <property name="id" value="11"/>
    <property name="name" value="athu"/>
</bean>

<!--注册 SuperUser-->
<bean  id="superUser" class="ioc.overview.Domain.SuperUser"
        parent="user">
    <property name="address" value="常州市"/>
</bean>
```

然后进行测试:

```java
public class BeanInstantiationCtorDemo {
  public static void main(String[] args) {
    DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
    XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(beanFactory);
    reader.loadBeanDefinitions("META-INF/BeanLifecycleInstantiation.xml");

    UserHolder userHolder = beanFactory.getBean("userHolder", UserHolder.class);
    // UserHolder(user=User{id=11, name='athu'})
    System.out.println(userHolder);
  }
}
```

从测试结果可以看到,找到了 beanName = user 的 bean,这意味着通过 byName 的方式注入了依赖

**3. 多个 User 类型,但没有设置primary,且参数名也不等于 beanName**

这种情况不举例子,它会报下面的异常信息:

```txt
No qualifying bean of type 'ioc.overview.Domain.User' available: 
  expected single matching bean but found 2: user,superUser
```

通过这个可以更加确定如果存在多个类型一致的 bean,构造器依赖注入的时候不仅需要 byType, 还需要byName

#### 源码分析

> 源码较长,配合示例去除多余的代码

可以看到 autowireConstructor 的大体思路为(依据示例):

1. 首先获取候选构造器对象 Constructor
2. 判断是否需要自动注入 autowire-mode == AUTOWIRE_CONSTRUCTOR
3. 获取候选构造器的参数数量、类型、名称
4. 调用 `createArgumentArray` 构建构造器参数数组

```java title=ConstructorResolver#autowireConstructor
/**
 * @param beanName bean的名称,这里就是需要构造器依赖注入的 userHolder
 */
public BeanWrapper autowireConstructor(String beanName,
             RootBeanDefinition mbd,
             @Nullable Constructor<?>[] chosenCtors,
             @Nullable Object[] explicitArgs) {

  BeanWrapperImpl bw = new BeanWrapperImpl();
  this.beanFactory.initBeanWrapper(bw);
  Constructor<?> constructorToUse = null;
  ArgumentsHolder argsHolderToUse = null;
  Object[] argsToUse = null;

  // 判断 BeanDefinition 是否定义了构造参数 constructor-arg
  // ...
  if (constructorToUse == null || argsToUse == null) {
    Constructor<?>[] candidates = chosenCtors;
    if (candidates == null) {
      Class<?> beanClass = mbd.getBeanClass();
      try {
        // highlight-start
        // 获取候选构造器对象 Constructor
        candidates = (mbd.isNonPublicAccessAllowed() ?
            beanClass.getDeclaredConstructors() : beanClass.getConstructors());
        // highlight-end
      }
      catch (Throwable ex) {
        // handle expcetion
      }
    }
    if (candidates.length == 1 && explicitArgs == null && !mbd.hasConstructorArgumentValues()) {
      Constructor<?> uniqueCandidate = candidates[0];
      // 只有一个构造器函数,并且没有 constructor-arg 信息,但是构造器是无参构造器(parameterCount == 0)
      if (uniqueCandidate.getParameterCount() == 0) {
        // ...
        bw.setBeanInstance(instantiate(beanName, mbd, uniqueCandidate, EMPTY_ARGS));
        return bw;
      }
    }

    // 判断是否需要自动注入(autowire-mode == 3 ?)
    boolean autowiring = (chosenCtors != null ||
        mbd.getResolvedAutowireMode() == AutowireCapableBeanFactory.AUTOWIRE_CONSTRUCTOR);
    ConstructorArgumentValues resolvedValues = null;

    AutowireUtils.sortConstructors(candidates);
    int minTypeDiffWeight = Integer.MAX_VALUE;
    Set<Constructor<?>> ambiguousConstructors = null;
    Deque<UnsatisfiedDependencyException> causes = null;

    for (Constructor<?> candidate : candidates) {
      // 获取候选构造器的参数数量
      int parameterCount = candidate.getParameterCount();
      ArgumentsHolder argsHolder;
      // 获取候选构造器的参数类型
      Class<?>[] paramTypes = candidate.getParameterTypes();

      // 获取候选构造器的参数名称
      if (resolvedValues != null) {
        try {
          // 首先查看构造器上是否标注 @ConstructorProperties 注解
          // 如果有的话, @ConstructorProperties 的 value 属性值作为候选构造器的参数名称
          String[] paramNames = ConstructorPropertiesChecker.evaluate(candidate, parameterCount);
          if (paramNames == null) {
            // 利用 ParameterNameDiscoverer 获取候选构造器的参数名称
            // ParameterNameDiscoverer 的 其中一个实现是 LocalVariableTableParameterNameDiscoverer
            ParameterNameDiscoverer pnd = this.beanFactory.getParameterNameDiscoverer();
            if (pnd != null) {
              paramNames = pnd.getParameterNames(candidate);
            }
          }
          // highlight-start
          // 创建构造参数值数组
          argsHolder = createArgumentArray(beanName, mbd, resolvedValues, bw, paramTypes, paramNames,
              getUserDeclaredConstructor(candidate), autowiring, candidates.length == 1);
          // highlight-end
        }
        catch (UnsatisfiedDependencyException ex) {
          // exception
        }
      }
      else {
        // Explicit arguments given -> arguments length must match exactly.
        if (parameterCount != explicitArgs.length) {
          continue;
        }
        argsHolder = new ArgumentsHolder(explicitArgs);
      }
    }
  }
  // ...
  // highlight-start
  // 调用 instantiate 实例化对象,并且会传入构造参数值
  bw.setBeanInstance(instantiate(beanName, mbd, constructorToUse, argsToUse));
  // highlight-end
  return bw;
}
```

上面的关键点在于 **createArgumentArray** 方法,创建构造参数

```java title=ConstructorResolver#createArgumentArray
private ArgumentsHolder createArgumentArray(
    String beanName, RootBeanDefinition mbd, 
    @Nullable ConstructorArgumentValues resolvedValues,
    BeanWrapper bw, Class<?>[] paramTypes,
    @Nullable String[] paramNames, Executable executable,
    boolean autowiring, boolean fallback) throws UnsatisfiedDependencyException {

  // ...
  ArgumentsHolder args = new ArgumentsHolder(paramTypes.length);
  Set<ConstructorArgumentValues.ValueHolder> usedValueHolders = new HashSet<>(paramTypes.length);
  Set<String> autowiredBeanNames = new LinkedHashSet<>(4);

  // 遍历参数类型,参数类型数组元素与参数名称数组元素对应
  for (int paramIndex = 0; paramIndex < paramTypes.length; paramIndex++) {
    Class<?> paramType = paramTypes[paramIndex];
    String paramName = (paramNames != null ? paramNames[paramIndex] : "");
    ConstructorArgumentValues.ValueHolder valueHolder = null;
    // ...
    if (valueHolder != null) {
      // ...
    }
    else {
      MethodParameter methodParam = MethodParameter.forExecutable(executable, paramIndex);
      // ...
      try {
        // highlight-start
        // 解析依赖注入的参数
        Object autowiredArgument = resolveAutowiredArgument(
            methodParam, beanName, autowiredBeanNames, converter, fallback);
        // highlight-end
        args.rawArguments[paramIndex] = autowiredArgument;
        args.arguments[paramIndex] = autowiredArgument;
        args.preparedArguments[paramIndex] = autowiredArgumentMarker;
        args.resolveNecessary = true;
      }
      catch (BeansException ex) {
       // ...
      }
    }
  }
  // ...
  return args;
}
```

可以看到这个通过 `resolveAutowiredArgument` 来解析获取依赖注入的参数

```java title=ConstructorResolver#resolveAutowiredArgument
protected Object resolveAutowiredArgument(MethodParameter param, 
            String beanName,
           @Nullable Set<String> autowiredBeanNames,
            TypeConverter typeConverter,
            boolean fallback) {
  // 获取构造参数类型
  Class<?> paramType = param.getParameterType();
  if (InjectionPoint.class.isAssignableFrom(paramType)) {
    // 创建 InjectionPoint
    InjectionPoint injectionPoint = currentInjectionPoint.get();
    if (injectionPoint == null) {
      throw new IllegalStateException("No current InjectionPoint available for " + param);
    }
    return injectionPoint;
  }
  try {
    // highlight-start
     // 依赖的解析
    return this.beanFactory.resolveDependency(
        new DependencyDescriptor(param, true), beanName, autowiredBeanNames, typeConverter);
    // highlight-end
  }
  // ...
}
```

可以看到,最底层调用的是 `resolveDependency`,这个是进行依赖的解析,可以参看[resolvedependency](依赖注入#resolvedependency)。但是这里,需要深入查看下`DefaultListableBeanFactory#determineAutowireCandidate`,这个会探测自动注入的参数

```java title=DefaultListableBeanFactory#determineAutowireCandidate
/**
 * @param candidates
 */
protected String determineAutowireCandidate(Map<String, Object> candidates, 
                  DependencyDescriptor descriptor) {
  // 获取依赖类型,那这个示例中就是 User
  Class<?> requiredType = descriptor.getDependencyType();
  // 首先进行 BeanDefinition 的 primary 属性的处理
  String primaryCandidate = determinePrimaryCandidate(candidates, requiredType);
  if (primaryCandidate != null) {
    return primaryCandidate;
  }
  // 然后进行 BeanDefinition 的 Order 属性的处理
  String priorityCandidate = determineHighestPriorityCandidate(candidates, requiredType);
  if (priorityCandidate != null) {
    return priorityCandidate;
  }
  for (Map.Entry<String, Object> entry : candidates.entrySet()) {
    String candidateName = entry.getKey();
    Object beanInstance = entry.getValue();
    // highlight-start
    // 没有 primary、Order,则按照构造器参数名称进行匹配(descriptor.getDependencyName)
    // 这里的 descriptor.getDependencyName 依旧会使用 ParameterNameDiscoverer 获取构造器参数名称
    if ((beanInstance != null && this.resolvableDependencies.containsValue(beanInstance)) ||
        matchesBeanName(candidateName, descriptor.getDependencyName())) {
    // highlight-end
      return candidateName;
    }
  }
  return null;
}
```

上面的处理就是首先 byType,如果有多个的话,优先取 设置了 primary 属性的 bean,如果还不满足则按照 byName 的方式匹配

## 实例化后(阻断属性赋值)

> 问题: Bean 实例化之后一定会进行赋值操作吗?

- Bean 属性赋值(Populate) 判断
  - 入口点: `InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation`
  - [实例化前相关-postProcessBeforeInstantiation](Bean生命周期#绕开实例化)

该方法会在 bean 通过`构造函数或工厂方法实例化之后`, 但在 bean 属性填充 (来自显式属性或自动装配) 发生之前执行:

1. **如果返回 true, 则 bean 的属性填充操作会正常执行**
2. **如果返回 false, 则会禁止 bean 的属性赋值(配置元信息 -> 属性值)**

查看默认的接口方法:

```java title=InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation
/**
 * 这是在 Spring的自动装配开始之前，在给定的bean实例上执行自定义字段注入的理想回调
 */
default boolean postProcessAfterInstantiation(Object bean, String beanName) throws BeansException {
  return true;
}
```

### 示例

我们使用示例来描述这一个特点:

定义一个 XMl 配置元信息

```xml
<!--定义一个 Bean-->
<bean id="user"
      class="ioc.overview.Domain.User">
    <property name="id" value="22"/>
    <property name="name" value="athu"/>
</bean>
```

然后读取 配置元信息,并且配置 InstantiationAwareBeanPostProcessor:

```java
/**
 * 演示 Bean 实例化后阶段 {@link InstantiationAwareBeanPostProcessor}
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeanInstantiationLifestyleAfterDemo {
  public static void main(String[] args) {
      DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
      XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(beanFactory);
      // 添加 InstantiationAwareBeanPostProcessor
      beanFactory.addBeanPostProcessor(new CustomInstantiationAwareBeanPostProcessor());
      reader.loadBeanDefinitions("META-INF/AfterBeanInstantiation.xml");
      // 默认 user {id=22,name='athu'}
      User bean = beanFactory.getBean("user", User.class);
      // OUT: User{id=33, name='CZ'}
      System.out.println(bean);
  }
  static class CustomInstantiationAwareBeanPostProcessor implements InstantiationAwareBeanPostProcessor {
      @Override
      public boolean postProcessAfterInstantiation(Object bean, String beanName) throws BeansException {
          // 对指定的 bean 使用自定义操作,比如替换默认的属性填充操作
          if (beanName.equals("user")) {
              User user = (User) bean;
              user.setId(33L);
              user.setName("CZ");
              return false;
          }
          return true;
      }

  }
}
```

### 源码

Spring 在 `AbstractAutowireCapableBeanFactory#populateBean` 中对 bean 的属性进行赋值,所以我们查看这里的源码部分:

```java
protected void populateBean(String beanName, RootBeanDefinition mbd, @Nullable BeanWrapper bw) {

  // 这里,如果有 InstantiationAwareBeanPostProcessor,那么就调用 postProcessAfterInstantiation
  if (!mbd.isSynthetic() && hasInstantiationAwareBeanPostProcessors()) {
    for (BeanPostProcessor bp : getBeanPostProcessors()) {
      // highlight-start
      if (bp instanceof InstantiationAwareBeanPostProcessor) {
        InstantiationAwareBeanPostProcessor ibp = (InstantiationAwareBeanPostProcessor) bp;
        //  如果 postProcessAfterInstantiation 返回 false,则阻断后的赋值操作
        if (!ibp.postProcessAfterInstantiation(bw.getWrappedInstance(), beanName)) {
          return;
        }
        // highlight-end
      }
    }
  }

  // 获取配置元信息(BeanDefinition) 中设置的 属性信息(propertyValues)
  PropertyValues pvs = (mbd.hasPropertyValues() ? mbd.getPropertyValues() : null);

  // 依赖自动注入 byType/byName
  int resolvedAutowireMode = mbd.getResolvedAutowireMode();
  if (resolvedAutowireMode == AUTOWIRE_BY_NAME || resolvedAutowireMode == AUTOWIRE_BY_TYPE) {
    MutablePropertyValues newPvs = new MutablePropertyValues(pvs);
    if (resolvedAutowireMode == AUTOWIRE_BY_NAME) {
      autowireByName(beanName, mbd, bw, newPvs);
    }
    if (resolvedAutowireMode == AUTOWIRE_BY_TYPE) {
      autowireByType(beanName, mbd, bw, newPvs);
    }
    pvs = newPvs;
  }
  // 一些 属性赋值的后置处理器的执行
  // ...
  if (pvs != null) {
    // 属性赋值
    applyPropertyValues(beanName, mbd, bw, pvs);
  }
}
```

:::caution 说明
bean 在完成正常实例化之后一般会进行 bean 属性值的填充,但是也可以通过 InstantiationAwareBeanPostProcessor 来拦截,禁止属性值的填充
:::

## 属性赋值前(修改属性信息)

> 问题: 配置后的 PropertyValues 还有修改的机会吗?

- Bean 属性值元信息: PropertyValues
- Bean 属性赋值前回调
  - Spring 1.2 ~ 5.0 : `InstantiationAwareBeanPostProcessor#postProcessPropertyValues`
  - Spring 5.1: `InstantiationAwareBeanPostProcessor#postProcessProperties`
- 这一步会处理前面提到的 @Autowired 依赖注入原理,详细参看[这里](依赖注入#bean-的后置处理)

### 源码部分

在前面的 Bean 实例化后的操作就是属性赋值,在`populateBean` 中会进行 bean 属性赋值操作,在赋值前会构造`PropertyValues` 对象,也就是存储属性值信息。默认情况下会使用配置元信息(BeanDefinition) 中的配置信息,但是**也可以通过后置处理器进行修改**

我们查看源码部分:

```java
protected void populateBean(String beanName, RootBeanDefinition mbd, @Nullable BeanWrapper bw) {
  // ...
  // 获取属性值信息(默认)
  PropertyValues pvs = (mbd.hasPropertyValues() ? mbd.getPropertyValues() : null);

  // ...
  boolean hasInstAwareBpps = hasInstantiationAwareBeanPostProcessors();
  boolean needsDepCheck = (mbd.getDependencyCheck() != AbstractBeanDefinition.DEPENDENCY_CHECK_NONE);

  PropertyDescriptor[] filteredPds = null;
  if (hasInstAwareBpps) {
    if (pvs == null) {
      pvs = mbd.getPropertyValues();
    }
    for (BeanPostProcessor bp : getBeanPostProcessors()) {
      if (bp instanceof InstantiationAwareBeanPostProcessor) {
        InstantiationAwareBeanPostProcessor ibp = (InstantiationAwareBeanPostProcessor) bp;
        // highlight-start
        // Spring 5.1 及后续版本执行 `postProcessProperties`
        PropertyValues pvsToUse = ibp.postProcessProperties(pvs, bw.getWrappedInstance(), beanName);
        // highlight-end
        if (pvsToUse == null) {
          if (filteredPds == null) {
            filteredPds = filterPropertyDescriptorsForDependencyCheck(bw, mbd.allowCaching);
          }
          // highlight-start
          // 否则执行 `postProcessPropertyValues`
          pvsToUse = ibp.postProcessPropertyValues(pvs, filteredPds, bw.getWrappedInstance(), beanName);
          // highlight-end
          if (pvsToUse == null) {
            return;
          }
        }
        pvs = pvsToUse;
      }
    }
  }
  // ...
}
```

### 示例

定义一个 XML 配置元信息:

```xml
<!--定义一个 Bean-->
<bean id="user"
      class="ioc.overview.Domain.User">
    <!-- highlight-start -->
    <!-- 这里就是 PropertyValues 相关信息 -->
    <property name="id" value="22"/>
    <property name="name" value="athu"/>
    <!-- highlight-end -->
</bean>
```

然后进行测试,并且定义 InstantiationAwareBeanPostProcesser 的实现类,实现 `postProcessProperties` 接口方法

```java
/**
 * 演示 Bean 赋值前阶段 {@link InstantiationAwareBeanPostProcessor}
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeforePopulate {
  public static void main(String[] args) {
      DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
      XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(beanFactory);
      // 添加 InstantiationAwareBeanPostProcessor
      beanFactory.addBeanPostProcessor(new CustomInstantiationAwareBeanPostProcessor());
      reader.loadBeanDefinitions("META-INF/BeforePopulate.xml");
      // 默认 user {id=22,name='athu'}
      User bean = beanFactory.getBean("user", User.class);
      // OUT:User{id=33, name='after-update-athu'}
      System.out.println(bean);
  }
  static class CustomInstantiationAwareBeanPostProcessor implements InstantiationAwareBeanPostProcessor {
      @Override
      public PropertyValues postProcessProperties(PropertyValues pvs,
                                                  Object bean,
                                                  String beanName)  throws BeansException {
          if (beanName.equals("user") && pvs instanceof MutablePropertyValues) {
              MutablePropertyValues mpvs =(MutablePropertyValues) pvs;
              // 先删除后添加
              mpvs.removePropertyValue("id");
              mpvs.removePropertyValue("name");
              mpvs.addPropertyValue("id", 33L);
              mpvs.addPropertyValue("name", "after-update-athu");
              return mpvs;
          }
          return null;
      }
  }
}
```

## 初始化总览

紧接着上面属性值赋值后的就是 bean 的初始化操作,入口点也在`AbstractAutowireCapableBeanFactory#doCreateBean`

```java title=AbstractAutowireCapableBeanFactory#doCreateBean
protected Object doCreateBean(final String beanName, 
          final RootBeanDefinition mbd, 
          final @Nullable Object[] args) throws BeanCreationException {

  // ...

  Object exposedObject = bean;
  try {
    populateBean(beanName, mbd, instanceWrapper);
    // highlight-start
    // bean 的初始化
    exposedObject = initializeBean(beanName, exposedObject, mbd);
    // highlight-end
  }
  // ...
  return exposedObject;
}
```

然后调用 `AbstractAutowireCapableBeanFactory#initializeBean`方法

```java title=AbstractAutowireCapableBeanFactory#initializeBean
protected Object initializeBean(final String beanName, final Object bean, @Nullable RootBeanDefinition mbd) {
  // 执行 Aware 接口回调
  invokeAwareMethods(beanName, bean);

  Object wrappedBean = bean;
  if (mbd == null || !mbd.isSynthetic()) {
    // 应用 BeanPostProcessor#postProcessBeforeInitialization
    wrappedBean = applyBeanPostProcessorsBeforeInitialization(wrappedBean, beanName);
  }

  try {
    // 执行初始化方法
    invokeInitMethods(beanName, wrappedBean, mbd);
  }
  catch (Throwable ex) {
   //
  }
  if (mbd == null || !mbd.isSynthetic()) {
    // 应用 BeanPostProcessor#postProcessAfterInitialization
    wrappedBean = applyBeanPostProcessorsAfterInitialization(wrappedBean, beanName);
  }

  return wrappedBean;
}
```

可以看到,初始化中会进行下面几个步骤:

1. 执行 Aware 接口回调
2. 执行 BeanPostProcessor#postProcessBeforeInitialization
3. 执行初始化方法
4. 执行 BeanPostProcessor#postProcessAfterInitialization

### Aware 接口回调

:::info Spring 内建的 Aware 接口的执行顺序

1. BeanNameAware
2. BeanClassLoaderAware
3. BeanFactoryAware
4. EnvironmentAware
5. EmbeddedValueResolverAware
6. ResourceLoaderAware
7. ApplicationEventPublisherAware
8. MessageSourceAware
9. ApplicantContextAware

:::

#### 不依赖ApplicationContext

位于 1~3 的 Aware 接口实现,会所在 bean 的初始化方法(initializeBean) 中实现,调用 `AbstractAutowireCapableBeanFactory#invokeAwareMethods` 方法

```java title=AbstractAutowireCapableBeanFactory#invokeAwareMethods
private void invokeAwareMethods(final String beanName, final Object bean) {
  if (bean instanceof Aware) {
    // highlight-start
    if (bean instanceof BeanNameAware) {
      ((BeanNameAware) bean).setBeanName(beanName);
    }
    if (bean instanceof BeanClassLoaderAware) {
      ClassLoader bcl = getBeanClassLoader();
      if (bcl != null) {
        ((BeanClassLoaderAware) bean).setBeanClassLoader(bcl);
      }
    }
    if (bean instanceof BeanFactoryAware) {
      ((BeanFactoryAware) bean).setBeanFactory(AbstractAutowireCapableBeanFactory.this);
    }
    // highlight-end
  }
}
```

#### 依赖ApplicationContext

而由于剩下的 4~9 的 Aware 接口实现依赖于 ApplicantContext,它只有在应用上下文初始化的时候才会被调用。

首先在准备 BeanFactory 的时候,会添加一个 Bean 的后置处理器 `ApplicationContextAwareProcessor`

```java title=ApplicationContextAwareProcessor#prepareBeanFactory
protected void prepareBeanFactory(ConfigurableListableBeanFactory beanFactory) {
  // ...
  //highlight-start
  beanFactory.addBeanPostProcessor(new ApplicationContextAwareProcessor(this));
  //highlight-end
  // ...
}

//
```

注册的 `ApplicationContextAwareProcessor` 中,在 Bean 初始化前被调用(`postProcessBeforeInitialization`),在这段调用处理中,会调用剩下的 6 个 Aware 接口。

```java title=ApplicationContextAwareProcessor#postProcessBeforeInitialization
@Override
@Nullable
public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
  // ..
  if (acc != null) {
   // ...
  }
  else {
    //highlight-start
    invokeAwareInterfaces(bean);
    //highlight-end
  }
  return bean;
}

private void invokeAwareInterfaces(Object bean) {
  //highlight-start
  if (bean instanceof EnvironmentAware) {
    ((EnvironmentAware) bean).setEnvironment(this.applicationContext.getEnvironment());
  }
  if (bean instanceof EmbeddedValueResolverAware) {
    ((EmbeddedValueResolverAware) bean).setEmbeddedValueResolver(this.embeddedValueResolver);
  }
  if (bean instanceof ResourceLoaderAware) {
    ((ResourceLoaderAware) bean).setResourceLoader(this.applicationContext);
  }
  if (bean instanceof ApplicationEventPublisherAware) {
    ((ApplicationEventPublisherAware) bean).setApplicationEventPublisher(this.applicationContext);
  }
  if (bean instanceof MessageSourceAware) {
    ((MessageSourceAware) bean).setMessageSource(this.applicationContext);
  }
  if (bean instanceof ApplicationContextAware) {
    ((ApplicationContextAware) bean).setApplicationContext(this.applicationContext);
  }
  //highlight-end
}
```

:::caution 说明

1. ApplicationContextAwareProcessor 也是 BeanPostProcessor 接口的实现,而 BeanPostProcessor 是在 [bean 的初始化前](Bean生命周期#源码分析-2)被调用的
2. 这个后置处理器不是 public 的,所以无法手动添加到容器中

:::

### 初始化前

#### 源码分析

我们知道了 Aware 接口会在 bean 初始化之前调用,除此之外还会调用 Bean 的后置处理器方法:`AbstractAutowireCapableBeanFactory#applyBeanPostProcessorsBeforeInitialization`

```java title=AbstractAutowireCapableBeanFactory#applyBeanPostProcessorsBeforeInitialization
public Object applyBeanPostProcessorsBeforeInitialization(Object existingBean, String beanName)
    throws BeansException {

  Object result = existingBean;
  for (BeanPostProcessor processor : getBeanPostProcessors()) {
    // highlight-start
    Object current = processor.postProcessBeforeInitialization(result, beanName);
    // highlight-end
    if (current == null) {
      return result;
    }
    result = current;
  }
  return result;
}
```

可以看到,初始化前还会调用所有 `BeanPostProcessor#postProcessBeforeInitialization` 方法:

- **如果 *postProcessBeforeInitialization* 返回 null,则使用默认创建的 bean**
- **如果 *postProcessBeforeInitialization* 返回不为 null,则使用该方法返回的对象**

#### 示例

首先还是定义一个 XML 配置元信息:

```xml
<!--定义一个 Bean-->
<bean id="user"
      class="ioc.overview.Domain.User">
    <property name="id" value="22"/>
    <property name="name" value="athu"/>
</bean>
```

然后测试,在 beanFactory 中添加自定义的 BeanPostProcessor,并且实现 postProcessBeforeInitialization 方法

```java
/**
 * Bean 初始化前的操作(postProcessBeforeInitialization)
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeforeInitialization {
    public static void main(String[] args) {
        DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
        XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(beanFactory);
        // 默认 user {id=22,name='athu'}
        reader.loadBeanDefinitions("META-INF/BeforeInitialization.xml");
        // 添加一个自定义的 BeanPostProcessor 并且实现 postProcessBeforeInitialization 方法
        beanFactory.addBeanPostProcessor(new BeanPostProcessor() {
            @Override
            public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
                if (beanName.equals("user")) {
                    User user = (User) bean;
                    user.setName("after-postProcessBeforeInitialization");
                    return user;
                }
                // 返回 null 表示使用默认的 bean
                return null;
            }
        });

        User bean = beanFactory.getBean("user", User.class);
        // out: User{id=22, name='after-postProcessBeforeInitializationu'}
        System.out.println(bean);
    }
}
```

### 初始化中(初始化方法)

Bean 的初始化(Initialization) 顺序:

1. @PostConstruct 标注方法
    - 该处理基于注解驱动,具体处理在`InitDestroyAnnotationBeanPostProcessor#postProcessBeforeInitialization` 中处理
    - <mark>该方法严格意义上来说,属于初始化前阶段</mark>

    -

      ```java title=InitDestroyAnnotationBeanPostProcessor#postProcessBeforeDestruction
        public void postProcessBeforeDestruction(Object bean, String beanName) throws BeansException {
          // highlight-start
          LifecycleMetadata metadata = findLifecycleMetadata(bean.getClass());
          try {
            metadata.invokeDestroyMethods(bean, beanName);
          }
          // highlight-end
          // ...
        }
      ```

2. 实现 `InitializingBean` 接口的 afterPropertiesSet 方法
3. 自定义初始化方法

#### 源码分析

在执行完初始化前的步骤后,就会开始执行初始化方法,入口点为: `AbstractAutowireCapableBeanFactory#invokeInitMethods`

```java title=AbstractAutowireCapableBeanFactory#invokeInitMethods
protected void invokeInitMethods(String beanName, 
        final Object bean,
        @Nullable RootBeanDefinition mbd) throws Throwable {

  // 如果 bean 实现了 InitializingBean
  boolean isInitializingBean = (bean instanceof InitializingBean);
  if (isInitializingBean && (mbd == null || !mbd.isExternallyManagedInitMethod("afterPropertiesSet"))) {
    // ...
    // 执行 bean 的 afterPropertiesSet方法
    ((InitializingBean) bean).afterPropertiesSet();
  }

  if (mbd != null && bean.getClass() != NullBean.class) {
    // 获取 BeanDefinition 中的 init-method 属性值
    String initMethodName = mbd.getInitMethodName();
    if (StringUtils.hasLength(initMethodName) &&
        !(isInitializingBean && "afterPropertiesSet".equals(initMethodName)) &&
        !mbd.isExternallyManagedInitMethod(initMethodName)) {
      // 执行自定义的初始化方法
      invokeCustomInitMethod(beanName, bean, mbd);
    }
  }
}
```

#### 示例

首先定义一个类,为了测试三种初始化方法,这个 Bean 类需要:

1. 实现 InitializingBean 接口
2. 自定义一个初始化方法
3. 自定义一个初始化方法,用 @PostConstruct 注解标注

```java
/**
 * 实现了初始化生命周期的 Bean
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
@Data
public class InInitialization implements InitializingBean {
    private int age;
    private String name;

    /**
     * 实现InitializingBean#afterPropertiesSet
     * @throws Exception
     */
    @Override
    public void afterPropertiesSet() throws Exception {
        this.name = "afterPropertiesSet";
        System.out.println(this);
    }
    /**
     * 使用自定义的初始化方法
     */
    public void cusInitMethod() {
        this.name = "cusInitMethod";
        System.out.println(this);
    }

    @PostConstruct
    public void postConstructInit() {
        this.name = "postConstructInit";
        System.out.println(this);
    }
}
```

然后,我们需要将这个 Bean 注册到注册中心:

```xml
<!-- 注册一个 BeanDefinition,并且设置了init-method -->
<bean id="inInitialization"
      class="Bean.InInitialization"
        init-method="cusInitMethod">
    <property name="age" value="22"/>
    <property name="name" value="Before Init"/>
</bean>
```

最后进行测试,由于 @PostConstruct 注解依赖于 CommonAnnotationBeanPostProcessor,所以需要手动添加 CommonAnnotationBeanPostProcessor :

```java
/**
 * Bean 初始化中的操作(初始化方法)
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class InInitialization {
    public static void main(String[] args) {
        DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
        XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(beanFactory);
        // 默认 user {id=22,name='Before Init'}
        reader.loadBeanDefinitions("META-INF/InInitialization.xml");
        // @PostConstruct 注解依赖于 CommonAnnotationBeanPostProcessor
        // 手动添加 CommonAnnotationBeanPostProcessor
        beanFactory.addBeanPostProcessor(new CommonAnnotationBeanPostProcessor());
        Bean.InInitialization bean = beanFactory.getBean("inInitialization", Bean.InInitialization.class);
        System.out.println("final bean =>"+bean);
        /**
         * out:
         *      InInitialization(age=22, name=postConstructInit)
         *      InInitialization(age=22, name=afterPropertiesSet)
         *      InInitialization(age=22, name=cusInitMethod)
         *      final bean =>InInitialization(age=22, name=cusInitMethod)
         */
    }
}
```

可以看到初始化方法的顺序确实是上面所写的。

### 初始化后

类似于 Bean 的初始化前,Bean 的初始化后也是依赖于后置处理器: `BeanPostProcessor#postProcessAfterInitialization`。

#### 源码分析

方法的入口点: **AbstractAutowireCapableBeanFactory#applyBeanPostProcessorsAfterInitialization**

```java title=AbstractAutowireCapableBeanFactory#applyBeanPostProcessorsAfterInitialization
public Object applyBeanPostProcessorsAfterInitialization(Object existingBean, String beanName)
    throws BeansException {

  Object result = existingBean;
  for (BeanPostProcessor processor : getBeanPostProcessors()) {
    // 执行 BeanPostProcessor#postProcessAfterInitialization
    Object current = processor.postProcessAfterInitialization(result, beanName);
    if (current == null) {
      return result;
    }
    // highlight-end
    result = current;
  }
  return result;
}
```

#### 示例

操作很简单,和初始化前操作类似,但是实现的接口方法不一样

### 初始化完成后

方法回调: `SmartInitializingSingleton#afterSingletonsInstantiated`(依赖于 Spring 4.1)

SmartInitializingSingleton 通常在 ApplicationContext 场景下使用,它的触发点在`DefaultListableBeanFactory#preInstantiateSingletons`,通过它**可以将已经注册的 BeanDefinition 提前初始化成 Spring Bean**

简单来说,<mark>如果需要对初始化完后的 Bean 进行一些额外的操作,就需要让 Bean 类实现 SmartInitializingSingleton</mark>

下面进行测试,首先依旧是定义一个 Bean 类,它有以下要求:

1. 实现 InitializingBean 接口
2. 实现 SmartInitializingSingleton 接口
3. 添加自定义初始化方法
4. 使用 @PostConstruct 注解标注初始化方法

```java
@Data
public class AfterSingletonInstantiatedBean implements InitializingBean, SmartInitializingSingleton {

    private int age;
    private String name;

    /**
     * 实现InitializingBean#afterPropertiesSet
     * @throws Exception
     */
    @Override
    public void afterPropertiesSet() throws Exception {
        this.name = "afterPropertiesSet";
        System.out.println(this);
    }
    /**
     * 使用自定义的初始化方法
     */
    public void cusInitMethod() {
        this.name = "cusInitMethod";
        System.out.println(this);
    }

    /**
     * 使用 @PostConstruct 标注一个初始化方法
     */
    @PostConstruct
    public void postConstructInit() {
        this.name = "postConstructInit";
        System.out.println(this);
    }

    @Override
    public void afterSingletonsInstantiated() {
        this.name = "afterSingletonsInstantiated";
        System.out.println(this);
    }
}
```

然后再 XML 配置元信息文件中注册 Bean 信息

```xml
<bean id="afterInstantiated"
      class="Bean.AfterSingletonInstantiatedBean"
        init-method="cusInitMethod">
    <property name="age" value="22"/>
    <property name="name" value="athu"/>
</bean>
```

最后测试,需要注意的是:

1. 由于引入 @PostConstruct 注解,如果需要处理该注解,则需要添加 *CommonAnnotationBeanPostProcessor* 处理器的支持
2. SmartInitializingSingleton 需要手动的去调用

```java
/**
 * Bean 初始化完成后
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class AfterSingletonInstantiated {
  public static void main(String[] args) {
    DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
    XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(beanFactory);
    reader.loadBeanDefinitions("META-INF/AfterSingletonInstantiated.xml");

    // 添加 CommonAnnotationBeanPostProcessor 处理  @PostConstruct 注解
    beanFactory.addBeanPostProcessor(new CommonAnnotationBeanPostProcessor());

    // afterSingletonInstantiated 通过 preInstantiateSingletons()方法调用
    // preInstantiateSingletons 可以提前将注册的 BeanDefinition 初始化为 Spring Bean
    // preInstantiateSingletons() 依赖于 ApplicantContext,所以这里需要手动调用
    beanFactory.preInstantiateSingletons();

    AfterSingletonInstantiatedBean instantiated = beanFactory.getBean("afterInstantiated", AfterSingletonInstantiatedBean.class);
    System.out.println("finished==>"+instantiated);
    /**
     * out:
     *      AfterSingletonInstantiatedBean(age=22, name=postConstructInit)
     *      AfterSingletonInstantiatedBean(age=22, name=afterPropertiesSet)
     *      AfterSingletonInstantiatedBean(age=22, name=cusInitMethod)
     *      AfterSingletonInstantiatedBean(age=22, name=afterSingletonsInstantiated)
     *      finished==>AfterSingletonInstantiatedBean(age=22, name=afterSingletonsInstantiated)
     */
  }
}
```

## 销毁总览

Bean 的销毁入口: `DisposableBeanAdapter#destroy`,可以看到有下面的几个步骤:

1. 执行 DestructionAwareBeanPostProcessor#postProcessBeforeDestruction
2. 执行 DisposableBean#destroy
3. 执行 自定义销毁方法

```java
public void destroy() {
  // 执行 DestructionAwareBeanPostProcessor#postProcessBeforeDestruction
  if (!CollectionUtils.isEmpty(this.beanPostProcessors)) {
    for (DestructionAwareBeanPostProcessor processor : this.beanPostProcessors) {
      processor.postProcessBeforeDestruction(this.bean, this.beanName);
    }
  }

  // 如果实现了 DisposableBean 接口,执行 DisposableBean#destroy
  if (this.invokeDisposableBean) {
    try {
     ((DisposableBean) this.bean).destroy();
    }
    catch (Throwable ex) {
      // ..
    }
  }

  // 如果定义了自定义的 destroy-method,执行 destroy-method
  if (this.destroyMethod != null) {
    invokeCustomDestroyMethod(this.destroyMethod);
  }
  else if (this.destroyMethodName != null) {
    Method methodToInvoke = determineDestroyMethod(this.destroyMethodName);
    if (methodToInvoke != null) {
      invokeCustomDestroyMethod(ClassUtils.getInterfaceMethodIfPossible(methodToInvoke));
    }
  }
}
```

:::tip 提示
这里 Bean 的销毁并不意味着 Bean 被 GC 了,而是在容器中被销毁,所以还是可以修改 Bean 的属性,然后返回
:::

### 销毁前

方法回调: `DestructionAwareBeanPostProcessor#postProcessBeforeDestruction`

- CommonAnnotationBeanPostProcessor 间接实现了 DestructionAwareBeanPostProcessor 接口,并且该后置处理器可以处理  @PreDestroy 注解
- 所以这一步会执行标注 @PreDestroy 注解的方法,同样也是销毁方法

我们直接使用示例进行展示:

首先向 XML 配置元信息中注册配置信息

```xml
<bean id="destroy-user"
      class="ioc.overview.Domain.User">
    <property name="id" value="22"/>
    <property name="name" value="athu"/>
</bean>
```

然后就是测试,在测试的时候我们需要添加一个 **DestructionAwareBeanPostProcessor** 的实现类

```java
/**
 * 展示 Bean 销毁前
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeforeDestroy {
    public static void main(String[] args) {
        DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
        XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(beanFactory);
        reader.loadBeanDefinitions("META-INF/BeforeDestroy.xml");

        // 添加一个 DestructionAwareBeanPostProcessor 的实现
        beanFactory.addBeanPostProcessor(new DestructionAwareBeanPostProcessor() {
            @Override
            public void postProcessBeforeDestruction(Object bean, String beanName) throws BeansException {
                if (beanName.equals("destroy-user")) {
                    ((User)bean).setName("after-destroy");
                }
            }
        });
        User user = beanFactory.getBean("destroy-user", User.class);
        // out: 销毁前:User{id=22, name='athu'}
        System.out.println("销毁前:" + user);
        // 执行销毁方法,触发销毁前的后置处理器
        // out: 销毁后:User{id=22, name='after-destroy'}
        beanFactory.destroyBean("destroy-user",user);
        System.out.println("销毁后:" + user);
    }
}
```

从输出结果可以看到,利用销毁前的回调也可以对 bean 做一些额外的操作

### 销毁方法

Bean 的销毁按顺序还有下面几种:

1. 用@PreDestroy
2. 实现 `DisposableBean` 接口的 destroy 方法
3. 使用自定义的销毁方法

> 与Bean 的初始化相对应的有 Bean 的销毁,在使用方式上与 Bean 的初始化基本类似

## 垃圾收集

> 问题: 什么时候需要 GC ?

Bean 垃圾回收(GC)

- 关闭 Spring 容器(应用上下文)
- 执行 GC
- Spring Bean 覆盖的 finalize() 被回调
