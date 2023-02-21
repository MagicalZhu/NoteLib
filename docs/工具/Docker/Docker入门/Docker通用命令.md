---
id: Docker通用命令
title: Docker通用命令
---

> 除了 docker 镜像、容器使用的命令,还有一些通用的命令,对于镜像、容器、数据卷等都可以使用

## Inspect

> Inspect(检查),通过 `docker inspect` 命令可以**获取到 Docker 对象的低级信息**

该命令提供了由 docker 控制的构造的详细信息,默认情况下，docker inspect 会以 JSON 数组的形式呈现结果

1. **格式化输出**

### 命令

- 命令格式

  ```shell
  docker inspect [OPTIONS] NAME|ID
  ```

- 常见的可选项[OPTIONS]

  | Name(shorthand)        | Type    |   Default | Description      |
  | ---------------------- | ------- | --------- | ---------------- |
  | `--format , -f`        | string  |           | 使用自定义模板格式化输出。 |
  | `--size , -s`          |         |           | 如果类型是容器，显示总的文件大小   |
  | `--type`               | string  |           | 返回指定类型的 JSON 信息     |

### 可选项参数说明

1. `--format| -f`
    - **--format=JSON** : 以JSON格式打印
    - **--format=模板** : 使用给定的Go模板打印输出。关于用模板格式化输出的更多信息，请参考[这里](https://docs.docker.com/go/formatting/)
  
2. `--size , -s`
    - 这个选项只对容器起作用, 但是容器不一定要在运行，它也适用于停止的容器
    - 在 docker inspect 输出中增加了两个额外的字段
      - `SizeRootFs` : 容器中所有文件的总大小，以字节为单位。
      - `SizeRw` : 在容器中创建或改变的文件的大小(与它的镜像相比)，以字节为单位

3. `--type`
    - 有下面的可选值: `container | image | node | network | secret | service | volume | task | plugin`
    - docker inspect 可以通过 ID、NAME 匹配任何类型的对象,有时候多种类型的对象名称都是相同的,这就让结果很模糊,所以需要加上`--type`

### 格式化输出

> 利用 *--format* 参数可以 将 inspect 的输出结果格式化,

下面是一些使用示例:

1. 以JSON格式输出子节点信息

    ```shell
    # --type 指定了对象类型为 container
    docker inspect --type container --format "{{json .Config.ExposedPorts}}" tomcat1
    {"80/tcp":{},"8080/tcp":{}}
    ```

2. 对于数组、字典、切片或者通过,使用range进行遍历输出

    ```shell
    docker inspect --format='{{range .NetworkSettings.Networks}}{{.NetworkID}}{{end}}' tomcat1
    58456e1eb3e58a8e957e45a4e542cda4bf8d2631e04346be885ffdfbda275621
    ```

### 获取 Size 信息

> 通过 *--size* 参数可以获取容器大小的相关信息

```shell
docker inspect --size --format="SizeRootFs:{{.SizeRootFs}},SizeRw:{{.SizeRw}}"  tomcat1
SizeRootFs:473984122,SizeRw:10112
```

