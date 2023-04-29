---
id: Docker基础
title: Docker基础
---


## Docker简介

Docker 是一个开源的**容器引擎**, 它可以帮助我们更快地交付应用。Docker可**将应用程序和基础设施层隔离,并且能将基础设施当作程序一样进行管理**。使用Docker,可更快地打包、测试以及部署应用程序,并可**减少从编写到部署运行代码的周期**

## 发展历程

| Docker版本         | Docker基于{?}实现          |
| ------------------ | ------------------------ |
| Docker 0.7之前     | 基于 [LXC](https://linuxcontainers.org/lxc/introduction/)                   |
| Docker0.9后        | 改用 [libcontainer](https://github.com/docker/libcontainer)         |
| **Docker 1.11后**  | 改用 [runC](https://github.com/opencontainers/runc) 和 [containerd](https://github.com/containerd/containerd)  |

常见的术语:

1. [OCI](https://www.opencontainers.org/) : 定义了容器运行的标准,其[规范文档](http://www.infoq.com/cn/news/2017/02/Docker-Containerd-RunC)作为一个项目在GitHub上维护
2. `runC`
   - **标准化容器执行引擎**
   - 根据根据 OCI 规范编写的,生成和运行容器的CLI工具,是按照开放容器格式标准（OCF, Open Container Format）制定的一种具体实现。由 libcontainer 中迁移而来的,实现了容器启停、资源隔离等功能
3. `containerd`
   - **用于控制 runC 的守护进程,构建在 OCI 规范和runC之上**。目前內建在 Docker Engine 中
   - [参考文档](https://blog.docker.com/2015/12/containerd-daemon-to-control-runc/),以及[译文](http://dockone.io/article/914)

:::tip 拓展阅读

1. [Docker 背后的容器管理——Libcontainer 深度解析](https://www.infoq.cn/article/docker-container-management-libcontainer-depth-analysis/)
2. [Docker背后的标准化容器执行引擎——runC](https://www.infoq.cn/article/docker-standard-container-execution-engine-runc/)
3. [Docker、Containerd、RunC…:你应该知道的所有](http://www.infoq.com/cn/news/2017/02/Docker-Containerd-RunC)
:::

## Docker架构

Docker官方文档的架构图,如图所示:

![image-20230131220859994](./image/Docker基础/docker-architecture.png)

上图中包含的组件:

1. `Docker daemon`
   - **Docker 守护进程**
   - 是一个运行在宿主机(**DOCKER_HOST**)的后台进程。我们可通过 Docker 客户端与之通信
2. `Client`
   - **Docker客户端**
   - 是 Docker 的用户界面,它**可以接受用户命令和配置标识,并与 Docker daemon 通信**。比如 docker build 、docker pull、docker run... 都是 Docker 的相关命令
3. `Images`
   - **Docker镜像**
   - **是一个只读模板,它包含创建Docker容器的说明**。它和系统安装光盘有点像(我们使用系统安装光盘安装系统,同理,我们使用Docker镜像运行Docker镜像中的程序)
4. `Container`
   - **容器,是镜像运行的实例,镜像启动后的实例称为一个容器,容器是独立运行的一个或一组应用**。
   - 容器的定义和镜像几乎一模一样，也是一堆层的统一视角，唯一区别在于容器的最上面那一层是可读可写的
   - 镜像和容器的关系有点类似于面向对象中,类和对象的关系。**我们可通过 Docker API 或者 CLI 命令来启停、移动、删除容器**
5. `Registry`
   - **镜像仓库**
   - Docker Registry 是一个集中存储与分发镜像的服务。我们构建完Docker镜像后,就可在当前宿主机上运行。但如果想要在其他机器上运行这个镜像,我们就需要手动拷贝。此时,我们可借助Docker Registry来避免镜像的手动拷贝
   - 最常用的 Docker Registry 莫过于官方的Docker Hub,这也是默认的Docker Registry。

## Docker & 虚拟机

![image-20230131220859994](./image/Docker基础/docker-vs-vm.png)

- Hypervisor 层被 Docker Engine 取代
- 虚拟化粒度不同
  - 虚拟机利用Hypervisor虚拟化CPU、内存、IO设备等实现的,然后在其上运行完整的操作系统,再在该系统上运行所需的应用。**资源隔离级别:OS级别**
  - 运行在Docker容器中的应用直接运行于宿主机的内核,容器共享宿主机的内核,容器内部运行的是Linux副本,没有自己的内核,直接使用物理机的硬件资源,因此CPU/内存利用率上有一定优势。**资源隔离级别:利用Linux内核本身支持的容器方式实现资源和环境隔离**

:::tip 拓展阅读
[Docker、LXC、Cgroup的结构关系](https://blog.51cto.com/speakingbaicai/1359825)
:::

## Docker应用场景

[八个Docker的真实应用场景](http://dockone.io/article/126)

## 安装Docker(Centos)

> 系统要求:
>
>   1. **CentOS 7** 或更高版本
>   2. **centos-extras** 仓库必须处于启用状态,该仓库默认启用
>   3. 建议使用 **overlay2** 存储驱动

### yum安装

#### 卸载老版本的Docker

在CentOS中,老版本Docker名称是docker 或docker-engine ,而Docker CE的软件包名称是docker-ce 。因此,如已安装过老版本的Docker,需使用如下命令卸载:
  
```Shell
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

需要注意的是,执行该命令**只会卸载Docker本身,而不会删除Docker存储的文件**,例如镜像、容器、卷以及网络文件等。这些文件保存在 `/var/lib/docker` 目录中,需要**手动删除**

#### 卸载 Docker Engine

1. 卸载Docker引擎、CLI、containerd和Docker Compose软件包。

   ```shell
   sudo yum remove docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
   ```

2. 主机上的Images、Container、Volumes或定制的配置文件不会被自动删除。要删除所有图像、容器和卷

   ```shell
   sudo rm -rf /var/lib/docker
   sudo rm -rf /var/lib/containerd
   ```

#### 使用仓库安装

1. 设置仓库,安装 yum-utils 软件包(提供 yum-config-manager工具 ), 并设置 Docker 仓库

   ```shell
   sudo yum install -y yum-utils
   sudo yum-config-manager \
      --add-repo \
      https://download.docker.com/linux/centos/docker-ce.repo
   ```

2. 安装 Docker Engine

   ```shell
   sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```

3. 启动 Docker

   ```shell
   sudo systemctl start docker
   ```

4. 验证安装是否正确。

   ```shell
   sudo docker run hello-world
   ```

   执行该命令 Docker 会下载测试镜像,并使用该镜像启动一个容器。如能够看到类似如下的输出,则说明安装成功。

   ```txt
   Unable to find image 'hello-world:latest' locally
   latest: Pulling from library/hello-world
   b04784fba78d: Pull complete
   Digest: sha256:f3b3b28a45160805bb16542c9531888519430e9e6d6ffc09d72261b0d26ff74f
   Status: Downloaded newer image for hello-world:latest

   Hello from Docker!
   This message shows that your installation appears to be working correctly.

   To generate this message, Docker took the following steps:
    1. The Docker client contacted the Docker daemon.
    2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    3. The Docker daemon created a new container from that image which runs the
       executable that produces the output you are currently reading.
    4. The Docker daemon streamed that output to the Docker client, which sent it
       to your terminal.

   To try something more ambitious, you can run an Ubuntu container with:
    $ docker run -it ubuntu bash

   Share images, automate workflows, and more with a free Docker ID:
    https://cloud.docker.com/

   For more examples and ideas, visit:
    https://docs.docker.com/engine/userguide/
   ```

### Shell一键安装

```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### 加速安装

注册阿里云,参考该页面的[内容](https://cr.console.aliyun.com/#/accelerator)安装即可

## 配置 Docker

### Docker 开启启动

许多现代Linux发行版使用systemd来管理系统启动时的服务。在Debian和Ubuntu上，Docker服务默认在启动时启动。在其他使用systemd的Linux发行版上，要在开机时自动启动Docker和containerd，请运行以下命令。

```shell
# 设置开启启动
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
# 取消开机启动
sudo systemctl disable docker.service
sudo systemctl disable containerd.service
```

## 镜像原理

> 镜像是一种轻量级、可执行的独立软件包, 用来打包软件运行环境和基于运行环境开发的软件，它包含运行某个软件所需的所有内容,包括代码、运行时、库、环境变量和配置文件

### UnionFS (联合文件系统)

- **UnionFS是一种分层、轻量级并且高性能的文件系统,支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下**
- UnionFS用branch把不同文件系统的文件和目录“透明地”覆盖,形成一个单一一致的文件系统。branche或者是read-only或者是read-write的，所以当对这个虚拟后的联合文件系统进行写操作的时候，系统是真正写到了一个新的文件中,看起来这个虚拟后的UnionFS是可以对任何文件进行操作的，但是其实它并没有改变原来的文件，这是因为它用到了一个重要的资管管理技术 **写时复制**
- UnionFS是 Docker 镜像的基础
  - 镜像可以通过分层来进行继承,基于基础镜像(没有父镜像),可以制作各种具体的应用镜像
- **特性**
  - 一次同时加载多个文件系统，但从外面看起来,只能看到一个文件系统,联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录

### 镜像加载原理

- docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统是 UnionFS
- <mark>bootfs(boot file system)</mark>

  - 主要包含`boot加载器(bootloader)`和`内核(kernel)`,**主要是引导加载kernel**
  - Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是bootfs。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs

- <mark>rootfs (root file system)</mark>

  - 在bootfs之上, 包含的就是典型 Linux 系统中的 /dev, /proc, /bin, /etc 等标准目录和文件
  - rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos…

- 平时我们安装进虚拟机的CentOS都是好几个G，为什么docker镜像才200M?
  - 对于一个精简的OS，rootfs可以很小，只需要包括最基本的命令、工具和程序库就可以了，因为底层直接用主机的kernel,自己只需要提供 rootfs 就行了
  - 由此可见对于不同的linux发行版, bootfs基本是一致的, rootfs会有差别, 因此不同的发行版可以公用bootfs

### 镜像的分层

1. 在进行docker pull某个镜像的时候发现是一层一层的下载,为什么Docker需要镜像分层?
    - `共享资源`: 比如有多个镜像都从相同的 base 镜像构建而来，那么宿主机只需在磁盘上保存一份base镜像，同时内存中也只需加载一份 base 镜像，就可以为所有容器服务了,而且镜像的每一层都可以被共享

2. **镜像的特点**
    - Docker镜像都是只读的
    - 当镜像启动时,一个新的可写层被加载到镜像的顶部。这一层通常被称作**容器层**，"容器层"之下的都叫 "镜像层"
