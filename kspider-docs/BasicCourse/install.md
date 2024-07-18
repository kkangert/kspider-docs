# 安装部署

本章节介绍 Kspider 如何安装部署，需要什么样的环境、如何配置等。

## 准备环境

```
JDK >= 1.8
Mysql >= 5.7（使用Spring Data JPA，数据库层面根据业务需求可更改）
Maven >= 3.0 下载地址：(http://maven.apache.org/download.cgi)
```

## 运行项目

1.  克隆后端项目，进入项目目录运行如下命令
```shell
docker-compose -f deploy/kspider.yml up -d
```

2.	若出现如下日志，则启动成功
```shell
[+] Running 12/12
 ✔ kspider-mysql Pulled                                64.4s 
   ✔ d9a40b27c30f Pull complete                         4.1s 
   ✔ c3e750b66554 Pull complete                         1.2s 
   ✔ 8c7ce6c9ed47 Pull complete                         2.0s 
   ✔ 07b15d10f125 Pull complete                         4.2s
   ✔ 36aa6d82134c Pull complete                         3.8s
   ✔ ff7ba837a054 Pull complete                         5.2s
   ✔ 2434679df156 Pull complete                         8.4s
   ✔ 6bf60bd2cde3 Pull complete                         5.5s
   ✔ 4914dbc1b9fc Pull complete                        18.5s
   ✔ a24e196bc810 Pull complete                         7.6s
   ✔ 068a7d33dd38 Pull complete                        
 ✔ Network deploy_default   Created                     0.1s
 ✔ Container kspider        Started                     1.7s
 ✔ Container kspider-mysql  Started                     1.7s
 ✔ Container kspider-ui     Started                     0.2s
```
3.	访问 http://localhost:80