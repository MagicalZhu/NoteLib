---
id: Docker容器命令
title: Docker容器命令
---

## 启动容器

> 通过 `docker run` 可以**根据本地的镜像创建并且启动一个新的容器**

1. docker run 命令**首先在指定的镜像上创建一个可写的容器层,然后用指定的命令启动它**。也就是说,docker run 相当于[Docker Engine API](Docker基础#docker简介)中的几个步骤:
   - 首先: `/containers/create`
   - 其次: `/containers/(id)/start`

2. 使用 `docker start` 可以重新启动一个已经停止的容器,并保持其之前的所有变化不变。参见`docker ps -a`来查看所有容器的列表

### 命令

- 命令格式

  ```shell
  docker run [OPTIONS] IMAGE [COMMAND] [ARGS...]
  ```
