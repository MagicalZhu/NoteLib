---
id: Docker镜像命令
title: Docker镜像命令
---

## 搜索镜像

可使用`docker search` 命令搜索存放在Docker Hub中的镜像。

**命令格式**
```
docker search [OPTIONS] TERM
```

**参数**

| Name, shorthand | Default | Description      |
| --------------- | ------- | ---------------- |
| `--automated`   | `false` | 只列出自动构建的镜像       |
| `--filter, -f`  |         | 根据指定条件过滤结果       |
| `--limit`       | `25`    | 搜索结果的最大条数        |
| `--no-trunc`    | `false` | 不截断输出,显示完整的输出    |
| `--stars, -s`   | `0`     | 只展示Star不低于该数值的结果 |

:::info 示例


```shell
docker search java
```

执行该命令后,Docker就会在Docker Hub中搜索含有“java”这个关键词的镜像仓库。执行该命令后,可看到类似于如下的表格:

```
NAME                    DESCRIPTION                STARS     OFFICIAL   AUTOMATED
java                    Java is a concurrent, ...   1281      [OK]       
anapsix/alpine-java     Oracle Java 8 (and 7) ...   190                  [OK]
isuper/java-oracle      This repository conta ...   48                   [OK]
lwieske/java-8          Oracle Java 8 Contain ...   32                   [OK]
nimmis/java-centos      This is docker images ...   23                   [OK]
...
```

该表格包含五列,含义如下:

1. `NAME`:镜像仓库名称。
2. `DESCRIPTION`:镜像仓库描述。
3. `STARS`:镜像仓库收藏数,表示该镜像仓库的受欢迎程度,类似于GitHub的Stars。
4. `OFFICAL`:表示是否为官方仓库,该列标记为 [OK] 的镜像均由各软件的官方项目组创建和维护。由结果可知,java这个镜像仓库是官方仓库,而其他的仓库都不是镜像仓库。
5. `AUTOMATED`:表示是否是自动构建的镜像仓库。

:::

## 下载镜像[重要]

使用命令`docker pull` 命令即可从Docker Registry上下载镜像。

**命令格式**

```
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

**参数**

| Name, shorthand           | Default | Description |
| ------------------------- | ------- | ----------- |
| `--all-tags, -a`          | `false` | 下载所有标签的镜像   |
| `--disable-content-trust` | `true`  | 忽略镜像的校验     |

:::info 示例

**示例1**

```shell
docker pull java
```

执行该命令后,Docker会从Docker Hub中的java仓库下载最新版本的Java镜像。

**示例2**

该命令还可指定想要下载的镜像标签以及Docker Registry地址,例如：

```shell
docker pull reg.itmuch.com/java:7
```

这样就可以从指定的Docker Registry中下载标签为7的Java镜像

:::