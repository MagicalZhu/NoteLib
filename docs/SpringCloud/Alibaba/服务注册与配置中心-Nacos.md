---
id: Nacos
title: 服务注册与配置中心-Nacos
---

## 1. Nacos

### 1.1 Nacos 概述

- <font color='red'>什么是Nacos?</font>

  - 用于 `发现、配置和管理微服务`  , 可以`快速实现动态服务发现、服务配置、服务元数据及流量管理`
  - <mark>Nacos = Eureka + Config + Bus</mark>
  

### 1.2 Nacos 环境搭建（单机版）

- <font color='red'>Nacos的配置文件</font> 

  - config/application.properties
  - [更多系统配置指南查看官网配置](https://nacos.io/zh-cn/docs/system-configurations.html)

- <font color='red'>操作步骤</font>

  1. [Github 下载 jar包](https://github.com/alibaba/nacos/releases)
  2. <font color='red'>启动Nacos服务</font> 

      ```shell
        startup.sh -m standalone
      ```

  3. 进入Nacos 管控台界面
      - http://ip:8848/nacos/index.html
      - 默认用户名密码都是: *Nacos*


## 2. Nacos 的基本使用【 注册中心 】

### 2.1 Nacos 服务注册

> <font color='red'>Nacos 注册服务中心对比</font>, <strong>Nacos支持AP和CP模式的切换</strong>

![](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201213210130705.png)


-  <font color='red'>操作步骤 ?</font>

1. 引入 Nacos 的GAV 坐标 `spring-cloud-starter-alibaba-nacos-discovery`
2. 添加启动服务发现的注解 `@EnableDiscoveryClient`
3. application.yml 中对nacos 进行配置
    - `spring.application.name`
      - 配置微服务名称
    - `spring.cloud.nacos.discovery.server-addr`
        -  配置 Nacos 注册中心的地址 ( ip+端口 )
    -  `spring.cloud.nacos.discovery.namespace`
        -  服务所在的命名空间，默认的是public

**①、引入Nacos服务发现的依赖**

```xml
<dependency>
  <groupId>com.alibaba.cloud</groupId>
  <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```



**②、修改配置文件application.yml,对nacos.discovery 参数进行配置**

```yml
server:
  port: 8005
spring:
  application:
    name: cloud-provider-payment-nacos-8005
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
        service: cloud-provider-payment-nacos
        namespace: public
        ip: localhost

```

**③、通过DiscoveryClient 查看注册到注册中心所有的服务信息**

```java
@RestController
public class DiscoveryClientController {
    private static final Logger log = LoggerFactory.getLogger(DiscoveryClientController.class);

    @Autowired
    private DiscoveryClient discoveryClient;


    @GetMapping("/getServices")
    public List<ServiceInstance> getServices(){
        List<String> services = discoveryClient.getServices();
        List<ServiceInstance> instances = new ArrayList<>();
        for (String serviceName : services) {
            instances.addAll(discoveryClient.getInstances(serviceName));
        }
        return instances;
    }
}

/*
  [
      {
          "host": "localhost",
          "instanceId": null,
          "metadata": {
              "nacos.cluster": "DEFAULT",
              "nacos.healthy": "true",
              "nacos.instanceId": "localhost#8005#DEFAULT#DEFAULT_GROUP@@cloud-provider-payment-nacos-8005",
              "nacos.weight": "1.0",
              "preserved.register.source": "SPRING_CLOUD"
          },
          "port": 8005,
          "scheme": null,
          "secure": false,
          "serviceId": "cloud-provider-payment-nacos-8005",
          "uri": "http://localhost:8005"
      }
  ]
*/
```



**④. 进入Nacos 提供的管理面板,查看注册中心已注册的服务**

![image-20201213192559390](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201213192559390.png)



### 2.2 消费服务注册与服务负载

> <font color='red'>Nacos集成了Ribbon,默认使用轮询的负载模式</font>

**①、 注册消服务后，配置RestTemplate,标注@LoadBalanced 注解**

```java
@Configuration
public class RibbonConfig {

    @Bean
    @LoadBalanced
    public RestTemplate restTemplate(){
        RestTemplate restTemplate = new RestTemplate();
        List<HttpMessageConverter<?>> list = restTemplate.getMessageConverters();
        // 替换 StringHttpMessageConverter 的默认字符集
        for (HttpMessageConverter<?> httpMessageConverter : list) {
            if(httpMessageConverter instanceof StringHttpMessageConverter) {
                ((StringHttpMessageConverter) httpMessageConverter).setDefaultCharset(StandardCharsets.UTF_8);
                break;
            }
        }
        return restTemplate;
    }
}
```



**②、 controller测试负载**

```java
@RestController
public class TestBalanced {
    @Resource
    private RestTemplate restTemplate;

    private static final String PAYMENT_SERVICE="cloud-provider-payment-nacos";

    @GetMapping("/order/getInfo")
    public String getInfo(){
        return restTemplate.getForObject(String.format("http://%s/getInfo", PAYMENT_SERVICE), String.class);
    }
}
```




## 3. Nacos 的服务配置中心

### 3.1 Nacos配置中心的配置规则（基于DataId /NameSpace）

- <font color='red'>Nacos如何寻找到配置文件? 【 DataId 完整配置 】</font>

  - `${spring.cloud.nacos.config.prefix}-${spring.profiles.active}.${file-extension}`
    - `spring.cloud.nacos.config.prefix`
      - 配置文件前缀,默认为 *`spring.application.name`*
    - `spring.profiles.active`
      - 指定profile 
      - **${spring.profiles.active}** 当通过配置文件来指定时必须放在 bootstrap.yml 文件中
        - 在实际开发中，一般通过 `-Dspring.profiles.active=<profile>`的方式指定配置
    - `file-extension`
      - 配置文件拓展名，目前只支持 `properties` 和 `yaml` 类型
- Nacos配置中心也支持 namespace 的配置，因为不同的命名空间下，可以存在相同的 Group 或 Data ID 的配置
  - 默认使用 ***public*** 这个命名空间
  -  `${spring.cloud.nacos.config.namespace}` 指定命名空间，<font color='red'>一定要放在 bootstrap.yml中!!</font>

#### 3.1.1 Nacos作为配置中心-基础配置 【 基于DataId + namespace 】

- <font color='red'>操作步骤</font>

  1. 在服务中引入 Nacos配置中心和服务注册的依赖 `nacos-config`，`nacos-discovery`
  2. 为服务添加 application.yml 与 bootstrap.yml
  3. 修改 `bootstrap.yml`的配置信息
     - `spring.cloud.nacos.config.namespace`
       - 命名空间
     - `spring.cloud.nacos.config.prefix`
       - 配置文件前缀
       - 默认是 **${Spring.application.name}**
     - `spring.profiles.active`
       - 使用哪个环境
     - `spring.cloud.nacos.config.file-extension`
       - 配置文件的后缀
     - `spring.cloud.nacos.config.server-addr`
       - 配置中心的地址
     - `spring.cloud.nacos.discovery.server-addr`
       - 注册中心地址
     - `spring.cloud.nacos.discovery.namespace`
       - 命名空间
  4. 在需要刷新配置信息的类上标注 `@RefreshScope`,Nacos可以实现动态刷新服务配置信息
     - 在提交更新的配置文件后,会调用刷新的api

**①、引入依赖**
```xml
<dependency>
  <groupId>com.alibaba.cloud</groupId>
  <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
<dependency>
  <groupId>com.alibaba.cloud</groupId>
  <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
```



**③、在Nacos界面的配置管理界面，新加配置**

![image-20201214100238226](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201214100238226.png)



**④、 修改服务的bootstrap.yml**

```yml
spring:
  application:
    name: cloud-nacos-client
  cloud:
    nacos:
      config:
        namespace: ad9448c4-6809-4511-9cb5-7724ec0bce3d
        prefix: cloud-nacos-client-3357
        file-extension: yaml
        server-addr: 127.0.0.1:8848
      discovery:
        server-addr: 127.0.0.1:8848
        namespace: ad9448c4-6809-4511-9cb5-7724ec0bce3d
  profiles:
    active: dev
management:
  endpoints:
    web:
      exposure:
        include: '*'
```



**⑤、 在业务服务上标注自动刷新的注解**

```java
@RestController
@RefreshScope
public class TestController {

    @Value("${config.version}")
    private Integer version;

    @Value("${config.msg}")
    private String msg;

    @RequestMapping("/get")
    public String get() {
        return String.format("msg:%s,version:%s",msg,version);
    }
}
```



#### 3.1.2 Nacos作为配置中心-分类配置

> 问题：在实际开发中，通常会有多个环境 (开发、测试、生产)，如何保证不同的环境启动服务时可以正确的读取到Nacos上的配置文件呢？

- <font color='red'>解决方案？</font>

  1. <mark>DataID方案</mark>

     - 指定${spring.profile.active} 、配置文件的DataId来使不同环境下读取不同的配置
     - 比如: 默认空间+默认分组+新建dev和test两个DataID
  2. <mark>Group方案</mark>

     - 通过Group实现环境区分
  3. <mark>Namespace方案</mark>

     - 通过Namespace实现环境区分




## 4. Nacos 服务发现的领域模型

### 4.1 领域模型概述

- 领域模型分为: **数据模型、服务领域模型、配置领域模型**
- <font color='red'>领域模型概述</font>

  - 可以通过 namespace 构建多个环境 -> 开发、测试、生产等等
  - 通过Group 可以将多个服务Service划分为同一个组
  - Service 就是微服务，一个Service 可以 中可以包含多个Cluster集群（多个Instance服务实例）

- <font color='red'>领域模型的几个概念?</font>

  - `NameSpace`
    -  用于进行租户粒度的配置实现隔离,不同的命名空间下，可以存在相同的Group 或 DataID 的配置
    -  Namespace 的常用场景之一是不同环境的配置的区分隔离，例如开发测试环境和生产环境的资源（如配置、服务）隔离等。
    -  默认 <font color='red'>public</font>
  - `Group`
    - 不同服务可以分到同一个组
    -  默认 <font color='red'>DEFAULT_GROUP</font>
  - `Service`
    - 注册到Nacos中的服务
  - `Instance`
    - 服务中的服务实例
    - 提供一个或多个服务的具有可访问网络地址（IP:Port）的进程
  - `Cluster`
    - 同一个服务下的所有实例组成一个默认集群
    - 对指定的微服务的一个虚拟划分,默认 <font color='red'>DEFAULT</font>

![image-20201214202929160](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201214202929160.png)




#### 4.1.1 数据领域模型

- Nacos 数据模型Key 由三元组唯一确定
  - Namespace默认是空串，公共命名空间（public）
  - Group 分组默认是 DEFAULT_GROUP
  - Cluster 等同于多个Service

![](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201214203344952.png)

#### 4.1.2 服务领域模型

![](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201214200230990.png)



#### 4.1.3 配置领域模型

![image-20201214200305144](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201214200305144.png)

### 4.2 创建开发使用的NameSpace

- <font color='red'>操作步骤</font>

  - 在 Nacos 的管理面板上创建一个命名空间  , 会得到一个<font color='red'>命名空间ID (UUID)</font>
  - 修改配置文件的 <font color='red'>spring.cloud.nacos.discovery.namespace</font>

**①. Nacos 管理面板创建一个命名空间**

![](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201213194620607.png)



**②. 在服务的 application.yml 中配置namespace**

```yml
server:
  port: 8005
spring:
  application:
    name: cloud-provider-payment-nacos-8005
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
        service: cloud-provider-payment-nacos
        namespace: ad9448c4-6809-4511-9cb5-7724ec0bce3d
        ip: localhost

```

**③. 进入Nacos 提供的管理面板,dev命名空间中注册的服务**

![image-20201213200122669](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201213200122669.png)



## 4.2 Nacos 元数据（Meta-Data）

- <font color='red'>什么是 元数据 ?</font>

  - Nacos数据（如配置和服务）描述信息
    - 如服务版本、权重、容灾策略、负载均衡策略、鉴权配置、各种自定义标签 (label)
  - 从作用范围来看，分为
    - <font color='red'>服务级别的元数据</font>
    - <font color='red'>`集群的元数据 `</font>
    - <font color='red'>`实例的元数据 `</font>
- <font color='red'>元数据的作用</font>

  - 提供微服务的描述信息
  - 实现 "版本控制"
    - 允许多个版本的微服务之间进行相互调用 , 但是 V1 版本 的微服务A 只能调用 V1 版本的 微服务B ( 实现<font color='blue'>灰度发布</font> )
- <font color='red'>如何设置微服务的元数据 ?</font>

  - 控制台设置
  - `配置文件指定`
    - `spring.cloud.nacos.discovery.metadata`  : 是一个Map<String,String>




## 5. Nacos 集群 与持久化

### 5.2 Nacos 持久化

- <mark>Nacos默认使用derby 嵌入式数据库</mark>
- <font color='red'>如何将数据库切换到Mysql？</font>

  1. 执行 Nacos conf目录下的 nacos-mysql.sql
  2. 修改 Nacos conf目录下面的 `application.properties`
     - `spring.datasource.platform=mysql`
     - `db.num=xxx`
     - `db.url.0=jdbcurl`
     - `db.user=xxx`
     - `db.password`
  3. 启动nacos

```properties
spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://172.24.70.217:3306/cloud001?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
db.user=root
db.password=123
```

  

### 5.2 Nacos 的集群架构模式

![](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201215154214394.png)



#### 5.2.1 Nginx+Nacos+Mysql 构建持久化的Nacos集群

- <font color='red'>操作步骤？</font>

  1. 安装Mysql/MariaDB
     - <font color='green'>导入初始化脚本</font>: 将Nacos conf目录下面的 <code>nacos-mysql.sql</code> 文件导入到Mysql
  2. 配置Nacos
     - <font color='green'>修改 application.properties</font> : 配置Nacos conf目录下面的 <code>application.properties</code> 文件，配置数据库连接
     - <font color='red'>添加 cluster.conf</font>: 在 Nacos conf目录下新加 <code>cluster.conf</code>，配置格式如下

       ```conf
       Nacos节点1的ip:Nacos服务端口
       Nacos节点2的ip:Nacos服务端口
       Nacos节点3的ip:Nacos服务端口
       ....
       Nacos节点N的ip:Nacos服务端口
       ```

  3. 修改Nginx配置文件的负载均衡

     ```conf
     upstrream xxx{
         server Nacos节点1的ip:Nacos服务端口
         server Nacos节点2的ip:Nacos服务端口
         server Nacos节点3的ip:Nacos服务端口
         ....
         server Nacos节点N的ip:Nacos服务端口
     }
     server {
       listen 80;
       server_name  localhost;
       location / {
         proxy_pass http://xxxx;
       }
     }
     ```
     
     
     
  4. Spring Cloud Alibaba连接Nacos集群

      - <font color='red'>`spring.cloud.nacos.discovery.server-addr= nginx绑定域名:端口`</font> 

**①、 配置Nacos 的application.properties **

```properties
server.servlet.contextPath=/nacos
server.port=8848
spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC
db.user=root
db.password=123
```

**②、 配置Nacos 的cluster.conf **

```conf
172.24.159.32:8848
172.24.82.63:8848
172.24.95.56:8848
```

**③、 配置Nginx 的多服务器负载 **

```conf
server {
        listen       8088;
        server_name  localhost;
        location / {
            proxy_pass http://nacos;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

upstream nacos {
    server 172.24.159.32:8848;
    server 172.24.82.63:8848;
    server 172.24.95.56:8848;
}
```



**④、 通过Nginx代理访问Nacos服务 **

![image-20201216134235260](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%20Nacos/image-20201216134235260.png)



**⑤、 查看集群状态 **

- <font color='red'>Nacos 通过 Raft协议选举出Nacos集群的LEADER、FOLLOWER</font>

![image-20201219154713163](../image/10.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-Nacos/image-20201219154713163.png)



**⑥、 Nacos客户端访问集群 **

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
```







