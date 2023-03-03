---
id: DockerFile
title: DockerFile
---

> Docker可以通过读取Dockerfile中的指令自动构建镜像,Dockerfile是由一系列**命令和参数构成的脚本文件**,它包含了用户可以在命令行上调用的所有命令，以组装一个镜像

## 概述

Dockerfile定义了进程需要的一切东西,包括:

1. 执行代码或者是文件
2. 环境变量
3. 依赖包
4. 运行时环境
5. 动态链接库
6. 操作系统的发行版
7. 服务进程
8. 内核进程(当应用进程需要和系统服务和内核进程打交道，这时需要考虑如何设计namespace的权限控制)
9. …

- 基本使用步骤
  1. 编写 `Dockerfile` 文件
  2. 通过 `docker build` 命令执行,得到一个自定义的镜像

- 基础概念
  1. **指令按照从上到下,顺序执行**
  2. **#表示注释**
  3. **每条指令都会创建一个新的镜像层,并对镜像进行提交**
  4. 

- **构建缓存**
  - 在镜像的构建过程中,Docker 会遍历 Dockerfile 文件中的指令，然后按顺序执行
  - 在执行每条指令之前，Docker 都会在缓存中查找是否已经存在可重用的镜像，如果有就使用现存的镜像，不再重复创建

## 格式

- Dockerfile 的基本格式如下:

  ```dockerfile
  # Comment
  INSTRUCTION arguments
  ```

- `INSTRUCTION`表示一个 Docker 指令,它**不区分大小写**,但是习惯上它们是大写的，以便更容易地将它们与参数区分开来。

- Docker 按顺序运行 Dockerfile 中的指令, **一个 Dockerfile 必须以FROM指令开始**
  - 当然例外的是, `FROM 指令` 可能位于 **[解析器指令](DockerFile#解析器指令)、注释和全局范围的[ARG](DockerFile#arg)** 之后
- `FROM 指令`指定了你要构建的父镜像,**FROM 前面只能有一个或多个ARG指令，这些指令声明了 Dockerfile 中 FROM 行使用的参数**

Docker 将以 `#` 开头的行视为注释，除非该行是一个有效的[解析器指令](DockerFile#解析器指令)(一行中其他地方的#标记被视为一个参数)。下面是一个注释的示例:

```dockerfile
# Comment
RUN echo 'we are running some # of cool things'
```

在执行Dockerfile指令之前，注释行会被删除，这意味着下面例子中的注释不会被执行echo命令的shell处理，下面例子中的两个RUN指令是等效的:

```dockerfile
RUN echo hello \
# comment
world

# 等价于
RUN echo hello \
world
```

## 解析器指令

## ARG
