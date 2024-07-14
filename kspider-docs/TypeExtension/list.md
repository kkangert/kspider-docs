# List

此对象为 JDK 内置对象，类型扩展[参考](https://github.com/kkangert/kspider/blob/main/kspider-core/src/main/java/top/kangert/kspider/executor/function/extension/ListFunctionExtension.java)

## length

::: tip
返回值类型：int
:::

-   获取 List 的长度

```javascript
${listVar.length()}
```

## join

|  参数名   |   描述   | 可否为空 |
| :-------: | :------: | :------: |
| separator | 分割字符 |    是    |

::: tip
返回值类型：String
:::

-   将 List 用 separator 拼接在一起

```javascript
${listVar.join(',')}
```

## shuffle

::: tip
返回值类型：List
:::

-   将 list 打乱顺序

```javascript
${listVar.shuffle()}
```

## sort

::: tip
返回值类型：List
:::

-   将 list 排序(正序)

```javascript
${listVar.sort()}
```
