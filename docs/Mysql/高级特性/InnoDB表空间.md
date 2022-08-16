---
id: InnoDB表空间
titile: InnoDB表空间
---
> `表空间`是一个抽象的概念,从管理上可以将表空间分为**系统表空间、独立表空间、临时表空间等**。
> 
> 对于**系统表空间**来说,对应着文件系统中一个或多个实际文件,对于**独立表空间**来说,对应着文件系统中的**.ibd文件**
>


## 基本概念
### 页面类型
我们的索引是以 B+Tree 的形式保存到表空间的, **B+Tree 的节点就是索引页,或者叫做数据页**。
在页的 **FILE_HEADER** 中,定义了页面类型 *FILE_PAGE_TYPE*,常见的页面类型有如下的几个
1. **FIL_PAGE_TYPE_ALLOCATED** : 最新分配,还没使用

2. **FIL_PAGE_UNDO_LOG** : Undo 日志页

3. **FIL_PAGE_INODE** : 段信息节点

4. **FIL_PAGE_IBUF_FREE_LIST** : Insert Buffer 空闲列表

5. **FIL_PAGE_IBUF_BITMAP** : Insert Buffer 位图

6. **FIL_PAGE_TYPE_SYS** : 系统页

7. **FIL_PAGE_TYPE_TRX_SYS** : 事务系统数据

8. **FIL_PAGE_TYPE_FSP_HDR** : 表空间头部信息

9. **FIL_PAGE_TYPE_XDES** : 扩展描述页

10. **FIL_PAGE_TYPE_BLOB** : BLOB页

11. **FIL_PAGE_INDEX** : 索引页，也就是我们所说的数据页

### 页通用部分
我们说的数据页就是 FILE_PAGE_TYPE 是 **FILE_PAGE_INDEX** 的页面, 数据页由七部分组成,其中有两部分是**每个页面都有的**
1. `FILE_HEADER`
2. `FILE_TRAILFER`


![页通用部分](http://assets.processon.com/chart_image/62f4a3b81e0853714d45a6c4.png?_=1660200161898)

## 独立表空间结构
### 区(Extent)
表空间的数据页很多,所以引入了区 (extent) 的概念,一个区中包含**连续的 64 个页**,也就是说一个区的默认大小为 1MB。

不管是系统表空间还是独立表空间,都可以看成是由若干个区组成的,然后`按每 256 个区为一组`进行划分。
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/5/1/16a739f33df9307a~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

<br/>

在上述的图中,我们可以看出来, `extent0~extent255` 是第一组,后面同理按照 256 个区分为一组

1. 第一个组最开始的 3 个页面的类型是固定的，也就是说`extent0`这个区最开始的 3 个页面的类型是固定的，分别是:
    -  `FSP_HDR (File Space Header)`
        -  用于记录整个表空间的一些整体属性以及本组所有的区,即**extent0 ~ extent255这 256 个区的属性**
    - `IBUF_BITMAP (Insert Buffer BitMap)`
        - 用于存储本组所有的区的所有页面关于`INSERT BUFFER`的信息
    - `INODE`
        - 存储了INODE的数据结构

2. 其余各组最开始的 2 个页面的类型是固定的,也就是说extent256、extent512这些区最开始的 2 个页面的类型是固定的,分别是:
    - `XDES (Extent Descriptor)`
      - 用来记录本组 256 个区的属性，也就是说对于在extent 256区中的该类型页面存储的就是extent 256 ~ extent 511这些区的属性
      - 作用和第一组的 `FSP_HDR` 类似,只不过 `FSP_HDR` 还额外存储了表空间的一些属性信息
    - `IBUF_BITMAP` : 同上

:::tip 为什么需要区?
我们向表里面插入数据的时候,本质上是往该表的聚簇索引和二级索引中 B+Tree 的各个页中插入数据, 然后多个页之间通过FILE_PAGE_NEXT 和 FILE_PAGE_PREV 形成双向链接。

如果没有引入区,**那么各个页之间并不是连续的**, 两个页可能隔得很远, 在涉及到多个页的查询就会变成`随机 IO`。

引入区的概念之后,可以保证**一个区中的页与页之间是连续的**,那么就变成了`顺序 IO`
:::


### 段(Segment)
> 通过引入区可以在一定程度上减少随机IO的次数,但是为啥需要引入段呢?

- **段是某些零散的页面([碎片区](InnoDB数据页结构#碎片区fragment))以及一些完整的区的集合**

- 拿数据页举例,数据页分为叶子节点和内节点,我们所谓范围查询，其实是对 B+Tree 的叶子节点中的记录进行顺序扫描, 而如果不区分叶子节点和非叶子节点,把所有节点代表的页面放到申请到的区中的话，进行范围扫描的效果就大打折扣了。**所以B+Tree的叶子节点和非叶子节点在存储上是进行一定的区分的,叶子节点有自己独有的区(叶子段),非叶子节点也有自己独有的区(非叶子段)**





