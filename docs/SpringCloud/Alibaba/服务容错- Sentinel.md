---
id: Sentinel
title: 服务容错-Sentinel
---

## 1. Sentinel

### 1.1 Sentinel概述

- Sentinel是<mark>分布式系统的流量防卫兵</mark>, 以流量为切入点，从<mark>流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性</mark>
- <font color='red'><strong>常见的容错方案</strong></font> 

  - `超时`
  - `限流`
  - `仓壁模式`  
    - 一般可以通过 将一个服务放在线程池中 , 通过线程池将多个服务进行隔离
  - `断路器模式`
- Sentinel可以处理哪些问题?
  - 服务雪崩
  - 服务降级
  - 服务熔断
  - 服务限流	
- <font color='red'>Sentinel 具有以下特征</font>

  - <mark>丰富的应用场景</mark>
- 比如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、集群流量控制、实时熔断下游不可用应用等
  - <mark>完备的实时监控</mark>
  
  - 可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况。
  
- <mark>完善的 SPI 扩展点</mark>
  
  - 提供简单易用、完善的 SPI 扩展接口，可以通过实现扩展接口来快速地定制逻辑。例如定制规则管理、适配动态数据源等
- <font color='red'>Sentinel分为两部分</font>

  - 核心库（Java 客户端）
    - 不依赖任何框架/库，能够运行于所有 Java 运行时环境，同时对 Dubbo / Spring Cloud 等框架也有较好的支持。
  - 控制台（Dashboard）
    - 基于 Spring Boot 开发，打包后可以直接运行，不需要额外的 Tomcat 等应用容器。
- <mark>注意：Sentinel 控制台目前仅支持单机部署。</mark>

### 1.2 Sentinel 基本环境搭建

#### 1.2.1 控制台搭建

- <font color='red'>Sentinel 控制台有哪些功能？</font>

  1. `查看机器列表以及健康情况`
     - 收集 Sentinel 客户端发送的心跳包，用于判断机器是否在线
  2. `监控 (单机和集群聚合)`
     - 通过 Sentinel 客户端暴露的监控api，定期拉取并且聚合应用监控信息，最终可以实现秒级的实时监控。
  3. `规则管理和推送`
     - 统一管理推送规则
  4. `鉴权`

- <font color='red'>操作步骤？</font>

  1. [下载控制台](https://github.com/alibaba/Sentinel/releases)
  2. 启动控制台
     - `-Dserver.port=8080`
       - 用于指定控制台端口为 `8080`
     - `-Dcsp.sentinel.dashboard.server=consoleIp:port` 
       -  指定控制台地址和端口
     - `-Dproject.name=xxx`
       - 指定项目名称
     - `-Dcsp.sentinel.log.dir`
       - 指定日志输出目录
     - `-Dcsp.sentinel.api.port=xxxx`
       - 指定客户端监控 api 的端口,<mark>默认是 8719</mark>


```bash
java -Dserver.port=8080 -Dcsp.sentinel.dashboard.server=localhost:8080 -Dproject.name=sentinel-dashboard -jar  
```

访问控制台 http://localhost:8080, 用户名密码默认是 `sentinel`

  **①、 启动Sentinel控制台**

  ```shell
java -Dserver.port=8088 -Dcsp.sentinel.dashboard.server=localhost:8088 -Dproject.name=sentinel-dashboard -Dcsp.sentinel.log.dir=/Users/yoey/WorkSpace/Software/SpringCloud/sentinel/logs -jar sentinel-dashboard-1.8.0.jar
  ```

  **②、 访问Sentinel控制台**

  ![image-20201219122039928](../image/11.%E6%9C%8D%E5%8A%A1%E7%86%94%E6%96%AD%E9%99%90%E6%B5%81-%20Sentinel/image-20201219122039928.png)

  



#### 1.2.2 Sentinel客户端(Nacos集群+Sentinel)

- <font color='red'>操作步骤</font>

  1. 引入 Nacos 服务发现与配置中心的依赖
  2. 引入Sentinel的依赖 `spring-cloud-starter-alibaba-sentinel`
  3. 修改配置文件，配置 Sentinel信息,并且暴露actuator 的监控端点
     - `spring.cloud.sentinel.transport.dashboard`
       - 指定Sentinel 控制台的地址
     - `spring.cloud.sentinel.transport.port`
       - 客户端监控 API 的端口

**①、 引入依赖**

```xml
<!--Sentinel-->
<dependency>
  <groupId>com.alibaba.cloud</groupId>
  <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
</dependency>
<!--Nacos 服务发现-->
<dependency>
  <groupId>com.alibaba.cloud</groupId>
  <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
<!--Nacos配置中心-->
<dependency>
  <groupId>com.alibaba.cloud</groupId>
  <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>

```

**②、 修改配置文件**

```yml
spring:
  application:
    name: cloud-provider-payment-sentinel-8007
  profiles:
    active: dev
  cloud:
    nacos:
      discovery:
        ip: 172.24.230.126
        service: cloud-provider-payment-sentinel
        # 使用nginx 搭建nacos 集群
        server-addr: 172.24.95.56:8088
        # 使用自定义的namespace id
        namespace: dev-coustom-20201219
      config:
        namespace: dev-coustom-20201219
        server-addr: 172.24.95.56:8088
        prefix: cloud-provider-payment-sentinel-8007
        file-extension: yaml
# 配置 Sentinel
    sentinel:
      transport:
        dashboard: localhost:8088
        port: 8719
# 暴露actuator端点
management:
  endpoints:
    web:
      exposure:
        include: '*'
```



**③、 请求服务，查看Sentinel 控制台**

![image-20201219154400132](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201219154400132.png)



### 1.3 Sentinel工作流程 [责任链模式]

- 在 Sentinel 里面，所有的资源都对应一个资源名称(<font color='red'>resourceName</font> )，每次资源调用都会创建一个 Entry 对象
  - Entry 可以通过对主流框架的适配自动创建，也可以通过注解的方式或调用 SphU API 显式创建
  - Entry 创建的时候，同时也会创建一系列功能插槽（slot chain），这些插槽有不同的职责，例如:
    - `NodeSelectorSlot`
      - <font color='purple'>建立树状结构(调用链路)</font>
      - 收集资源的路径，并将这些资源的调用路径，以树状结构存储起来，用于根据调用路径来限流降级；
    - `ClusterBuilderSlot`
      - <font color='purple'>根据资源保存统计簇点</font>
      - 存储资源的统计信息以及调用者信息，例如该资源的 RT, QPS, thread count 等等，这些信息将用作为多维度限流，降级的依据；
    - `StatisticSlot`
      - <font color='purple'>实时数据统计</font>
      - 记录、统计不同纬度的 runtime 指标监控信息；
    - `FlowSlot`
      - <font color='purple'>流量控制</font>
      - 则用于根据预设的限流规则以及前面 slot 统计的状态，来进行流量控制；
    - `DegradeSlot`
      - <font color='purple'>熔断降级</font>
      - 通过统计信息以及预设的规则，来做熔断降级；
    - `SystemSlot`
      - <font color='purple'>系统过载保护</font>
      - 通过系统的状态，例如 load1 等，来控制总的入口流量
    - `AuthoritySlot`
      - 根据配置的黑白名单和调用来源信息，来做黑白名单控制；

**总体的框架:**

![image-20201219161355142](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201219161355142.png)



- <mark>Sentinel 也支持自定义Slot 拓展</mark>

  - Sentinel 将 `ProcessorSlot` 作为 SPI 接口进行扩展，使得 Slot Chain 具备了扩展的能力。

![alt](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201220130706656.png)


### 1.4 Sentinel规则

- <mark>Sentinel 的所有规则都可以在内存态中动态地查询及修改，修改之后立即生效。同时 Sentinel 也提供相关 API，来定制自己的规则策略</mark>
- <font color='red'>常见的规则种类</font>

  - `流量控制`
  - `熔断降级`
  - `系统保护`
  - `来源访问控制`
  - `热点参数`




## 2. Sentinel规则-流控规则(FlowRule)

- <font color='red'>流量控制</font> 

    - <mark>通过<font color='red'>监控应用流量的 QPS 或并发线程数等指标</font>，当达到指定的阈值时对流量进行控制，以避免被瞬时的流量高峰冲垮，从而保障应用的高可用性</mark>
    - `FlowSlot` 会根据预设的规则(FlowRule)，结合 `NodeSelectorSlot`、`ClusterBuilderSlot`、`StatisticSlot` 统计出来的实时信息进行流量控制

![image-20201222193547149](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201222193547149.png)



### 2.0 限流规则说明

-  <font color='red'>同一个资源可以创建多条限流规则</font>

   - `FlowSlot` 会对该资源的所有限流规则依次遍历，直到有规则触发限流或者所有规则遍历完毕
-  **一条限流规则主要由下面几个因素组成，通过组合这些元素来实现不同的限流效果**：


| Field                                      | 说明                                                | 可选值                                                       | 默认值                                                  |
| ------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| <font color='red'>`resource`</font>          | 资源名，即限流规则的作用对象                        |                                                              | 请求路径PATH                                            |
| <font color='red'>`count`</font>             | 限流阈值                                            |                                                              |                                                         |
| <font color='red'>`grade`</font>             | 限流阈值类型 <mark>(QPS 或并发线程数)</mark>        | <font color='red'>`0`</font> : 并发线程模式   <font color='red'>`1`</font> : QPS模式 | QPS 模式                                                |
| <font color='red'>`limitApp`</font>          | 流量控制针对的调用来源                              |                                                              | 默认为 <font color='red'>`default`</font>，不区分调用来源 |
| <font color='red'>`strategy`</font>          | 限流模式  (<font color='red'>直接、链路、关联</font>) |                                                              | 根据资源本身（<font color='red'>直接</font>）             |
| <font color='red'>`controlBehavior`</font>   | QPS限流效果,不支持按调用关系限流                    | 直接拒绝、Warm Up、匀速排队                                  | 直接拒绝                                                |
| <font color='red'>`clusterMode`</font>       | 是否集群限流                                        |                                                              | 否                                                      |
| <font color='red'>`maxQueueingTimeMs`</font> | 最大排队等待时长                                    |                                                              |                                                         |

### 2.1 限流阈值统计方式

- 主要有两种阈值统计类型, <mark>其中线程数、QPS 值，都是由 <font color='red'>StatisticSlot</font>实时统计获取的</mark> 

- <font color='red'>统计并发线程数 -> FlowSlot.grade=0</font>

  - 采用JMeter 等压测工具进行测试
- <font color='red'>统计QPS -> FlowSlot.grade=1</font>

#### 2.1.1 基于并发线程数（服务端最多允许多少线程处理请求）

- <font color='red'>并发数控制用于保护业务线程池不被慢调用耗尽</font>

  - 比如应用所依赖的下游应用由于某种原因导致服务不稳定、响应延迟增加，对于调用者来说，意味着吞吐量下降和更多的线程数占用，极端情况下甚至导致线程池耗尽
- Sentinel 并发控制不负责创建和管理线程池，而是简单统计当前请求上下文的线程数目（正在执行的调用数目）
  - 如果超出阈值，新的请求会被立即拒绝，效果类似于信号量隔离
- <font color='red'>线程并发数控制通常在调用端进行配置</font> 

#### 2.1.2 基于QPS（每秒最多允许多少请求进入服务端处理）

- 当 QPS 超过指定的阈值的时候，则采取措施进行限流,<mark>主要有下面三种限流行为</mark>
  - `快速失败 (默认)`
  - `Warm Up -> 预热/冷启动`
  - `排队等待`

##### 2.1.2.1 限流效果-快速失败（默认）

- <font color='red'>RuleConstant.CONTROL_BEHAVIOR_DEFAULT</font> 
- 当QPS超过任意规则的阈值后，新的请求就会被立即拒绝，拒绝方式为抛出`FlowException`
- 源码: `com.alibaba.csp.sentinel.slots.block.flow.controller.DefaultController`

##### 2.1.2.2 限流效果-冷启动

- <font color='red'>RuleConstant.CONTROL_BEHAVIOR_WARM_UP</font>  
- 让通过的流量缓慢增加，在一定时间内逐渐增加到阈值上限，给冷系统一个预热的时间，避免冷系统被压垮
- <font color='red'>默认<code>冷加载因子</code>coldFactor为3，即请求QPS从threshold/3开始，经指定的预热时长逐渐升至设定的QPS阈值。</font> 
- 适用场景
  - 这个场景主要用于启动需要额外开销的场景，例如建立数据库连接等
- 源码: `com.alibaba.csp.sentinel.slots.block.flow.controller.WarmUpController`

###### 2.1.2.2.1 设置规则(控制台)

下图表示: 资源在前30s的QPS阈值为 20/3≈6,经过30s的系统预热后，QPS 阈值稳步的提升到 20

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201221095044809.png)



###### 2.1.2.2.2 设置规则(代码)

- <font color='red'>方法含义说明</font>

  1. `rule.setCount`
     - 预热完成后，请求所达到的最终阈值
  2. `rule.setWarmUpPeriodSec`
     - 冷系统预热所需时间

```java
/**
* 基于QPS 冷启动限流
*/
public void InitWarmUpQPSFlow(){
  List<FlowRule> rules = FlowRuleManager.getRules();
  if(CollectionUtil.isEmpty(rules)) {
    rules= Lists.newArrayList();
  }
  FlowRule rule = new FlowRule("/sentinelPayment/getInfo");
  rule.setClusterMode(false);
  // 阈值类型-> qps
  rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
  rule.setStrategy(RuleConstant.STRATEGY_DIRECT);

  // 限流效果->预热
  rule.setControlBehavior(RuleConstant.CONTROL_BEHAVIOR_WARM_UP);

  // 预热后每秒允许通过20个
  rule.setCount(20);

  // 设置需要5s 的预热时间
  rule.setWarmUpPeriodSec(30);

  rules.add(rule);
  FlowRuleManager.loadRules(rules);
}
```



##### 2.1.2.3 限流效果-排队等待

- 说明
  - <font color='red'>RuleConstant.CONTROL_BEHAVIOR_RATE_LIMITER</font> 
  - 让请求以均匀的速度通过，对应的是漏桶算法 -> 匀速排队模式暂时不支持 QPS > 1000 的场景
- <font color='red'>中心思想</font>

  - 以固定的间隔时间让请求通过，当请求到来的时候
    - 如果当前请求距离上个通过的请求通过的时间间隔不小于预设值，则让当前请求通过
    - 否则，计算当前请求的预期通过时间
      - 如果该请求的预期通过时间小于规则预设的最大排队时长时间，则该请求会等待直到预设时间到来通过（排队等待处理）
        - <mark><font color='red'>也就是将请求放在虚拟队列中！</font></mark>
      - 若预期的通过时间超出最大排队时长，则直接拒接这个请求
- 适用场景
  - 适合用于请求以突刺状来到，这个时候我们不希望一下子把所有的请求都通过，这样可能会把系统压垮；同时我们也期待系统以稳定的速度，逐步处理这些请求，以起到“削峰填谷”的效果，而不是拒绝所有请求

###### 2.1.2.3.1 设置规则(控制台)

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201221090343257.png)

###### 2.1.2.3.2 设置规则(代码)

- <font color='red'>方法含义说明</font>

  1. `rule.setCount`
     - 此时表示每一秒允许通过的请求数，超过的请求会放在虚拟队列中进行等待
     - 如果设置为10，那么每个请求平均间隔恒定为 `1000 / 10 = 100 ms`
  2. `rule.setMaxQueueingTimeMs`
     - 虚拟队列中请求允许的最大等待时间 -> 超时时间

```java
/**
* 基于QPS 排队等待限流
*/
public void InitRateLimiterQPSFlow(){
  List<FlowRule> rules = FlowRuleManager.getRules();
  if(CollectionUtil.isEmpty(rules)) {
    rules= Lists.newArrayList();
  }
  FlowRule rule = new FlowRule("/sentinelPayment/getInfo");
  rule.setClusterMode(false);
  // 阈值类型-> qps
  rule.setGrade(RuleConstant.FLOW_GRADE_QPS);

  // 每一秒匀速通过5个请求
  rule.setCount(5);

  // 限流模式 -> 直接
  rule.setStrategy(RuleConstant.STRATEGY_DIRECT);

  // 限流效果->匀速排队
  rule.setControlBehavior(RuleConstant.CONTROL_BEHAVIOR_RATE_LIMITER);
  // 每一个请求的最长长排队等待时间: 20s
  rule.setMaxQueueingTimeMs(20*1000);

  rules.add(rule);
  FlowRuleManager.loadRules(rules);
}

/*
	控制台输出 :可以看到请求以每1s通过5个的速率通过
	2020-12-21 09:10:42.028  WARN 1967 --- [nio-8007-exec-3] c.y.controller.SentinelTestController    : request pass -> getInfo
  2020-12-21 09:10:42.231  WARN 1967 --- [nio-8007-exec-4] c.y.controller.SentinelTestController    : request pass -> getInfo
  2020-12-21 09:10:42.429  WARN 1967 --- [nio-8007-exec-5] c.y.controller.SentinelTestController    : request pass -> getInfo
  2020-12-21 09:10:42.631  WARN 1967 --- [nio-8007-exec-6] c.y.controller.SentinelTestController    : request pass -> getInfo
  2020-12-21 09:10:42.825  WARN 1967 --- [nio-8007-exec-7] c.y.controller.SentinelTestController    : request pass -> getInfo
  2020-12-21 09:10:43.029  WARN 1967 --- [nio-8007-exec-8] c.y.controller.SentinelTestController    : request pass -> getInfo
  2020-12-21 09:10:43.431  WARN 1967 --- [nio-8007-exec-9] c.y.controller.SentinelTestController    : request pass -> getInfo
  2020-12-21 09:10:43.227  WARN 1967 --- [io-8007-exec-10] c.y.controller.SentinelTestController    : request pass -> getInfo
  2020-12-21 09:10:43.625  WARN 1967 --- [nio-8007-exec-1] c.y.controller.SentinelTestController    : request pass -> getInfo
  2020-12-21 09:10:43.829  WARN 1967 --- [nio-8007-exec-2] c.y.controller.SentinelTestController    : request pass -> getInfo
*/
```





### 2.2 限流模式

- <mark>适用基于QPS 和并发线程数的阈值类型</mark> 

#### 2.2.1 限流模式 - 直接 （限制资源本身）

- <font color='red'>RuleConstant.STRATEGY_DIRECT</font>
- 指定的资源到达限流阈值时，就对该资源进行限流

##### 2.2.1.1 设置规则(控制台)

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201220151904290.png)



##### 2.2.1.2 设置规则(代码)

- <font color='red'>操作步骤</font>

  - 通过 `FlowRuleManager.loadRules(List<FlowRule> rules)` 方法加载流控规则

```java
@Configuration
public class FlowConfig implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        List<FlowRule> rules = FlowRuleManager.getRules();
        // 指定资源名
        FlowRule rule = new FlowRule("/sentinelPayment/getInfo");
        rule.setClusterMode(false);
     
        // 限流阈值类型-> qps
        rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
			
      	// 限流阈值
        rule.setCount(1d);

        // 限流模式 -> 直接
        rule.setStrategy(RuleConstant.STRATEGY_DIRECT);

        // 限流行为->快速失败
        rule.setControlBehavior(RuleConstant.CONTROL_BEHAVIOR_DEFAULT);

        if(CollectionUtil.isEmpty(rules)) {
            rules= Lists.newArrayList();
        }
        rules.add(rule);
        FlowRuleManager.loadRules(rules);
    }
}
```





#### 2.2.2 限流模式 - 关联 (限制上游资源)

- <font color='red'>RuleConstant.STRATEGY_RELATE</font>

  - 资源A本身一般不会设置阈值
  - 当资源A的关联的资源B到达限流阈值时，就限流资源A

##### 2.2.2.1 设置规则(控制台)

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201220164747762.png)

##### 2.2.2.2 设置规则(代码)

```java
/**
* 基于QPS  关联限流
*/
public void InitRelateQPSFlow(){
  List<FlowRule> rules = FlowRuleManager.getRules();
  if(CollectionUtil.isEmpty(rules)) {
    rules= Lists.newArrayList();
  }
  /**
  * 资源A
  */
  FlowRule rule = new FlowRule("/sentinelPayment/getInfo");
  rule.setClusterMode(false);
  rule.setGrade(RuleConstant.FLOW_GRADE_QPS);

  // 限流模式 -> 关联
  rule.setStrategy(RuleConstant.STRATEGY_RELATE);
  rule.setControlBehavior(RuleConstant.CONTROL_BEHAVIOR_DEFAULT);
  rules.add(rule);

  /**
  * 资源B
  */
  FlowRule relateRule = new FlowRule("/sentinelPayment/getInfo2");
  rule.setClusterMode(false);
  rule.setCount(3);
  rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
  rule.setControlBehavior(RuleConstant.CONTROL_BEHAVIOR_DEFAULT);
  rules.add(rule);

  rule.setRefResource(relateRule.getResource());

  FlowRuleManager.loadRules(rules);
}
```



#### 2.2.3 限流模式 - 链路

- <font color='red'>RuleConstant.STRATEGY_CHAIN</font> 
- 只记录指定链路上的流量，如果到达阈值就限流


## 3.Sentinel规则-熔断降级(DegradeRule)

### 3.1 熔断降级说明

1. 除了流量控制之外，对调用链路中`不稳定的资源进行熔断降级`也是保障高可用的重要措施之一。
2. 一个服务通常会调用其他的服务，依赖的服务的稳定性无法保证如果依赖的服务请求响应时间变长，那么调用服务的方法的响应时间也会变长，<font color='red'>线程会堆积，最终可能耗尽业务自身的线程资源，服务变得不可用</font>
3. 微服务架构中有很多的服务组成，不同服务之间相互调用，组成复杂的调用链路。某个服务产生的问题在链路调用中会产生放大的效果。
4. 复杂链路上的某一环不稳定，就可能会层层级联，最终导致整个链路都不可用。因此需要对不稳定的**弱依赖服务调用**进行熔断降级，暂时切断不稳定调用，避免局部不稳定因素导致整体的雪崩。
5. <mark>熔断降级作为保护自身的手段，通常在客户端（调用端）进行配置。</mark>

### 3.2 熔断降级规则说明

<font color='red'>同一个资源可以同时有多个降级规则</font>

**规则重要属性**

| 字段                                        | 说明                                                         | 可选值                                | 默认值     |
| ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------- | ---------- |
| <font color='red'>`resource`</font>           | 资源名，即规则的作用对象                                     |                                       |            |
| <font color='red'>`grade`</font>              | 熔断策略，                                                   | 慢调用比例<br/>异常比例<br/>异常数策略 | 慢调用比例 |
| <font color='red'>`count`</font>              | 慢调用比例模式下为慢调用最大响应时长RT（超出该值计为慢调用）<br/>异常比例/异常数模式下为对应的阈值 |                                       |            |
| <font color='red'>`timeWindow`</font>         | 时间窗口期，熔断时长（单位为 s）                             |                                       |            |
| <font color='red'>`minRequestAmount`</font>   | 熔断触发的最小请求数，<font color='blue'>请求数小于该值时即使异常比率超出阈值也不会熔断</font>  [1.7.0 引入] |                                       | 5          |
| <font color='red'>`statIntervalMs`</font>     | 统计时长（单位为 ms）             [1.8.0 引入]               |                                       | 1000ms     |
| <font color='red'>`slowRatioThreshold`</font> | 慢调用比例阈值，<font color='green'>仅慢调用比例模式有效</font> [1.8.0 引入] |                                       |            |



#### 3.2.1 熔断策略

##### 3.2.1.1 慢调用比例 - SLOW_REQUEST_RATIO

- <font color='red'>从Sentient 1.8 版本开始，支持断路器的半开状态</font> 
- 选择以慢调用比例作为阈值，<mark>需要设置允许的慢调用 RT（即最大的响应时间)</mark>
  - <font color='red'>请求的响应时间大于该值则统计为慢调用</font>
- 当单位统计时长内请求数大于最小请求数，并且慢调用的比例大于阈值，则接下来的熔断时长内的请求会自动被熔断
  - 经过熔断时长后熔断器会进入探测恢复半开状态（HALF-OPEN 状态）
    - 若接下来的一个请求响应时间小于设置的慢调用 RT 则结束熔断
    - 若大于设置的慢调用 RT 则会再次被熔断

###### 3.2.1.1.1规则设置（控制台）

- 在默认的统计时间范围（1s）内，如果请求数大于5，且慢调用的请求(Rt时间大于10ms)占总请求数的 50%，就对资源进行熔断，熔断时间为10s

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201226134134343.png)



###### 3.2.1.1.2 规则设置（代码）

- 统计10s内的请求数据,如果请求数超过5个,每个请求 RT>10ms,且这样的慢调用请求占总请求的30%,就进行服务熔断,熔断时间为10s

```java
/**
 * 慢调用比例
 *  统计10s内的请求数据,如果请求数超过5个,每个请求 RT>10ms,且这样的慢调用请求占总请求的30%,就进行服务熔断,熔断时间为10s
 */
public void initSlowRequestRatio(){
    List<DegradeRule> degradeRules = DegradeRuleManager.getRules();
    DegradeRule rule = new DegradeRule();

  // 绑定率资源名
    rule.setResource("/sentinelPayment/getSlowInfo");

    // 设置熔断策略 RT
    rule.setGrade(RuleConstant.DEGRADE_GRADE_RT);

    // 设置统计时长 10s
    rule.setStatIntervalMs(10*1000);

    // 设置统计时间范围内需要最少通过请求数  5
    rule.setMinRequestAmount(5);

    // 设置每个请求最大响应时间RT 10ms
    rule.setCount(10);

    // 设置慢调用的阈值比例 0.3
    rule.setSlowRatioThreshold(0.3);

    // 设置熔断时长
    rule.setTimeWindow(10*1000);

    degradeRules.add(rule);
    DegradeRuleManager.loadRules(degradeRules);
}
```



##### 3.2.1.2 异常比例 - ERROR_RATIO

- 当单位统计时长内请求总数大于设置的最小请求数目，并且异常的比例大于阈值，则接下来的熔断时长内请求会自动被熔断

###### 3.2.1.2.1 规则设置（控制台）

- 在默认的统计时间范围（1s）内，如果请求数大于5，且异常请求数占总请求数的50%，就接下来1000s内的请求会自动被熔断

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201226144904768.png)

###### 3.2.1.2.2 规则设置（代码）

```java
public void initExceptionRatio(){
  List<DegradeRule> degradeRules = DegradeRuleManager.getRules();
  DegradeRule rule = new DegradeRule();

  // 绑定率资源名
  rule.setResource("/sentinelPayment/getError");

  // 设置熔断策略 RT
  rule.setGrade(RuleConstant.DEGRADE_GRADE_EXCEPTION_RATIO);

  // 设置异常比例
  rule.setCount(0.5);

  // 设置熔断时长
  rule.setTimeWindow(10);

  degradeRules.add(rule);
  DegradeRuleManager.loadRules(degradeRules);
}

```



##### 3.2.1.3 异常数 - ERROR_COUNT

- 当单位统计时长内的异常数目超过阈值之后会自动进行熔断

##### 3.2.1.3.1 规则设置（控制台）

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201226145132006.png)

###### 3.2.1.3.2 规则设置（代码）

```java
public void initExceptionCount(){
  List<DegradeRule> degradeRules = DegradeRuleManager.getRules();
  DegradeRule rule = new DegradeRule();

  // 绑定率资源名
  rule.setResource("/sentinelPayment/getError");

  // 设置熔断策略 RT
  rule.setGrade(RuleConstant.DEGRADE_GRADE_EXCEPTION_COUNT);

  // 设置异常数
  rule.setCount(5);

  // 设置熔断时长
  rule.setTimeWindow(10);

  degradeRules.add(rule);
  DegradeRuleManager.loadRules(degradeRules);
}
```




## 4. 定义资源 - @SentinelResource

### 4.1 @SentinelResource 说明

>  类似于Hystrix 的@HystrixCommand 注解

- <font color='red'><code>@SentinelResource</code> 用于定义资源，并提供可选的异常处理和 fallback 配置项</font>
- `@SentinelResource` 注解包含以下属性
  - `value`
    - 资源名称 [必需项]
  - `entryType`
    - entry 类型 [可选项]
    - 默认为 `EntryType.OUT`
  - `blockHandler / blockHandlerClass`
    - `blockHandler` 对应处理 `BlockException` 的函数名称 [可选项]
      - 函数是 `public`，返回类型需要与原方法一致，参数类型需要和原方法相匹配并且最后加一个额外的参数，类型为 `BlockException` 
        - 格式:  `public 业务方法返回值类型 方法名(业务方法形参列表,BlockException exception)`
      - <mark><strong>blockHandler 函数默认需要和原方法在同一个类中</strong></mark> 
    - 若希望使用其他类的函数，则可以指定 `blockHandlerClass` 为对应的类的 `Class` 对象,<font color='red'>注意对应的函数必需为 static 函数，否则无法解析</font> 

  - `fallback  /  fallbackClass`
    - fallback 函数名称,用于在抛出异常的时候提供 fallback 处理逻辑 [可选项]
    - **fallback 函数可以针对所有类型的异常** (除了 `exceptionsToIgnore` 里面排除掉的异常类型)进行处理
    - **fallback 函数签名和位置要求**
      - 返回值类型必须与原函数返回值类型一致
      - 方法参数列表需要和原函数一致，或者可以额外多一个 `Throwable` 类型的参数用于接收对应的异常。
      - fallback 函数默认需要和原方法在同一个类中
        - 若希望使用其他类的函数，可以指定 `fallbackClass` 为对应的类的 `Class` 对象，注意对应的函数必需为 static 函数，否则无法解析

  - `defaultFallback`
    - 默认的 fallback 函数名称 [可选项 从1.6开始支持]
    - 通常用于通用的 fallback 逻辑（即可以用于很多服务或方法）
    - <mark>从 1.8 版本开始，支持类级别配置</mark> 
  - `exceptionsToIgnore`
    - 用于指定哪些异常被排除掉，不会计入异常统计中，也不会进入 fallback 逻辑中，而是会原样抛出。






## 5. 热点参数规则(ParamFlowRule)

### 5.1 热点参数

- <mark>热点即经常访问的数据</mark>。很多时候我们希望统计某个热点数据中访问频次最高的 Top K 数据，并对其访问进行限制。比如：

  - 商品 ID 为热点，统计一段时间内最常购买的商品 ID 并进行限制
  - 用户 ID 为热点，针对一段时间内频繁访问的用户 ID 进行限制

- <font color='red'>热点参数限流会统计传入参数中的热点参数，并根据配置的限流阈值与模式，对包含热点参数的资源调用进行限流</font>

  - 热点参数限流可以看做是一种特殊的流量控制，仅对包含热点参数的资源调用生效
- Sentinel利用<font color='red'> `LRU策略 `</font> 统计最近最常访问的热点参数，结合令牌桶算法来进行参数级别的流控

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201226151214076.png)



### 5.2 热点参数规则属性说明

- 热点参数规则（`ParamFlowRule`）类似于流量控制规则（`FlowRule`）：

| 属性                                       | 说明                                                         | 默认值   |
| ------------------------------------------ | ------------------------------------------------------------ | -------- |
| <font color='red'>`resource`</font>          | 资源名                                                       |          |
| <font color='red'>`count`</font>             | 限流阈值                                                     |          |
| <font color='red'>`grade`</font>             | 限流模式                                                     | QPS      |
| <font color='red'>`durationInSec`</font>     | 统计窗口时间长度（单位为秒）  [1.6.0 版本开始支持]           | 1s       |
| <font color='red'>`controlBehavior`</font>   | 流控效果（支持快速失败和匀速排队模式）  [1.6.0 版本开始支持] | 快速失败 |
| <font color='red'>`maxQueueingTimeMs`</font> | 最大排队等待时长（仅在匀速排队模式生效  [1.6.0 版本开始支持] | 0ms      |
| <font color='red'>`paramIdx`</font>          | 热点参数的索引，对应 `SphU.entry(xxx, args)` 中的参数索引位置 |          |
| <font color='red'>`paramFlowItemList`</font> | 参数例外项，可以针对指定的参数值单独设置限流阈值，不受前面 `count` 阈值的限制<br/><mark>仅支持基本类型和字符串类型</mark> |          |
| <font color='red'>`clusterMode`</font>       | 是否是集群参数流控规则                                       | false    |
| <font color='red'>`clusterConfig`</font>     | 集群流控相关配置                                             |          |



### 5.3 热点参数规则设置（代码）

- <font color='red'>操作步骤</font>

  1. 通过 `@SentinelResource` 注解定义资源，同时指定失败处理函数
  2. 新建热点参数规则，对资源的热点参数进行限制 -> 请求中包含了热点参数，就对该参数进行限制

**①、 通过 @SentinelResource 定义资源**

```java
@GetMapping("/getHotKey")
@SentinelResource(value = "/sentinelPayment/getHotKey",
                  blockHandler = "getHotKeyHandler")
public String  getHotKey(@RequestParam(value = "user1",required = false) String user1,
                         @RequestParam(value = "user2",required = false) String user2) {
  return info;
}
public String getHotKeyHandler(String user1, String user2, BlockException exception){
  return  String.format("自定义异常信息,异常类型:%s",exception.getClass().getName());
}
```



**②， 设置一个热点参数规则**

如果QPS 中热点参数的数量超过3，就对该请求进行限制

```java
public void initHotKeyRule(){
  List<ParamFlowRule> rules = ParamFlowRuleManager.getRules();
  ParamFlowRule rule = new ParamFlowRule("/sentinelPayment/getHotKey");

  // 热点参数规则仅支持 QPS
  rule.setGrade(RuleConstant.FLOW_GRADE_QPS);

  // 热点参数规则的限流效果 -> 快速失败
  rule.setControlBehavior(RuleConstant.CONTROL_BEHAVIOR_DEFAULT);

  //  热点参数规则的阈值
  rule.setCount(3);

  // 热点参数的索引 -> 即业务方法形参中所在的索引位置
  rule.setParamIdx(0);
  rules.add(rule);
  ParamFlowRuleManager.loadRules(rules);
}
```



**③、 界面测试**

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201226162312521.png)



### 5.3.1 为不同的热点参数值设置不同的阈值

<mark>对热点参数不同的取值进行控制</mark>

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201226163750215.png)


---

## 6. 系统规则（SystemRule）

- 系统规则从总体的应用入口流量进行控制，结合应用的 Load、CPU 使用率、总体平均 RT、入口 QPS 和并发线程数等几个维度的监控指标
  - 通过自适应的流控策略，让系统的入口流量和系统的负载达到一个平衡，让系统尽可能跑在最大吞吐量的同时保证系统整体的稳定性

### 6.1 系统规则属性说明

| Field                                      | 说明                                   | 默认值      |
| ------------------------------------------ | -------------------------------------- | ----------- |
| <font color='red'>`highestSystemLoad`</font> | `load1` 触发值，用于触发自适应控制阶段 | -1 (不生效) |
| <font color='red'>`avgRt`</font>             | 所有入口流量的平均响应时间             | -1 (不生效) |
| <font color='red'>`maxThread`</font>         | 入口流量的最大并发数                   | -1 (不生效) |
| <font color='red'>`qps`</font>               | 所有入口资源的 QPS                     | -1 (不生效) |
| <font color='red'>`highestCpuUsage`</font>   | 当前系统的 CPU 使用率（0.0-1.0）       | -1 (不生效  |



#### 6.1.1 规则设置（控制台）

![](../image/11.%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99-%20Sentinel/image-20201226165111707.png)





































