# Element

此对象为 org.jsoup.nodes.Element 内置对象，类型扩展[参考](https://github.com/kkangert/kspider/blob/main/kspider-core/src/main/java/top/kangert/kspider/executor/function/extension/ElementFunctionExtension.java)

## xpath

| 参数名 |     描述     | 可否为空 |
| :----: | :----------: | :------: |
| xpath  | xpath 表达式 |    否    |

::: tip

返回值类型：Element/String

:::

-   根据 xpath 获取内容或 Element 对象

    ```javascript
    ${elementVar.xpath('//a/@href')}
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
    ${elementVar.xpaths('//a/@href')}
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
    ${elementVar.regx('<title>(.*?)</title>')}
    ```

## regxs

| 参数名  |                  描述                  | 可否为空 |
| :-----: | :------------------------------------: | :------: |
| pattern |               正则表达式               |    否    |
| groups  | 捕获组序号 int 或 List\<Integer>(多个) |    是    |

::: tip

返回值类型：List\<String>/List\<List\<String>>

:::

-   根据正则表达式提取字符串

    ```javascript
    ${elementVar.regxs('<h2>(.*?)</h2>')}
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
${elementVar.selector('div a.selected')}
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
${elementVar.selectors('div a.selected')}
```

## attr

|  参数名  |  描述  | 可否为空 |
| :------: | :----: | :------: |
| attrName | 属性名 |    否    |

::: tip
返回值类型：String
:::

-   获取节点的属性值

```javascript
${elementVar.attr('src')}
```

## text

::: tip
返回值类型：String
:::

-   获取节点的 Text

```javascript
${elementVar.text()}
```

## html

::: tip
返回值类型：String
:::

-   获取节点的 html

```javascript
${elementVar.html()}
```

## parent

::: tip
返回值类型：Element
:::

-   获取节点的父节点

```javascript
${elementVar.parent()}
```

## children

::: tip
返回值类型：Elements
:::

-   获取节点的子节点

```javascript
${elementVar.elements()}
```
