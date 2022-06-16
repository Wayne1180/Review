一、模板语法 数据绑定
1.插值语法
功能：用于解析标签体内容
写法：{{xxx}},xxx是js表达式，可以直接读取到data中的所有区域
2.指令语法
功能：用于解析标签（包括：标签属性、标签体内容、绑定事件...）
例如：<a v-bind:href="xxx">或简写为< a :href="xxx">
3.数据绑定
Vue中有2种数据绑定的方式
a.单向绑定v-bind数据只能从data流向页面
b.双向绑定v-model数据不仅能从data流向页面，还可以从页面流向data
备注
a.双向绑定一般都应用在表单类元素上，如<input><select><textarea>等
b.v-model:value可以简写为v-model，因为v-model默认收集的就是value的值

二、事件处理
事件修饰符（常用）
1.prevent 阻止默认事件（常用）
2.stop 阻止事件冒泡（常用）

三、绑定样式 条件渲染
1.11.绑定样式
class样式
·写法：
:class="xxx"，xxx可以是字符串、数组、对象
:style="[a,b]" 其中a、b是样式对象
:style="{fontSize:xxx}" 其中xxx是动态值
·字符串写法适用于：类名不确定，要动态获取
·数组写法适用于：要绑定多个样式，个数不确定，名字也不确定
·对象写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用

1.12.条件渲染
·v-if="表达式"
适用于：切换频率较低的场景，因为不展示的DOM元素直接被移除
注意：v-if可以和v-else-if v-else 一起使用，但要求结构不能被打断

·v-show="表达式"
适用于：切换频率较高的场景
特点：不展示的DOM元素未被移出，仅仅是使用样式隐藏掉 display:none

备注：使用v-if的时候，元素可能无法获取到，而使用v-show一定可以获取到

1.13.列表渲染
·v-for指令
·用于展示列表数据
·语法：<li v-for="(item,index) of items" :key="index">，这里key可以是index，更好的是遍历对象的唯一标识
·可遍历：数组、对象、字符串（用的少）、指定次数（用的少）

1.14.收集表单数据
·若<input type="text"/>,则v-model收集的是value值，用户输入的内容就是value的值
·若<input type="radio">,则v-model收集的是value值，且要给标签配置value属性
·若<input type="checkbox"/>
    ·没有配置value属性，那么收集的是checked属性（勾选or未勾选，是布尔值）
    ·配置了value属性
        ·v-model的初始值是非数组，那么收集的就是checked（勾选or未勾选，是布尔值）
        ·v-model的初始值是数组，那么收集的就是value组成的数组

v-model的三个修饰符 v-model.lazy
· lazy 失去焦点后再收集数据
· number 输入字符串转为有效的数字
· trim 输入首尾空格过滤 
