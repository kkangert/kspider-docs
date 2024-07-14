# Object

此对象为 JDK 内置对象，类型扩展[参考](https://github.com/kkangert/kspider/blob/main/kspider-core/src/main/java/top/kangert/kspider/executor/function/extension/ObjectFunctionExtension.java)

## string

::: tip
返回值类型：String
:::

-   将对象转为 String

```javascript
${objVar.string()}
```

## jsonpath

| 参数名 |   描述   | 可否为空 |
| :----: | :------: | :------: |
|  path  | jsonpath |    否    |

::: tip
返回值类型：Object
:::

-   根据 JSONPath 提取数据

```javascript
${objVar.jsonpath('$.code')}
```

## sleep

| 参数名 |      描述      | 可否为空 |
| :----: | :------------: | :------: |
|  time  | 睡眠时间(毫秒) |    否    |

::: tip
返回值类型：Object，即返回调用者对象
:::

-   睡眠 500ms

```javascript
${objVar.sleep(500)}
```
