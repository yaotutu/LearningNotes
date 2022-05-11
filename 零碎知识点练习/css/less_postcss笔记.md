## Sass和Less

Sass和Less,stylus  都属于CSS预处理器，我们常说的 CSS 框架 , CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，如：变量、语句、函数、继承等概念。将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行CSS的编码工作。

官网地址： http://lesscss.org/
VSCode插件：Easy LESS
     
官网地址： https://sass-lang.com/
VSCode插件：Easy Sass

stylus  :https://stylus-lang.com/


### 语法：
#### 1 注释 ：
单行不会被编译，多行会

#### 2 变量，插值，作用域
**变量**
less:定义变量用 @
sass:定义变量用 $

**插值**
less: 

```
$number : 123px;
@key : margin;
@i : 2;

.box@{i}{
    width : @number;
    height : @number;
    @{key} : auto;
}

```
scss:

```
$key : margin;
$i : 2;
.box#{$i}{
    width : $number;
    height : $number;
    #{$key} : auto;
}
```

**作用域**
less 有作用域有变量提升， scss没有

#### 3 选择器嵌套，伪类嵌套
less与scss写法一样

```css
ul{
    list-style:none;
    li{
        float:left;
        div{ margin:10px;}
        p{ margin:20px;}
    }
    &:hover{
        color : red;
    }
}
```

#### 3 运算，单位，转义，颜色

**运算**
当2个单位不同的时候，会以第一个单位为准 ， 颜色也可以运算

less的写法
```css
@num : 100px;
.box4{
    width : @num * 3;
	/* width : @num +30; */
    height : @num + 10em;
    margin : 10em + @num;
    font : 20px / 1.5;
    padding : ~"20px / 1.5";
    color : #010203 * 2;
}
```

scss的写法
```css
$num : 100px;
.box4{
    width : $num * 3;
    //Sass中如果单位不同的话，是不能运算
    //height : $num + 20em;
    font : 20px / 1.5;
    // 默认 / 是分割的操作
    padding : (20px / 1.5);
    color : #010203 * 2;
}
```
####  4 函数
```
round:四舍五入
percentage ：百分比
random： less不能工作
sqrt:scss不能工作
function:  less不能工作
```
####  4 混入，命名空间(Less)，继承

LESS 混入
如果带括号， 定义的部分不会被单独解析， 
如果不带括号，定义的部分也会解析

```CSS
.show{
    display : block;
}
/* 可传参，也可不传参 */
.hide(@color){
    display : none;
    color : @color;
}
.box6{
    width : 100px;
    .show;
    .hide(blue);
}
```

scss 混入 以及传参
```css
@mixin show {
    display : block;
}
@mixin hide($color) {
    display : none;
    color : $color;
}

.box6{
    width : 100px;
    @include show;
    @include hide(red);
}
```

**命名空间(Less)**
只有less有命名空间的概念，scss 没有命名空间的概念

```
#test(){
    .show{ display: inline-block; }
}

.box7{
    #test.show;
}
.box8{
    #test.show;
}
```

**继承**

less

```css
.line{
    display : inline;
}
.box7{
    &:extend(.line);
}
.box8{
    &:extend(.line);
}
```

scss

```
.color { color:red}
%line{
    display : inline;
}

.box7{
    @extend %line;
	@extend .color;
}
.box8{
    @extend %line;
	@extend .color;
}
```
#### 5 合并
less
```css
.box9{
    background+ : url(a.png);
    background+ : url(b.png);
    transform+_ : scale(2);
    transform+_ : rotate(30deg);
}
```
scss
```css
$background : (
    a : url(a.png),
    b : url(b.png)
);
$tranform : (
    a : scale(2),
    b : rotate(30deg)
);

.box9{
    background : map-values($background);
    transform : zip(map-values($tranform)...);
}
```

#### 6 条件判断，循环
less
```css
@count : 3;
.get(@cn) when ( @cn > 4 ){
    width : 100px + @cn;
}
.get(@cn) when ( @cn < 4 ){
    width : 10px + @cn;
}
.box11{
    .get(@count);
}
```
scss
```css
$count : 3;
.box11{
    @if($count > 4){
        width : 100px + $count;
    }
    @else{
        width : 10px + $count;
    }
}
```

#### 7 导入
less 和 scss的语法一样
```
//less
@import './reset.less'; 

//scss
@import './reset.scss';
```



## PostCSS

PostCSS 本身是一个功能比较单一的工具。它提供了一种方式用 JavaScript 代码来处理 CSS。利用PostCSS可以实现一些工程化的操作，如：自动添加浏览器前缀，代码合并，代码压缩等。

 官方网址：https://postcss.org/

### 安装：
	1.  安装node环境
	2.  npm  install  postcss-cli –g
	3.  -o 、-w
	4.  postcss.config.js    

使用 
postcss src/main.css -o dist/demo.demo.css
postcss src/main.css -w dist/demo.demo.css  //实时监听文件的变化

### 常见插件：
	autoprefixer  ： 给css3属性添加c3前缀
	postcss-import ：合并样式
	cssnano  ：压缩css代码
	postcss-cssnext
	stylelint
	postcss-sprites
	…  	

#### autoprefixer :给css3属性添加c3前缀



写node提示语法  npm install --save-dev @types/node



新建 postcss.config.js 

```js
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');
var cssnano = require('cssnano');

module.exports = {
    plugins:[
        autoprefixer({
            browsers : [' > 0.2% ']
        }),
        postcssImport,
        cssnano
    ]
}
```

会得到警告提示如下：
![](./imgs/browser.png)

说明我们最好不要把浏览器的适配browsers写在postcss.config.js 里， 可以选择配置在package.json 或者 新建一个.browserslistrc文件并做相关配置

**package.json（方式一）**

```
 "browserslist": [
    "last 5 version",
    "> 1%",
    "ie >= 8"
  ]
```
**.browserslistrc（方式二）**

```
last 5 version
> 1%
ie >= 8
```

以上2种方式任选其一
>注意：autoprefixer只能对后缀为.css的属性有作用，不能直接作用域.less文件
所以需要先把less文件先转化成css,再使用postcss插件

#### postcssImport :合并

yarn add postcss-import

把通过```@import './reset.css';```直接合并到样式文件中
比如main.css 中使用 @import了， 如果不使用postcssImport， 不会对```@import './reset.css';```进行解析， 使用了就会把```reset.css```的样式直接合并到main.css中

#### cssnano :压缩代码

是一个模块化的 CSS 压缩器

#### postcss-cssnext : 解析高级的属性

允许你使用未来的 CSS 特性（包括 autoprefixer）

有些只有现代浏览器才支持的属性， 为了让低版本浏览器可以支持，可以使用postcss-cssnext 解析进行降级处理

```css
:root{
    --color : red;
}

div{
    background : var(--color); 
    color : var(--color);
    border : 1px var(--color) solid;
}
```
比如定义变量并使用变量， 只有现代浏览器可以支持， 但是一旦 使用postcss-cssnext就可以被解析成一般的演示

安装：yarn add postcss-cssnext
使用方法：

```
var postcssCssnext = require('postcss-cssnext');
module.exports = {
    plugins:[
        postcssCssnext  //处理高级属性，兼容低版本浏览器
    ]
}

```

#### stylelint ：不规范代码的监测

 是一个模块化的样式提示器

官网地址：https://stylelint.io/

安装：yarn add stylelint
使用方法：

```
var stylelint = require('stylelint');
module.exports = {
    plugins:[
        stylelint({
            "rules" : {
                "color-no-invalid-hex" : true
            }
        }),
    ]
}
```

#### postcss-sprites：精灵图

可以把很多小图合并成雪碧图

参考：https://github.com/2createStudio/postcss-sprites
         https://www.kutu66.com/GitHub/article_124856

安装：yarn add postcss-sprites

使用方法：
```js
var sprites = require('postcss-sprites');
module.exports = {
    plugins:[
         sprites({
            spritePath : './dist/imgs',  //雪碧图生成到哪里去
            styleSheetPath:'./src/main.css'  //要对哪些css进行雪碧图处理
        })
    ]
}
```


## CSS架构
在一个大型项目中，由于页面过多，导致CSS代码难以维护和开发。所以CSS架构可以帮助我们解决文件管理与文件划分等问题。

首先要对CSS进行模块化处理，一个模块负责一类操作行为。可利用Sass或Less来实现。

文件夹 |	含义
------ | ------
base	|	一些初始的通用CSS，如重置默认样式，动画，工具，打印等。
components	|	用于构建页面的所有组件，如按钮，表单，表格，弹窗等。
layout	|	用于布局页面的不同部分，如页眉，页脚，弹性布局，网格布局等。
pages	|	放置页面之间不同的样式，如首页特殊样式，列表页特殊样式等。
themes	|	应用不同的主题样式时，如管理员，买家，卖家等。
abstracts	|	放置一些如：变量，函数，响应式等辅助开发的部分。
vendors	|	放置一些第三方独立的CSS文件，如bootstrap，iconfont等。



## CSS新特性之自定义属性

CSS 自定义属性(也称为“CSS 变量”)，在目前所有的现代浏览器中都得到了支持。

- 定义与使用
- 计算
- 默认值
- 作用域

## CSS新特性之shapes
 CSS Shapes布局可以实现不规则的文字环绕效果，需要和浮动配合使用。
-  shape-outside
- clip-path
- shape-margin

## CSS新特性之scrollbar

```html
CSS scrollbar用于实现自定义滚动条样式。

      ::-webkit-scrollbar

      ::-webkit-scrollbar-thumb

      ::-webkit-scrollbar-track

```

## CSS新特性之Scroll Snap

 CSS Scroll Snap（CSS 滚动捕捉）允许你在用户完成滚动后多锁定特定的元素或位置。
```
   外层：
   scroll-snap-type
	x 
	mandatory

	单个元素：
    scroll-snap-align
	start
	center
	end	
```

## CSS与JS结合

CSS配合JavaScript可以发挥出更大的威力，实现一些更加复杂的交互效果。
	

 案例：

1. 时钟
2. 折叠菜单
