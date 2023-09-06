---
id: AOP总览
title: AOP总览
---

## Java 基础

如果需要熟悉 AOP,我们需要熟知以下的 Java 基础:

1. Java ClassLoading
    - 用于搜索 Class,而且一般在启动 java 程序的时候默认会传入 ClassPath
2. Java 动态代理
    - 需要传入 ClassLoader
3. Java 反射
4. 字节码框架(ASM、CGLib)

java 的 ClassLoader 通过 `loadClass(String name)` 可以找到对应的 Class 对象,主要步骤如下:

1. 首先通过`findLoadedClass`查询类是否被 classLoader 加载,如果已经被加载就直接返回(**该方法是 native 方法**)
2. 如果第 1 步没有找到,则按照 parentClassLoader -> bootstrapClassLoader 的顺序查询是否被加载
    - 这里的 **bootstrapClassLoader 也是基于 native 方法**的
3. 最后还是没有的话,就通过类加载器加载(比如常见的 ClassLoader 实现: `URLClassLoader`)

```java title="ClassLoader#loadClass"
 protected Class<?> loadClass(String name, boolean resolve)
            throws ClassNotFoundException {
  synchronized (getClassLoadingLock(name)) {
    // 首先检查类是否已经被加载
    Class<?> c = findLoadedClass(name);
    if (c == null) {
        long t0 = System.nanoTime();
        // 按照 parent >bootstrap 的顺序查询
        try {
            if (parent != null) {
                c = parent.loadClass(name, false);
            } else {
                c = findBootstrapClassOrNull(name);
            }
        } catch (ClassNotFoundException e) {
          //
        }
        // 最后进行加载
        if (c == null) {
          c = findClass(name);
          // ...
        }
    }
    // ...
    return c;
  }
}
```

在加载 Class 的时候,会将 *.java* 文件转换为 *字节数组*,这也是为什么叫做 **字节码**

```java title="ClassLoader#defineClass"
private Class<?> defineClass(String name, Resource res) throws IOException {
    long t0 = System.nanoTime();
    int i = name.lastIndexOf('.');
    URL url = res.getCodeSourceURL();
    if (i != -1) {
        String pkgname = name.substring(0, i);
        Manifest man = res.getManifest();
        definePackageInternal(pkgname, man, url);
    }
    // 将 .java 文件读取为 字节流
    java.nio.ByteBuffer bb = res.getByteBuffer();
    if (bb != null) {
        CodeSigner[] signers = res.getCodeSigners();
        CodeSource cs = new CodeSource(url, signers);
        sun.misc.PerfCounter.getReadClassBytesTime().addElapsedTimeFrom(t0);
        return defineClass(name, bb, cs);
    } else {
        // 读取为字节数组
        byte[] b = res.getBytes();
        CodeSigner[] signers = res.getCodeSigners();
        CodeSource cs = new CodeSource(url, signers);
        sun.misc.PerfCounter.getReadClassBytesTime().addElapsedTimeFrom(t0);
        return defineClass(name, b, 0, b.length, cs);
    }
}
```

被 jvm 加载好的类, 会被记录到 ClassLoader 中,这也意味着: **ClassLoader 和 Class 对象是绑定关系**

```java title="ClassLoader"
private final Vector<Class<?>> classes = new Vector<>();

// Invoked by the VM to record every loaded class with this loader.
void addClass(Class<?> c) {
    classes.addElement(c);
}
```

## AOP 基础

### AOP 的引入

Java 的 OOP 存在一定的局限性:

1. 静态化语言: 类的**结构**一旦被定义,就不容易被修改
2. 侵入性拓展: 通过继承和组合组织新的类结构

### AOP 的使用场景

1. **日志场景**
    - `映射诊断上下文`,比如 log4j 或 logback 中的 MDC
    - `辅助信息`,比如: 方法执行时间
2. **统计场景**
    - `方法调用次数`
    - `执行异常次数`
    - `数据抽样`
    - `数值累加`
3. **安全防控场景**
    - `熔断`, 比如 Hystrix
    - `限流和降级`, 比如 Sentinel
    - `认证和授权`, 比如 Spring Security
    - `监控`, 比如 JMX
4. **性能场景**
    - `缓存`,比如: Spring Cache
    - `超时控制`

### AOP 概念

- `join point`
  - **连接点**,一个 *join point* 是程序流程中一个明确定义的点
- `pointcut`
  - **点切**, 用于筛选出符合条件的连接点 *pointcut*
- `advice`
  - **通知**, *advice* 会在具体的连接点上执行相应的动作(代码)

## Java AOP 相关的设计模式

### 代理模式(Proxy)

代理模式就是:

- 使用一个代理将对象`包装`起来, 后用该代理对象`取代原始对象`(目标对象)
  - **任何对原始对象的调用都要通过代理**
  - **代理对象决定是否以及何时将方法调用转到原始对象上**

一般代理模式可以分为:

1. 静态代理
    - 一般采用 OOP 继承/实现 与组合向结合的方式
    - **在编译阶段就可生成 AOP 代理类,因此也称为`编译时增强`**
2. 动态代理
    - **运行时借助于 JDK 动态代理、CGLIB 等方式在内存中 "临时" 生成 AOP 动态代理类,因此也被称为`运行时增强`**
      - 基于接口实现动态代理: `JDK 动态代理`
      - 基于继承实现动态代理: `字节码提升,比如 CGLib`

#### 静态代理

静态代理一般采用 **继承/实现 + 组合**的方式来实现, 对某个接口的所有实现进行统一的增强。

示例代码:

```java
// 接口
public interface EchoService {
  String echo(String message);
}

// 接口的默认实现
public class DefaultEchoService implements EchoService{
  @Override
  public String echo(String message) {
    return "[Echo]:" + message;
  }
}


// 接口的增强实现
public class Wrapper implements EchoService {
  // 通过组合的方式来增强接口的实现
  // highlight-start
  private EchoService echoService;

  public Wrapper(EchoService echoService) {
      this.echoService = echoService;
  }
  // highlight-end

  @Override
  public String echo(String message) {
      // 增加代码执行时间的处理
      long startTime = System.nanoTime();
      String result =  echoService.echo(message);
      long costTime = System.nanoTime() - startTime;
      System.out.println(result + ",执行时间:" + costTime);
      return result;
  }
}

// 最后的测试代码
public class StaticProxyDemo {
  public static void main(String[] args) {
      Wrapper wrapper = new Wrapper(new DefaultEchoService());
      // out: [Echo]:静态代理,执行时间:46557
      String echoed = wrapper.echo("静态代理");
  }
}
```

#### JDK 动态代理

基于 JDK 动态代理主要有两个类:

1. `Proxy`
    - 是**所有动态代理类的父类**,用于生成 代理类 或者代理对象
2. `InvocationHandler`
    - 完成动态代理的整个过程,相当于是一个 *Advice*

对于 *Proxy* 类,有以下常见的 API:

- `getProxyClass(ClassLoader cl, Class... interfaces)`
  - 生成代理类的 Class对象
- `newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler handler)`
  - 用于创建代理对象
  - 参数说明
    - `loader` :  类加载器对象,帮加载动态生成的代理类
    - `interfaces` : 提供目标对象的所有接口。**让代理对象 和 目标对象 都具有接口中相同的方法**
    - `handler` : InvocationHandler 类型的对象

:::tip 创建代理对象的相关说明

1. 我们需要传入 ClassLoader 对象进来,用于进行类加载,但是我们目标对象不是已经加载好了么?
    - **因为动态代理会生成新的类,需要将生成的类通过这个 ClassLoader 进行加载**
    - 加载 interface 的 ClassLoader 和传入的 classLoader 可能不是同一个,这里一般将当前的 ClassLoader 作为参数传入
      - **一般通过当前线程获取当前的 ClassLoader**

2. 通过设置环境变量 `sun.misc.ProxyGenerator.saveGeneratedFiles = true` 可以将生成的代理类保存下来

:::

对于 *InvocationHandler* 接口,只有一个方法:

- `invoke(Object proxy, Method method, Object[] args)`
  - 方法参数说明:
    - `proxy` : 代理对象 , 在 invoke方法中一般不会使用
    - `method` : 正在被调用的方法对象
    - `args` : 正在被调用的方法的参数
  - **代理对象调用代理方法,会调用这个Invoke方法**

##### 基本示例

```java
// 用于创建 EchoService 的代理类
public class EchoServiceProxy {
    public Object getProxy(EchoService echoService) {
        ClassLoader loader = echoService.getClass().getClassLoader();
        Object proxy = Proxy.newProxyInstance(loader,echoService.getClass().getInterfaces(), new InvocationHandler() {
            /**
             * 这里就是代理对象的需要执行的操作
             */
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                // 代理对象的操作: 记录日志
                System.out.printf(">>>>>>>>>>> 代理对象开始执行[method:%s]<<<<<<<<<<<<<\r\n", method.getName());

                // 执行目标对象的方法
                // 判断方法是否属于目标对象所实现的接口中的,这里假定只有一个 EchoService
                Object result = null;
                if(EchoService.class.isAssignableFrom(method.getDeclaringClass())) {
                    // 将处理转到目标对象
                    result = method.invoke(echoService, args);
                    System.out.println(result);
                }
                System.out.printf(">>>>>>>>>>> 代理对象开始执行[method:%s]<<<<<<<<<<<<<\r\n", method.getName());
                return result;
            }
        });
        return proxy;
    }
}

// 测试

public class DynamicProxyDemo {
    public static void main(String[] args) {
        EchoServiceProxy serviceProxy = new EchoServiceProxy();
        EchoService proxy = (EchoService) serviceProxy.getProxy(new DefaultEchoService());
        proxy.echo("Hello,World");
    }
}
/**
 * out:
 *    >>>>>>>>>>> 代理对象开始执行[method:echo]<<<<<<<<<<<<<
 *    [Echo]:Hello,World
 *    >>>>>>>>>>> 代理对象开始执行[method:echo]<<<<<<<<<<<<<
 */
```

##### 基本原理

我们在[上面](AOP总览#基本示例) 的测试示例中,加上设置环境变量: `sun.misc.ProxyGenerator.saveGeneratedFiles = true` 的处理,查看生成的代理类,会有以下的操作:

1. 定义 Method 对象, 包含目标类本身以及实现的所有接口中的方法对象,并且在静态代码块中,对定义 的Method 对象进行赋值 (反射赋值)
2. 定义代理类的构造函数,参数是 InvocationHandler 对象 ,这个对象是在调用 newProxyInstance 方法时传入

```java
public final class $Proxy0 extends Proxy implements EchoService {
    private static Method m1;
    private static Method m3;
    private static Method m2;
    private static Method m0;

    static {
      try {
          m0 = Class.forName("java.lang.Object").getMethod("hashCode");
          m1 = Class.forName("java.lang.Object").getMethod("equals", Class.forName("java.lang.Object"));
          m2 = Class.forName("java.lang.Object").getMethod("toString");
          // highlight-start
          m3 = Class.forName("domin.EchoService").getMethod("echo", Class.forName("java.lang.String"));
          // highlight-end
      } catch (NoSuchMethodException var2) {
        // ...
      } 
    }

    public $Proxy0(InvocationHandler var1) throws  {
      super(var1);
    }

    public final String echo(String var1) throws  {
        try {
          // highlight-start
          // 执行 Advice: 调用 InvocationHandler#invoke 方法
          return (String)super.h.invoke(this, m3, new Object[]{var1});
          // highlight-end
        } catch (RuntimeException | Error var3) {
          // ...
        }
    }

    // 一些 toString、hashCode...等方法
}
```

### 判断模式(Predicate)

> 利用反射进行判断

判断的来源有下面几种:

1. 类(Class)
2. 方法(Method)
3. 注解(Annotation)
4. 参数(Parameter)
5. 异常(Exception)

这里利用 Spring 的反射工具类 `ReflectionUtils` 进行一些判断:

```java
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Method;

/**
 * Java AOP 的判断模式
 *
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 * @see ReflectionUtils
 * @see Method
 */
public class TargetFilterDemo {
    public static void main(String[] args) throws ClassNotFoundException {
        String className = "domin.EchoService";
        // 当前的类加载器,通过当前线程获取
        ClassLoader cl = Thread.currentThread().getContextClassLoader();
        Class<?> loadClass = cl.loadClass(className);

        // 利用 Spring的 ReflectionUtils 进行判断
        // 查找方法名是 echo,且方法参数只有一个 String 类型的
        Method method = ReflectionUtils.findMethod(loadClass, "echo", String.class);
        // out:
        //  public abstract java.lang.String domin.EchoService.echo(java.lang.String) throws java.lang.NullPointerException
        System.out.println(method);

        // 查找方法,throws 类型是 NullPointerException 的

        ReflectionUtils.doWithMethods(loadClass, new ReflectionUtils.MethodCallback() {
            @Override
            public void doWith(Method method) throws IllegalArgumentException, IllegalAccessException {
                // out:
                //  public abstract java.lang.String domin.EchoService.echo(java.lang.String) throws java.lang.NullPointerException
                System.out.println(method);
            }
        }, new ReflectionUtils.MethodFilter() {
            @Override
            public boolean matches(Method method) {
                Class<?>[] exceptionTypes = method.getExceptionTypes();
                return exceptionTypes.length == 1 && exceptionTypes[0].equals(NullPointerException.class);
            }
        });
    }
}
```

### 拦截器模式(Interceptor)

拦截类型一般有:

1. 前置拦截(Before)
2. 后置拦截(After)
3. 异常拦截(Exception)

拦截器模式需要依赖于**动态代理**,实际上它就是在 *InvocationHandle#invoke* 方法的前、后,或者异常的时候进行拦截处理

```java
// 还是以 EchoServiceProxy 为例子:
public class EchoServiceProxy {
    public Object getProxy(EchoService echoService) {
        ClassLoader loader = echoService.getClass().getClassLoader();
        Object proxy = Proxy.newProxyInstance(loader,echoService.getClass().getInterfaces(), new InvocationHandler() {
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
              try{
                // highlight-start
                // 这里执行前置拦截
                System.out.println(">>>>>>>>>>> 前置拦截 <<<<<<<<<<<<<");
                // highlight-end

                Object result = null;
                if(EchoService.class.isAssignableFrom(method.getDeclaringClass())) {
                    // 将处理转到目标对象
                    result = method.invoke(echoService, args);
                    System.out.println(result);
                }
                
                // highlight-start
                // 这里执行后置拦截
                System.out.println(">>>>>>>>>>> 后置拦截 <<<<<<<<<<<<<");
                // highlight-end
                return result;
              }catch(Exeption ex) {
                // highlight-start
                // 这里执行异常拦截
                System.out.println(">>>>>>>>>>> 异常拦截 <<<<<<<<<<<<<");
                // highlight-end
              }
            }
        });
        return proxy;
    }
}

```

## Spring AOP 概述

核心特性:

1. 纯 Java 实现,**无编译时的特殊处理、不修改和控制 ClassLoader**, CGLIB 和 JDK 动态代理是在运行的时候动态生成字节码的
2. **仅支持 方法级别 的 join points**
3. 非完整 AOP 实现框架
4. 与 Spring IOC 容器的整合
5. AspectJ 注解驱动整合

:::caution 理解误区

Spring AOP 虽然使用了 AspectJ 的 Annotation(@Aspect,@Pointcut,@Before等),但是**并没有使用 AspectJ 的编译器和织入器, 其实现原理是还是基于动态代理(JDK 动态代理和 CGLIB),在运行时生成代理类**

:::

### 编程模型

#### 注解驱动

- 实现: Enable 模块驱动(`@EnableAspectJAutoProxy`)
- AspectJ 注解:
  - 激活 AspectJ 自动代理: `@EnableAspectJAutoProxy`
  - Aspect: `@Aspect`
  - Pointcut: `@Pointcut`
  - Advice: `@Before`、`@AfterReturning`、`@AfterThrowing`、`@After`、`@Around`
  - Introduction: `@DeclareParents`

#### XML配置驱动

- 实现: [Spring Extension XML Authoring](../Spring编程思想/配置元信息#拓展spring-xml-元素)
- AspectJ XML 元素
  - 激活 AspectJ 自动代理: `<aop:aspect-auto-proxy/>`
  - 配置: `<aop:config/>`
  - Aspect: `<aop:aspect/>`
  - Pointcut: `<aop:pointcut/>`
  - Advice: `<aop:around/>`、`<aop:before/>`、`<aop:after-returning/>`、`<aop:after-throwing/>`、`<aop:after/>`
  - Introduction: `<aop:declare-parents/>`
  - 代理 Scope: `<aop:scope-proxy/>`

#### 底层 API 实现

- 实现: JDK 动态代理、CGLIB、AspectJ
- AspectJ API
  - 代理实现: `AopProxy`
  - 代理配置: `ProxyConfig`
  - JoinPoint: `JoinPoint`
  - Pointcut: `PointCut`
  - Advice: `Advice`、`BeforeAdvice`、`AfterAdvice`、`AfterReturningAdvice`、`ThrowsAdvice`

### Advice 类型

Spring 有如下的 Advice 类型:

1. 环绕(Around)
2. 前置(Before)
3. 后置(After)
    - 方法执行
    - finally 执行
4. 异常(Exception)

## Spring AOP 代理实现

Spring AOP 代理的实现主要有下面几种:

1. JDK 动态代理实现: **基于接口代理**
    - `JdkDynamicAopProxy`
2. CGLIB 动态代理实现: **基于类代理(字节码提升)**
    - `CglibAopProxy`

上面 2 种方式都会直接或者间接的使用了 `AopProxy`：

```java
public interface AopProxy {
  Object getProxy();
  Object getProxy(@Nullable ClassLoader classLoader);
}

```

### JDK 动态代理

问题: 为什么 *Proxy.newProxyInstance* 的时候会[生成新的字节码](AOP总览#jdk-动态代理)?

在 创建代理对象的时候,实际上会调用函数接口 BiFunction 的实现 `ProxyClassFactory#apply`方法,它有以下的特点:

1. 首先判断类加载器是否将传入的 Class 对象的名称解析为同一类对象
2. 然后判断传入的 Class 是否是接口(JDK 动态代理是基于接口的)
3. **然后判断传入的 Class 是否重复**
4. 然后生成代理类的完整类路径: **com.sun.proxy.$Proxy{number}**
5. 然后通过 `ProxyGenerator.generateProxyClass` 生成代理类的字节数组(字节码)
6. 最后利用 native 方法 `defineClass0` 在虚拟机中定义生成 Class 对象,并返回

```java
 private static final class ProxyClassFactory implements BiFunction<ClassLoader, Class<?>[], Class<?>> {

    // 代理对象类名前缀
    private static final String proxyClassNamePrefix = "$Proxy";
    // 每创建代理对象的时候,该计数都会加 1
    private static final AtomicLong nextUniqueNumber = new AtomicLong();

    @Override
    public Class<?> apply(ClassLoader loader, Class<?>[] interfaces) {

      Map<Class<?>, Boolean> interfaceSet = new IdentityHashMap<>(interfaces.length);
      for (Class<?> intf : interfaces) {
          Class<?> interfaceClass = null;
          try {
            interfaceClass = Class.forName(intf.getName(), false, loader);
          } catch (ClassNotFoundException e) {
          }
          if (interfaceClass != intf) {
            throw new IllegalArgumentException(intf + " is not visible from class loader");
          }
          if (!interfaceClass.isInterface()) {
            throw new IllegalArgumentException(interfaceClass.getName() + " is not an interface");
          }
          if (interfaceSet.put(interfaceClass, Boolean.TRUE) != null) {
            throw new IllegalArgumentException("repeated interface: " + interfaceClass.getName());
          }
      }

      // ...
      if (proxyPkg == null) {
        proxyPkg = ReflectUtil.PROXY_PACKAGE + ".";
      }
      long num = nextUniqueNumber.getAndIncrement();
      String proxyName = proxyPkg + proxyClassNamePrefix + num;

      byte[] proxyClassFile = ProxyGenerator.generateProxyClass(proxyName, interfaces, accessFlags);
      try {
          return defineClass0(loader, proxyName,
                              proxyClassFile, 0, proxyClassFile.length);
      } catch (ClassFormatError e) {
          throw new IllegalArgumentException(e.toString());
      }
  }
}
```

并且在第 5 步中,会通过环境变量参数来控制是否将生成的代理类的 *.class* 文件保存到本地:

```java
private static final boolean saveGeneratedFiles = (Boolean)AccessController.doPrivileged(
  // highlight-start
  new GetBooleanAction("sun.misc.ProxyGenerator.saveGeneratedFiles")
  // highlight-end
);

public static byte[] generateProxyClass(final String var0, Class<?>[] var1, int var2) {
  ProxyGenerator var3 = new ProxyGenerator(var0, var1, var2);
  // 生成的代理类的字节数组
  final byte[] var4 = var3.generateClassFile();
  // 如果需要将代理对象的 .class 文件保存到本地
  if (saveGeneratedFiles) {
    AccessController.doPrivileged(new PrivilegedAction<Void>() {
      public Void run() {
        // highlight-start
        Path var2 = var2 = Paths.get(var0 + ".class");
        Files.write(var2, var4, new OpenOption[0]);
        // highlight-end
        return null;
      }
    });
  }
  return var4;
}
```

### CGLIB 代理

- 为什么 JDK 动态代理无法满足 AOP 的需求?
  - **因为 JDK 动态代理是基于接口的,有很大的局限性**,所以 Spring 需要一种字节码提升的工具,在 Spring 内部有两种实现: `ASM` 和 `CGLIB`。相对于 CGLIB,ASM 的实现过于底层。
- 增强类: `Enhancer`, 它**可以动态的为某个类`生成一个子类`来实现方法拦截**

在 Spring 中利用 Enhancer 对 ConfigurationClass 进行配置类的增强:

```java title="ConfigurationClassEnhancer#newEnhancer"
private Enhancer newEnhancer(Class<?> configSuperClass, @Nullable ClassLoader classLoader) {
  Enhancer enhancer = new Enhancer();
  // 设置父类
  enhancer.setSuperclass(configSuperClass);
  // 设置类实现的接口
  enhancer.setInterfaces(new Class<?>[] {EnhancedConfiguration.class});
  enhancer.setUseFactory(false);
  // 设置命名策略
  enhancer.setNamingPolicy(SpringNamingPolicy.INSTANCE);
  enhancer.setStrategy(new BeanFactoryAwareGeneratorStrategy(classLoader));
  enhancer.setCallbackFilter(CALLBACK_FILTER);
  enhancer.setCallbackTypes(CALLBACK_FILTER.getCallbackTypes());
  return enhancer;
}
```

#### 基础示例

在 Spring 中使用 CGLIB 的基本步骤:

1. 创建 CGLIB 增强类 Enhancer
2. 通过 Enhancer 设置需要增强的父类、接口等
3. 设置方法的拦截: `setCallback(new MethodInterceptor)`
    - <mark>其中接口方法 intercept 中的 第一个参数就是 CGLIB 字节码提升后的子类</mark>

4. 在拦截方法中通过 `MethodProxy#invokeSuper` 调用目标对象(代理类的父类)的方法

```java
/**
 * 通过 {@link Enhancer} 进行 CGLIB 的提升
 * @author <a href="mailto:zhuyuliangm@gmail.com">yuliang zhu</a>
 * @see Enhancer
 */
public class CGLIBDemo {
  public static void main(String[] args) {
    // 创建 CGLIB 增强类
    Enhancer enhancer = new Enhancer();
    // 将需要提升的类设置为父类
    enhancer.setSuperclass(DefaultEchoService.class);
    // 设置接口
    enhancer.setInterfaces(new Class[] {EchoService.class});

    // 设置方法的拦截
    enhancer.setCallback(new MethodInterceptor() {

      @Override
      public Object intercept(Object source,
                              Method method,
                              Object[] args,
                              MethodProxy methodProxy) throws Throwable {

        // 前置通知处理
        System.out.printf(">>>>>>>>>>> 前置处理: 代理对象开始执行[method:%s]<<<<<<<<<<<<<\r\n", method.getName());

        // 将处理转到目标对象, 此时 source 是被 CGLIB 提升后的子类

        Object result = methodProxy.invokeSuper(source, args);
        // 后置处理
        System.out.printf(">>>>>>>>>>> 后置处理: 代理对象执行结束[method:%s]<<<<<<<<<<<<<\r\n", method.getName());
        return result;
      }
    });
    // 生成代理对象
    EchoService enhancerClass = (EchoService)enhancer.create();
    System.out.println(enhancerClass.echo("CGLIb 字节码提升"));
  }
}
/**
 * out: 
 *   >>>>>>>>>>> 前置处理: 代理对象开始执行[method:echo]<<<<<<<<<<<<<
 *   >>>>>>>>>>> 后置处理: 代理对象执行结束[method:echo]<<<<<<<<<<<<<
 *   [Echo]:CGLIb 字节码提升
 */
```

## 总结

1. JDK 动态代理、CGLIB、Spring AOP 和 AspectJ 关系?
    - Spring AOP和 AspectJ 是两种实现 AOP 的框架
    - Spring AOP采用的是动态代理,它有两种底层技术实现:
      - JDK 动态代理 (默认有接口的目标类使用jdk动态代理)
      - CGLIB (没有接口或有接口的目标类使用)
    - **Spring AOP 仅仅是使用 AspectJ 提供的库对注解进行解析和匹配, 从而"实现" 与 AspectJ 相同的注解, 但是 AOP 运行时依然是纯粹的 Spring AOP,不依赖于 AspectJ 的 编译器和织入器**
    - AspectJ 采用的是静态代理(有单独的编译器)

2. Spring Aop 和 AspectJ Aop 存在哪些区别?
    - AspectJ 是 Aop 完整的实现,而 Spring Aop 则是部分实现
    - Spring Aop 比 AspectJ 使用简单
    - Spring Aop 整合了 AspectJ 注解以及 IOC 容器
    - Spring Aop 仅支持基于代理模式的 Aop
    - Spring Aop 仅支持方法级别的 PointCuts
3. CGLIB 和 JDK 动态代理的区别?
    - CGLIB 利用 `ASM` 框架,**对代理对象类生成的 Class 文件加载进来,通过修改其字节码生成子类来处理**
    - JDK 动态代理 利用拦截器和反射机制生成一个代理接口的实现类,在调用具体方法前调用 **InvokeHandler** 来处理
