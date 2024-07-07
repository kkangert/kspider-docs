# 内置变量

## 爬取结果

当爬取节点执行后产生类型为`HttpResponse`的`resp`变量
| 字段名称 | 字段类型 | 字段描述 |
| ---------- | -------------------- | -------------- |
| html | String | 页面 HTML |
| json | JSONObject/JSONArray | 内容转 json 结果 |
| bytes | byte[] | 二进制结果 |
| cookies | Map<String,String> | cookies |
| headers | Map<String,String> | headers |
| statusCode | int | HTTP 状态码 |
| url | String | 当前页面的 URL |
| title | String | 当前页面的标题 |
| stream | InputStream | 二进制流(可用于下载) |

## 异常信息

当节点发生异常时，会产生 ex 变量，需要注意的是，ex 变量不会向下传递

## SQL 执行结果(TODO)

::: tip
[SQL 节点](https://github.com/kkangert/kspider?tab=readme-ov-file#todo)
执行 SQL 语句后产生此变量`rs`
:::

-   当是 select 语句时，类型为`List<Map<String,Object>>`
-   当是 selectInt 语句时，变量类型为`int`
-   当是 selectOne 语句时，变量类型为`Map<String,Object>`
-   当是 insert/update/delete 语句时，变量类型为`int`
-   当是 insertofpk 语句时，返回的是主键，变量类型为`int`
