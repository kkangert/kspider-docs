# String

此对象为 JDK 内置对象，类型扩展[参考](https://github.com/kkangert/kspider/blob/main/kspider-core/src/main/java/top/kangert/kspider/executor/function/extension/StringFunctionExtension.java)

## element

::: tip
返回值类型：Element
:::

-   将字符串转为 Element 对象

```javascript
${strVar.element()}
```

## xpath

| 参数名 |     描述     | 可否为空 |
| :----: | :----------: | :------: |
| xpath  | xpath 表达式 |    否    |

::: tip
返回值类型：Element/String
:::

-   根据 xpath 获取内容或 Element 对象

    ```javascript
    ${strVar.xpath('//a/@href')}
    ```

## xpaths

| 参数名 |     描述     | 可否为空 |
| :----: | :----------: | :------: |
| xpath  | xpath 表达式 |    否    |

::: tip

返回值类型：List<Element/String>

:::

-   根据 xpath 获取内容或 Element 对象

    ```javascript
    ${strVar.xpaths('//a/@href')}
    ```

## regx

| 参数名  |                  描述                  | 可否为空 |
| :-----: | :------------------------------------: | :------: |
| pattern |               正则表达式               |    否    |
| groups  | 捕获组序号 int 或 List\<Integer>(多个) |    是    |

::: tip

返回值类型：String/List\<String>

:::

-   根据正则表达式提取字符串

    ```javascript
    ${strVar.regx('<title>(.*?)</title>')}
    ```

## regxs

| 参数名  |                  描述                  | 可否为空 |
| :-----: | :------------------------------------: | :------: |
| pattern |               正则表达式               |    否    |
| groups  | 捕获组序号 int 或 List\<Integer>(多个) |    是    |

::: tip

返回值类型：List\<String>/List\<List\<String>

:::

-   根据正则表达式提取字符串

    ```javascript
    ${strVar.regxs('<h2>(.*?)</h2>')}
    ```

## selector

|  参数名  |    描述    | 可否为空 |
| :------: | :--------: | :------: |
| cssQuery | css 选择器 |    否    |

::: tip

返回值类型：Element

:::

-   根据 css 选择器查找 dom

```javascript
${strVar.selector('div a.selected')}
```

## selectors

|  参数名  |    描述    | 可否为空 |
| :------: | :--------: | :------: |
| cssQuery | css 选择器 |    否    |

::: tip
返回值类型：Elements
:::

-   根据 css 选择器查找 dom

```javascript
${strVar.selectors('div a.selected')}
```

## json

::: tip
返回值类型：Object
:::

-   将字符串转为 JSON 对象

```javascript
${strVar.json()}
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
    ${strVar.jsonpath('$.code')}
    ```

### unescape

-   字符串反转义

    ```javascript
    ${strVar.unescape()}
    ```

## toDate

| 参数名  |   描述   | 可否为空 |
| :-----: | :------: | :------: |
| pattern | 日期格式 |    否    |

::: tip
返回值类型：Date
:::

-   将字符串根据 pattern 转为 Date 类型

```javascript
${strVar.toDate('yyyy-MM-dd HH:mm:ss')}
```

## toInt

|    参数名    |        描述        | 可否为空 |
| :----------: | :----------------: | :------: |
| defaultValue | 转换失败时的默认值 |    是    |

::: tip
返回值类型：int
:::

-   将字符串转为 int 类型

```javascript
${strVar.toInt()}
```

## toDouble

|    参数名    |        描述        | 可否为空 |
| :----------: | :----------------: | :------: |
| defaultValue | 转换失败时的默认值 |    是    |

::: tip
返回值类型：double
:::

-   将字符串转为 double 类型

```javascript
${strVar.toDouble()}
```

## toLong

|    参数名    |        描述        | 可否为空 |
| :----------: | :----------------: | :------: |
| defaultValue | 转换失败时的默认值 |    是    |

::: tip
返回值类型：long
:::

-   将字符串转为 long 类型

```javascript
${strVar.tolong()}
```
