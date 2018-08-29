javascript 分享会
一、历史
诞生 1995年
简单的输入校验器  >>> 强大的编程语言
javascript  和  ECMAScript 的关系
javascript 包含 ECMAScript + DOM +BOM
ECMAScript定义了这门语言的基础，web浏览器只能ECMAScript实现可能的宿主环境之一，宿主环境会提供该语言的扩展，比如DOM和BOM，其他宿主如node
那么我们这次主要去了解ECMAScript这门基础的语言
2009年 第五版ES5
2015年6月正式发布了第六版ES6
ECMAScript就是对实现该标准规定的各个方面内容的语言的描述


二、数据类型
两种数据类型：基本类型、引用类型（对象类型）
基本类型：undefined，boolean，number，string，null (NaN是number类型)
特点：
任何方法都无法改变一个基本类型的值，
var test = "test"; test.toUpperCase();
不能给基本类型添加属性和方法，虽然不报错，但是值是undefined    
test.uid = 2; console.log(test.uid);
基本类型的比较是值的比较，例如var a = 1, b = true; console.log(a == b);  //true
基本类型的变量是存放在栈区的（栈区指内存里的栈内存）
栈区包括了 变量的标识符和变量的值。
（栈：为编译器自动分配和释放，如函数参数、局部变量、临时变量等等）

引用类型：object
特点：
引用类型的值是可变的
引用类型的值是同时保存在栈内存和堆内存中的对象
javascript和其他语言不同，其不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间
引用类型的存储需要内存的栈区和堆区（堆区是指内存里的堆内存）共同完成，栈区内存保存变量标识符和指向堆内存中该对象的指针
（堆：为成员分配和释放，由程序员自己申请、自己释放。否则发生内存泄露。）

简单赋值
var a = 10;
var b = a;
a ++ ;
对象引用
var a = {}; // a保存了一个空对象的实例
var b = a;  // a和b都指向了这个空对象

强类型语言和弱类型语言,javascript是弱类型语言,与C++不同


三、函数的概念
封装多条语句，使用function关键字，后面跟参数和函数体
参数的概念，不介意参数的个数，也不介意参数的类型（定义的函数只有两个参数，但你可以传1个，3个，0个），原因是ECMAScript中的参数在内部是用一个数组来表示的，arguments。命名的参数只提供便利，但不是必须的。没有函数签名的概念（不像C++那样，根据参数的类型，个数，顺序来区分不同的函数）
通过arguments来勉强尼补没有重载的缺陷。后面的函数会覆盖前面定义的函数，arguments对象的长度是由传入的参数个数决定的，不是由定义函数时的命名参数决定的。
function gg(num1, num2) {
	arguments[1] = 10
	console.log(arguments[0], num2)
}
gg(2)     //打印 2 和 undefined
所以，通过检查传入函数中的类型和数量并作出不同的反应，可以模仿方法的重载


四、执行环境和作用域
执行环境：定义了变量或函数有权访问的其他数据，每个执行环境都有一个与之关联的变量对象，所有变量和函数都保存在这个对象中，但我们编写的代码是无法访问这个对象的，但解析器在处理数据是会在后台使用它。
全局执行环境，web浏览器的是window对象。每个函数都有自己的执行环境。执行流-环境栈，先进后出。
作用域链:但代码在一个环境中执行时，会创建变量对象的一个作用域链。作用域链的前端，始终都是当前执行的代码所在环境的变量对象，一开始只有arguments
标识符的解析是沿着作用域链一级一级第搜索标识符的过程
var one = 'one'
function getTwo() {
	var two = 'two'
	function getThree() {
	  var three = 'three'
	}
}
js没有块级作用域，在C里面，花括号封闭的块都有自己的作用域，用js的话来说，就是执行环境（if语句，for语句，会添加到当前的执行环境中）
ECMAScript6 有一个关键字，叫做let，只在自己的代码块中有效
对象封装
var test = {
	a : 1,
}
模块模式
var test = (function() {
	var a = 1
	return a
})()
匿名函数马上执行
function(){}() 出错，js将funciton关键字当做是函数声明的开始，函数声明后不能加(),函数表达式就可以，通过()转出函数表达式


五、面向对象编程
例子：前端表单的校验，比如校验反馈内容，校验邮箱，校验uid
function check1() {   //定义全局变量
	
}
对象收编
var checkObjeck = {
	check1: 
}
另一种形式
var checkObject = function() {
	return {
		check1: function() {

		}
	}
}
返回的对象和checkObject本身没有任何关系
var checkObject = function() {
	this.check1 = function() {

	}
}
var a = new checkObject()

每一次通过new关键字创建新对象的时候，新创建的对象都会对this上的属性进行复制，都会有一套自己的方法。造成的消耗是很奢侈的。
var checkObjet = function() {}
checkObject.prototype = {
	check1 : function() {
		return this  //实现链式
	}
}
比较
var b = new checkObject()
var c = new checkObject()
console.log(b.check1 == c.check1)

链式的传递
b.check1().check2()     //jquery的选择器的做法，避免重新查找dom节点

面向对象编程的样子
var Persion = function(name , age) {
	this.name = name 
	this.age = age
}
Persion.prototype = {
	eat: function() {

	}
}
var a = new Persion('zhangsan', 20)
this指向的属性和方法都得到创建，而prototype指向的方法和属性，不会再创建

私有属性private，共有属性public，但在js中是没有显性的存在的，但我们可以通过一些技巧来实现它
私有变量和方法  --- 通过函数级作用域里的变量和方法是外界无法访问的特性来实现
共有变量和方法  --- 通过this创建的属性和方法
构造器        --- this上的方法可以访问私有变量，就可以初始化对象的一些属性了。

类静态共有属性（对象无法访问，通过点语法来添加）
通过prototype创建的方法为共有方法

通过new关键字创建的对象，实质是对新对象this的不断赋值，并将prototype指向类的prototype所指向的对象


关于继承，类式继承
function superClass() {
	this.one = 'one'
}
Persion.prototype = new superClass()

ES6引入了类的概念class，可以看做只是一个语法糖，它的功能，ES5可以做到，只是让写法更清晰，改写后就是
class Persion {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	eat() {
		...
	}
}

单继承，用extend关键字，extend（Persion， superClass)
多继承，将传入的多个对象的属性复制到源对象中，比如先绑定到原生对象Object上
Object.prototype.mix = function() {
	var i = 0, len = arguments.length, arg;
	for(; i<len; i++) {
		arg = arguments[i]
		for ( var pro in arg ) {
			this[pro] = arg[pro]
		}
	
	}
}
Persion.mix(super1, super2)

多态的概念，也可以实现，就是同一个方法多种调用方式
