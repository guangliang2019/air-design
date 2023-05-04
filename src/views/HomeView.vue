<template>
  <div class="root">
    <header class="nav">
      <div class="sidebar sidebar-nav">
        <div class="logo">Air Design</div>
      </div>
      <div class="nav-inner"></div>
    </header>
    <div style="display: flex">
      <aside class="sidebar" style="margin-top: var(--nav-height)"></aside>
      <div class="temp-container">
        <div class="container">
          <div class="content">
            <div class="content-container">
              <Md :content="mock" class="main" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Md } from "../_lib/components";

export default defineComponent({
  name: "HomeView",
  components: {
    Md,
  },
  setup: () => {
    return {
      mock: `# 认识 JS 与 JS 基础
## 1. JS 是一门怎样的语言，干什么用的语言？为什么要学 JS？
JS 是一门弱类型动态类型的脚本语言（解释型语言，当然也可以作为编译型，这取决于编译器和语言的支持），JS 被普遍应用于 Web 开发，如果从事前端岗位，那么初期（从零到拿到大厂和外企前端最低级 offer 之前）知识的构成是 9 成 JS，1 成 CSS + HTML。
特性：
- 弱类型
- 动态类型
- 解释型高级语言
- 支持面向对象
- 支持函数式编程
- 每年都定期更新特性

## 2. 经常可能有听说 JS 存在 ES5、ES6 之类的版本的说法，那么这个版本如何界定，谁制定的，自己写的是哪个版本？
JS 即 JavaScript 其实大名应该叫 ECMAScript，他们会制定一个叫做 ECMAScript 「语言协议」，指明遵守该协议的语言和运行时环境，应该允许协议中书写的所有的语法。就现有环境来讲，在 IE 淘汰之后，基本上已经很少有不支持 ES6 的运行时环境了，但是由于长久以来 JS 一直存在兼用型问题，所以一般都是开发者去写最新特性的 JS 代码，而利用转译器转译为较低版本的 JS 代码（例如 ES5）

ES5 其实在 2009 ～ 2013 之间就陆续发布完成了，并且 ES6 其实早在 2015 年就已经正式发布并且封板了，也就是说，企业里要求的「熟悉 ES6 语法」其实是一个很低的标准，这里甚至都不包括 ES2020 推出的可选链、判空表达式，以及刚刚在 ES2022 年推出的 Top level await 等，但是如果你去一个技术氛围浓一点的公司，ES6 绝对是基础，如果你简历上写你熟悉 ES6+，或者熟悉 ES2020 以下，那可能还亮眼一些。

关于 ES 规范版本的命名，自打 ES6 以后，ECMA 就开始以年限来命名规范了，所以最新一期的规范是 ES2022，可能暂时大部分浏览器还不能原生支持这些较新的特性，需要转译器支持（比如 Babel 巴别塔）

有个别的 JS 语法是不能向下兼容的，比如 ES6+ Proxy，因为在生成产物阶段做了优化处理，并不能用 ES5 实现，所以即使有转译器也不能将其降级到更低版本，比如 IE 就运行不了 Vue3 写的程序，因为 Vue3 的响应式是借由 Proxy 实现的。

## 3. JS 都能应用于什么领域，或者 JS 适合哪些生态，不同生态下的 JS 有什么不同？
所有的编程语言其实并没有固定的应用场景，编程语言只是编写者，也就是人类的思维逻辑的载体，由编译器来将其分成多次步骤编译最终转化为机器语言，最终运行；在 JS 身上，体现的也比较突出，在不同的环境下，JS 会拥有相当于众不同的功能：
Web 运行时（V8，Chrome 内核，Firefox 内核等）：ECMAScript，DOM，BOM
Server 运行时（node，ben，deno 等）：ECMAScript，线程操作，存储操作，网络等 OS 相关
这也是为什么前端（Web）工程师转后端时，都推荐去学 Node.js，因为前端总是会需要一些 Server 侧的服务，学了node 弄懂后端的思维逻辑，并 node 也不怕完全用不上。

本文及后文，所讲 JS 只特定提及 ECMAScript 的内容

## 4. JS 的基础特性
1. 弱类型、动态类型，共包含 7 种基础类型，和不计数的引用类型

基础类型或原始类型：
- number 数字（相当于 C++ 的 int + flout + double，小数整数都行，额外 NaN 属于 number）
- string 字符串
- undefined 未定义
- null 空
- booleam 布尔值（bool）
- ES6 新增 Symbol 标识（用于创建永不重复的「键」）
- ES6？新增 Bigint 大整数

引用类型：
- Object 对象
- Array 数组
- Function 函数
- ...等等等，据说 ES2022 加入了原生的 Record 和 元祖

由于 JS 的运算机制，基础类型是直接放在运算栈里面存储其值的，比如你运行一个函数，嵌套很深，这个运行栈里面就会包裹中途用到的基础类型变量的值；相对的，引用类型，在运算栈里只存储了一个指针，指向堆内存中，存储这个数据详细结构与数值的地址，默认的复制方式也是采用浅复制，而且默认没有官方深复制，所以面试超爱考。这属于是 JS 默认的内存管理机制，大部分的高级语言也是这样去做的。

2. JS 是较好的支持了面向对象编程（OOP）与函数式编程（FP）的语言

语言无所谓支不支持面向对象，或者函数式编程这样的特性，因为如果你对编译环节动手，那么语言有什么特性那完全你说的算，或者你也可以引用其他的框架与库，这里我是指 JS 的官方默认实现中，比较好的支持了面向对象编程这种编程范式。

关于 JS 的面向对象，虽然 JS 有 new class 之类的关键字，但是其实那些都只是装装样子，其实他本质上用的是「原型模式」的面向对象，而非「类与实例模式」的。JS 的面向对象原理上是基于原型链的面向对象，所以这一块很常考理论题，但是实际上使用的时候对于 Coder 来说是完全无感的。

关于 JS 的函数式编程，为了更好的支持函数式编程，JS 支持将函数看作表达式，也就是函数定义可以作为「右值」，函数内可以声明函数，函数内可以返回函数，函数看起来就像是个普通变量或者表达式（即函数为一等公民），额外 JS 支持「闭包」特性，也支持默认的 compose 语法编程，例如柯里化，这些都是为了更好的支持这种编程范式。当然闭包这个特性也引入了额外的风险，典型的就是容易造成内存泄漏，这些详情应该在垃圾回收处仔细研究。

3. 给一个非常好的 JS 教学站点
https://zh.javascript.info/


`,
    };
  },
});
</script>

<style lang="less">
.temp-container {
  padding-top: var(--nav-height);
  flex: 1;
  display: flex;
  height: calc(100vh - var(--nav-height));
  background-color: var(--color-bg-1);
}
.container {
  flex: 1;
  display: flex;
  padding: 32px 32px 0;
  max-width: 960px;
  height: calc(100vh - var(--nav-height));
  margin-left: var(--sidebar-width);
  background-color: var(--color-bg-1);
  transition: margin-left 0.12s ease;
}

.content {
  order: 1;
  margin: 0;
  width: 100%;
  padding: 0 32px 128px;
  &-container {
    margin: 0 auto;
    max-width: 688px;
  }
}

.nav {
  height: var(--nav-height);
  display: flex;
  width: 500vw;
  z-index: 999;
  backdrop-filter: blur(12px);

  position: fixed;
  &-inner {
    flex: 1;
    border-bottom: 1px solid var(--color-border-1);
    background-color: rgba(30, 30, 32, 0.75);
  }
}

.sidebar {
  position: fixed;
  //margin-top: var(--nav-height);
  height: 100vh;
  padding: 0 32px;
  width: var(--sidebar-width);
  background-color: var(--color-bg-0);
  height: calc(100vh - var(--nav-height));
  transition: margin-left 0.12s ease;
  z-index: 1000;
  &-nav {
    height: var(--nav-height);
    z-index: 1000;
    .logo {
      height: 100%;
      display: flex;
      align-items: center;

      font-size: 16px;
      font-weight: 600;
      color: var(--color-text-1);

      border-bottom: 1px solid var(--color-border-1);
    }
  }
}

@media (max-width: 959px) {
  .sidebar {
    margin-top: calc(var(--nav-height) * -1);
    margin-left: calc(var(--sidebar-width) * -1);
    height: 100vh;
    position: fixed;
    &-nav {
      display: none;
    }
  }
  .container {
    margin-left: 0;
  }
}

@media (min-width: 1440px) {
  .sidebar {
    padding-left: max(calc((100vw - (var(--layout-max-width) - 64px)) / 2));
    padding-right: 32px;
    width: calc(
      (100vw - (var(--layout-max-width) - 64px)) / 2 + var(--sidebar-width) -
        32px
    );
  }
  .container {
    margin-left: calc(
      (100vw - (var(--layout-max-width) - 64px)) / 2 + var(--sidebar-width) -
        32px
    );
    transition: none;
  }
}
</style>
