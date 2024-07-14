# SpiderResponse

[SpiderResponse](https://github.com/kkangert/kspider/blob/main/kspider-api/src/main/java/top/kangert/kspider/io/SpiderResponse.java#L10)
为Kspider内置对象，类型扩展[参考](https://github.com/kkangert/kspider/blob/main/kspider-core/src/main/java/top/kangert/kspider/executor/function/extension/ResponseFunctionExtension.java)

## element

::: tip

返回值类型：Element

:::

-   将对象转为 Element

    ```javascript
    ${resp.element()}
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
    ${resp.xpath('//a/@href')}
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
    ${resp.xpaths('//a/@href')}
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
    ${resp.regx('<title>(.*?)</title>')}
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
    ${resp.regx('<h2>(.*?)</h2>')}
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
    ${resp.selector('div a.selected')}
    ```

## selectors

|  参数名  |    描述    | 可否为空 |
| :------: | :--------: | :------: |
| cssQuery | css 选择器 |    否    |

::: tip

返回值类型：List\<Element>

:::

-   根据 css 选择器查找 dom

    ```javascript
    ${resp.selectors('div a.selected')}
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
    ${resp.jsonpath('$.code')}
    ```

## links

| 参数名 |                     描述                     | 可否为空 |
| :----: | :------------------------------------------: | :------: |
|  regx  | 正则表达式(有此参数时代表提取满足条件的链接) |    是    |

::: tip
返回值类型：List\<String>
:::

-   提取页面上的所有 a 标签的链接

    ```javascript
    ${resp.links()}
    ```

## images

::: tip
返回值类型：List\<String>
:::

-   提取页面上的所有 img 的链接

    ```javascript
    ${resp.images()}
    ```
