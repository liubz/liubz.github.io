# JavaScript 内存优化

## GC 算法

### 引用记数

1、引用记数原理：在作用域内变量被使用，引用次数加1，使用一次引用减一，引用次数为0回收变量内存。

2、优点：减少程序卡顿，及时回收内存
3、缺点：每次使用都需要改变变量的引用，比较消耗性能。 不能回收循环引用变量。

### 标记清除

1、清除标记原理: 遍历顶层作用域，可访问的变量添加标记。
2、优点： 可解决循环引用问题
3、缺点: 内存地址不连续

### 标记整理


## 工具

1. Memlab 是一款 E2E 测试和分析框架，用于发现 JavaScript 内存泄漏和优化机会。
