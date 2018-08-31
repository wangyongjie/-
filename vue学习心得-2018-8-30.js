一、介绍
Vue是一套用于构建用户界面的渐进式框架，Vue被设计为自底向上逐层应用，只关注图层。
渐进式代表的含义是：主张最少，没有多做职责之外的事情。
场景1：如果你的技术团队技术选型比较保守，没有新技术的使用场景，比如让你去维护一个管理后台。管理后台，日常就是提交各种表单了，这部分现有的方案，比如form表单提交或者jquery收集信息ajax提交。这时候你可以把vue 当成一个js库来使用，就用来收集form表单，和表单验证。
场景2：在场景1中，你尝到了甜头。心中暗爽，还可以这么玩嘞。独乐乐不如众乐乐和大家分享之后，团队开始接受使用vue，小规模推广起来。打怪升级该遇小boss啦，领导说，小伙后台做的越来越有效率了，来承担些常规业务开发，来正规军编制和其他小伙伴一起做新闻列表和新闻详情页吧。在这个项目中，你跟大胆一点把 整个页面的dom 用Vue 来管理，你发现jquery 没什么用了，列表用v-for来循环，把评论抽成小组件了。 评论交互比较复杂，但是你的关注点把原来jquery dom操作变成了关注数据的变化，用数据驱动DOM的变化。
场景3:经历了场景1 场景2，越来越受大家信赖，领导又找你了。你看新闻项目你做的不错，移动站也得重构了，你做个移动端m站吧，正好微信和App分享出去用到。这时候，你需要在做移动端webapp了。 于是你由去了解 webpack vue-router，你发现前端 可以控制路由了。webpack，可以用于前端开发的工程构建。
场景4:场景3之后你在技术团队大放异彩，公司越来越器重你。年末领导又来找你了，小伙砸，想不想拿年终奖啊，想的话给我做个新闻直播间吧。需求特别简单：就是滚动播报新闻，用户实时参与评论。有了场景3和之前的经验，发现稍微有点力不从心了，你和后端的接口沟通上越来越频繁，新闻直播间需要大量的数据在组件中共享数据，后来你发现了，vuex 处理数据在组件之间的流动得心应手。
场景5:年终奖，拿到手了，过年回来升职加薪。带了20人的前端团队，你的精力开始在配合公司其他部门做用户数据增长了。发现场景2中你犯了个错误，虽然整个页面用Vue 管理 开发起来很方便，但是页面白屏时间长，而且类似这样的底层页对seo都不好。开始考虑使用 vue2.0的SSR。为了保障团队高质量的输出，你开始研究如何给 vm写单测...场景1-5 从最初的只因多看你一眼而用了前端js库，一直到最后的大型项目解决方案。能否给你说明白vue 是 The ProgressiveJavaScript Framework
链接 https://www.youtube.com/watch?v=EiTORdpGqns


二、MVVM
vue没有完全遵循MVVM模型，但vue的设计受到了它的启发。
MVC -->> MVVM 的转变

MVC：模型（Model）、视图（View）和控制器（Controller）
控制器（Controller）- 负责转发请求，对请求进行处理。
视图（View） - 界面设计人员进行图形界面设计。
模型（Model） - 程序员编写程序应有的功能（实现算法等等）、数据库专家进行数据管理和数据库设计(可以实现具体的功能)。

MVVM：有助于将图形用户界面的开发与业务逻辑或后端逻辑的开发分离开来。
模型：模型是指代表真实状态内容的领域模型（面向对象），或指代表内容的数据访问层（以数据为中心）。
视图：就像在MVC和MVP模式中一样，视图是用户在屏幕上看到的结构、布局和外观（UI）。[6]
视图模型：视图模型是暴露公共属性和命令的视图的抽象。MVVM没有MVC模式的控制器，也没有MVP模式的presenter，有的是一个绑定器。在视图模型中，绑定器在视图和数据绑定器之间进行通信。[7]
绑定器声明性数据和命令绑定隐含在MVVM模式中。在Microsoft解决方案堆中，绑定器是一种名为XAML的标记语言。[8] 绑定器使开发人员免于被迫编写样板式逻辑来同步视图模型和视图。在微软的堆之外实现时，声明性数据绑定技术的出现是实现该模式的一个关键因素。[4][9]

批评：实现MVVM的开销对于简单的UI操作是“过度的”。他说，对于更大的应用来说，推广ViewModel变得更加困难。而且，他说明了非常大的应用程序中的数据绑定会导致相当大的内存消耗。


三、实例
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})


四、生命周期钩子 
给用户在不同阶段添加自己代码的机会：created，mounted，updated和destroyed等等
不要在选项属性或回调上使用箭头函数，比如
created：() => console.log(this.a)
生命周期图示：https://cn.vuejs.org/v2/guide/instance.html


五、模板语法
模板  -->>  直接写渲染（render）函数。
v-once指令会一次性插值，会影响到该节点上的其他数据绑定
请对可信内容使用v-html进行插值，绝不要对用户提供的内容使用插值，否则容易出现XSS攻击
v-bind和v-on

使用javascript表达式 --> 计算属性 --> 侦听属性
模板表达式中只能包含单个表达式，都放在沙盒中，只能访问全局变量的一个白名单，如Math和Date，不应该在模板表达式中试图访问用户定义的全局变量
模板表达式只是用于简单运算，对于复杂逻辑，应当使用计算属性，计算属性有缓存和方法之分。计算属性是基于它们的依赖进行缓存的。如果不希望
有缓存，请用计算属性的方法来替代。
侦听属性（watch选项）是一个更通用的做法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，该方法最有用。

class与style绑定
使用v-bind来处理，vue做了专门的增强，表达式的类型除了字符串之外，还可以是对象或数组，这样就可以使用计算属性
class可用在组件上，当在一个自定义组件上使用class属性时，将被添加到该组件的根元素上面。
v-bind:style的数组语法可以将多个样式对象应用到同一个元素上，当需要添加浏览器引擎前缀的css属性时，如transform，vue会自动侦测并添加相应的前缀，使用多个带前缀的值

v-if与v-show
v-if  v-else v-else-if 的介绍
在<template>元素上使用v-if可把template元素当做是不可见的包裹元素
vue会尽可能高效地渲染元素，使用key来管理可复用的元素
v-if是惰性的，如果初始渲染为假，则什么也不做，而v-show不管初始条件是啥，都会进行渲染
一般来说，v-if有更高的切换开销，而v-show有更高的初始渲染开销，如果频繁切换，使用v-show，否则使用v-if

v-for
用v-for把一个数组对应为一组元素
"(value, key, index) in object"
在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。
如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。
这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。
建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。
数组更新检查，变异方法和替换数组（实现了一些智能的、启发式的方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。）
由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
当你修改数组的长度时，例如：vm.items.length = newLength
使用Vue.set(vm.items, indexOfItem, newValue) 或 vm.items.splice(indexOfItem, 1, newValue) 去实现
有时你可能需要为已有对象赋予多个新属性，请使用 Object.assign()
一段范围的取值，v-for="n in 10">{{ n }}
类似于 v-if，你也可以利用带有 v-for 的 <template> 渲染多个元素。
当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。当你想为仅有的一些项渲染节点时，这种优先级的机制会十分有用
2.2.0+ 的版本里，当在组件中使用 v-for 时，key 现在是必须的。
is=的问题， 需要注意的是如果我们从以下来源使用模板的话，这条限制是不存在的：
字符串 (例如：template: '...')
单文件组件 (.vue)
<script type="text/x-template">


事件处理
$event 传入原始的DOM事件
使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
.stop .prevent .capture .self .once .passive
不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。
按键修饰符和系统修饰键
请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。
你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。
实际上，使用 v-on 有几个好处：
扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。
因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。
当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。


表单校验
v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
对于需要使用输入法 (如中文、日文、韩文等) 的语言，你会发现 v-model 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 input 事件。
修饰符 
<input v-model.lazy="msg" >     <!-- 在“change”时而非“input”时更新 -->
<input v-model.number="age" type="number">
<input v-model.trim="msg">