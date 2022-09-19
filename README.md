# 无TOBE，不SASS

Tobe是一个写给面向熟悉sass人员使用的框架，以[sassCore](https://github.com/marvin1023/sassCore)为核心，所有的组件都单独开发，根据实际需求来调用，避免了臃肿的杂乱代码。由于有着sass的优良基因，tobe的代码更加灵活可控，如果你是一个有着代码洁癖的人，那么tobe的精彩一定不可错过。

## Tobe的创新性：

基于sass，以[sassCore](https://github.com/marvin1023/sassCore)为核心，为所有组件打好良好的基石。所有组件根据实际需求来调用，结构清晰明了，scss文件一目了然，再也不需要在众多代码中大海捞针，想修改什么立马找到，有的是时间跟妹子聊天。除此之外，因为有着良好的基石，合理的设计，tobe允许你自由开发组件，从此设计自己或公司的ui库不是问题。

## tobe结构说明

* sass文件夹放的是构建tobe这个网站的scss文件，不包括所有的基础文件及组件，你可以打开看下两个scss文件的源码都很简单；
* css就是sass中解析过来的；
* download是放下载打包资源的；
* pending是放用户提交的打包组件；
* example是整个tobe的所有组件的demo及页面；
* tobe文件夹中放的就是所有的基础sass文件及组件，请把它直接放到d盘中去以方便开发。

## tobe使用说明

1、首先把这个项目中的tobe文件夹（这里面只包括所有的scss文件）直接放进D盘，或者在download文件夹中找到tobe的压缩版，然后解压到D盘中

2、新建scss文件，导入tobe中的base或function，如果需要基础的样式及功能，请导入base文件，如果不需要基础样式只需要功能，请导入function文件，代码分别为：

```scss
//需要一些基础样式及功能导入base
@import 'D:/tobe/base';
```
```scss
//只需要功能导入function
@import 'D:/tobe/function';
```

3、接着导入你需要的组件，以templates1为例，如布局、导航、滚动图片、三栏等宽。请注意：如果需要改变组件里面默认变量的值，请在导入之前重新申明你需要改变的值，如这里的滚动图片的宽高变量$imgslideView，这也正是为什么我们设置变量的时候要使用!default，因为方便导入到其他scss文件中修改变量的默认值。

```scss
//重置变量
$imgslideView:       1000px 340px;

//import scss
@import "D:/tobe/base";
@import "D:/tobe/components/layout";
@import "D:/tobe/components/nav";
@import "D:/tobe/components/imgslide";
@import "D:/tobe/components/col";
```
4、开始你的其他样式


