# Date

此对象为 JDK 内置对象，类型扩展[参考](https://github.com/kkangert/kspider/blob/main/kspider-core/src/main/java/top/kangert/kspider/executor/function/extension/DateFunctionExtension.java)

## format

| 参数名  |   描述   | 可否为空 |
| :-----: | :------: | :------: |
| pattern | 日期格式 |    是    |

::: tip
返回值类型：String
:::

-   将日期按给定的格式转为 String

```javascript
${dateVar.format('yyyy-MM-dd HH:mm:ss')}
```
