---
id: linuxCommand
slug: /linuxCommand
title: 常用Linux命令
---
> 收录了一些常用Linux命令

## 查看端口占用情况
- `lsof`(list open files)是一个列出当前系统打开文件的工具
- **lsof 查看端口占用语法格式：**
  - `lsof -i:端口号`

**使用实例**

```bash
➜ lsof -i:8000
COMMAND   PID USER   FD   TYPE   DEVICE SIZE/OFF NODE NAME
nodejs  26993 root   10u  IPv4 37999514      0t0  TCP *:8000 (LISTEN)
```
