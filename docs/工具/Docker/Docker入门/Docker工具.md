---
id: Docker工具
title: Docker工具
---

## 镜像管理

Coming Soon...

## 可视化管理

### Portainer

> Portainer是一个轻量级的管理界面，可以让您轻松地管理不同的Docker环境(Docker主机或Swarm集群)

- Portainer提供状态显示面板、应用模板快速部署、容器镜像网络数据卷的基本操作、事件日志显示、容器控制台操作、Swarm集群和服务等集中管理和操作、登录用户管理和控制等功能, 功能十分全面，基本能满足中小型单位对容器管理的全部需求。
- [官方GitHub](https://github.com/portainer/portainer)
- [官方文档](https://portainer.readthedocs.io/en/latest/deployment.html)

使用：

```docker
docker run -d --privileged -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /opt/portainer:/data portainer/portainer
```

如果开启了 SELinux,可执行如下命令启动：

```docker
docker run -d --privileged -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /opt/portainer:/data portainer/portainer
```
