---
id: ip-protocol
title: IP 协议
---

> TCP/IP 中的"心脏" 就是互联网层,这一层主要由`IP(Internet Protocol)` 和 `ICMP(Internet Control Message Protocol)` 组成

## 网际协议(IP)

> 网络层的主要作用就是: **实现终端节点之间的通信**,我们也把这种通信称之为"点对点通信(end-to-end)"。

我们知道数据链路的作用就是 **在互连的同一种数据链路的节点之间进行数据包传递**,由于 MAC 地址不具有层次性,一旦传递数据需要跨多种数据链路,就需要使用网络层。

简而言之,数据链路提供直连两个设备之间的通信功能,而网络层的 IP 协议则是提供 **没有直连的两个网络之间的通信功能**。

:::info 网络层与数据链路层
拿寄邮件做示例,网络层的源 MAC 地址和目标 MAC 地址就是告诉邮递员送到哪里,但是邮递员只熟知当前区域,并不知道位于其他区域的目的地怎么过去，而网络层的 IP 会通过不断的"跳转"告诉邮递员怎么从当前位置到其他区域的目的地。
:::

## IP 基础

IP 有 3 大作用:

1. IP 寻址
2. 路由(最终节点为止的转发)
3. IP 分包和组包

### IP 地址是网络层地址

在计算机通信中,需要有一个类似于地址的识别码来标识"端",在数据链路层中有 `MAC 地址`,通过 MAC 地址可以识别出同一条数据链路中不同的计算机。但是它无法识别出不同数据链路的计算机,但是网络层的 IP 协议可以实现这个功能。

正因为 IP 地址属于网络地址,所以主机不论用zhi哪一种数据链路连接,都不会改变主机的 IP 地址,因为 IP 属于网络层的地址。所以在中继器、交换集线器、网桥等数据链路层/物理层数据转发设备中，不需要设置 IP 地址，因为它们只需要负责转发数据链路的数据帧或者将数据包转化为0、1 的比特流

### 路由控制(Routing)

路由控制指的是**将分组数据发送到最终地址的功能**,即使节点之间的网络非常复杂，也可以通过路由控制来确定到达目标地址的"路线"。一旦路由控制发生异常，那么分组数据就无法到达目标地址。


