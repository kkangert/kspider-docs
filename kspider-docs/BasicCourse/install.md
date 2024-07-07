# 安装部署

本章节介绍 Kspider 如何安装部署，需要什么样的环境、如何配置等。

## 准备环境

```
JDK >= 1.8
Mysql >= 5.7（使用Spring Data JPA，数据库层面根据业务需求可更改）
Maven >= 3.0 下载地址：(http://maven.apache.org/download.cgi)
```

## 运行项目

1.  克隆后端项目、前端项目

## 引入插件

### maven 方式

```xml
<!-- 以引入selenium插件为例 -->
<dependency>
	<groupId>top.kangert.kspider</groupId>
	<artifactId>kspider-selenium</artifactId>
</dependency>
```

### gradle 方式

```groovy
// 以引入selenium插件为例
implementation 'top.kangert.kspider:kspider-selenium:1.0.0'
```
