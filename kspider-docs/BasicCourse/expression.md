# 表达式语法

## 基本用法

本项目中表达式引擎也支持模板的方式，例如动态拼接 url

```javascript
https://www.xxx.com/${path}/q?=keyword=${keyword}
```

## 运算符

模板语言支持大多数 Java 运算符。这些运算符的优先级也与 Java 中的相同。

## 数据类型

::: tip
表达式中的数据类型及语法
:::

| 类型   | 语法                       | 描述                             |
| ------ | -------------------------- | -------------------------------- |
| byte   | `${123b}`                  | 字节数据                         |
| short  | `${123s}`                  | 短整型                           |
| int    | `${123}`                   | 整型                             |
| long   | `${123l}`                  | 长整型                           |
| float  | `${123f}`                  | 单精度浮点型                     |
| double | `${123d}`                  | 双精度浮点型                     |
| string | `${'hello'}`或`${"hello"}` | 字符串型                         |
| List   | `${[1,2,3,4,5]}`           | List 数组对象                    |
| Map    | <code>${<code>{key : "value"}</code>}</code>         | Map 对象                         |
| Map    | <code>${<code>{$key : "value"}</code>}</code>    | $key 表示动态从变量中获取 key 值 |

## 一元运算符

您可以通过一元运算`-`符将数字取反，例如`${-234}`。要取反布尔表达式，可以使用`!`运算符，例如`${!true}`。

## 算术运算符

支持常见的算术运算符，例如`${1 + 2 * 3 / 4 % 2}`

## 比较运算符

`${23 < 34}`，`${23 <= 34}`，`${23 > 34}`，`${23 >= 34}`，`${ true != false }`，`${23 == 34}`

比较运算符结果为`boolean`类型

## 逻辑运算符

除了一元运算`!`符，您还可以使用`&&`和`||`。就像 Java 中一样，运算符也是一种短路运算符。如果`&&`左边计算为`false`，则不会计算右边。如果`||`左侧为 true，则不会计算右边

## 三元运算符

三元运算符是`if`语句的简写形式，其工作方式类似于 Java 中，例如`${true ? "yes" : "no"}`

## 调用变量

```javascript
${varName}
```

通过`${变量名}`调用

## 调用方法

```javascript
${extract.xpath(resp.html,'//div[@id=abc]').regx('/\\d/').toInt()}
```

通过`${变量.方法名(参数1,参数2,....)}`进行调用

## 数组和 Map

```javascript
${myArray[2]} ${myArray[indexVar]} ${myMap.get("key")} ${myMap["key"]} ${myMap.get(keyVar)} ${myMap[keyVar]}
```

## 链式调用

与 Java 中一样，您可以无限嵌套成员，数组元素和映射访问

```javascript
${myObject.aField[12]["key"].someMethod(1, 2).anotherMethod()}
```

```javascript
${extract.xpath(resp.html,'//div[@id=abc]').regx('/\\d/').toInt()}
```
