# 函数介绍

让我们用几个有趣的例子来解释函数的概念：

-   魔法箱
    想象你有一个魔法箱，它的功能是接收任何你投入的水果，并神奇地将它变成果汁。这里的“魔法箱”就是一个函数，水果是输入（自变量），而果汁是输出（因变量）。比如，如果你投入一个苹果，你就会得到苹果汁；投入一个橙子，你会得到橙汁。每种水果对应一种果汁，就像函数中的每个输入都有一个确定的输出。

-   年龄计算器
    假设你有一个智能机器人，当你告诉它你的出生年份，它会计算出你现在的年龄。这里，机器人的“年龄计算”功能就是一个函数。输入是出生年份（自变量），输出是你的年龄（因变量）。例如，如果你说你出生于 2000 年，机器人会告诉你现在（2024 年）你是 24 岁。

-   音乐盒
    考虑一个音乐盒，当你旋转其发条时，它会播放一首歌。这里，旋转发条的次数和歌曲的长度之间存在一种函数关系。假设每转一圈发条，音乐盒播放的时间增加一分钟。如果你转动两圈，它将播放两分钟的音乐；转动三圈，则播放三分钟。旋转发条的次数（自变量）决定了播放时间（因变量）。

在 Kspider 中也存在着函数，且可以使用内置函数满足日常需求，若无法满足，则可自定义函数。

# 内置函数

系统内置的一些函数，满足用户日常需求。

# 自定义函数

## 顶级接口
自定义函数，需要遵循顶级接口[FunctionExecutor](https://github.com/kkangert/kspider/blob/main/kspider-api/src/main/java/top/kangert/kspider/executor/FunctionExecutor.java)的约束

```java
package top.kangert.kspider.executor;

/**
 * 函数执行器
 */
public interface FunctionExecutor {

    /**
     * 获取函数前缀
     *
     * @return 函数前缀
     */
    String getFunctionPrefix();

}
```

## 自定义函数参考示例
```java
package top.kangert.kspider.executor.function;

import org.springframework.stereotype.Component;

import cn.hutool.core.date.DateField;
import cn.hutool.core.date.DateTime;
import cn.hutool.core.date.DateUtil;
import top.kangert.kspider.annotation.Comment;
import top.kangert.kspider.annotation.Example;
import top.kangert.kspider.executor.FunctionExecutor;

import java.text.ParseException;
import java.util.Date;

/**
 * 时间获取/格式化（默认格式 yyyy-MM-dd HH:mm:ss）
 */
@Component
@Comment("日期常用方法")
public class DateFunctionExecutor implements FunctionExecutor {

    @Override
    public String getFunctionPrefix() {
        return "date";
    }

    private static final String DEFAULT_PATTERN = "yyyy-MM-dd HH:mm:ss";

    @Comment("格式化日期")
    @Example("${date.format(date.now())}")
    public static String format(Date date) {
        return format(date, DEFAULT_PATTERN);
    }

    @Comment("格式化日期")
    @Example("${date.format(1569059534000l)}")
    public static String format(Long millis) {
        return format(millis, DEFAULT_PATTERN);
    }
}
```

## 函数使用示例
```JavaScript
${date.format(1569059534000l)}
```
