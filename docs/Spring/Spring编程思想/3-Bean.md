---
id: Bean
title: Bean
---

## 元信息接口(BeanDefinition)

- `BeanDefinition` 是 **Spring 中定义 Bean的 配置元信息接口,用于存储Bean的定义信息**,包含:
  1. Bean 的类名
  2. Bean 的行为元素，比如<mark>作用域、自动绑定的模式、生命周期回调</mark>
  3. 其他 Bean 的引用，也叫做依赖（Dependencies）
  4. 配置设置, 比如Bean的属性(Properties)

### BeanDefinition 参数

| 属性                         | 说明                                           |
| ---------------------------- | ---------------------------------------------- |
| **Class**                    | Bean全类名，必须是具体类，不能是抽象类或者接口 |
| **Name**                     | Bean的名称/ID                                  |
| **Scope**                    | Bean的作用域(singleton、propertype…)           |
| **Constructor arguments**    | Bean 构造器参数（用于依赖注入）                |
| **Properties**               | Bean 属性设置 （用于依赖注入）                 |
| **Autowiring mode**          | Bean 自动绑定模式（比如： 通过名称 byName）    |
| **Lazy initialazation mode** | Bean 延迟初始化模式 （延迟和非延迟）           |
| **Initialization method**    | Bean 初始化回调方法名称                        |
| **Destruction method**       | Bean 销毁回调方法名称                          |

### 如何构建BeanDefinition？

> 除了通过 **XML 和注解**的方式来定义 BeanDefinition,还可以手动的创建 BeanDefinition 对象并且注入到 IOC 容器中

- **包含以下的几种方式构建BeanDefinition**
  1. 通过 `BeanDefinitionBuilder`
  2. 通过 `AbstractBeanDefinition` 以及**派生类**

:::danger 注意
 BeanDefinition 并非Bean的最终态,还可以对Bean进行额外的设置, 比如: **设置Bean的初始化方法、销毁方法等等**
:::

#### BeanDefinitionBuilder

:::caution GenericBeanDefinition 和 RootBeanDefinition的区别？

- GenericBeanDefinition 可以设置 **parent** 属性
- RootBeanDefinition 是根部、顶层的 Bean 定义信息，无法设置 parent 属性

:::

```java
public class BeanDefinitionCreateDemo {
    public static void main(String[] args) {
        // 1.通过 BeanDefinitionBuilder 构建
        BeanDefinitionBuilder beanDefinitionBuilder = BeanDefinitionBuilder.genericBeanDefinition(User.class);

        // 2. 通过属性设置,这种方式与 XML 配置类似
        beanDefinitionBuilder.addPropertyValue("id", 33);
        beanDefinitionBuilder.addPropertyValue("name", "athu");

        // 3.获取 BeanDefinition 的实例
        GenericBeanDefinition genericBeanDefinition =(GenericBeanDefinition)beanDefinitionBuilder.getBeanDefinition();

        // 4. 此时BeanDefinition 并不是 Bean 的最终状态,还可以对 Bean进行额外的设置
        genericBeanDefinition.setInitMethodName("initMethod");
    }
}
```

#### AbstractBeanDefinition 以及派生类

> GenericBeanDefinition 和 RootBeanDefinition 都属于 AbstractBeanDefinition的子类,所以可以直接创建 GenericBeanDefinition 或 RootBeanDefinition 类型的实例对象

```java
/**
 * <b>通过 AbstractBeanDefinition 的派生类创建 BeanDefinition</b>
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class AbstractBeanDefinitionCreateDemo {
    public static void main(String[] args) {
        // 1. 创建 AbstractBeanDefinition 的派生类 => GenericBeanDefinition
        GenericBeanDefinition beanDefinition = new GenericBeanDefinition();
        // 2. 设置 BeanDefinition 的 BeanClass 信息
        beanDefinition.setBeanClass(User.class);
        
        // 3. 设置 Bean 的属性信息
        MutablePropertyValues mutablePropertyValues = new MutablePropertyValues();
        mutablePropertyValues
                .add("id", 33)
                .add("name", "athu");
        beanDefinition.setPropertyValues(mutablePropertyValues);
        
        // 4. 和BeanDefinitionBuilder 类似的,还可以设置 BeanDefinition 的 init-method 方法
        beanDefinition.setInitMethodName("initMethod");
    }
}
```

## 命名 Spring Bean

### Bean的名称

- **每个Bean拥有一个或者多个标识符(identifiers)，这些标识符在Bean所在的容器必须是唯一的**
  - 通常，一个Bean只有一个标识符，也可以使用别名 (Alias) 拓展

- 在基于 XML 的配置中(并非一定是 本地的 Spring 的配置文件，也可以是网络资源)，通过 **id/name** 属性指定 Bean的标识符
  - 通常 Bean 的标识符由字符组成,允许出现*特殊字符*
- Bean 的 id/name 不是必须指定的，**容器默认会为 Bean 生成一个唯一的名称**
  - 通过 `BeanNameGenerator` 的实现类来生成，比如注解注册使用 `AnnotationBeanNameGenerator`

### Bean的别名

- Bean别名的价值
  1. 复用现有的BeanDefinition
      - 即: **使用Bean的别名时，一定要存在这个Bean的定义**
  2. 更具有场景化的命名方法,对于同一个 Bean 在不同的业务场景下使用不同的别名
      - `<alias name="Bean标识符" alias ="别名A"/>`
      - `<alias name="Bean标识符" alias ="别名B"/>`
- 如何配置 Bean 的别名
  1. 在 **<bean /> name 属性**后使用 **逗号、分号** 进行分隔
  2. 利用 **<alias/> 标签**进行配置

①. 通过XML配置元信息指定Bean、配置Bean的别名

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!--
				导入第三方 Spring XML配置文件 dependency-look-up.xml,其中定义了两个 User 类型的 Bean
				1:
          <bean class="ioc.overview.Domain.User"
                  id="user">
                <property name="name" value="atu"/>
                <property name="id" value="10000"/>
    			</bean>
				2:
          <bean class="ioc.overview.Domain.SuperUser"
                id="superUser"
                parent="user"
                primary="true">
              <property name="address" value="常州"/>
    			</bean>
		-->
    <import resource="classpath:META-INF/dependency-look-up.xml"/>

    <!-- 设置别名的方式1: 在注册 Bean 的时候, 通过在 name 属性后面用逗号进行分割-->
    <bean class="ioc.overview.Domain.User" name="user2, lisi2">
        <property name="name" value="atu"/>
        <property name="id" value="10000"/>
    </bean>

    <!--
    设置别名的方式2: 利用 alias 标签进行配置
    即: 将 Spring 容器中 name/id 为 user 的 Bean 建立别名alias
		-->
    <alias name="user" alias="lisi"/>
</beans>
```

②. 获取Bean

可以看到通过 name/id 获取到的 Bean 组件和通过别名获取到的 Bean 组件是同一个

```java
/**
 * <b>测试 Bean的别名</b>
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeanAlias {
    public static void main(String[] args) {
        // 创建一个 BeanFactory
        BeanFactory beanFactory = new ClassPathXmlApplicationContext("MATE-INF/bean-definitions-context.xml");

        // 通过 name 与别名分别获取 name=user 的Bean 组件
        User user = beanFactory.getBean("user", User.class);
        User lisiUser = beanFactory.getBean("lisi", User.class);
        System.out.println(user == lisiUser); // out: true

        User user2 = beanFactory.getBean("user2", User.class);
        User lisi2User = beanFactory.getBean("lisi2", User.class);
        System.out.println(user2 == lisi2User); // out: true

        // 查看Spring 容器中类型是 User 的Bean一共有几个
        if (beanFactory instanceof ListableBeanFactory) {
            ListableBeanFactory factory = (ListableBeanFactory)beanFactory;
          
            Map<String, User> users = factory.getBeansOfType(User.class);
            // out: 可以看到除了导入的 dependency-look-up.xml 中注入的两个 User 类型的 Bean,只有一个新建的 Bean
            // {
            //      user=User{id=10000, name='atu'}, 
            //      superUser=SuperUser{address='常州'} User{id=10000, name='atu'}, 
            //      user2=User{id=10000, name='atu'}
            // }
            System.out.println("按类型实时查询集合 Bean 对象:"+users);
        }
    }
}

```

## 注册 BeanDefinition 到IOC容器

> 也可以叫做 **Bean 的装配**, 在上面我们看到了可以采用 XML 的方式定义 BeanDefinition 并将其注册到 Spring 容器中,那么除了这种配置文件的方式,Spring 还有其他的方式可以实现 :
>
> 1. Java 注解
> 2. Java api

- 在 Spring 中有以下的几种方式可以将 BeanDefinition 注册到IOC容器

  1. XML配置元信息
     - `<bean name="xxx"></bean>`
  2. Java 注解配置元信息
     - `@Bean`
     - `@Compoment`
     - `@Import`
  3. java api 配置元信息📌 -> Spring 的 ApplicationContext 一般都实现了 `BeanDefinitionRegistry`
     - **命名方式**
       - `BeanDefinitionRegistry#registerBeanDefinition(String BeanName,BeanDefinition definition)`
     - **非命名方式**
       - `BeanDefinitionReaderUtils#registerWithGeneratedName(AbstractBeanDefinition definition, BeanDefinitionRegistry registry)`
     - **配置类方式**
       - `AnnotatedBeanDefinitionReader#register(...)`

:::tip 关于 BeanDefinitionRegistry 的说明

1. DefaultListableBeanFactory、GenericApplicationContext 实现了 BeanDefinitionRegistry接口，具有注册BeanDefinition的能力

2. AnnotationConfigApplicationContext 就是GenericApplicationContext的子类

:::

### 基于 XML

> 这种方式就是前面一直使用的,只需要配置 XML 然后读取 XML 配置文件即可。当然除了使用 XML 作为配置文件,还可以[使用 Properties 文件作为配置文件](Bean生命周期#properties-配置),但是可用性较差

### 基于注解

#### @Bean + 配置类

> 这种方式需要提供一个配置类,然后用 Spring 应用上下文将配置类注册到 Spring 的容器中,同时也会将配置类中定义的 Bean 组件一起注册到 Spring 容器中

```java
public class AnnotationBeanDefinitionDemo {
  public static void main(String[] args) {
      // 1. 创建一个基于注解的 Spring 应用上下文
      AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();

      // 2. 注册组件类,比如= Configuration Class (配置类) => 相当于用 一个实体的 Class 对象代替  XML 配置信息
      ctx.register(UserBeanConfig.class);

      // 3. 刷新 Spring 应用上下文
      ctx.refresh();

      // 4. 获取 Bean 信息
      /*
        out: 
        UserBeanConfig 类型的所有Beans
          {
              annotationBeanDefinitionDemo.UserBeanConfig=
              bean.definition.AnnotationBeanDefinitionDemo$UserBeanConfig@687080dc
          }
        User 类型的所有Beans{user=User{id=22, name='huakucha'}}
      */
      System.out.println("UserBeanConfig 类型的所有Beans"+ctx.getBeansOfType(UserBeanConfig.class));
      System.out.println("User 类型的所有Beans"+ctx.getBeansOfType(User.class));

      // 5. 关闭Spring 应用上下文
      ctx.close();
  }

  public static class UserBeanConfig {
      // 使用 @Bean 注解
      // 实际上也是 BeanDefinition 的一种呈现形式
      @Bean(name = {"user", "athu"})
      public User user() {
          User user = new User();
          user.setId(22L);
          user.setName("huakucha");
          return user;
      }
  }
}
```

#### @Compoment + 配置类

> 这种方式也需要一个配置类,但是采用组件扫描的方式将配置类扫描到 Spring 容器中,同时也会将配置类中定义的 Bean 组件一起注册到 Spring 容器中

```java
public class AnnotationBeanDefinitionDemo2 {
    public static void main(String[] args) {
        // 1. 创建一个基于注解的 Spring 应用上下文
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();

        // 2. 扫描 Component 组件
        ctx.scan("bean.definition");

        // 3. 刷新 Spring 应用上下文
        ctx.refresh();

        // 4. 获取 Bean 信息
      	/*
      		UserBeanConfig 类型的所有Beans
      		 {
              annotationBeanDefinitionDemo2.UserBeanConfig=
              bean.definition.AnnotationBeanDefinitionDemo2$UserBeanConfig@710726a3
      		 	}
					User 类型的所有Beans{user=User{id=22, name='huakucha'}}
      	*/
        System.out.println("UserBeanConfig 类型的所有Beans"+ctx.getBeansOfType(UserBeanConfig.class));
        System.out.println("User 类型的所有Beans"+ctx.getBeansOfType(User.class));

        // 5. 关闭Spring 应用上下文
        ctx.close();
    }

  	// 实际上也是 BeanDefinition 的一种呈现形式
    @Component
    public static class UserBeanConfig {
        // 使用 @Bean 注解
        @Bean(name = {"user", "athu"})
        public User user() {
           User user = new User();
           user.setId(22L);
           user.setName("huakucha");
           return user;
        }
    }
}
```

#### @Import + 配置类

> 这种方式也需要一个配置类,但是采用的是 @Import 注解将配置类导入到 Spring 容器中

```java
@Import({AnnotationBeanDefinitionDemo3.UserBeanConfig.class})
public class AnnotationBeanDefinitionDemo3 {
    public static void main(String[] args) {
        // 1. 创建一个基于注解的 Spring 应用上下文
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();

        // 2. 将当前类注册到 Spring 容器中,同时会将@Import 导入的配置类也注册到Spring 容器中
        ctx.register(AnnotationBeanDefinitionDemo3.class);

        // 3. 刷新 Spring 应用上下文
        ctx.refresh();

        // 4. 获取 Bean 信息
      	/*
        UserBeanConfig 类型的所有Beans
                  {bean.definition.AnnotationBeanDefinitionDemo4$UserBeanConfig=
                  bean.definition.AnnotationBeanDefinitionDemo4$UserBeanConfig@cb51256}
				User 类型的所有Beans{user=User{id=22, name='huakucha'}}
      	*/
        System.out.println("UserBeanConfig 类型的所有Beans"+ctx.getBeansOfType(UserBeanConfig.class));
        System.out.println("User 类型的所有Beans"+ctx.getBeansOfType(User.class));

        // 5. 关闭Spring 应用上下文
        ctx.close();
    }

  	// 实际上也是 BeanDefinition 的一种呈现形式
    public static class UserBeanConfig {
        // 使用 @Bean 注解
        @Bean(name = {"user", "athu"})
        public User user() {
           User user = new User();
           user.setId(22L);
           user.setName("huakucha");
           return user;
        }
    }
}
```

:::caution 注意点

**注意: 同一个Bean不会被多次注册!!**

  ```java
  public class AnnotationBeanDefinitionDemo4 {
      public static void main(String[] args) {
          // 1. 创建一个基于注解的 Spring 应用上下文
          AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
  
          // 2. 扫描 Component 组件
          ctx.register(UserBeanConfig.class);
          ctx.scan("bean.definition");
  
          // 3. 刷新 Spring 应用上下文
          ctx.refresh();
  
          // 4. 获取 Bean 信息
        	/*
        	UserBeanConfig 类型的所有Beans
        	 {
        	 		annotationBeanDefinitionDemo4.UserBeanConfig=
        	 			bean.definition.AnnotationBeanDefinitionDemo4$UserBeanConfig@78186a70
        	 	}
  				User 类型的所有Beans{user=User{id=22, name='huakucha'}}
  
        	*/
          System.out.println("UserBeanConfig 类型的所有Beans"+ctx.getBeansOfType(UserBeanConfig.class));
          System.out.println("User 类型的所有Beans"+ctx.getBeansOfType(User.class));
  
          // 5. 关闭Spring 应用上下文
          ctx.close();
      }
  
      @Component
      public static class UserBeanConfig {
          // 使用 @Bean 注解
          @Bean(name = {"user", "athu"})
          public User user() {
             User user = new User();
             user.setId(22L);
             user.setName("huakucha");
             return user;
          }
      }
  }
  ```

:::

### 基于 API

> 基于 Api 主要是采用 BeanDefinitionRegistry 接口的实现,Spring 本身的使用示例可以参看 [BeanDefinition 依赖来源](依赖来源#spring-容器管理游离对象的注册)

```java
public class APIBeanDefinitionDemo {
  public static void main(String[] args) {
      // 创建IOC容器
      DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
    
      // 通过api的方式注册Bean -> 当然这里也能传入Spring应用上下文对象
      registryByName(beanFactory,"yoey1");
      registryByType(beanFactory);
      registryByType(beanFactory);
      // 依赖查找
      String[] names = beanFactory.getBeanNamesForType(Person.class);
      System.err.println(Arrays.toString(names));
  }

  // 命名的方式
  public static void registryByName(BeanDefinitionRegistry registry,String name){
      // 手动创建了 BeanDefinition
      BeanDefinitionBuilder builder = BeanDefinitionBuilder.genericBeanDefinition(Person.class);
      builder.addPropertyValue("age",11);
      builder.addPropertyValue("name","yoey1");
      registry.registerBeanDefinition(name,builder.getBeanDefinition());
  }
  // 非命名的方式
  public static void registryByType(BeanDefinitionRegistry registry){
      BeanDefinitionBuilder builder = BeanDefinitionBuilder.genericBeanDefinition(Person.class);
      builder.addPropertyValue("age",22);
      builder.addPropertyValue("name","yoey2");
      BeanDefinitionReaderUtils.registerWithGeneratedName(builder.getBeanDefinition(),registry);
  }
}

/*
[yoey1, com.geekbang.demo.BeanInfo.Person#0, com.geekbang.demo.BeanInfo.Person#1]
*/ 
```

### 注册外部单体对象

> 所谓的外部对象就是这个对象手动去创建,且它的生命周期不由 Spring 来管理,但是可以交由 Spring 托管这个对象

- 将创建的对象注册到IOC容器中

```java
public class OutBeanDemo {
    public static void main(String[] args) {
        // 定义一个外部的单体类
        Person person = new Person();
        person.setName("11");
        person.setAge(22);

        // 通过IOC容器的 registerSingleton 注册 -> 或者通过Spring应用上下文获取底层IOC容器
        DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();
        beanFactory.registerSingleton("person",person);

        //依赖查找
        Person bean = beanFactory.getBean("person", Person.class);
        System.out.println(bean);
    }
}
```

## Bean 的实例化方式

> 从上面可以看到,我们可以选择由框架来注册 BeanDefinition,也可以选择自己手动注册BeanDefinition。那么注册完成后,Spring 框架如何将BeanDefinition 实例化为对象呢?
>
> **Spring默认采用构造器的方式,当然也支持例如静态工厂方法、工厂方法和 FactoryBean 等的方式**

:::warning 注意

1、使用Spring应用上下文注册的BeanDefinition，只有通过调用上下文的`refresh()` 方法才能对Bean进行初始化/实例化

2、ClassPathXmlApplicationContext 加载Xml配置元信息时，内部会调用上下文的刷新方法实现Bean的实例化

:::

- **常规方式:**
  1. 通过**构造器**            【 配置元信息:XML、java注解 和 java api 】
  2. 通过**Bean 静态工厂方法**  【 配置元信息:XML 和 java api 】
  3. 通过 **Bean 实例工厂方法** 【 配置元信息:XML 和 java api  】
  4. 通过 **FactoryBean**    【 配置元信息:XML、java注解 和 java api 】
- **特殊方式**
  1. 通过`ServiceLoaderFactoryBean`  【 配置元信息:XML、java注解 和 java api 】
     - 也是FactoryBean 的一种方式
  2. 通过 `AutowireCapableBeanFactory#createBean（Class，int，bool）`  
  3. 通过 `BeanDefinitionRegistry#registryBeanDefinition(String,BeanDefinition)` 向容器注册BeanDefinition，由容器实例化

### 通过构造器、Setter

> 这里使用的是 XML 配置元信息,也可以选择注解或者 java api

构造器或者 Setter 的方式下,会直接调用 Pojo 的 构造器、Setter方法实现对象的实例化

```xml
<!-- Setter 的方式-->
<bean id="yoey" class="com.geekbang.MyDemo1.Pojo.User">
  <property name="age" value="2"/>
  <property name="name" value="Yoey"/>
</bean>

<!-- 构造器的方式 -->
<bean id="yoey2" class="com.geekbang.MyDemo1.Pojo.User">
  <constructor-arg name="age"  value="22"/>
  <constructor-arg name="name"  value="yoey"/>
</bean>
```

### 工厂模式

#### Bean 静态工厂方法

> 一般情况下,通过构造器、Setter 的方式来实例化一个 Bean,Spring 还支持**将实例化方法定义为 Bean 内部的静态方法(factory-method)**

- 操作步骤
  1. 在Bean类中定义静态方法，用于返回一个Bean
  2. 为Bean指定一个 `factory-method`

①、 Bean类中指定静态方法，返回Bean对象

```java
public class Person {
  String name;
  Integer age;

  // 静态方法
  public static Person createUser(){
      Person person = new Person();
      person.setName("11");
      person.setAge(22);
      return person;
  }
}
```

②、 XML配置元信息时,通过 `factory-method` 指定 **静态方法**

```xml
<!--静态方法-->
<bean id="static-person" class="com.geekbang.demo.BeanInfo.Person" factory-method="createUser"/>
```

:::caution 注意

在以 XML 为配置信息中,如果既指定了  **factory-method**,还指定了 setter 或者构造器参数,那么以后者为主

```xml
    <bean id="create-by-static-factory-method"
          class="ioc.overview.Domain.User"
          factory-method="createUserStatic">
      <!-- 这里的 createUserStatic 不会起效,而是以下面的 setter 注入的参数为主-->
        <property name="id" value="11"/>
        <property name="name" value="user11"/>
    </bean>
```

:::

#### Bean 实例工厂方法

> 除了可以在 Bean 的内部定义一个静态方法,Spring 还支持**将实例化方法定义为其他类中的实例方法,我们称这个类为 “工厂类”**
>
> 1. 将工厂方法所在类定义为 Bean => **factory-bean**
> 2. 在工厂 Bean 中定义实例的工厂方法 => **factory-method**
>
> 可以说,[静态工厂方法](Bean#静态工厂方法) 就是 工厂Bean + 工厂方法 的**特殊呈现形式**

- 操作步骤
  1. 创建一个工厂类，其中定义返回Bean的方法
  2. 配置工厂类的Bean
  3. 在Bean的 `factory-bean` 指定工厂类的Bean，`factory-method`指定工厂类中可以返回Bean的实例方法

①、 创建一个工厂类，其中定义返回 Bean 对象的实例方法

```java
/**
 * <b>User的工厂类</b>
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class UserFactory {
    public User createUser() {
        User user = new User();
        user.setId(22L);
        user.setName("lisi");
        return user;
    }
}
```

②、 配置工厂类的Bean，并且 在Bean的`factory-bean` 指定工厂类的Bean，`factory-method` 指定工厂类中返回Bean的实例方法

```xml
<!--注册一个 Bean 的工厂类-->
<bean id="userFactory"  class="bean.factory.UserFactory"/>

<!--利用  Bean 的工厂类中的工厂方法实例化 User 的 Bean-->
<bean id="create-by-factory-method"
      class="ioc.overview.Domain.User"
      factory-bean="userFactory"
      factory-method="createUser"
/>
```

③、测试使用 Bean 实例工厂方法

```java
/**
 * <b>利用 Bean 的实例工厂方法实例化一个 Bean</b>
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeanCreationDemo2 {
    public static void main(String[] args) {
        BeanFactory factory = new ClassPathXmlApplicationContext("MATE-INF/bean-creation-context.xml");
        User user = factory.getBean("create-by-factory-method", User.class);
      	// out: User{id=22, name='lisi'} 
        System.out.println(user);
    }
}

```


#### FactoryBean

> 上面 Bean 实例工厂方法中,不仅需要注册一个工厂类的 Bean,还要在 Bean 中指定 **factory-bean、factory-method**, 而 FactoryBean 的方式则可以省略很大部分操作,仅仅需要实现FactoryBean接口的 getObject()方法即可
>
> 文章推荐:[FactoryBean——Spring的扩展点之一](https://juejin.cn/post/6844903954615107597)

FactoryBean的特殊之处在于它可以向容器中注册两个Bean，一个是它本身，一个是FactoryBean.getObject()方法返回值所代表的Bean

- 操作方式
  1. 创建一个类实现 `FactoryBean<T>` 接口,主要实现 **getObject()**
  2. 将上述的类注入到容器中
  3. 如果需要通过类型获取Bean时，这个类型就是 `T`

①、 创建一个类实现`FactoryBean<T>`

```java
/**
 * <b>User 的FactoryBean</b>
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class UserFactoryBean implements FactoryBean<User> {
    @Override
    public User getObject() throws Exception {
        System.out.println("call UserFactoryBean#getObject");
        User user = new User();
        user.setId(33L);
        user.setName("UserFactoryBean");
        return user;
    }

    @Override
    public Class<?> getObjectType() {
        return User.class;
    }
}
```

②、 通过XML配置元信息的方式将FactoryBean的实现注入到容器中

```xml
<!--
   创建一个 User 的 FactoryBean 
   这种模式下,factory-bean FactoryBean 实现类本身, 且 factory-method 是固定的 getObject
 -->
<bean id="userFactoryBean"  class="bean.factory.UserFactoryBean"/>
```

③、 获取FactoryBean的实现(类型就是 FactoryBean 的泛型类型)

```java
/**
 * <b>测试 User 的 FactoryBean</b>
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class BeanCreationDemo3 {
  public static void main(String[] args) throws Exception {
      BeanFactory factory = new ClassPathXmlApplicationContext("MATE-INF/bean-creation-context.xml");
      User user = factory.getBean("userFactoryBean", User.class);
      /*
        out: 
        call UserFactoryBean#getObject
        User{id=33, name='UserFactoryBean'}
      */
      System.out.println(user);
  }
}
```

:::caution 注意点

这种FactoryBean 的方式下,进行依赖查找的时候,类型是 FactoryBean#getObjectType 方法返回的对象类型

:::

### ServiceLoader

#### SPI

- SPI 可以参考这个[博文](https://blog.huakucha.top/posts/java-basic/spi)
- 操作步骤
  1. 在classpath下创建 `/META-INF/services` 目录
  2. 在上述的目录中定义没有后缀的文件，文件名是接口的全类名
  3. 在上述的文件中配置该接口的实现类(全类名)
  4. 通过 `ServiceLoader`  加载类对象

①、 在`/META-INF/services` 中创建文件: MATE-INF/services/bean.factory.UserFactoryInterface

```txt title=“MATE-INF/services/bean.factory.UserFactoryInterface”
bean.factory.UserFactoryImpl
```

②、 使用 ServiceLoader加载类对象

```java
/**
 * <b>SPI的演示</b>
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class SpiDemo {
    public static void main(String[] args) {
        ServiceLoader<UserFactoryInterface> users = ServiceLoader.load(UserFactoryInterface.class);
        Iterator<UserFactoryInterface> iterator = users.iterator();
        while(iterator.hasNext()) {
            UserFactoryInterface userFactoryInterface = iterator.next();
            // out: spi create==>User{id=22, name='lisi'}
            userFactoryInterface.createUser();
        }
    }
}
```



#### ServiceLoaderFactoryBean

:::danger 注意

1. ServiceLoaderFactoryBean 也是FactoryBean 接口的一个实现类，其中返回的类型就是 `ServiceLoader`
2. 可以查看 **org.springframework.beans.factory.serviceloader.AbstractServiceLoaderBasedFactoryBean** 了解其包含的属性
   - `serviceType`
   - `beanClassLoader`

:::

- 操作方式
  - 在classpath下创建 <font color='#f535e8'>`/META-INF/services`</font> 目录
  - 在上述的目录中定义没有后缀的文件，文件名是接口的全类名
  - 在上述的文件中配置该接口的实现类(全类名)
  - 在XML配置元信息中指定<font color='#f535e8'>`ServiceLoaderFactoryBean`</font> 的Bean，并且配置 <font color='#f535e8'>`serviceType`</font> 属性来制定 ServiceLoader 返回的类型
    - 我们也可以自动构建 BeanDefinition 并注册到 IOC 容器中
  - 获取 ServiceLoader Bean 组件进行操作

①、 XML配置元信息

```xml
<!--ServiceLoadFactoryBean-->
<bean id="bean-specialCreation-context"
      class="org.springframework.beans.factory.serviceloader.ServiceLoaderFactoryBean"
      >
    <property name="serviceType" value="bean.factory.UserFactoryInterface"/>
</bean>
```

②、 从容器中获取ServiceLoader

```java
/**
 * <b>Bean 的一种特殊实例化方法 => SPI-> ServiceLoaderFactoryBean</b>
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 */
public class SpecialBeanInstantiationDemo {
    static final String xmlPath = "META-INF/bean-specialCreation-context.xml";

    public static void main(String[] args) throws Exception {
        BeanFactory beanFactory = new ClassPathXmlApplicationContext(xmlPath);
        ServiceLoader serviceLoader = beanFactory.getBean("bean-specialCreation-context", ServiceLoader.class);

        Iterator<UserFactoryInterface> iterator = serviceLoader.iterator();
        while(iterator.hasNext()) {
            UserFactoryInterface userFactoryInterface = iterator.next();
            // out: spi create==>User{id=22, name='lisi'}
            userFactoryInterface.createUser();
        }
    }
}
```

## Bean的初始化方式

> Bean 的生命周期完整流程参看[这里](Bean生命周期)

### 基本说明

- Bean的生命周期( Bean 的创建 -> 初始化 -> 销毁 )

  - 实例化一个 Bean
  - 为 Bean 的属性设置值和对其他 Bean 的引用

  - **调用 Bean 的初始化方法**
  - Bean 可以使用了
  - 当容器关闭时, 调用 Bean 的销毁方法

- Bean 的创建模式

  - 单例的
    - 会在容器启动的时候创建 Bean 对象 , 同时会调用初始化方法

  - 多实例的  
    - 会在每次获取 Bean 的时候创建
    - 同时也会在 获取时调用初始化方法 ,但是容器不会将其进行销毁

- Bean的初始化(Initialization)
  1. 注解标注方法
     - `@PostConstruct` 标注方法,但是这个需要基于注解的 AnnotationConfigApplicationContext 调用
  2. 实现 `InitializingBean`接口的 afterPropertiesSet()
     - 表示在完成了 Bean 的属性设置之后执行
     - InitializingBean 由 Spring 框架提供,既“支持” ClassPathXmlApplicationContext, 也“支持” AnnotationConfigApplicationContext
  3. 手动配置初始化方法
     - XML配置: `<bean init-method="xxx"/>`
     - java 注解: `@Bean(initMethod=“xxx”)`
     - java api: `AbstractBeanDefinition#setInitMethodName(String)`

### @PostConstruct

> @PostConstruct 注解是 java 提供的标准注解,不是 spring 提供的。

首先需要定义 Bean 对象

```java
public class UserFactoryImpl implements UserFactoryInterface{
    @Override
    public User createUser() {
        User user = new User();
        user.setId(22L);
        user.setName("lisi");
        System.out.println("spi create==>"+user);
        return user;
    }
		
    // 在初始化方法上标记 @PostConstruct 注解
    @PostConstruct
    public void init() {
        System.out.println("PostConstruct UserFactoryImpl#init...");
    }
}
```

然后进行测试,测试需要通过 refresh 方法让容器将 BeanDefinition "实例化"

```java
public class PostConstructAnnotationDemo {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
        // 注册配置类
        ctx.register(PostConstructAnnotationDemo.class);
        // 启动 Spring 应用上下文
        ctx.refresh();
            
        // 关闭 Spring 应用上下文
        ctx.close();
    }

    @Bean
    public UserFactoryImpl userFactory() {
        return new UserFactoryImpl();
    }
}
// 输出: PostConstruct UserFactoryImpl#init...
```

### 实现InitializingBean

> 这里主要使用的是基于 XML 的方式,如果是注解的话,和上面的 [@PostConstruct](Bean#postconstruct)操作是类似的,不过不需要加上 @PostConstruct 注解了

首先让 Bean 对象实现 InitializingBean#afterPropertiesSet

```java
public class UserFactoryImpl implements UserFactoryInterface, InitializingBean {
    @Override
    public User createUser() {
        User user = new User();
        user.setId(22L);
        user.setName("lisi");
        System.out.println("spi create==>"+user);
        return user;
    }

    // 实现了 InitializingBean 接口的afterPropertiesSet()方法
    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("InitializingBean UserFactoryImpl#afterPropertiesSet...");
    }
}
```

然后在 XML 中配置 Bean 元信息

```xml
<bean id="bean-initializing"
      class="bean.factory.UserFactoryImpl">
</bean>
```

最后进行测试,测试使用 ClassPathXmlApplicationContext,它会执行 refresh 方法刷新容器

```java
public class BeanInitializingDemo {
    static final String xmlPath = "META-INF/bean-initializing-context.xml";

    public static void main(String[] args) throws Exception {
        BeanFactory beanFactory = new ClassPathXmlApplicationContext(xmlPath);
    }
}
// 输出: InitializingBean UserFactoryImpl#afterPropertiesSet...
```

### 不同初始化方式执行顺序

:::tip Bean各个初始化方法的执行顺序

**@PostConstruct 注解标注-> 实现InitializingBean -> 手动配置初始化方法**

:::

**①、 定义Bean对象,实现 InitializingBean**

```java
public class Person implements InitializingBean {
  String name;
  Integer age;
  public static Person createUser(){
      Person person = new Person();
      person.setName("11");
      person.setAge(22);
      return person;
  }

  /**
   * 使用 {@link @PostConstruct} 注解标识的Bean 初始化方法
   */
  @PostConstruct
  public void init(){
      System.err.println("使用@PostConstruct 注解...");
  }

  public void  beanPostCon(){
      System.err.println("自定义初始化方法:@Bean initMethod...");
  }

  // 实现 InitializingBean的 afterPropertiesSet方法
  @Override
  public void afterPropertiesSet() throws Exception {
      System.err.println("实现SpringInitializingBean ...");
  }
}
```

**②、 通过注解方式注入Bean对象**

```java
public class BeanConstructDemo {
    public static void main(String[] args) {
        // 创建一个注解驱动的Spring应用上下文
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
        context.register(BeanConstructDemo.class);
        context.refresh();
        //依赖查找
        Person bean = context.getBean(Person.class);
        System.out.println(bean);
        context.close();
    }

   // 自定义初始化方法通过@Bean 的name属性指定初始化方法
    @Bean(initMethod = "beanPostCon")
    public Person person(){
        Person person = new Person();
        person.setAge(22);
        person.setName("Yoey22");
        return person;
    }
}

/*
	使用@PostConstruct 注解...
  实现SpringInitializingBean ...
  自定义初始化方法:@Bean initMethod...
*/
```

### 延迟初始化的Bean

- <mark>Bean的延迟初始化/懒加载（Lazy Initialization）</mark>

  1. XML 配置: `<bean  asy-init="true|false"/>`
  2. java 注解: `@Lazy(true)`
  3. java api

:::danger 延迟初始化与非延迟初始化的区别？

- 延迟初始化的Bean
  - **只有在获取 Bean 的时候调用初始化方法**
  - 如果有其他非延迟加载的Bean依赖于这个Bean，也会立即对这个Bean初始化
- 非延迟初始化
  - 在Spring应用上下文启动完成后,就会调用初始化方法

:::

可以看到，容器刷新的时候没有对Bean进行初始化,只是将Bean注册到容器，当尝试从容器中获取Bean的时候才会对Bean进行初始化

```java
public class AnnotationBeanFactoryDemo {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
        ctx.register(AnnotationBeanFactoryDemo.class);
        System.out.println("refresh start...");
        ctx.refresh();
        System.out.println("refresh end...");
        Iterator<String> iterator = ctx.getBeanFactory().getBeanNamesIterator();
        while (iterator.hasNext()){
            String next = iterator.next();
            System.out.println(next);
        }
        System.out.println("-----");
        User user = (User)ctx.getBean("user");
        ctx.close();

    }
    @Lazy //Bean 的懒加载
    @Bean
    public User user(){
        User user  = new User(33,"create by DefaultUserFactory");
        user.setName("create by DefaultUserFactory");
        user.setAge(33);
        return user;
    }
}

/*
refresh start...
refresh end...
org.springframework.context.annotation.internalConfigurationAnnotationProcessor
org.springframework.context.annotation.internalAutowiredAnnotationProcessor
org.springframework.context.annotation.internalCommonAnnotationProcessor
org.springframework.context.event.internalEventListenerProcessor
org.springframework.context.event.internalEventListenerFactory
annotationBeanFactoryDemo
user
environment
systemProperties
systemEnvironment
org.springframework.context.annotation.ConfigurationClassPostProcessor.importRegistry
messageSource
applicationEventMulticaster
lifecycleProcessor
-----
// 这里可以看到使用了 @Lazy 对 Bean 的初始化进行延迟后,只有在进行依赖查找的时候才会进行 Bean 的实例化 + 初始化
User 有参构造器调用...
初始化 User name 属性...
初始化 User age 属性...
@PostConstruct ....
afterPropertiesSet ....
*/
```

## Bean的销毁方式

> 与Bean 的初始化相对应的有 Bean 的销毁,在使用方式上与 Bean 的初始化基本类似

- Bean的销毁
  1. 注解标注方法
     - 使用`@PreDestroy`注解标注方法
  2. 实现`DisposableBean`接口的 destroy()方法
  3. 手动配置销毁方法
     - XML配置: `<bean destroy="xxx"/>`
     - java 注解: `@Bean(destroy="xxx")`
     - Java api: `AbstractBeanDefinition#setDestroyMethodName(String)`
- Bean各个销毁方法的执行顺序
  - **@PreDestroy -> 实现DisposableBean -> 手动配置销毁方法**

:::caution IOC容器的Bean能够被垃圾回收吗？

可以，通过**关闭Spring容器(应用上下文)**

垃圾回收的步骤:

1. 关闭 Spring 容器(上下文)
2. 执行 GC
3. Spring Bean 覆盖 finalize 方法被回调

:::
