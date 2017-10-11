# 练习：学生成绩单（Web版）

## 需求说明:

使用HTML，Bootstrap，Javascript实现一个学生成绩管理系统（Web版），具有以下功能：

- 添加一条学生成绩信息
- 查询多个学生成绩信息
- 修改一条学生成绩信息
- 删除一条学生成绩信息

## 挑战:

- 基于新需求，重构既有代码
- 运用HTML表单标签接收用户输入
- 运用CSS调整页面样式
- 运用Javascript DOM API修改页面行动

### 要求:

1. 实现一个静态页面展示学生成绩信息。

要求：

- 使用Bootstrap [table](http://v3.bootcss.com/css/#tables)样式
- 允许将学生信息直接写在静态页面里

2. 实现“添加一条学生成绩信息”功能。

要求：

- 以[form](http://www.w3school.com.cn/html/html_forms.asp)表单的形式接收用户提交的学生成绩
- 使用Javascript监听表单[onSubmit](http://www.w3school.com.cn/jsref/event_onsubmit.asp)事件
- 提交时进行输入校验，输入必须满足格式：`姓名, 学号, 民族, 班级, 学科: 成绩, …`，否则提示`请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）`
- 提交格式正确则将学生成绩存入浏览器的[localStorage](http://www.w3school.com.cn/html5/html_5_webstorage.asp)

3. 在静态页面基础上，实现“查询多个学生成绩信息”功能。

要求：

允许用户一次查询多个学生的成绩

提交时进行输入校验，输入必须满足格式：`学号, 学号,...`，否则提示`请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,…）`

输入格式正确则将所查询学生的成绩显示出来，并显示他们的**总分平均分**和**总分中位数**

4. 在查询成绩单页面基础上，实现“修改一条学生成绩信息”功能。

要求：

- 允许用户在查询出学生成绩后进行修改
- 修改提交时进行输入校验，输入必须满足格式：`姓名, 学号, 民族, 班级, 学科: 成绩, …`，否则提示`请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）`
- 修改提交格式正确则修改该学生成绩

5. 在实现的查询成绩单页面基础上，实现“删除一条学生成绩信息”功能。

要求：

- 允许用户在查询出学生成绩后进行删除
- 删除时弹窗确认`确定删除”姓名+学号“的成绩？`

## 学习资源:

HTML W3school教程：[http://www.w3school.com.cn/html/index.asp](http://www.w3school.com.cn/html/index.asp)

CSS W3school教程：[http://www.w3school.com.cn/css/index.asp](http://www.w3school.com.cn/css/index.asp)

Bootstrap中文文档：[http://www.bootcss.com/](http://www.bootcss.com/)

JavaScript 闯关记：[https://github.com/stone0090/javascript-lessons/](https://github.com/stone0090/javascript-lessons/)
