"use strict";(self.webpackChunkhuakucha=self.webpackChunkhuakucha||[]).push([[8432],{90486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));n(61839);const u={id:"FutureTask",title:"FutureTask"},l=void 0,i={unversionedId:"\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/FutureTask",id:"\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/FutureTask",title:"FutureTask",description:"Future\u6982\u8ff0",source:"@site/docs/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/3.9\u5e76\u53d1\u5de5\u5177\u7c7b-FutureTask.md",sourceDirName:"\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236",slug:"/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/FutureTask",permalink:"/docs/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/FutureTask",draft:!1,editUrl:"https://github.com/MagicalZhu/NoteLib/tree/main/docs/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/3.9\u5e76\u53d1\u5de5\u5177\u7c7b-FutureTask.md",tags:[],version:"current",lastUpdatedBy:"YuLiang Zhu",lastUpdatedAt:1670289592,formattedLastUpdatedAt:"2022\u5e7412\u67086\u65e5",frontMatter:{id:"FutureTask",title:"FutureTask"},sidebar:"basicSideBar",previous:{title:"AQS(\u961f\u5217\u540c\u6b65\u5668)",permalink:"/docs/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/AQS"},next:{title:"\u81ea\u5b9a\u4e49\u7f13\u5b58",permalink:"/docs/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/\u7f13\u5b58\u5b9e\u6218"}},o={},c=[{value:"Future\u6982\u8ff0",id:"future\u6982\u8ff0",level:2},{value:"Future\u5e38\u89c1\u7684\u65b9\u6cd5",id:"future\u5e38\u89c1\u7684\u65b9\u6cd5",level:2},{value:"FutureTask",id:"futuretask",level:2},{value:"Future\u4ee3\u7801\u793a\u4f8b",id:"future\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1",id:"\u793a\u4f8b1",level:3},{value:"\u793a\u4f8b2",id:"\u793a\u4f8b2",level:3},{value:"\u793a\u4f8b3",id:"\u793a\u4f8b3",level:3},{value:"\u793a\u4f8b4",id:"\u793a\u4f8b4",level:3},{value:"\u901a\u8fc7FutureTask\u521b\u5efaFuture",id:"\u901a\u8fc7futuretask\u521b\u5efafuture",level:2}],s={toc:c};function m(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"future\u6982\u8ff0"},"Future\u6982\u8ff0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Runnable \u4e0e Callable\u63a5\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Runnable\u4e0d\u80fd\u8fd4\u56de\u4e00\u4e2a\u8fd4\u56de\u503c,\u4f46\u662fCallable\u53ef\u4ee5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Runnable\u65e0\u6cd5\u629b\u51fachecked Exception\uff0c\u4f46\u662fCallable\u53ef\u4ee5")))),(0,r.kt)("li",{parentName:"ul"},"Future\u63a5\u53e3: ",(0,r.kt)("font",{color:"red"},"\u8868\u793a\u5f02\u6b65\u8ba1\u7b97\u7684\u7ed3\u679c")),(0,r.kt)("li",{parentName:"ul"},"Future \u4e0eCallable",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"get()"),"\u83b7\u53d6Callable\u63a5\u53e3\u8fd4\u56de\u7684\u7ed3\u679c\u3001\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"isDone()"),"\u6765\u5224\u65ad\u4efb\u52a1\u662f\u5426\u6267\u884c\u5b8c\u6210\u3001\u53d6\u6d88\u4efb\u52a1\u3001\u5728\u6307\u5b9a\u65f6\u95f4\u83b7\u53d6\u4efb\u52a1\u7684\u7ed3\u679c\u7b49"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("font",{color:"red"},"\u5728`call()`\u672a\u6267\u884c\u5b8c\u6bd5\u4e4b\u524d,\u8c03\u7528get()\u7684\u7ebf\u7a0b\u4f1a\u88ab\u963b\u585e\uff0c\u76f4\u5230call\u65b9\u6cd5\u8fd4\u56de\u4e86\u7ed3\u679c\uff0c\u6b64\u65f6get()\u624d\u4f1a\u5f97\u5230\u7ed3\u679c,\u88ab\u963b\u585e\u7684\u7ebf\u7a0b\u53d8\u4e3aRunnable\u72b6\u6001"))))),(0,r.kt)("h2",{id:"future\u5e38\u89c1\u7684\u65b9\u6cd5"},"Future\u5e38\u89c1\u7684\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"get([long timeout, TimeUnit unit])")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u7ebf\u7a0b\u8fd4\u56de\u7684\u7ed3\u679c"),(0,r.kt)("li",{parentName:"ul"},"get\u65b9\u6cd5\u7684\u884c\u4e3a\u53d6\u51b3\u4e8eCallable\u4efb\u52a1\u7684\u72b6\u6001,\u53ea\u6709\u4ee5\u4e0b5\u79cd\u60c5\u51b5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4efb\u52a1\u6b63\u5e38\u5b8c\u6210"),": get\u65b9\u6cd5\u7acb\u5373\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4efb\u52a1\u6ca1\u6709\u5b8c\u6210(\u672a\u5f00\u59cb\u6216\u8005\u8fdb\u884c\u4e2d)"),": get\u65b9\u6cd5\u4f1a\u963b\u585e\u76f4\u5230\u4efb\u52a1\u5b8c\u6210"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4efb\u52a1\u629b\u51fa\u5f02\u5e38"),": \u4efb\u52a1\u5185\u90e8\u7684\u5f02\u5e38\uff0c\u4f1a\u5728\u8c03\u7528get\u65b9\u6cd5\u7684\u65f6\u5019\u629b\u51faExecutionException\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4efb\u52a1\u88ab\u53d6\u6d88"),": get\u65b9\u6cd5\u4f1a\u629b\u51faCancellationException"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4efb\u52a1\u8d85\u65f6"),": get\u65b9\u6cd5\u6709\u4e00\u4e2a\u91cd\u8f7d\u65b9\u6cd5\uff0c\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a\u5ef6\u8fdf\u65f6\u95f4\u3002\u5982\u679c\u65f6\u95f4\u5230\u4e86\u8fd8\u6ca1\u6709\u83b7\u53d6\u5230\u7ed3\u679c\uff0c\u5c31\u629b\u51faTimeoutException"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cancel(boolean mayInterruptIfRunning)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u4efb\u52a1\u7684\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mayInterruptIfRunning"),": \u662f\u5426\u4ee5\u4e2d\u65ad\u7684\u65b9\u5f0f\u53d6\u6d88\u4efb\u52a1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"isDone()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5224\u65ad\u7ebf\u7a0b\u662f\u5426\u5df2\u7ecf\u6267\u884c\u5b8c\u6210"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"isCancelled()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5224\u65ad\u4efb\u52a1\u662f\u5426\u88ab\u53d6\u6d88")))),(0,r.kt)("h2",{id:"futuretask"},"FutureTask"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Future\u3001Runnable"),"\u63a5\u53e3,\u6240\u4ee5FutureTask\u53ef\u4ee5\u76f4\u63a5\u4ea4\u7ed9Executor\u6267\u884c,\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u7ebf\u7a0b\u6267\u884c(FutureTask.run)\u3002\u7136\u540e\u901a\u8fc7FutureTask.get()\u83b7\u53d6\u4efb\u52a1\u7ed3\u679c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FutureTask\u53ef\u4ee5\u5904\u4e8e3\u79cd\u72b6\u6001"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u672a\u542f\u52a8"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"FutureTask.run() \u8fd8\u6ca1\u6709\u88ab\u6267\u884c\u7684\u4e4b\u524d\uff0cFutureTask\u5904\u4e8e\u672a\u542f\u52a8\u72b6\u6001"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u5df2\u542f\u52a8"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"FutureTask.run()\u65b9\u6cd5\u88ab\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0cFutureTask\u5904\u4e8e\u5df2\u542f\u52a8\u72b6\u6001"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u5df2\u5b8c\u6210"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"FutureTask.run()\u65b9\u6cd5\u6267\u884c\u5b8c\u540e\u6b63\u5e38\u7ed3\u675f\u3001\u901a\u8fc7FutureTask.cancel()\u3001FutureTask.run()\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u800c\u7ed3\u675f,FutureTask\u90fd\u5904\u4e8e\u5df2\u5b8c\u6210\u72b6\u6001"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("mark",null,"\u6ce8\u610f\u70b9"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("font",{color:"red"},"\u5f53FutureTask\u5904\u4e8e\u672a\u542f\u52a8\u6216\u8005\u5df2\u542f\u52a8\u72b6\u6001\u7684\u65f6\u5019,\u6267\u884cFutureTask.get()\u65b9\u6cd5\u4f1a\u5bfc\u81f4\u8c03\u7528\u7ebf\u7a0b\u7684\u963b\u585e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("font",{color:"red"},"\u5f53FutureTask\u5904\u4e8e\u5df2\u5b8c\u6210\u72b6\u6001\u65f6,\u6267\u884cFutureTask.get()\u65b9\u6cd5\u4f1a\u5bfc\u81f4\u8c03\u7528\u7ebf\u7a0b\u7acb\u5373\u8fd4\u56de\u7ed3\u679c\u6216\u8005\u629b\u51fa\u5f02\u5e38")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("font",{color:"red"},"\u5f53FutureTask\u5904\u4e8e\u672a\u542f\u52a8\u72b6\u6001\u65f6,\u6267\u884cFutureTask.cancel()\u65b9\u6cd5\u4f1a\u5bfc\u81f4\u8be5\u4efb\u52a1\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u6267\u884c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("font",{color:"red"},"\u5f53FutureTask\u5904\u4e8e\u5df2\u542f\u52a8\u72b6\u6001\u65f6,\u6267\u884cFutureTask.cancel(true)\u65b9\u6cd5\u4f1a\u4ee5\u4e2d\u65ad\u7684\u65b9\u5f0f\u505c\u6b62\u8be5\u4efb\u52a1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("font",{color:"red"},"\u5f53FutureTask\u5904\u4e8e\u5df2\u542f\u52a8\u72b6\u6001\u65f6,\u6267\u884cFutureTask.cancel(false)\u65b9\u6cd5\u4e0d\u4f1a\u5bf9\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\u4ea7\u751f\u5f71\u54cd(\u8ba9\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\u6267\u884c\u5b8c\u6210)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("font",{color:"red"},"\u5f53FutureTask\u5904\u4e8e\u5df2\u5b8c\u6210\u72b6\u6001\u65f6,\u6267\u884cFutureTask.cancel()\u65b9\u6cd5\u4f1a\u8fd4\u56defalse"))))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5062).Z,width:"850",height:"600"})),(0,r.kt)("h2",{id:"future\u4ee3\u7801\u793a\u4f8b"},"Future\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u793a\u4f8b1"},"\u793a\u4f8b1"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7ebf\u7a0b\u6c60submit\u65b9\u6cd5\u8fd4\u56deFuture\u5bf9\u8c61"),(0,r.kt)("p",{parentName:"blockquote"},"\u5411\u7ebf\u7a0b\u6c60\u4e2d\u63d0\u4ea4\u4efb\u52a1,\u7ebf\u7a0b\u6c60\u4f1a\u7acb\u5373\u8fd4\u56de\u4e00\u4e2a\u7a7a\u7684 Future\u5bb9\u5668\u3002\u4e00\u65e6\u7ebf\u7a0b\u7684\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e,\u7ebf\u7a0b\u6c60\u4f1a\u5c06\u7ed3\u679c\u56de\u586b\u5230\u4e4b\u524d\u83b7\u53d6\u7684Future\u4e2d(\u4e0d\u662f\u65b0\u5efa\u4e00\u4e2aFuture\u5bf9\u8c61)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * <b>\u901a\u8fc7\u7ebf\u7a0b\u6c60\u7684submit\u65b9\u6cd5\u8fd4\u56deFuture\u5bf9\u8c61</b>\n * @author <a href="mailto:zhuyuliangm@gmail.com">zyl</a>\n */\npublic class FutureTaskDemo1 {\n    private static final int coreNum = Runtime.getRuntime().availableProcessors();\n    private static final BlockingQueue QUEUE = new ArrayBlockingQueue(1024);\n    private static final RejectedExecutionHandler reject = new ThreadPoolExecutor.CallerRunsPolicy();\n\n    public static void main(String[] args) throws InterruptedException {\n        ThreadPoolExecutor executor = new ThreadPoolExecutor(coreNum, 2*coreNum, 60L, TimeUnit.SECONDS,QUEUE,reject);\n\n        Callable<Object> task = () -> {\n            System.out.println("\u5f00\u59cb\u6267\u884c\u4efb\u52a1");\n            TimeUnit.SECONDS.sleep(5);\n            return "\u5f53\u524d\u65e5\u671f:"+LocalDate.now().toString();\n        };\n        //executor.submit\u5373\u53ef\u4ee5\u63d0\u4ea4Runnable,\u4e5f\u53ef\u4ee5\u63d0\u4ea4Callable\n        Future<Object> future = executor.submit(task);\n        try {\n            System.out.println("\u7b49\u5f85Future\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u524d\u6267\u884c\u5176\u4ed6\u4efb\u52a1");\n            TimeUnit.SECONDS.sleep(5);\n            System.out.println("Future\u7ed3\u679c\u662f:"+future.get());\n        } catch (ExecutionException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"\u793a\u4f8b2"},"\u793a\u4f8b2"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u591a\u4e2a\u4efb\u52a1\u7528Future\u6570\u7ec4\u6279\u91cf\u63a5\u6536\u7ed3\u679c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * <b>\u6279\u91cf\u63d0\u4ea4\u4efb\u52a1</b>\n *\n * @author <a href="mailto:zhuyuliangm@gmail.com">zyl</a>\n */\npublic class FutureDemo2 {\n    private static final int coreNum = Runtime.getRuntime().availableProcessors();\n    private static final BlockingQueue QUEUE = new ArrayBlockingQueue(1024);\n    private static final RejectedExecutionHandler reject = new ThreadPoolExecutor.CallerRunsPolicy();\n\n    public static void main(String[] args) throws InterruptedException {\n        ThreadPoolExecutor executor = new ThreadPoolExecutor(coreNum, 2*coreNum, 60L, TimeUnit.SECONDS,QUEUE,reject);\n\n        ArrayList<Future> futures = new ArrayList();\n\n        Callable<String> task = () -> {\n            System.out.println("\u5f00\u59cb\u6267\u884c\u4efb\u52a1");\n            TimeUnit.SECONDS.sleep(5);\n            return "\u5f53\u524d\u65e5\u671f:" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));\n        };\n\n        for (int i = 1; i <= 15; i++) {\n            futures.add(executor.submit(task));\n        }\n        System.out.println("\u7b49\u5f85Future\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u524d\u6267\u884c\u5176\u4ed6\u4efb\u52a1");\n        TimeUnit.SECONDS.sleep(5);\n        futures.forEach((future -> {\n            try {\n                System.out.println("Future\u7ed3\u679c\u662f:"+future.get());\n            } catch (InterruptedException | ExecutionException e) {\n                e.printStackTrace();\n            }\n        }));\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90298).Z,width:"463",height:"623"})),(0,r.kt)("h3",{id:"\u793a\u4f8b3"},"\u793a\u4f8b3"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u629b\u51faException")),(0,r.kt)("p",null,"\u6267\u884c\u4efb\u52a1\u4e2d\u7684\u5f02\u5e38\u53ea\u4f1a\u5728get\u83b7\u53d6\u4efb\u52a1\u6267\u884c\u7ed3\u679c\u7684\u65f6\u5019\u629b\u51fa,\u5e76\u4e14\u5f02\u5e38\u4e3aExecutionException"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * <b>\u629b\u51fa\u5f02\u5e38 -> \u53ea\u6709\u5728get\u65b9\u6cd5\u5c1d\u8bd5\u83b7\u53d6\u7684\u65f6\u5019\u624d\u4f1a\u629b\u51fa\u5f02\u5e38</b>\n *\n * @author <a href="mailto:zhuyuliangm@gmail.com">zyl</a>\n */\npublic class FutureDemo3 {\n    private static final int coreNum = Runtime.getRuntime().availableProcessors();\n    private static final BlockingQueue QUEUE = new ArrayBlockingQueue(1024);\n    private static final RejectedExecutionHandler reject = new ThreadPoolExecutor.CallerRunsPolicy();\n    private static final Logger log = LoggerFactory.getLogger(FutureDemo3.class);\n\n    public static void main(String[] args) {\n        ThreadPoolExecutor executor = new ThreadPoolExecutor(coreNum, 2*coreNum, 60L, TimeUnit.SECONDS,QUEUE,reject);\n\n        Callable<Integer> task = () -> {\n            log.info("\u6267\u884c\u4efb\u52a1");\n            throw  new IllegalArgumentException("\u975e\u6cd5\u53c2\u6570\u5f02\u5e38");\n        };\n        Future<Integer> future = executor.submit(task);\n        try {\n            TimeUnit.SECONDS.sleep(3);\n            log.info("\u83b7\u53d6\u4efb\u52a1\u6267\u884c\u7ed3\u679c");\n            future.get();\n        } catch (ExecutionException e) {\n            System.out.println("ExecutionException");\n            e.printStackTrace();\n        } catch (InterruptedException e) {\n            System.out.println("InterruptedException");\n        }\n\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(29129).Z,width:"989",height:"233"})),(0,r.kt)("h3",{id:"\u793a\u4f8b4"},"\u793a\u4f8b4"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u83b7\u53d6\u4efb\u52a1\u7ed3\u679c\u8d85\u65f6\u4e0ecancel\u65b9\u6cd5\u7684\u4f7f\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * <b>get\u65b9\u6cd5\u83b7\u53d6\u4efb\u52a1\u7ed3\u679c\u8d85\u65f6</b>\n *\n * @author <a href="mailto:zhuyuliangm@gmail.com">zyl</a>\n */\npublic class FutureTaskDemo3 {\n    private static final int coreNum = Runtime.getRuntime().availableProcessors();\n    private static final BlockingQueue QUEUE = new ArrayBlockingQueue(1024);\n    private static final RejectedExecutionHandler reject = new ThreadPoolExecutor.CallerRunsPolicy();\n    private static final Logger log = LoggerFactory.getLogger(FutureDemo3.class);\n\n    public static void main(String[] args) {\n        ThreadPoolExecutor executor = new ThreadPoolExecutor(coreNum, coreNum, 60L, TimeUnit.SECONDS, QUEUE, reject);\n\n        // \u4efb\u52a1\u7684\u6267\u884c\u9700\u89815s\n        Future<String> future = executor.submit(() -> {\n            try {\n                log.info("\u5f00\u59cb\u6267\u884c\u4efb\u52a1");\n                Thread.sleep(4000);\n            }catch (InterruptedException ex) {\n                System.out.println("\u88abcancel\u53d6\u6d88\u4e2d\u65ad\u4e86");\n            }\n            return "\u5f53\u524d\u65e5\u671f:" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));\n        });\n        // \u8bbe\u5b9a\u4e3a3s\u8d85\u65f6\n        try {\n            future.get(3L,TimeUnit.SECONDS);\n        } catch (InterruptedException e) {\n            System.out.println("\u4e2d\u65ad\u5f02\u5e38");\n        } catch (ExecutionException e) {\n            System.out.println("\u6267\u884c\u4efb\u52a1\u5f02\u5e38");\n        } catch (TimeoutException e) {\n            System.out.println("\u8d85\u65f6\u5f02\u5e38");\n            boolean cancel = future.cancel(true);\n            System.out.println("cancel\u7ed3\u679c:"+cancel);\n        }\n\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(95888).Z,width:"746",height:"138"})),(0,r.kt)("h2",{id:"\u901a\u8fc7futuretask\u521b\u5efafuture"},"\u901a\u8fc7FutureTask\u521b\u5efaFuture"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * <b>\u5229\u7528FutureTask\u521b\u5efaFuture</b>\n *\n * @author <a href="mailto:zhuyuliangm@gmail.com">zyl</a>\n */\npublic class FutureTaskDemo5 {\n    private static final int coreNum = Runtime.getRuntime().availableProcessors();\n    private static final BlockingQueue QUEUE = new ArrayBlockingQueue(1024);\n    private static final RejectedExecutionHandler reject = new ThreadPoolExecutor.CallerRunsPolicy();\n    private static final Logger log = LoggerFactory.getLogger(FutureDemo3.class);\n\n    public static void main(String[] args) {\n        ThreadPoolExecutor executor = new ThreadPoolExecutor(coreNum, coreNum, 60L, TimeUnit.SECONDS, QUEUE, reject);\n\n        Callable<String> task = () -> {\n            log.info("\u5f00\u59cb\u6267\u884c\u4efb\u52a1");\n            TimeUnit.SECONDS.sleep(5);\n            return "\u5f53\u524d\u65e5\u671f:" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));\n        };\n        FutureTask<String> futureTask = new FutureTask<>(task);\n        executor.execute(futureTask);\n        try {\n            String result = futureTask.get();\n            log.info("\u83b7\u53d6\u5230\u8fd4\u56de\u7ed3\u679c\u4e3a:"+result);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        } catch (ExecutionException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(77988).Z,width:"991",height:"159"})))}m.isMDXComponent=!0},90298:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211205150214552-c453e2e657b43ed62ff4b28c1a56af82.png"},29129:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211205151235090-ca1c608a2c33ac70dc9a1329fed93966.png"},5062:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211205153049119-83b6e2e2d51a3fc162ae71c05b23f23e.png"},95888:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211205154348816-ee61753d4e5d9f080f49ed7a0ede2552.png"},77988:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20211205161325316-837bd757a7ced52d733f4e117c5b1f33.png"}}]);