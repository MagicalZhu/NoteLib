"use strict";(self.webpackChunkhuakucha=self.webpackChunkhuakucha||[]).push([[4969],{56732:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var l=t(87462),n=(t(67294),t(3905));t(61839);const r={id:"ThreadLocal",title:"ThreadLocal"},o=void 0,i={unversionedId:"\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/ThreadLocal",id:"\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/ThreadLocal",title:"ThreadLocal",description:"\u6982\u8ff0",source:"@site/docs/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/3.2\u5e76\u53d1\u5de5\u5177\u7c7b-ThreadLocal.md",sourceDirName:"\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236",slug:"/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/ThreadLocal",permalink:"/docs/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/ThreadLocal",draft:!1,editUrl:"https://github.com/MagicalZhu/NoteLib/tree/main/docs/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/3.2\u5e76\u53d1\u5de5\u5177\u7c7b-ThreadLocal.md",tags:[],version:"current",lastUpdatedBy:"YuLiang Zhu",lastUpdatedAt:1670289592,formattedLastUpdatedAt:"2022\u5e7412\u67086\u65e5",frontMatter:{id:"ThreadLocal",title:"ThreadLocal"},sidebar:"basicSideBar",previous:{title:"\u7ebf\u7a0b\u6c60",permalink:"/docs/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/\u7ebf\u7a0b\u6c60"},next:{title:"Lock\u9501",permalink:"/docs/\u5e76\u53d1\u7f16\u7a0b/\u5e76\u53d1\u63a7\u5236/Lock\u9501"}},p={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u573a\u666f1:\u7ebf\u7a0b\u72ec\u4eab\u5bf9\u8c61",id:"\u573a\u666f1\u7ebf\u7a0b\u72ec\u4eab\u5bf9\u8c61",level:3},{value:"step1:1000\u4e2a\u65e5\u671f\u6253\u5370\u4efb\u52a1(\u7ebf\u7a0b\u6c60)",id:"step11000\u4e2a\u65e5\u671f\u6253\u5370\u4efb\u52a1\u7ebf\u7a0b\u6c60",level:4},{value:"step2:\u63d0\u53d6\u683c\u5f0f\u5316\u53d8\u91cf",id:"step2\u63d0\u53d6\u683c\u5f0f\u5316\u53d8\u91cf",level:4},{value:"step3:ThreadLocal",id:"step3threadlocal",level:4},{value:"\u573a\u666f2:\u5168\u5c40\u53d8\u91cf\u9010\u7ea7\u4f20\u9012",id:"\u573a\u666f2\u5168\u5c40\u53d8\u91cf\u9010\u7ea7\u4f20\u9012",level:3},{value:"ThreadLocal\u5e38\u89c1\u65b9\u6cd5",id:"threadlocal\u5e38\u89c1\u65b9\u6cd5",level:2},{value:"ThreadLocalMap",id:"threadlocalmap",level:2},{value:"ThreadLocal\u4f7f\u7528\u6ce8\u610f\u70b9",id:"threadlocal\u4f7f\u7528\u6ce8\u610f\u70b9",level:2},{value:"\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",id:"\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",level:3},{value:"\u7a7a\u6307\u9488\u95ee\u9898",id:"\u7a7a\u6307\u9488\u95ee\u9898",level:3},{value:"\u5171\u4eab\u5bf9\u8c61\u95ee\u9898",id:"\u5171\u4eab\u5bf9\u8c61\u95ee\u9898",level:3},{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",level:3}],c={toc:d};function u(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u591a\u7ebf\u7a0b\u4e0b\u8bbf\u95ee\u5171\u4eab\u7684\u53ef\u53d8\u6570\u636e\u65f6\uff0c\u901a\u5e38\u9700\u8981\u4f7f\u7528\u540c\u6b65\u3002\u4e00\u79cd\u907f\u514d\u540c\u6b65\u7684\u65b9\u5f0f\u5c31\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"\u4e0d\u5171\u4eab\u6570\u636e"),"\uff0c\u5982\u679c\u53ea\u5728\u5355\u7ebf\u7a0b\u4e2d\u8bbf\u95ee\u6570\u636e\uff0c\u5c31\u4e0d\u4f1a\u51fa\u73b0\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\uff0c\u8fd9\u79cd\u6280\u672f\u53eb\u505a",(0,n.kt)("inlineCode",{parentName:"p"},"\u7ebf\u7a0b\u5c01\u95ed")),(0,n.kt)("p",{parentName:"blockquote"},"\u5e38\u89c1\u7684\u7ebf\u7a0b\u5c01\u95ed\u6280\u672f\u6709: \u5c40\u90e8\u53d8\u91cf\u3001ThreadLocal(Thread\u7684\u6210\u5458\u53d8\u91cf)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"ThreadLocal \u53ef\u4ee5\u5c06\u7ebf\u7a0b\u5bf9\u8c61\u4e0e\u67d0\u4e2a\u503c\u5173\u8054\u8d77\u6765\u3002\u901a\u8fc7set/get\u65b9\u6cd5\u5206\u522b\u8bbe\u7f6e\u3001\u83b7\u53d6\u53d8\u91cf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ThreadLocal\u901a\u5e38\u7528\u4e8e\u9632\u6b62\u5bf9\u5355\u5b9e\u4f8b\u53d8\u91cf\u3001\u5168\u5c40\u53d8\u91cf\u8fdb\u884c\u5171\u4eab")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"\u6bcf\u4e2a\u7ebf\u7a0b\u521d\u6b21\u8c03\u7528 ThreadLocal.get()\u65b9\u6cd5\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528initialValue()\u65b9\u6cd5\u83b7\u53d6\u521d\u59cb\u503c"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Thread\u7ef4\u62a4\u4e86\u4e00\u4e2aThreadLocalMap","[ThreadLocal key,Object value]"," \u7c7b\u578b\u7684\u53d8\u91cfthreadLocals,\u6240\u4ee5\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u62e5\u6709\u591a\u4e2aThreadLocal\u5bf9\u8c61",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"\u5373\u8bbe\u7f6e\u7684\u503c\u5b9e\u9645\u662f\u4fdd\u5b58\u5728\u5f53\u524dThread\u7ebf\u7a0b\u5bf9\u8c61\u7684\xa0threadLocals\u5c5e\u6027\u4e2d\uff0c\u53ea\u662f\u901a\u8fc7ThreadLocal\u8fdb\u884c\u7ef4\u62a4")))),(0,n.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u505c\u6b62\u540e\uff0cThreadLocal\u4e2d\u7684\u6570\u636e\u4f1a\u88ab\u4f5c\u4e3a\u5783\u573e\u56de\u6536")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt",src:t(92265).Z,width:"1386",height:"1054"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ThreadLocal.set(T value)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public void set(T value) {\n    Thread t = Thread.currentThread();\n    // \u8fd4\u56de\u5f53\u524d\u7ebf\u7a0b\u7684ThreadLocalMap\u5bf9\u8c61\n    ThreadLocalMap map = getMap(t);\n    if (map != null)\n        // \u8bbe\u7f6eThreadLocalMap\uff0ckey\u662fThreadLocal\uff0cvalue\u662f\u8bbe\u7f6e\u7684\u503c -> \u4e00\u4e2aThread\u53ef\u4ee5\u6709\u591a\u4e2aThreadLocal\n        map.set(this, value);\n    else\n        createMap(t, value);\n}\n")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u9700\u8981\u4e00\u4e2a\u72ec\u4eab\u7684\u5bf9\u8c61"),"(\u901a\u5e38\u662f\u5de5\u5177\u7c7b\uff0c\u6bd4\u5982SimpleDateFormat\u3001Random)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"\u6bcf\u4e2a\u7ebf\u7a0b\u5185\u9700\u8981\u4fdd\u5b58\u5168\u5c40\u53d8\u91cf\uff0c\u53ef\u4ee5\u8ba9\u4e0d\u540c\u65b9\u6cd5\u76f4\u63a5\u4f7f\u7528\uff0c\u907f\u514d\u53c2\u6570\u4f20\u9012\u7684\u9ebb\u70e6"),"(\u6bd4\u5982\u62e6\u622a\u5668\u4e2d\u83b7\u53d6\u7528\u6237\u4fe1\u606f)")),(0,n.kt)("h3",{id:"\u573a\u666f1\u7ebf\u7a0b\u72ec\u4eab\u5bf9\u8c61"},"\u573a\u666f1:\u7ebf\u7a0b\u72ec\u4eab\u5bf9\u8c61"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u7ebf\u7a0bThread\u90fd\u6709\u81ea\u5df1\u7684\u5de5\u4f5c\u5185\u5b58\u3001\u5b9e\u4f8b\u526f\u672c\uff0c\u5de5\u4f5c\u5185\u5b58\u5360\u7528\u7684\u6570\u636e\u4e0d\u5171\u4eab")),(0,n.kt)("h4",{id:"step11000\u4e2a\u65e5\u671f\u6253\u5370\u4efb\u52a1\u7ebf\u7a0b\u6c60"},"step1:1000\u4e2a\u65e5\u671f\u6253\u5370\u4efb\u52a1(\u7ebf\u7a0b\u6c60)"),(0,n.kt)("font",{color:"red"},"\u95ee\u9898:\xa0"),"1000\u4e2a\u7ebf\u7a0b\u4f1a\u521b\u5efa1000\u4e2aSimpleDateFormat\u5bf9\u8c61",(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * <b>1000\u4e2a\u7ebf\u7a0b\u6253\u5370\u65e5\u671f</b>\n *\n * @author <a href="mailto:zhuyuliangm@gmail.com">zyl</a>\n */\npublic class SimpleDateFormatDemo {\n    public String formatDate(int seconds) {\n        Date date = new Date(1000 * seconds);\n        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:sss");\n        return simpleDateFormat.format(date);\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        // \u4f7f\u7528\u7ebf\u7a0b\u6c60\n        ExecutorService threadPool = Executors.newFixedThreadPool(10);\n        for (int i = 0; i < 1000; i++) {\n            int finalI = i;\n            threadPool.execute(() -> {\n                String str = new SimpleDateFormatDemo().formatDate(finalI);\n                System.out.println(str);\n            });\n        }\n        threadPool.shutdown();\n    }\n}\n')),(0,n.kt)("h4",{id:"step2\u63d0\u53d6\u683c\u5f0f\u5316\u53d8\u91cf"},"step2:\u63d0\u53d6\u683c\u5f0f\u5316\u53d8\u91cf"),(0,n.kt)("font",{color:"red"},"\u95ee\u9898"),": \u6253\u5370\u7684\u7ed3\u679c\u51fa\u73b0\u91cd\u56de\u7684\u6570\u636e",(0,n.kt)("font",{color:"red"},"\u539f\u56e0: \u6240\u6709\u7ebf\u7a0b\u5171\u7528\u4e00\u4e2aSimpleDateFormat\u51fa\u73b0\u4e86\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898 -> ",(0,n.kt)("strong",null,"SimpleDateFormat\u662f\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684")),(0,n.kt)("p",null,"\u89e3\u51b3\u65b9\u6848: \u52a0\u9501"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class SimpleDateFormatDemo2 {\n    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:sss");\n    public String formatDate(int seconds) {\n        Date date = new Date(1000 * seconds);\n        return DATE_FORMAT.format(date);\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        // \u4f7f\u7528\u7ebf\u7a0b\u6c60\n        ExecutorService threadPool = Executors.newFixedThreadPool(10);\n        for (int i = 0; i < 1000; i++) {\n            int finalI = i;\n            threadPool.execute(() -> {\n                String str = new SimpleDateFormatDemo2().formatDate(finalI);\n                System.out.println(str);\n            });\n        }\n        threadPool.shutdown();\n    }\n}\n\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt",src:t(76266).Z,width:"602",height:"534"})),(0,n.kt)("h4",{id:"step3threadlocal"},"step3:ThreadLocal"),(0,n.kt)("font",{color:"red"},"\u7ebf\u7a0b\u6c60\u4e2d\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u4f1a\u6709\u4e00\u4e2aThreadLocal\u5bf9\u8c61\uff0c\u800c\u6bcf\u4e2aThreadLocal\u5bf9\u8c61\u5185\u90e8\u5b58\u50a8\u7740\u72ec\u663e\u7684SimpleDateFormat\u5bf9\u8c61"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class SimpleDateFormatDemo3 {\n    private static ThreadLocal<SimpleDateFormat> threadLocal = ThreadLocal.withInitial(\n            () -> {\n                return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:sss");\n            }\n    );\n    public String formatDate(int seconds) {\n        Date date = new Date(1000 * seconds);\n        // \u6bcf\u4e2a\u7ebf\u7a0b\u5185\u90e8\u90fd\u6709\u81ea\u5df1\u7684SimpleDateFormat\u5b9e\u4f8b\u5bf9\u8c61,\u4e14\u4e92\u4e0d\u5171\u4eab\n        return ThreadUtil.getThreadInfo3()+ "==>" +threadLocal.get().format(date);\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        // \u4f7f\u7528\u7ebf\u7a0b\u6c60\n        ExecutorService threadPool = Executors.newFixedThreadPool(10);\n        for (int i = 0; i < 1000; i++) {\n            int finalI = i;\n            threadPool.execute(() -> {\n                String str = new SimpleDateFormatDemo3().formatDate(finalI);\n                System.out.println(str);\n            });\n        }\n        threadPool.shutdown();\n    }\n}\n\n')),(0,n.kt)("h3",{id:"\u573a\u666f2\u5168\u5c40\u53d8\u91cf\u9010\u7ea7\u4f20\u9012"},"\u573a\u666f2:\u5168\u5c40\u53d8\u91cf\u9010\u7ea7\u4f20\u9012"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u4f1a\u7ef4\u62a4\u4e00\u4e2aThreadLocal")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * <b>\u53c2\u6570\u9010\u7ea7\u4f20\u9012\u7684\u95ee\u9898\u4ee5\u53ca\u4e00\u4e2aThread\u53ef\u4ee5\u6301\u6709\u591a\u4e2aThreadLocal</b>\n *\n * @author <a href="mailto:zhuyuliangm@gmail.com">zyl</a>\n */\npublic class ThreadLocalDemo2 {\n    public void step1() {\n        User user = UserContextHolder.userHolder.get();\n        Player player = PlayerContextHolder.getPlayerContext();\n        System.out.println("step1"+user+","+player);\n\n    }\n    public void step2() {\n        User user = UserContextHolder.getUserContext();\n        Player player = PlayerContextHolder.getPlayerContext();\n        System.out.println("step2"+user+","+player);\n    }\n    public void step3() {\n        User user = UserContextHolder.getUserContext();\n        Player player = PlayerContextHolder.getPlayerContext();\n        System.out.println("step3"+user+","+player);\n    }\n\n    public static void main(String[] args) {\n        ExecutorService threadPool = Executors.newFixedThreadPool(2);\n        for (int i = 0; i < 2; i++) {\n            User user = new User("name-"+i, UUID.randomUUID().toString(), "\u5e38\u5dde",20+i);\n            Player player = new Player("name-"+i, UUID.randomUUID().toString());\n            threadPool.execute(() -> {\n                UserContextHolder.setUserContext(user);\n                PlayerContextHolder.setPlayerContext(player);\n                ThreadLocalDemo2 localDemo2 = new ThreadLocalDemo2();\n                localDemo2.step1();\n                localDemo2.step2();\n                localDemo2.step3();\n            });\n        }\n        threadPool.shutdown();\n    }\n}\n@Data\n@AllArgsConstructor\n@RequiredArgsConstructor\n@ToString\nclass User {\n    private String name;\n    private String userId;\n    private String address;\n    private int age;\n}\n@Data\n@AllArgsConstructor\n@RequiredArgsConstructor\n@ToString\nclass Player {\n    private String name;\n    private String playerId;\n}\n\nfinal class UserContextHolder{\n    public static ThreadLocal<User> userHolder = new ThreadLocal<>();\n    private UserContextHolder() {\n    }\n    public static void resetUserContext() {\n        userHolder.remove();\n    }\n    public static void setUserContext( User user) {\n        if (user == null) {\n            resetUserContext();\n        }\n        else {\n            userHolder.set(user);\n        }\n    }\n    public static User getUserContext() {\n        return userHolder.get();\n    }\n}\nfinal class PlayerContextHolder{\n    public static ThreadLocal<Player> playerHolder = new ThreadLocal<>();\n    private PlayerContextHolder() {\n    }\n    public static void resetPlayerContext() {\n        playerHolder.remove();\n    }\n    public static void setPlayerContext( Player player) {\n        if (player == null) {\n            resetPlayerContext();\n        }\n        else {\n            playerHolder.set(player);\n        }\n    }\n    public static Player getPlayerContext() {\n        return playerHolder.get();\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt",src:t(81107).Z,width:"1507",height:"191"})),(0,n.kt)("h2",{id:"threadlocal\u5e38\u89c1\u65b9\u6cd5"},"ThreadLocal\u5e38\u89c1\u65b9\u6cd5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"initialValue()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u5f53\u524d\u7ebf\u7a0b\u5bf9\u5e94\u7684\u201c\u521d\u59cb\u503c\u201d\uff0c\u8fd9\u662f\u4e00\u4e2a\u5ef6\u8fdf\u52a0\u8f7d\u7684\u65b9\u6cd5\uff0c\u53ea\u6709\u5728\u8c03\u7528get()\u7684\u65f6\u5019\uff0c\u624d\u4f1a\u89e6\u53d1"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728get\u4e4b\u524d\u901a\u8fc7set\u8bbe\u7f6e\u4e86ThreadLocal\uff0c\u90a3\u4e48\u5c31\u4e0d\u4f1a\u518d\u8c03\u7528 initialValue()"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"T get()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6307\u5b9aThreadLocal\u4e2d\u7684\u503c"),(0,n.kt)("li",{parentName:"ul"},"\u53d6\u51fa\u5f53\u524d\u7ebf\u7a0b\u7684ThreadLocalMap\u5bf9\u8c61\uff0c\u7136\u540e\u901a\u8fc7 map.getEntry\u65b9\u6cd5\uff0c\u4f20\u5165\u5f53\u524dThreadLocal\u7684\u5f15\u7528\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff0c\u4eceThreadLocalMap\u4e2d\u53d6\u51fa\u8be5ThreadLocal\u7684value",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ThreadLocalMap\u4ee5\u53camap\u7684key\u3001value\u90fd\u5b58\u50a8\u5728\u5f53\u524d\u7ebf\u7a0b\u4e2d\uff0c\u800c\u4e0d\u662fThreadLocal\u4e2d")))),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public T get() {\n  Thread t = Thread.currentThread();\n  ThreadLocalMap map = getMap(t);\n  if (map != null) {\n    // \u8fd9\u91cc\u7684this \u5c31\u662fget\u65b9\u6cd5\u7684\u8c03\u7528\u5bf9\u8c61threadlocal\n    ThreadLocalMap.Entry e = map.getEntry(this);\n    if (e != null) {\n      T result = (T)e.value;\n      return result;\n    }\n  }\n  // ThreadLocalMap\u4e2d\u6ca1\u6709\u6570\u636e(\u6ca1\u6709\u8bbe\u7f6eThreadLocal\u5bf9\u8c61)\u65f6\uff0c\u8c03\u7528initialValue\u65b9\u6cd5\n  return setInitialValue();\n}\n")))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"set(T t)")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u6307\u5b9a\u7684ThreadLocal\u8bbe\u7f6e\u4e00\u4e2a\u65b0\u7684\u503c"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"remove()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5220\u9664\u6307\u5b9a\u7684ThreadLocal")))),(0,n.kt)("h2",{id:"threadlocalmap"},"ThreadLocalMap"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"ThreadLocalMap\u7c7b\uff0c\u4e5f\u5c31\u662f Thread.threadLocals"),(0,n.kt)("li",{parentName:"ul"},"ThreadLocalMap\u7c7b\u662f\u6bcf\u4e2a\u7ebf\u7a0bThread\u7c7b\u91cc\u9762\u7684\u4e00\u4e2a\u53d8\u91cf\uff0c\u6700\u91cd\u8981\u7684\u662f ",(0,n.kt)("inlineCode",{parentName:"li"},"Entry[] table"),",\u53ef\u4ee5\u7b80\u5355\u7684\u8ba4\u4e3a\u662f\u4e00\u4e2amap",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u952e: ThreadLocal"),(0,n.kt)("li",{parentName:"ul"},"\u503c: \u8bbe\u7f6e\u7684\u53d8\u91cf"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"ThreadLocalMap \u548c HashMap \u5904\u7406\u5143\u7d20\u51b2\u7a81\u7684\u533a\u522b?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HashMap",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u91c7\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"\u94fe\u8868\u6cd5"),",",(0,n.kt)("font",{color:"red"},"\u5728\u51b2\u7a81\u7684\u4f4d\u7f6e\u5efa\u7acb\u4e00\u4e2a\u94fe\u8868\uff0c\u7136\u540e\u5c06\u51b2\u7a81\u7684\u6570\u636e\u63d2\u5165\u5230\u94fe\u8868\u7684\u6700\u540e")," ,jdk1.8 \u4e2d\u5f53\u51b2\u7a81\u5143\u7d20\u8f83\u591a(\u5927\u4e8e8)\u65f6\uff0c\u4f1a\u8f6c\u5316\u4e3a\u7ea2\u9ed1\u6811\u5b58\u50a8\u51b2\u7a81\u5143\u7d20"))),(0,n.kt)("li",{parentName:"ul"},"ThreadLocalMap",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u91c7\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"\u7ebf\u6027\u63a2\u6d4b\u6cd5"),"\uff0c",(0,n.kt)("font",{color:"red"},"\u5373\u4e0d\u505c\u7684\u627e\u4e0b\u4e00\u4e2a\u7a7a\u4f59\u7684\u4f4d\u7f6e\u5b58\u50a8\uff0c\u800c\u4e0d\u662f\u5728\u539f\u4f4d\u7f6e\u5efa\u7acb\u94fe\u8868\u5b58\u50a8"))))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt",src:t(21532).Z,width:"634",height:"275"})),(0,n.kt)("h2",{id:"threadlocal\u4f7f\u7528\u6ce8\u610f\u70b9"},"ThreadLocal\u4f7f\u7528\u6ce8\u610f\u70b9"),(0,n.kt)("h3",{id:"\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898"},"\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u67d0\u4e2a\u5bf9\u8c61\u4e0d\u518d\u6709\u7528\uff0c\u4f46\u662f\u5360\u7528\u7740\u5185\u5b58\u4e0d\u80fd\u88ab\u56de\u6536"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"jvm\u7684\u5783\u573e\u56de\u6536\u673a\u5236\uff0c\u5728\u5185\u5b58\u5145\u8db3\u7684\u60c5\u51b5\u4e0b\uff0c\u9664\u975e\u4f60\u663e\u5f0f\u8c03\u7528System.gc()\uff0c\u5426\u5219\u5b83\u4e0d\u4f1a\u8fdb\u884c\u5783\u573e\u56de\u6536\uff1b\u5728\u5185\u5b58\u4e0d\u8db3\u7684\u60c5\u51b5\u4e0b\uff0c\u5783\u573e\u56de\u6536\u5c06\u81ea\u52a8\u8fd0\u884c"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"\u5f3a\u5f15\u7528 [\u76f4\u63a5new]")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u5177\u6709\u5f3a\u5f15\u7528\uff0c\u90a3\u5783\u573e\u56de\u6536\u5668\u7edd\u4e0d\u4f1a\u56de\u6536\u5b83\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u5185\u5b58\u7a7a\u95f4\u4e0d\u8db3\uff0cjvm\u5b81\u613f\u629b\u51faOOM\u9519\u8bef\uff0c\u4f7f\u7a0b\u5e8f\u5f02\u5e38\u7ec8\u6b62\uff0c\u4e5f\u4e0d\u4f1a\u9760\u968f\u610f\u56de\u6536\u5177\u6709\u5f3a\u5f15\u7528\u7684\u5bf9\u8c61\u6765\u89e3\u51b3\u5185\u5b58\u4e0d\u8db3\u7684\u95ee\u9898"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"\u8f6f\u5f15\u7528(SoftReference)")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u53ea\u5177\u6709\u8f6f\u5f15\u7528\uff0c\u5219\u5185\u5b58\u7a7a\u95f4\u8db3\u591f\uff0c\u5783\u573e\u56de\u6536\u5668\u5c31\u4e0d\u4f1a\u56de\u6536\u5b83;\u5982\u679c\u5185\u5b58\u7a7a\u95f4\u4e0d\u8db3\u4e86,\u5c31\u4f1a\u56de\u6536\u8fd9\u4e9b\u5bf9\u8c61\u7684\u5185\u5b58\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u8981\u5783\u573e\u56de\u6536\u5668\u6ca1\u6709\u56de\u6536\u5b83\uff0c\u8be5\u5bf9\u8c61\u5c31\u53ef\u4ee5\u88ab\u7a0b\u5e8f\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u8f6f\u5f15\u7528\u53ef\u7528\u6765\u5b9e\u73b0\u5185\u5b58\u654f\u611f\u7684\u9ad8\u901f\u7f13\u5b58"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"\u5f31\u5f15\u7528(WeakReference)")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6709\u66f4\u77ed\u7684\u751f\u547d\u5468\u671f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"\u5728\u5783\u573e\u56de\u6536\u5668\u7ebf\u7a0b\u626b\u63cf\u5b83\u6240\u7ba1\u8f96\u7684\u5185\u5b58\u533a\u57df\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e00\u65e6\u53d1\u73b0\u4e86\u53ea\u5177\u6709\u5f31\u5f15\u7528\u7684\u5bf9\u8c61\uff0c\u4e0d\u7ba1\u5f53\u524d\u5185\u5b58\u7a7a\u95f4\u8db3\u591f\u4e0e\u5426\uff0c\u90fd\u4f1a\u56de\u6536\u5b83\u7684\u5185\u5b58"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u5783\u573e\u56de\u6536\u5668\u662f\u4e00\u4e2a\u4f18\u5148\u7ea7\u5f88\u4f4e\u7684\u7ebf\u7a0b\uff0c\u56e0\u6b64\u4e0d\u4e00\u5b9a\u4f1a\u5f88\u5feb\u53d1\u73b0\u90a3\u4e9b\u53ea\u5177\u6709\u5f31\u5f15\u7528\u7684\u5bf9\u8c61"))))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt",src:t(72493).Z,width:"670",height:"295"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"ThreadLocal \u6ce8\u610f\u70b9"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ThreadLocalMap\u4e2d ",(0,n.kt)("font",{color:"red"},(0,n.kt)("strong",{parentName:"li"},"\u6bcf\u4e2a",(0,n.kt)("em",{parentName:"strong"},"Entry")," \u7684key\u90fd\u662f\u5bf9ThreadLocal\u7684\u5f31\u5f15\u7528\uff0cvalue\u662f\u5bf9\u8bbe\u7f6e\u503c\u7684\u5f3a\u5f15\u7528"))),(0,n.kt)("li",{parentName:"ul"},"\u6808\u91cc\u9762\u5f15\u7528ThreadLocal\u7684\u5bf9\u8c61\u88ab\u56de\u6536\u540e\uff0c\u7531\u4e8eEntry\u4e2d\u7684key(ThreadLocal)\u662f\u5f31\u5f15\u7528\u7684\uff0c\u6240\u4ee5\u5982\u679c\u5916\u90e8\u6ca1\u6709\u5f3a\u5f15\u7528\u5f15\u7528\u5b83\uff0ckey\u5c31\u4f1a\u88ab\u56de\u6536 ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5bfc\u81f4ThreadLocalMap\u4e2d\u7684\u6570\u636e: key=null\uff0c\u4f46\u662fvalue\u4e0d\u662fnull")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ThreadLocal\u51fa\u73b0OOM\u7684\u539f\u56e0?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"\u7531\u4e8e ThreadLocalMap\u7684\u751f\u547d\u5468\u671f\u4e0e\u7ebf\u7a0b\u5bf9\u8c61Thread\u4e00\u81f4\uff0c\u5e76\u4e14\u6ca1\u6709\u6e05\u9664\u6389Entry.key=null\u7684\u6570\u636e\uff0c\u5bfc\u81f4Entry\u5bf9\u8c61\u5806\u79ef,\u8fbe\u5230\u4e00\u5b9a\u91cf\u540e\u53ef\u80fd\u4f1a\u5bfc\u81f4OOM")),(0,n.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u7ebf\u7a0b\u7ec8\u6b62\u540e\uff0cThread\u5bf9\u5e94\u7684ThreadLocalMap\u4f1a\u88ab\u56de\u6536\uff0c\u4f46\u662f\u4e5f\u4f1a\u51fa\u73b0\u7ebf\u7a0b\u6301\u7eed\u8fd0\u884c\u7684\u60c5\u51b5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"green"},"\u6bd4\u5982\u5728\u7ebf\u7a0b\u6c60\u4e2d\uff0c\u5904\u7406\u5b8c\u4efb\u52a1\u540e\u6838\u5fc3\u7ebf\u7a0b\u4e00\u822c\u4e0d\u4f1a\u88ab\u56de\u6536\u91ca\u653e\uff0c\u6240\u4ee5\u7ebf\u7a0b\u7684ThreadLocalMap\u4f1a\u968f\u4e4b\u81a8\u80c0\uff0c\u6700\u7ec8\u53ef\u80fd\u5bfc\u81f4OOM")))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"\u4e3a\u4ec0\u4e48ThreadLocalMap\u4e2dEntry\u7684key \u662f\u5f31\u5f15\u7528?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"\u53ef\u4ee5\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u9884\u9632OOM\uff0c\u56e0\u4e3a\u5728\u8c03\u7528ThreadLocal\u7684get\u3001set\u65b9\u6cd5\u65f6\uff0c\u4f1a\u626b\u63cfkey\u7b49\u4e8enull\u7684Entry,\u5e76\u5c06\u8fd9\u4e9bEntry\u7684value\u8bbe\u7f6e\u4e3anull\uff0c\u7528\u6765\u5e2e\u52a9GC")),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5c06 Entry\u7684key\u8bbe\u7f6e\u4e3a\u5f3a\u5f15\u7528\uff0c\u90a3\u4e48\u6808\u91cc\u9762\u5f15\u7528\u7684ThreadLocal\u7684\u5bf9\u8c61\u88ab\u56de\u6536\u540e\uff0c\u7531\u4e8eThreadLocalMap\u4e2d\u7684key\u8fd8\u6301\u6709ThreadLocal\u7684\u5f3a\u5f15\u7528\uff0c\u5982\u679c\u4e0d\u624b\u52a8\u5220\u9664\u7684\u8bdd\uff0cThreadLocal\u5c31\u4e0d\u4f1a\u88abGC\u56de\u6536\uff0c\u8fbe\u5230\u4e00\u5b9a\u91cf\u540e\u5c31\u5c31\u53ef\u80fd\u4f1a\u51fa\u73b0OOM"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("font",{color:"red"},"\u5982\u4f55\u907f\u514d\u5185\u5b58\u6cc4\u6f0f?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8c03\u7528remove\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5220\u9664\u5bf9\u5e94\u7684Entry\u5bf9\u8c61\u3002\u6240\u4ee5\u4f7f\u7528\u5b8cThreadLocal\u4e4b\u540e\u5c31\u5e94\u8be5\u8c03\u7528remove\u65b9\u6cd5"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"java.lang.ThreadLocal.ThreadLocalMap#resize")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// \u91cd\u65b0\u8bbe\u7f6e\u5927\u5c0f\nprivate void resize() {\n  Entry[] oldTab = table;\n  int oldLen = oldTab.length;\n  int newLen = oldLen * 2;\n  Entry[] newTab = new Entry[newLen];\n  int count = 0;\n\n  for (int j = 0; j < oldLen; ++j) {\n    Entry e = oldTab[j];\n    if (e != null) {\n      ThreadLocal<?> k = e.get();\n      // \u5982\u679cThreadLocalMap(Entry) \u7684key(ThreadLocal)\u662fnull\uff0c\u5c31\u5c06\u5bf9\u5e94\u7684\u503c\u8bbe\u7f6e\u4e3anull\n      if (k == null) {\n        e.value = null; // Help the GC \u5e2e\u52a9GC\n      } else {\n        int h = k.threadLocalHashCode & (newLen - 1);\n        while (newTab[h] != null)\n          h = nextIndex(h, newLen);\n        newTab[h] = e;\n        count++;\n      }\n    }\n  }\n\n  setThreshold(newLen);\n  size = count;\n  table = newTab;\n}\n")),(0,n.kt)("h3",{id:"\u7a7a\u6307\u9488\u95ee\u9898"},"\u7a7a\u6307\u9488\u95ee\u9898"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ca1\u6709\u8bbe\u7f6eThreadLocal\u7684\u503c\uff0c\u76f4\u63a5\u901a\u8fc7get\u65b9\u6cd5\u83b7\u53d6\u503c\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u80fd\u4f1a\u629b\u51faNPE\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * <b>ThreadLocal\u7a7a\u6307\u9488\u5f02\u5e38</b>\n * @author <a href="mailto:zhuyuliangm@gmail.com">zyl</a>\n */\npublic class ThreadLocalNPEDemo {\n    public static ThreadLocal<Long> threadLocal = new ThreadLocal<>();\n    public void set() {\n        threadLocal.set(Thread.currentThread().getId());\n    }\n\n    /**\n     * ThreadLocalMap\u7684value\u662f\u5305\u88c5\u7c7b\u578b\u7684Long,\u800cget\u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578blong\n     * \u5305\u88c5\u7c7b\u578b\u7684null\u5728\u8fdb\u884c\u62c6\u7bb1\u7684\u65f6\u5019,\u629b\u51faNPE\n     * \u6240\u4ee5\u5c06\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u6539\u6210Long\u5373\u53ef\n     */\n    public long get() {\n        return threadLocal.get();\n    }\n\n    public static void main(String[] args) {\n        ThreadLocalNPEDemo threadLocalNPEDemo = new ThreadLocalNPEDemo();\n        // threadLocalNPEDemo.set(); \n        System.out.println(threadLocalNPEDemo.get());\n    }\n}\n\n')),(0,n.kt)("h3",{id:"\u5171\u4eab\u5bf9\u8c61\u95ee\u9898"},"\u5171\u4eab\u5bf9\u8c61\u95ee\u9898"),(0,n.kt)("font",{color:"red"},"\u5982\u679c\u5728\u6bcf\u4e2a\u7ebf\u7a0b\u4e2dThreadLocal.set() \u7684\u5bf9\u8c61\u662f\u591a\u7ebf\u7a0b\u5171\u4eab\u7684\uff0c\u90a3\u4e48ThreadLocal.get() \u53d6\u5230\u7684\u8fd8\u662f\u8fd9\u4e2a\u5171\u4eab\u5bf9\u8c61\u672c\u8eab\uff0c\u4f9d\u65e7\u5b58\u5728\u5e76\u53d1\u8bbf\u95ee\u95ee\u9898"),(0,n.kt)("h3",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u53ef\u4ee5\u4e0d\u4f7f\u7528ThreadLocal\u89e3\u51b3\u95ee\u9898\uff0c\u5c31\u4e0d\u8981\u4f7f\u7528ThreadLocal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u53ef\u4ee5\u7528\u5c40\u90e8\u53d8\u91cf"))),(0,n.kt)("li",{parentName:"ol"},"\u4f18\u5148\u4f7f\u7528\u6846\u67b6\u7684\u652f\u6301\uff0c\u800c\u4e0d\u662f\u81ea\u5df1\u521b\u9020\u3002\u56e0\u4e3a\u81ea\u5df1\u4f7f\u7528\u9700\u8981\u8fdb\u884c\u7ef4\u62a4\uff0c\u6bd4\u5982\u8c03\u7528remove\u65b9\u6cd5\u7b49",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Spring\u6709\u5f88\u591aThreadLocal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RequestContextHolder"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u83b7\u53d6request\u8bf7\u6c42\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2aHTTP\u8bf7\u6c42\u90fd\u4f1a\u5bf9\u5e94\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u7ebf\u7a0b\u4e4b\u95f4\u662f\u72ec\u7acb\u9694\u79bb\u7684"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DateTimeContextHolder")),(0,n.kt)("li",{parentName:"ul"},"...")))))))}u.isMDXComponent=!0},76266:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/image-20211004214645357-346bc949d58dd53913f3840d39ab810e.png"},92265:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/image-20211005150339896-621e60d8d0f49b518eab72285f3b2223.png"},21532:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/image-20211005225522671-011d9a6d99cd9264675058c190085fee.png"},72493:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/image-20211006120335727-6cc07f7fe08d2e98cf5dbef8f1532d33.png"},81107:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/image-20211006133200997-06f814281763c311b81cbc8053103601.png"}}]);