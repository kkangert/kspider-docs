# 介绍

本功能主要应用于链式调用，以及减少编写表达式的一种方式。
除了对象本身的方法外，本项目还提供了一系列的扩展方法如 java.lang.String，本身并没有 regx 方法，通过扩展给 java.lang.String 增加 regx 方法，调用时使用${var.regx('pattern')}方式进行调用，当然，系统提供了一些内置的类型扩展，也可通过用户自定义扩展

# 内置类型

系统内置的一些类型，满足用户日常需求。

# 自定义类型

自定义类型，需要遵循顶级接口[FunctionExtension](https://github.com/kkangert/kspider/blob/main/kspider-api/src/main/java/top/kangert/kspider/executor/FunctionExtension.java)的约束

```java
package top.kangert.kspider.executor;

/**
 * Java类型对象扩展
 */
public interface FunctionExtension {

    /***
     * 扩展Java内置类型对象
     * @return  Java类型对象
     */
    Class<?> support();
}
```

## 自定义类型参考示例
```java
package top.kangert.kspider.executor.function.extension;

import top.kangert.kspider.annotation.Comment;
import top.kangert.kspider.annotation.Example;
import top.kangert.kspider.executor.FunctionExtension;
import top.kangert.kspider.io.SpiderResponse;
import top.kangert.kspider.util.ExtractUtils;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import cn.hutool.core.util.StrUtil;

import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * 爬虫响应对象的扩展
 */
@Component
public class ResponseFunctionExtension implements FunctionExtension {

    @Override
    public Class<?> support() {
        return SpiderResponse.class;
    }

    @Comment("将请求结果转为 Element 对象")
    @Example("${resp.element()}")
    public static Element element(SpiderResponse response) {
        return Jsoup.parse(response.getHtml(), response.getUrl());
    }
}
```

## 类型使用示例
```JavaScript
${resp.element()}
```