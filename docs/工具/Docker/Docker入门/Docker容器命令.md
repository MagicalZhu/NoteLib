---
id: Docker容器命令
title: Docker容器命令
---

## 创建并启动容器

> 通过 `docker run` 可以**根据本地的镜像创建并且启动一个新的容器**

1. docker run 命令**首先在指定的镜像上创建一个可写的容器层,然后用指定的命令启动它**。也就是说,docker run 相当于[Docker Engine API](Docker基础#docker简介)中的几个步骤:
   - 首先: `/containers/create`
   - 其次: `/containers/(id)/start`

2. 使用 `docker start` 可以重新启动一个已经停止的容器,并保持其之前的所有变化不变。参见`docker ps -a`来查看所有容器的列表

### 命令

- 命令格式

  ```shell
  ➜ docker run [OPTIONS] IMAGE镜像 [COMMAND命令] [ARGS...]

  # 别名
  ➜ docker container run
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand) | Default | Description      |
  | --------------- | ------- | ---------------- |
  | `--name`        |         | 为容器指定一个名称          |
  | `--publish, -p`        |         | 将容器的端口映射到主机的端口指定端口上    |
  | `--publish-all, -P`    |         | 将所有暴露的端口映射为随机端口            |
  | `--detach, -d`         |         | 在**后台运行容器**并打印容器ID            |
  | `--interactive, -i`    |         | 以交互模式运行容器,通常与 -t 一起使用      |
  | `--tty, -t`            |         | 为容器重新分配一个伪输入终端,通常与 -i 一起使用   |
  | `--env, -e`            |         | 设置环境变量        |
  | `--env-file`           |         | 从指定文件中读取环境变量        |
  | `--expose`             |         | 暴露容器的一个端口或一系列的端口        |
  | `--hostname , -h`      |         | 设置容器主机名称        |
  | `--ip`                 |         | 设置 IPv4 地址        |
  | `--ip6`                |         | 设置 IPv6 地址        |
  | `--network,--net`      |         | 将一个容器连接到一个网络上   |
  | `--add-host`           |         | 添加一个自定义的主机到IP的映射(host:ip)  |
  | `--dns`                |         | 设置自定义的DNS服务器  |
  | `--rm`                 |         | 容器退出时自动删除该容器           |
  | `--stop-timeout`       |         | 停止一个容器的超时(秒)        |
  | `--sysctl`             |         | Sysctl选项        |
  | `--mount`              |         | 给容器附加一个文件系统挂载           |
  | `--volume , -v`        |         | 绑定挂载一个卷        |
  | `--volumes-from`       |         | 从指定的容器挂载卷        |
  | `--read-only`          |         | 将容器的根文件系统挂载为只读        |
  | `-workdir , -w`        |         | 设置容器内的工作目录        |

### 常见可选参数详解

1. `--publish | -p`, 用于端口映射,有下面几种格式
    - **主机IP:主机端口A:容器端口B** :  主机的A端口映射到容器的B端口
    - **主机端口A:容器端口B** :  主机的A端口映射到容器的B端口
    - **主机IP::容器端口A** :  主机的A端口映射到容器的A端口
    - **容器端口A** :  主机的A端口映射到容器的A端口

2. `--network | --net`, 用于将一个容器连接到一个网络上,有下面的可选值
    - **bridge** : 默认选项,表示连接到默认的网桥
    - **host** : 和宿主机共享网络
    - **none** : 不配置网络
    - **container:容器名称或者ID** : 新建的容器使用已有容器的网络配置

### name & port

> 指定容器的名称,并且进行端口映射。这里通过运行创建一个 TOMCAT 容器进行测试

```shell
# 拉取 tomcat 的镜像
➜ docker pull tomcat
Using default tag: latest
latest: Pulling from library/tomcat
10ac4908093d: Pull complete 
6df15e605e38: Pull complete 
2db012dd504c: Pull complete 
8fa912900627: Pull complete 
f8fe20946c04: Pull complete 
8093daf900d2: Pull complete 
49c22a329043: Pull complete 
Digest: sha256:9e2525bd79c5386c9bd9ba56fe450263d7af605e41db9fead44e1969379b588a
Status: Downloaded newer image for tomcat:latest
docker.io/library/tomcat:latest

# 查看本地的镜像
➜ docker images
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
tomcat        latest    2362f0cdbf14   2 weeks ago     474MB

# 运行创建一个tomcat,同时自定义容器名 tomcat1,并且将主机的 8888 端口映射到容器的 TCP 8080 端口
➜ docker run --name tomcat1 -p 8888:8080 -d tomcat
0f20b6c897700a6b070d273205fad70e6c28d6372281abe30fab3dcfe6022631

# 下面直接访问主机IP的8888端口即可
# 列出运行的容器
➜ docker ps
CONTAINER ID   IMAGE     COMMAND             CREATED         STATUS         PORTS                                       NAMES
0f20b6c89770   tomcat    "catalina.sh run"   8 minutes ago   Up 8 minutes   0.0.0.0:8888->8080/tcp, :::8888->8080/tcp   tomcat1
```

### expose

> 该命令用于暴露容器一个或者多个端口,**但是并不会将容器的端口映射到主机端口上**

```shell
# 该命令暴露了容器的80端口,但没有将该端口映射到主机上
➜ docker run --expose 80 ubuntu bash
```

### 交互式容器

- 利用 `-i -t` 组合参数(也可以合并为`-it`),可以分配一个伪终端
- 如何退出伪终端?
  - `exit`: 退出当前终端并返回客户端, **容器中没有其他进程运行的话这个容器会停止**
  - `Ctrl+Q+P (WINDOW)`: 不退出当前终端直接返回客户端

```shell
# 通过 debian 进行运行创建一个交互式容器,且容器的名称为 test
➜ docker run --name test -i -t debian

# 容器创建启动完成后,会进入交互式界面
root@3a933c21af5a:/# exit
exit

# 查看运行着的容器,由于 test 容器退出后,容器中没有其他进程,容器就退出了
➜ docker ps
CONTAINER ID   IMAGE     COMMAND             CREATED          STATUS          PORTS                                       NAMES
0f20b6c89770   tomcat    "catalina.sh run"   27 minutes ago   Up 27 minutes   0.0.0.0:8888->8080/tcp, :::8888->8080/tcp   tomcat1
```

### addHost

> 可以通过使用**一个或多个** --add-host 标志,将其他 host 添加到容器的 /etc/hosts 文件中

```shell
# 这为一个名为docker的 host 添加了一个静态地址
➜ docker run --add-host=docker:93.184.216.34 --rm -it debian

# 指定ping 命令
➜ ping docker
PING docker (93.184.216.34): 56 data bytes
64 bytes from 93.184.216.34: seq=0 ttl=37 time=93.052 ms
64 bytes from 93.184.216.34: seq=1 ttl=37 time=92.467 ms
64 bytes from 93.184.216.34: seq=2 ttl=37 time=92.252 ms
^C
--- docker ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 92.209/92.495/93.052 ms
```

## 列出容器

> 通过 `docker ps` 可以**列出本地的容器**

### 命令

- 命令格式

  ```shell
  docker ps [OPTIONS]
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand)        | Default | Description      |
  | ---------------------- | ------- | ---------------- |
  | `--all , -a`           |         | 显示所有容器（包括停止退出的容器, 默认只显示正在运行的容器）  |
  | `--filter , -f`        |         | 根据提供的条件过滤输出  |
  | `--last , -n`          |    -1   | 显示最后创建的n个容器（包括所有状态）  |
  | `--last , -l`          |         | 显示最新创建的容器（包括所有状态）     |
  | `--no-trunc`           |         | 显示完整的容器信息     |
  | `--quiet , -q`         |         | 只显示容器的ID     |
  | `--size , -s`          |         | 显示容器所有文件的大小     |

- 输出结果包含了七列, 含义如下:
  - `CONTAINER_ID` : 表示容器ID。
  - `IMAGE` : 表示镜像名称。
  - `COMMAND` : 表示启动容器时运行的命令。
  - `CREATED` : 表示容器的创建时间。
  - `STATUS` : 表示容器运行的状态。Up表示运行中,Exited表示已停止。
  - `PORTS` : 表示容器对外的端口号。
  - `NAMES` : 表示容器名称。该名称默认由Docker自动生成,也可使用 --name选项自行指定。

### 基本使用

```shell
# 列出所有的容器,包括停止的容器
➜ docker ps -a

CONTAINER ID   IMAGE         COMMAND             CREATED             STATUS                         PORTS                                       NAMES
1527f9349c90   tomcat        "catalina.sh run"   55 minutes ago      Exited (130) 54 minutes ago                                                testTomcat
3a933c21af5a   debian        "bash"              About an hour ago   Exited (0) About an hour ago                                               test
0f20b6c89770   tomcat        "catalina.sh run"   About an hour ago   Up About an hour               0.0.0.0:8888->8080/tcp, :::8888->8080/tcp   tomcat1
```

### 过滤

> `--filter | -f` 条件的格式是一个**key=value**, 如果有多个的条件,则传递多个filter(比如--filter "foo=bar" --filter "bif=baz")

现在支持的过滤条件有(常见的):

| Filter                | Description                          |
|:----------------------|:-------------------------------------|
| `id`                  |  容器的ID                              |
| `name`                |  容器的名称                            |
| `label`               |  一个任意的字符串,代表一个key或一个key-value. 格式为 `key` or `key=value`     |
| `exited`              |  代表容器退出代码的整数.需要与 `--all` 参数一起使用            |
| `status`              |  可选值为: `created 、restarting、running、removing、paused、exited、dead`    |
| `before, since`       |  过滤在一个给定的容器ID或名称 **之前或之后** 创建的容器                |
| `volume`              |  过滤**运行中**的容器,这些容器已经挂载了一个给定的卷或绑定挂载            |
| `network`             |  过滤连接到特定网络的正在运行的容器。          |
| `publish, expose`     |  过滤发布或暴露特定端口的容器. 格式为: `port[/proto协议]` or `startport-endport/[<proto协议>]` |
| `health`              |  根据容器的健康检查状态来过滤,可选值: `starting、healthy、unhealthy、none`   |
| `is-task`             |  过滤作为一个服务的 "任务 "的容器. 可选值:`true、false`)  |

## 启动停止的容器

> 通过 `docker start` 可以**启动一个或多个停止的容器,并且执行容器的CMD**。与 *docker run* 不同的是,docker start 不会创建容器

### 命令

- 命令格式
  
  ```shell
  docker start [OPTIONS] CONTAINER1 CONTAINER2...
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand)        | Default | Description      |
  | ---------------------- | ------- | ---------------- |
  | `--attach , -a`        |         | 附加STDOUT/STDERR和转发信号        |

### 基本使用

> 启动 tomcat 的容器

```shell
# 查看本地的所有 exited 的容器
➜ docker ps --filter "status=exited"
CONTAINER ID   IMAGE         COMMAND             CREATED        STATUS                        PORTS     NAMES
1527f9349c90   tomcat        "catalina.sh run"   24 hours ago   Exited (130) 24 hours ago               testTomcat
3a933c21af5a   debian        "bash"              24 hours ago   Exited (0) 19 seconds ago               test
0f20b6c89770   tomcat        "catalina.sh run"   24 hours ago   Exited (143) 30 minutes ago             tomcat1
d22630cd9754   hello-world   "/hello"            28 hours ago   Exited (0) 28 hours ago                 elastic_almeida

# 启动容器名为 tomcat1 的容器
➜ docker start tomcat1
tomcat1

# 查看本地的所有 running 的容器
➜ docker ps --filter "status=running"
CONTAINER ID   IMAGE     COMMAND             CREATED        STATUS         PORTS                                       NAMES
0f20b6c89770   tomcat    "catalina.sh run"   24 hours ago   Up 6 seconds   0.0.0.0:8888->8080/tcp, :::8888->8080/tcp   tomcat1
```

## 优雅停止

> 通过 `docker stop` 可以**优雅的停止一个或多个正在运行的容器**

1. stop 命令 首先尝试通过向容器中的主进程（PID 1）发送 `SIGTERM 信号` 来停止正在运行的容器。如果该进程在超时时间内仍未退出,则将发送 `SIGKILL 信号`
   - 进程可以选择忽略SIGTERM,而 SIGKILL 则直接进入将终止该进程的内核
2. SIGTERM 信号可以通过容器的 Dockerfile 中的 `STOPSIGNAL 指令` 或者 docker run 的 `--stop-signal` 选项来改变。

### 命令

- 命令格式
  
  ```shell
  docker stop [OPTIONS] CONTAINER1 CONTAINER2...
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand)        | Default | Description      |
  | ---------------------- | ------- | ---------------- |
  | `--signal , -s`        |         | 发送给容器的系统调用信号   |
  | `--time , -t`          |         | 如果在指定时间(秒)内没有停止容器,就强制停止   |

### 基本使用

> 停止 tomcat 容器

```shell
# 停止 tomcat 容器
➜ docker stop tomcat
```

## 强制停止

> 通过 `docker kill` 可以**强制停止一个或多个正在运行的容器**

1. docker kill 命令会向容器中的主进程发送 `SIGKILL 信号(默认)` , 或者用可选项 `--signal , -s` 来指定发送的信号
2. 与 docker stop 不同的是,docker kill 没有任何超时时间, 它仅发出一个信号
3. 可选项 `--signal` 设置了发送到容器的系统调用信号,这个信号的格式可以是下面几种
   - **[SIG] {NAME}`**, 这个 SIG 是可选的, 比如 SIGINT、STOP
   - **数字, 与内核的系统调用表中的一个位置相匹配**, 例如2

### 命令

- 命令格式
  
  ```shell
  docker kill [OPTIONS] CONTAINER1 CONTAINER2...
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand)        | Default | Description      |
  | ---------------------- | ------- | ---------------- |
  | `--signal , -s`        |         | 发送给容器的系统调用信号   |

### 基本使用

```shell
# 发送 KILL 信号给容器内的主进程
➜ docker kill my_container

# 发送自定义的信号给容器内的主进程

➜ docker kill --signal=SIGHUP my_container
➜ docker kill --signal=HUP my_container
➜ docker kill --signal=1 my_container
```

## 重启容器

> 通过 `docker restart` 可以**重新启动一个或多个容器**。该命令实际上是先执行了`docker stop` 命令，然后执行了`docker start` 命令

### 命令

- 命令格式
  
  ```shell
  docker restart [OPTIONS] CONTAINER1 CONTAINER2 ...
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand)        | Default | Description      |
  | ---------------------- | ------- | ---------------- |
  | `--signal , -s`        |         | 发送给容器的系统调用信号   |
  | `--time , -t`          |         | 如果在指定时间(秒)内没有停止容器,就强制停止   |

## 进入容器

> 通过 `docker attach` 可以**将本地终端的标准输入、输出和错误用容器的ID或名称附加到一个正在运行的容器上**。这允许你查看其正在进行的输出，或以交互方式控制它，就像命令直接在你的终端中运行一样。(即进入容器)

### 命令

- 命令格式

  ```shell
  docker attach [OPTIONS] CONTAINER容器
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand)        | Default | Description      |
  | ---------------------- | ------- | ---------------- |
  | `--detach-keys`        |         | 覆盖脱离附加到容器的按键序列   |
  | `--no-stdin`           |         | 不要附加STDIN   |
  | `--sig-proxy`          |   true  | 是否将所有收到的信号代理给进程   |

:::caution 注意点

1. 当多个窗口同时attach到同一个容器时，所有窗口都会同步显示。同理，如果某个窗口发生阻塞，其他窗口也无法执行操作。

2. attach 直接进入容器启动命令的终端，**而不会启动新的终端进程**

:::

### 基本使用

```shell
# 查看本地运行着的容器
➜ docker ps -a --filter="status=running"
CONTAINER ID   IMAGE     COMMAND   CREATED      STATUS         PORTS     NAMES
3a933c21af5a   debian    "bash"    3 days ago   Up 2 minutes             test

# 通过 docker attach 将本地终端附加到容器中
➜ docker attach test
# 这里进入了容器内部
➜ root@3a933c21af5a:/#
```

### 自定义脱离容器

- 通过 `--detach-keys` 可以自定义脱离附加到容器的按键序列, 序列的格式有`[a~Z]`以及 `ctrl-`与下面的结合
  - **a-z**
  - **@**
  - **[**
  - **\\\\** (双斜线)
  - **_** (下划线)
  - **^**

```shell
# 设置 detach-keys 为 组合键 => ctrl-c
➜ docker attach --detach-keys="ctrl-c"  test

# 这里按下 ctrl-c 后脱离了容器
➜ root@3a933c21af5a:/# read escape sequence

# 设置 detach-keys 为 单独的一个键 => s
➜ docker attach --detach-keys="s" test

# 这里按下 s 后脱离了容器
➜ root@3a933c21af5a:/# read escape sequence
```

## 删除容器

> 通过 `docker rm`命令可以 **删除一个或者多个容器** ,详细文档可见[这里](https://docs.docker.com/engine/reference/commandline/rm/)

### 命令

- 命令格式

  ```shell
  docker rm [OPTIONS] CONTAINER1 CONTAINER2 ... 
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand)        | Default | Description      |
  | ---------------------- | ------- | ---------------- |
  | `--force , -f`         |         | 强制删除一个正在运行的容器（使用 [SIGKILL](Docker容器命令#强制停止) ）  |
  | `--link , -l`          |         | 删除容器间的网络连接   |
  | `--volumes , -v`       |         | 删除与容器关联的卷     |

:::caution 注意

该命令只能删除停止的容器,如果需要删除正在运行的容器,则需要加上 *--force、-f* 参数

:::

### 基本使用

> 删除一个容器

```shell
# 查看本地的所有容器
➜ docker ps -a
CONTAINER ID   IMAGE         COMMAND             CREATED      STATUS                    PORTS     NAMES
1527f9349c90   tomcat        "catalina.sh run"   3 days ago   Exited (130) 3 days ago             testTomcat
3a933c21af5a   debian        "bash"              3 days ago   Up 15 minutes                       test
0f20b6c89770   tomcat        "catalina.sh run"   3 days ago   Exited (143) 2 days ago             tomcat1
d22630cd9754   hello-world   "/hello"            3 days ago   Exited (0) 3 days ago               elastic_almeida
# 删除 容器ID=d22630cd9754 的容器
➜ docker rm d22630cd9754
d22630cd9754
# 查看本地的所有容器,容器ID=d22630cd9754 的容器被删除了
➜ docker ps -a
CONTAINER ID   IMAGE     COMMAND             CREATED      STATUS                    PORTS     NAMES
1527f9349c90   tomcat    "catalina.sh run"   3 days ago   Exited (130) 3 days ago             testTomcat
3a933c21af5a   debian    "bash"              3 days ago   Up 15 minutes                       test
0f20b6c89770   tomcat    "catalina.sh run"   3 days ago   Exited (143) 2 days ago             tomcat1
```

### 批量删除

> 和[删除镜像](Docker镜像命令#拓展)类似的,Docker删除容器也支持`$()`移除所有停止的容器

```shell
# 查看本地所有的容器
➜ docker ps -a
CONTAINER ID   IMAGE     COMMAND             CREATED      STATUS                    PORTS     NAMES
1527f9349c90   tomcat    "catalina.sh run"   3 days ago   Exited (130) 3 days ago             testTomcat
3a933c21af5a   debian    "bash"              3 days ago   Up 20 minutes                       test
0f20b6c89770   tomcat    "catalina.sh run"   3 days ago   Exited (143) 2 days ago             tomcat1

# 删除本地所有停止的容器
➜ docker rm $(docker ps -a -f="status=exited" -q)
1527f9349c90
0f20b6c89770
# 查看本地所有的容器,只剩下一个运行中的容器
➜ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED      STATUS          PORTS     NAMES
3a933c21af5a   debian    "bash"    3 days ago   Up 21 minutes             test
```

## 执行命令

> - 通过 `docker exec`  可以**在一个正在运行的容器的默认bash终端中执行一个命令**
>   - 比如/bin/bash 可以在容器中打开新的终端，并且可以启动新的进程: docker exec [-it] 容器Id/容器名 /bin/bash

1. 使用 docker exec 启动的命令只在容器的主进程（PID 1）运行时运行。 如果容器被重新启动，它也不会被重新启动

2. 命令在容器的默认目录下运行。如果底层镜像在其 Dockerfile 中用 `WORKDIR` 指令指定了一个自定义目录，则会使用这个目录。

3. COMMAND必须是一个可执行的, 链式或带引号的命令不起作用
    - docker exec -it my_container sh -c "echo a && echo b "可以执行
    - docker exec -it my_container "echo a && echo b " 无法执行

### 命令

- 命令格式

  ```shell
  docker exec [OPTIONS] CONTAINER COMMAND命令 [ARG...]
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand)        | Default | Description      |
  | ---------------------- | ------- | ---------------- |
  | `--detach , -d`        |         | 分离模式：在后台运行命令  |
  | `--detach-keys`        |         | 覆盖脱离附加到容器的按键序列   |
  | `--env , -e`           |         | 设置环境变量     |
  | `--env-file`           |         | 从文件中读取环境变量     |
  | `--privileged`         |         | 给予命令赋予权限     |
  | `--interactive, -i`    |         | 以交互模式运行容器,通常与 -t 一起使用      |
  | `--tty, -t`            |         | 为容器重新分配一个伪输入终端,通常与 -i 一起使用   |
  | `--user , -u`          |         | 用户名或UID     |
  | `--workdir , -w`       |         | 容器内的工作目录     |
  
## 提交镜像

> 通过 `docker commit`命令 可以**根据已有的容器的变化来创建一个新的镜像**

### 命令

- 基本命令
  
  ```shell
  docker commit [OPTIONS] CONTAINER容器 [REPOSITORY_NAME[:标签TAG]]
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand)        | Default | Description      |
  | ---------------------- | ------- | ---------------- |
  | `--author , -a`        |         | 提交的作者   |
  | `--change , -c`        |         | 将Dockerfile指令应用到创建的镜像上   |
  | `--message , -m`       |         | 提交的信息   |
  | `--pause , -p`         |  true   | 提交镜像的时候,被提交的容器及其进程是否被暂停   |

### 基本使用

```shell
# 查看本地所有的镜像
➜ docker images 
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
debian       latest    54e726b437fb   2 weeks ago   124MB
tomcat       latest    2362f0cdbf14   3 weeks ago   474MB
busybox      latest    66ba00ad3de8   7 weeks ago   4.87MB

# 运行一个tomcat容器
➜ docker run --name tomcat1 -p 8080:8080 -d 2362f0cdbf14
43349a99ffc36fdd609f176f3da1e6d52cb32f80863a83be5019bdb651179d5d

# 查看本地启动着的容器
➜ docker ps
CONTAINER ID   IMAGE          COMMAND             CREATED         STATUS         PORTS                                       NAMES
43349a99ffc3   2362f0cdbf14   "catalina.sh run"   6 seconds ago   Up 5 seconds   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   tomcat1

# 进入容器内部
➜ docker exec -it tomcat1 /bin/bash

# 创建文件 1.txt,并且写入数据
root@43349a99ffc3:~# touch 1.txt
root@43349a99ffc3:~# touch 2.txt
root@43349a99ffc3:~# touch 3.txt
root@43349a99ffc3:~# echo  1231233333333333333 > 1.txt 


# 进入 jdk 目录
root@43349a99ffc3:/usr/local# cd /opt/java/openjdk
# 创建新的目录将jdk移动到新的目录
root@43349a99ffc3:/opt/java# mkdir java2
root@43349a99ffc3:/opt/java# cp -r openjdk/ java2/

# 提交容器,生成一个新的镜像
➜ docker commit -a "athu@gmail.com" -m "add 1.txt" tomcat1 athu-tomcat:V1.0
sha256:71562e6d171859a9d907a6504114cb067d278b569f59983d8834a4f0f2adb27c

# 查看本地所有的镜像
# 可以看到新提交的镜像(athu-tomcat:V1.0)的大小比原本的tomcat镜像大了将近400MB的(JDK的大小)
➜ docker images
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
athu-tomcat   V1.0      71562e6d1718   3 seconds ago   803MB
debian        latest    54e726b437fb   2 weeks ago     124MB
tomcat        latest    2362f0cdbf14   3 weeks ago     474MB
busybox       latest    66ba00ad3de8   7 weeks ago     4.87MB
```
