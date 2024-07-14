# Map

此对象为 JDK 内置对象，类型扩展[参考](https://github.com/kkangert/kspider/blob/main/kspider-core/src/main/java/top/kangert/kspider/executor/function/extension/MapFunctionExtension.java)

## toList

|  参数名   |           描述            | 可否为空 |
| :-------: | :-----------------------: | :------: |
| separator | key 和 value 之间的分隔符 |    否    |

::: tip
返回值类型：List\<String>
:::

-   将 map 转为 list

```javascript
${mapVar.toList('=')}
```
