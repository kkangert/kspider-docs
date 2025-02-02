# 安装部署

本章节介绍 Kspider 如何安装部署，需要什么样的环境、如何配置等。

## 编译部署

```
JDK >= 11
Mysql >= 5.7（使用Spring Data JPA，数据库层面根据业务需求可更改）
Gradle >= 7.0
```

## 容器部署

### 1.克隆后端项目，进入项目目录运行如下命令

```shell
docker-compose -f deploy/kspider.yml up -d
```

### 2.若出现如下日志，则启动成功

::: tip
[+] Running 12/12
✔ kspider-mysql Pulled 64.4s
✔ d9a40b27c30f Pull complete 4.1s
✔ c3e750b66554 Pull complete 1.2s
✔ 8c7ce6c9ed47 Pull complete 2.0s
✔ 07b15d10f125 Pull complete 4.2s
✔ 36aa6d82134c Pull complete 3.8s
✔ ff7ba837a054 Pull complete 5.2s
✔ 2434679df156 Pull complete 8.4s
✔ 6bf60bd2cde3 Pull complete 5.5s
✔ 4914dbc1b9fc Pull complete 18.5s
✔ a24e196bc810 Pull complete 7.6s
✔ 068a7d33dd38 Pull complete  
 ✔ Network deploy_default Created 0.1s
✔ Container kspider Started 1.7s
✔ Container kspider-mysql Started 1.7s
✔ Container kspider-ui Started 0.2s
:::

### 3.初始化账号密码

-   连接 Mysql 数据库，数据库账号密码参照[部署文件](https://github.com/kkangert/kspider/blob/main/deploy/kspider.yml)
-   进入 kspider 数据库，向 kspider_user 表插入数据
-   执行 sql 脚本

```sql
-- 使用kspider数据库
use kspider;

-- 创建kspider用户
INSERT INTO kspider_user(username, password) VALUES('kangert', '111111');
```

### 4.访问 Kspider

[点击访问](http://127.0.0.1:80)

## 更新项目

```shell
docker-compose -f deploy/kspider.yml pull
```
