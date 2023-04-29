---
id: http-protocol
title: HTTP协议
---

## 网络基础

### TCP/IP

> 通常使用的网络是在TCP/IP 协议族的基础上运行的,并且`HTTP`属于其内部的一个子集 
>
> TCP/IP 协议中包含了很多的内容,从`电缆的规格`到`IP地址的选址方法`、`寻找异地用户的方法`、`双方建立通信的顺序`以及`Web页面显示需要的步骤处理`…

#### TCP/IP 分层管理

TCP/IP 里面最重要的就是`分层`,按层次分为以下四层: `应用层`、`传输层`、`网络层`、`链路层`

1. <mark>应用层</mark>

   - <font color='red'>决定了向用户提供应用服务时通信的活动</font>
   - TCP/IP 协议族内置了各类通用的应用服务，比如`FTP(File Transfer Protocol:文件传输协议)`和`DNS(Domain Name System: 域名系统)`
   - HTTP协议也在其中
2. <mark>传输层</mark>