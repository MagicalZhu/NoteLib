---
id: DockerFile
title: DockerFile
---

> Docker可以通过读取 Dockerfile 中的指令自动构建镜像,Dockerfile是由一系列**命令和参数构成的脚本文件**,它包含了用户可以在命令行上调用的所有命令,以组装一个镜像
>
> 关于 Docker 的最佳实践,可参看[这里](https://blog.huakucha.top/posts/docker/dockerfile-best-practices)

## 概述

Dockerfile定义了进程需要的一切东西,包括:

1. 执行代码或者是文件
2. 环境变量
3. 依赖包
4. 运行时环境
5. 动态链接库
6. 操作系统的发行版
7. 服务进程
8. 内核进程(当应用进程需要和系统服务和内核进程打交道,这时需要考虑如何设计namespace的权限控制)
9. …

- 基本使用步骤
  1. 编写 `Dockerfile` 文件
  2. 通过 `docker build` 命令执行,得到一个自定义的镜像

- 基础概念
  1. **指令按照从上到下,顺序执行**
  2. **# 表示注释**
  3. **每条指令都会创建一个新的镜像层,并对镜像进行提交**

- **构建缓存**
  - 在镜像的构建过程中,Docker 会遍历 Dockerfile 文件中的指令,然后按顺序执行
  - 在执行每条指令之前,Docker 都会在缓存中查找是否已经存在可重用的镜像,如果有就使用现存的镜像,不再重复创建
  - 详细参看[这里](/docs/工具/Docker/Manuals/docker-build/build-cache)

### 格式

- Dockerfile 的基本格式如下:

  ```dockerfile
  # Comment
  INSTRUCTION arguments
  ```

- `INSTRUCTION`表示一个 Docker 指令,它**不区分大小写**,但是习惯上它们是大写的,以便更容易地将它们与参数区分开来。

- Docker 按顺序运行 Dockerfile 中的指令, **一个 Dockerfile 必须以FROM指令开始**
  - 当然例外的是, `FROM 指令` 可能位于 **[解析器指令](DockerFile#解析器指令)、注释和全局范围的[ARG](DockerFile#arg)** 之后
- `FROM 指令`指定了你要构建的父镜像,**FROM 前面只能有一个或多个ARG指令,这些指令声明了 Dockerfile 中 FROM 行使用的参数**

Docker 将以 `#` 开头的行视为注释,除非该行是一个有效的[解析器指令](DockerFile#解析器指令)(一行中其他地方的#标记被视为一个参数)。下面是一个注释的示例:

```dockerfile
# Comment
RUN echo 'we are running some # of cool things'
```

在执行Dockerfile指令之前,注释行会被删除,这意味着下面例子中的注释不会被执行echo命令的shell处理,下面例子中的两个RUN指令是等效的:

```dockerfile
RUN echo hello \
# comment
world

# 等价于
RUN echo hello \
world
```

### 解析器指令

目前支持两种解析器指令:

1. `syntax`
2. `escape`

解析器指令有下面的特性:

1. 解析器指令是以`# directive=value`的形式写成一种特殊的注释
2. 它是可选的,并且会影响 Dockerfile 中后续行的处理方式
3. **解析器指令不会在构建过程中增加层数,也不会被显示为构建步骤**
4. 一个指令只能使用一次
5. 解析器指令不分大小写, 但依照惯例是它们都是**小写**的
6. 解析器指令中不支持换行符

由于上述的特性,下面的例子都是无效的:

- 不允许换行符

  ```docker
  # direc \
  tive=value
  ```

- 同一个指令出现了两次

  ```docker
  # directive=value1
  # directive=value2
  FROM ImageName
  ```

- 出现在 构建指令 后面,被认为是注释

  ```docker
  FROM ImageName
  # directive=value
  ```

- 出现在 注释 后面,被认为是注释

  ```docker
  # About my dockerfile
  # directive=value
  FROM ImageName
  ```

- 使用了未知指令由于没有被识别而被当作注释,且由于已知指令由于出现在非解析器指令的注释之后而被视为注释

  ```docker
  # unknowndirective=value
  # knowndirective=value
  ```

:::caution 注意点
**一旦一个注释、空行或指令被处理,Docker 不再寻找解析器指令**。相反,它将任何格式化为解析器指令的东西视为注释,并且不试图验证它是否可能是解析器指令。因此,**所有的解析器指令必须在 Dockerfile 的最顶部**
:::

### 替换环境变量

- 环境变量(用 `ENV` 指令声明)也可以在某些指令中作为变量使用, 一般通过`$variable_name或${variable_name}` 来使用。
- 如果需要使用 `$` 字符,可以通过转义符 `\` 来处理。比如 \\$foo 或者 \\${foo} 会被解析为字符串: $foo 与 ${foo}

下面是一个示例:

```docker
FROM busybox
ENV FOO=/bar
WORKDIR ${FOO}      # 等价于 WORKDIR /bar
ADD . $FOO          # 等价于 ADD . /bar
COPY \$FOO /quux    # 这里通过\ 进行转义了, 等价于 COPY $FOO /quux
```

环境变量支持在下面的几个指令中使用:

1. `ADD`
2. `COPY`
3. `ENV`
4. `EXPOSE`
5. `FROM`
6. `LABEL`
7. `STOPSIGNAL`
8. `USER`
9. `VOLUME`
10. `WORKDIR`
11. `ONBUILD` (当与上述支持的指令之一一起使用时)

## FROM(指定基础镜像)

> 使用 FROM 指令指定基础镜像

FROM 支持下面 3 种指令格式:

1. `FROM <image镜像> [AS 阶段名称]`
2. `FROM <image镜像> [:tag标签] [AS 阶段名称]`
3. `FROM <image镜像> [@DIGEST摘要] [AS 阶段名称]`

**FROM 指令用于初始化一个新的构建阶段,并为后续指令设置基础镜像**, 所以一个有效的 Dockerfile **必须以 FROM 指令开始**

1. `ARG 指令` 是 Dockerfile 中唯一可以在FROM之前的指令, 参见了解ARG和FROM的交互方式
2. `FROM 指令` 可以在 Dockerfile 中出现多次, 以便 **创建多个镜像或将一个构建阶段作为另一个的依赖**。
    - 在每个新的 FROM 指令之前,只需记下提交所输出的最后一个镜像ID
    - 每条 FROM 指令都会清除之前指令所创建的任何状态
3. 在 FROM 指令后面可以加入 `AS 阶段名称` 来给新的构建阶段一个名称,这个名称可以在随后的 `FROM` 和`COPY --from=阶段名称`指令中使用,以指代在这个阶段建立的镜像
4. `tag 标签或 DIGEST 摘要` 是可选的。如果省略了其中任何一个,构建的时候默认会使用最新的标签。如果找不到指定的标签值,就会返回一个错误

## RUN(执行命令)

> `RUN 指令` 将**在当前镜像之上的新层中执行任何命令并提交结果**, 提交后的镜像将被用于 Dockerfile 的下一个步骤

RUN 支持下面 2 种指令格式:

1. `RUN <Command命令>`
    - shell 的形式, 命令是用 shell 的方式去执行的
      - Linux中默认使用 **/bin/sh -c**
      - Windows中默认使用 **cmd /s /c**
2. `RUN ["可执行语句", "参数1", "参数2", ...]`
    - exec 的形式,类似于函数调用。可以避免出现 shell 字符串混杂的问题,并且可以使用 不包含指定 shell 可执行文件的基础镜像来运行命令
    - 这种方式必须使用双引号 **"**,  而不能使用单引号 **'**,因为该方式会被转换成一个JSON 数组

<mark>shell 形式 vs exec 形式</mark>

- shell 形式
  - **替换默认的shell : 除了在 RUN 指令中指定 shell, 也可以通过 [SHELL 指令](DockerFile#shell)来替换**
  - 使用反斜杠 **\\** 可以将一条 RUN指令语句分割成多行

    ```docker
    # 用 /bin/bash 替换默认的 /bin/sh
    RUN /bin/bash -c 'source $HOME/.bashrc && \
                    echo $HOME'
    # 上述的RUn 指令等价于下面的
    RUN /bin/bash -c 'source $HOME/.bashrc && echo $HOME'
    ```

- exec 形式
  - **替换默认的shell : 可以在数组的第一位中指定使用shell**

    ```docker
    # 使用 /bin/bash 替换默认的 /bin/sh
    RUN ["/bin/bash", "-c", "echo hello"]
    ```
  
  - 与 shell 形式不同,exec 形式不使用 shell 进行处理, 也就是不会使用常规的 shell 进行处理,如果想进行 shell 处理,那么*要么使用shell形式,要么直接执行一个 shell*

      ```docker
      # exec 形式下无法进行 $HOME 替换
      RUN [ "echo", "$HOME" ]
      # 执行一个shell, 可以进行 $HOME 替换
      RUN [ "sh", "-c", "echo $HOME" ]
      ```

:::caution RUN 与 构建缓存

1. Dockerfile 中每一个指令都会建立一层,RUN 也不例外。每一个 RUN 的行为,都是新建立一层,在其上执行这些命令,执行结束后,commit 这一层的修改,构成新的镜像。
    - 所以通常**用 && 将各个 RUN 指令后所需的命令串联起来, 避免层数过多, 导致镜像文件增大**
2. **RUN 指令的缓存在下次构建时不会自动失效**。比如 RUN apt-get dist-upgrade -y 这样的指令的缓存会在下次构建时被重新使用
3. RUN 指令的缓存可以通过使用 `--no-cache` 标志来失效,例如 docker build --no-cache
4. [ADD 指令](DockerFile#add) 和 [COPY 指令](DockerFile#copy) 会导致 RUN 指令的缓存失效

:::

### RUN --mount

> BuildKit 是下一代的镜像构建组件,在 [GitHub](https://github.com/moby/buildkit) 开源,使用 BuildKit 之后,可以使用下面几个新的 Dockerfile 指令来加快镜像构建,比如这里的 *RUN --mount*

利用 `RUN --mount` 可以创建文件系统的挂载,以便在构建的时候可以访问。这可以用来:

1. 创建绑定挂载到主机文件系统或其他构建阶段
2. 访问 构建秘钥(secrets) 或ssh-agent套接字
3. 使用持久的软件包管理缓存来加快构建速度

- 基本格式
  - `RUN --mount=[type=<type>] [,option1=value1,option2=value2, ...]`
- 挂载类型[type]

  | Type                 | Description |
  -----------------------|-------------
  **bind [default]**    | 绑定-挂载上下文目录(默认只读)
  **cache**             | 挂载一个临时目录来缓存编译器和包管理器的目录  
  **secret**            | 允许构建容器访问私钥之类的安全文件,且此类文件不会出现在构建好的镜像中,避免密钥外泄
  **ssh**               | 允许构建容器通过SSH代理访问SSH密钥,并支持密码短语

#### 缓存挂载

通过 `RUN --mount=type=cache` 可以**挂载一个临时目录来缓存 *编译器和包管理器* 的目录**

- 基本参数

  | Option       | Description |
  ---------------|-------------
  id            | 唯一标识,用于区分缓存
  from          | 缓存来源 (构建阶段), 不填写时为空文件夹
  source        | from来源中的文件夹路径,默认是 from 的根目录
  target        | 缓存的挂载目标文件夹
  sharing       | 设置当一个缓存被多次使用时的表现,因为 BuildKit 支持并行构建,当多个步骤使用同一缓存时(同一 id)发生冲突
  readonly,ro   | 只读,缓存文件夹不能被写入
  mode          | 设置缓存目录的权限,默认`755`
  uid           | 设置缓存目录的用户ID, 默认是`0`
  gid           | 设置组ID,默认是`0`

- 关于 sharing 参数,有如下的可选值:
  - `shared`: 多个步骤可以同时读写 [**默认**]
  - `private`: 当多个步骤使用同一缓存时,每个步骤使用不同的缓存
  - `locked` : 当一个步骤完成释放缓存后,后一个步骤才能继续使用该缓存
- 说明
  - 由于 RUN 指令是容器构建阶段生效运行,所以**缓存目录仅仅在构建阶段可以访问**
  - 由于不同的RUN指令会创建新的层,所以**只有同一个RUN指令中,才可以访问挂载过来的缓存目录**
  - **缓存目录可能会被 Docker 的 GC 清理**
  - cache类型的挂载方式是为了提高构建效率,但是如果多个镜像进行构建的时候,需要大量覆盖缓存中的文件,那么使用这种方式并不明智,这种缓存**主要用于多次构建都没有重大修改的情况**

比如一个前端工程需要用到 npm

```docker
# 阶段1
FROM node:alpine as builder
WORKDIR /app
COPY package.json /app/
RUN npm i --registry=https://registry.npm.taobao.org \
        && rm -rf ~/.npm
COPY src /app/src
RUN npm run build

# 阶段2
FROM nginx:alpine
COPY --from=builder /app/dist /app/dist
```

这里使用了**多阶段构建**, 构建的镜像中只包含了目标文件夹 dist,但仍然存在一些问题,当 package.json 文件变动时,RUN npm i && rm -rf ~/.npm 这一层会重新执行,变更多次后,生成了大量的中间层镜像。

为解决这个问题,我们用**缓存挂载**的方式,在镜像构建时把 *node_modules* 文件夹挂载上去,在构建完成后,这个 node_modules 文件夹会自动卸载,实际的镜像中并不包含 node_modules 这个文件夹,这样就省去了每次获取依赖的时间,大大增加了镜像构建效率,同时也避免了生成了大量的中间层镜像

下面用 缓存挂载 的方式重新编写 Dockerfile:

1. 第一个 RUN 指令执行后,id 为 `cached_node_modules` 的缓存文件夹挂载到了 `/app/node_modules` 文件夹中, **多次执行也不会产生多个中间层镜像**。

2. 第二个 RUN 指令执行时, 需要用到 node_modules 文件夹,node_modules 已经挂载,命令也可以正确执行。

3. 第三个 RUN 指令将上一构建阶段产生的文件复制到指定位置
    - from 指明缓存的来源,
    - builder 表示缓存来源于构建的第一阶段
    - source 指明缓存来源的文件夹。

```docker
# syntax = docker/dockerfile:experimental
FROM node:alpine as builder
WORKDIR /app
COPY package.json /app/
# 这里将
RUN --mount=type=cache,target=/app/node_modules,id=cached_node_modules,sharing=locked \
    --mount=type=cache,target=/root/.npm,id=npm_cache \
    npm i --registry=https://registry.npm.taobao.org

COPY src /app/src

RUN --mount=type=cache,target=/app/node_modules,id=cached_node_modules,sharing=locked \
    npm run build

FROM nginx:alpine


# 为了更直观的说明 from 和 source 指令,这里使用 RUN 指令 代替 COPY 指令
# COPY --from=builder /app/dist /app/dist
RUN --mount=type=cache,target=/tmp/dist,from=builder,source=/app/dist \
    mkdir -p /app/dist && cp -r /tmp/dist/* /app/dist
```

#### 绑定挂载

> 与数据卷的 bind mounts 不是一个概念

通过 `RUN --mount=type=bind` 可以**将一个镜像(或上一构建阶段)的文件挂载到指定位置**

1. 由于 RUN指令 是容器构建阶段生效运行,所以**挂载的目录也仅仅在构建阶段可以访问**
2. 由于不同的 RUN 指令会创建新的层,所以**只有同一个RUN指令中,才可以访问挂载的目录**
3. **仅支持挂载上下文或者引用的镜像中存在的目录,不能挂载宿主机上的目录,或者上下文以及镜像中不存在的目录（就算挂载上也没有任何意义）**

- 基本参数

  | Option       | Description |
  ---------------|-------------
  from          | 挂载的来源,可以是`构建阶段名称`或者`镜像名称`,默认是**镜像构建上下文**
  source        | from来源中的文件夹路径,默认是 from 的根目录
  target        | 文件/目录的挂载目标文件夹
  readwrite,rw  | 允许在挂载上写入,写入的数据将被丢弃

基本示例

```docker
RUN --mount=type=bind,from=php:alpine, \
        source=/usr/local/bin/docker-php-entrypoint, \
        target=/docker-php-entrypoint \
    cat /docker-php-entrypoint
```

:::info 使用示例

:::

## CMD(容器启动命令)

> CMD 指令的主要目的是: **为一个正在执行的容器提供默认值。这些默认值可以包括一个可执行文件,也可以省略可执行文件,在这种情况下,你必须同时指定一个 ENTRYPOINT 指令**
>
> 因为 Docker 不是虚拟机,容器就是进程。既然是进程,那么在启动容器的时候,需要指定所运行的程序及参数, 所以简单来说, CMD指令就是 **用于指定默认的容器主进程的启动命令的**

CMD 指令的格式和 RUN 相似,也是两种格式：

1. exec 格式
    - `CMD ["可执行文件", "参数1", "参数2"...]` : **首选形式**
    - `CMD ["参数1", "参数2"...]` : 作为 [ENTRYPOINT 指令](DockerFile#entrypoint)的**默认参数**
2. shell 格式
    - `CMD <命令>`

- 在 `Dockerfile` 中只能有一个 `CMD 指令`,如果有多个 CMD 指令的话,那么**只有最后一个 CMD 指令会生效**

- 在运行容器的时候可以指定新的命令来替代镜像设置中的这个默认命令, 比如,ubuntu 镜像默认的 CMD 是 /bin/bash
  - 如果直接执行 docker run -it ubuntu 的话,会直接进入 bash
  - 如果指定运行别的命令,如 docker run -it ubuntu cat /etc/os-release, 这就是用 cat /etc/os-release 命令替换了默认的 /bin/bash 命令了,输出了系统版本信息

- 我们看到容器的 [docker run](Docker入门/Docker容器命令#命令)后面就跟着可选参数 Command

- 如果使用 shell 格式的话,实际的命令会被包装为 sh -c 的参数的形式进行执行

  ```docker
  CMD echo $HOME

  # 实际被变更为:
  CMD [ "sh", "-c", "echo $HOME" ]
  ```

:::danger 容器中应用在前台执行和后台执行的问题

Docker 不是虚拟机,容器中的应用都应该以前台执行,而不是像虚拟机、物理机里面那样,用 systemd 去启动后台服务,容器内没有后台服务的概念。比如启动 Nginx,常见错误的写法就是:

```docker
CMD service nginx start
```

运行完发现发现容器执行后就立即退出了, 甚至在容器内去使用 systemctl 命令结果却发现根本执行不了。**这就是因为容器和虚拟机不是一个概念,对于容器而言,其启动程序就是容器应用进程,容器就是为了主进程而存在的,主进程退出,容器就失去了存在的意义,从而退出**,其它辅助进程不是它需要关心的东西。

而使用 `service nginx start` 命令,则是希望以后台守护进程形式启动 nginx 服务。但是 `CMD service nginx start` 会被理解为 `CMD [ "sh", "-c", "service nginx start"]`,因此**主进程实际上是 sh**。那么当 *service nginx start* 命令结束后,sh 作为主进程退出了,然后容器也就退出了。

正确的做法是直接执行 nginx 可执行文件,并且要求以前台形式运行。比如：

```docker
CMD ["nginx", "-g", "daemon off;"]
```

:::

## LABEL(容器标签)

> `LABEL 指令`用来给镜像**以键值对的形式添加一些元数据(metadata)**, 比如一些标签来申明镜像的作者、文档地址...

- LABEL 指令的格式
  - `LABEL key1=value1 key2=value2 ...`
  - **如果 value 值中包含空格,需要使用引号"""或者 使用反斜线"\\" 进行转义**

  ```docker
  LABEL "com.example.vendor"="ACME Incorporated"
  LABEL com.example.label-with-value="foo"
  LABEL version="1.0"
  LABEL description="This text illustrates \
  that label-values can span multiple lines."
  ```

## EXPOSE(声明端口)

> `EXPOSE 指令`用于 **通知Docker, 容器在运行时监听指定的网络端口**,但是实际上并**没有发布端口**,只是一个声明,在容器运行时并不会因为这个声明应用就会开启这个端口的服务
>
> 要在运行容器时实际发布端口,可以在docker run 上使用 -p | -P 参数

- EXPOSE 指令的格式
  - `EXPOSE port1[/protocol协议] port2[/protocol协议] ...`
  - **protocol协议** : 可以指定端口监听的是 `TCP` 还是 `UDP`。如果没有指定,**默认是 TCP**

  ```docker
  #默认情况下使用 TCP 协议,但是也可以修改为 UDP
  EXPOSE 80/udp

  # 或者声明两个
  EXPOSE 80/tcp
  EXPOSE 80/udp
  ```

在 Dockerfile 中使用 EXPOSE 声明的优点

1. 帮助镜像使用者理解这个镜像服务的守护端口,以方便配置映射
2. 在运行时使用**随机端口映射**时,也就是 `docker run -P` 时,会自动随机映射 EXPOSE 的端口

:::caution 说明
EXPOSE 和 docker run  -p <宿主端口>:<容器端口> 不是一个概念

- `-p` : 是映射宿主端口和容器端口,也就是**将容器的对应端口服务公开给外界访问**
- `EXPOSE` : **仅仅是声明容器打算使用什么端口而已,并不会自动在宿主进行端口映射**
:::

## ENV(设置环境变量)

> `ENV 指令`用于**设置环境变量**

- 指令格式
  - `ENV key1=value1 key2=value2 ...`
  - **如果 value 值中包含空格,需要使用引号"""或者 使用反斜线"\\" 进行转义**

  ```docker
  ENV MY_NAME="John Doe"
  ENV MY_DOG=Rex\ The\ Dog
  ENV MY_CAT=fluffy
  # 同时设置多个 ENV
  ENV MY_NAME="John Doe" MY_DOG=Rex\ The\ Dog \
      MY_CAT=fluffy
  ```

:::tip 说明

1. 环境变量值可以 **在构建阶段中的后续指令中出使用,也可以容器运行的时候使用**
    - 可以在创建容器的时候,加上 `--env` 参数来修改环境变量
    - 创建完容器后,可以使用 `docker inspect` 看到这些环境变量

2. **一个构建阶段会继承其父阶段或任何祖先阶段用ENV设置的环境变量**

3. ENV 环境变量的持续存在可能会引起意想不到的副作用
    - 例如 设置 ENV DEBIAN_FRONTEND=noninteractive 会改变 apt-get 的行为
:::

如果一个环境变量只是在构建过程中需要,而不是在最终镜像中需要,可以考虑为一个单一的命令设置一个值:

```docker
RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y ...
```

除此之外,还可以使用[ARG 指令](DockerFile#arg), 它不会保存在最终镜像中:

```docker
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y ...
```

## COPY(复制文件)

> 通过 `COPY` 指令可以将 **构建上下文目录**中的 *<源路径>* 复制到**新的一层镜像内的** *<目标路径>* 位置

**COPY 支持下面的两种格式:**

1. `COPY [--chown=<user>:<group>] <源路径1> <源路径2> ... <目标路径>`
2. `COPY [--chown=<user>:<group>] ["<源路径1>","<源路径2>",... , "<目标路径>"]`

COPY 指令的两种形式和 [RUN](DockerFile#run执行命令) 和 [CMD](DockerFile#cmd容器启动命令) 类似,一种是类 shell 的形式,一种是类函数调用的形式。**对于路径中包含空格的,需要使用 COPY 指令第二种格式**

COPY指令的说明:

- **支持传入多个源路径**, 也就是支持将多个文件/目录拷贝到指定的路径
- **源路径支持通配符**, 但是通配符规则要满足 Go 的 [filepath.Match 规则](https://golang.org/pkg/path/filepath/#Match)

  ```docker
  # * 表示匹配多个字符, 这里指匹配构建上下文环境下以 hom 开头的文件/目录
  COPY hom* /mydir/

  # ? 表示匹配单个字符
  COPY hom?.txt /mydir/
  ```

- **目标路径可以是 容器内的绝对领,也可以是相对于工作目录(用[WORKDIR](DockerFile#workdir)来指定)的相对路径**

- **目标路径不需要事先创建，如果目录不存在会在复制文件前创建缺**

- COPY指令还可以加上 `--chown=<user>:<group>` 参数**改变文件的所属用户及所属组**

  ```docker
  COPY --chown=55:mygroup files* /mydir/
  COPY --chown=bin files* /mydir/
  COPY --chown=1 files* /mydir/
  COPY --chown=10:11 files* /mydir/
  ```

## ADD

## ENTRYPOINT

## WORKDIR

## ARG

## SHELL
