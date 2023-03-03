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
  2. **# 表示注释**
  3. **每条指令都会创建一个新的镜像层,并对镜像进行提交**

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

目前支持两种解析器指令:

1. `syntax`
2. `escape`

解析器指令有下面的特性:

1. 解析器指令是以`# directive=value`的形式写成一种特殊的注释
2. 它是可选的，并且会影响 Dockerfile 中后续行的处理方式
3. **解析器指令不会在构建过程中增加层数，也不会被显示为构建步骤**
4. 一个指令只能使用一次
5. 解析器指令不分大小写, 但依照惯例是它们都是**小写**的
6. 解析器指令中不支持换行符

由于上述的特性，下面的例子都是无效的:

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
**一旦一个注释、空行或指令被处理，Docker 不再寻找解析器指令**。相反，它将任何格式化为解析器指令的东西视为注释，并且不试图验证它是否可能是解析器指令。因此，**所有的解析器指令必须在 Dockerfile 的最顶部**
:::

## 替换环境变量

- 环境变量(用 `ENV` 指令声明)也可以在某些指令中作为变量使用, 一般通过`$variable_name或${variable_name}` 来使用。
- 如果需要使用 `$` 字符,可以通过转义符 `\` 来处理。比如 \\$foo 或者 \\${foo} 会被解析为字符串: $foo 与 ${foo}

下面是一个示例:

```docker
FROM busybox
ENV FOO=/bar
WORKDIR ${FOO}      # 等价于 WORKDIR /bar
ADD . $FOO          # 等价于 ADD . /bar
COPY \$FOO /quux    # 这里通过\ 进行转移了, 等价于 COPY $FOO /quux
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

## FROM

> 使用 FROM 指令指定基础镜像

FROM 支持下面 3 种格式:

1. `FROM <image镜像> [AS 阶段名称]`
2. `FROM <image镜像> [:tag标签] [AS 阶段名称]`
3. `FROM <image镜像> [@DIGEST摘要] [AS 阶段名称]`

**FROM 指令用于初始化一个新的构建阶段,并为后续指令设置基础镜像**, 所以一个有效的 Dockerfile **必须以 FROM 指令开始**

1. `ARG 指令` 是 Dockerfile 中唯一可以在FROM之前的指令, 参见了解ARG和FROM的交互方式
2. `FROM 指令` 可以在 Dockerfile 中出现多次, 以便 **创建多个镜像或将一个构建阶段作为另一个的依赖**。
    - 在每个新的 FROM 指令之前，只需记下提交所输出的最后一个镜像ID
    - 每条 FROM 指令都会清除之前指令所创建的任何状态
3. 在 FROM 指令后面可以加入 `AS 阶段名称` 来给新的构建阶段一个名称,这个名称可以在随后的 `FROM` 和`COPY --from=阶段名称`指令中使用，以指代在这个阶段建立的镜像
4. `tag 标签或 DIGEST 摘要` 是可选的。如果省略了其中任何一个，构建的时候默认会使用最新的标签。如果找不到指定的标签值，就会返回一个错误

## RUN

> `RUN 指令` 将**在当前镜像之上的新层中执行任何命令并提交结果**, 提交后的镜像将被用于 Dockerfile 的下一个步骤。

RUN有2种形式:

1. `RUN COMMAND命令`
    - shell 的形式
    - 命令是在shell中执行的, Linux中默认的shell是 **/bin/sh -c** ，Windows中默认的shell是 **cmd /s /c**
2. `RUN ["可执行语句", "param1", "param2"]`
    - exec 的形式,类似于函数调用
    - 这种方式必须使用双引号 **"**,  而不能使用单引号 **'**，因为该方式会被转换成一个JSON 数组

<mark>shell vs exec</mark>

- shell 形式
  - **替换默认的shell : 除了在 RUN 指令中指定 shell, 也可以通过 [SHELL 指令](DockerFile#shell)来替换**
  - 使用反斜杠 **\\** 可以将一条 RUN指令语句分割成多行

    ```docker
    RUN /bin/bash -c 'source $HOME/.bashrc && \
                    echo $HOME'
    # 上述的RUn 指令等价于下面的
    RUN /bin/bash -c 'source $HOME/.bashrc && echo $HOME'
    ```

- exec 形式
  - 可以避免出现 shell 字符串混杂的问题，并且可以使用 不包含指定 shell 可执行文件的基础镜像来运行命令
  - **替换默认的shell : 可以在数组的第一位中指定使用shell**

    ```docker
    # 使用 /bin/bash 替换默认的 /bin/sh
    RUN ["/bin/bash", "-c", "echo hello"]
    ```
  
  - 与 shell 形式不同，exec 形式不调用命令shell, 这意味着不会使用常规的 shell 进行处理
    - 比如 RUN [ "echo", "$HOME" ] 不会对$HOME进行变量替换。如果想进行 shell 处理，那么*要么使用shell形式，要么直接执行一个shell*,比如 RUN [ "sh", "-c", "echo $HOME" ] 。

:::caution RUN 与 构建缓存

1. **RUN 指令的缓存在下次构建时不会自动失效**。比如 RUN apt-get dist-upgrade -y 这样的指令的缓存会在下次构建时被重新使用
2. RUN 指令的缓存可以通过使用 `--no-cache` 标志来失效，例如 docker build --no-cache
3. [ADD 指令](DockerFile#add) 和 [COPY 指令](DockerFile#copy) 会导致 RUN 指令的缓存失效

:::

## RUN --mount

利用 `RUN --mount` 可以创建文件系统的挂载，以便在构建的时候可以访问。这可以用来:

1. 创建 bind mount 到主机文件系统或其他构建阶段
2. 访问构建 secrets 或ssh-agent套接字
3. 使用持久的软件包管理缓存来加快构建速度

- 基本命令
  - `--mount=[type] [,option1=value1,option2=value2, ...]`
- 挂载类型[type]
  - `bind [default]` : 绑定-挂载上下文目录(只读)
  - `cache` : 为编译器和软件包管理器缓存目录挂载一个临时目录
  - `secret` : 允许构建容器访问安全文件，如私钥，而不把它们备份到镜像中
  - `ssh` : 允许构建容器通过SSH代理访问SSH密钥，并支持口令



## ADD

## COPY

## ARG

## SHELL
