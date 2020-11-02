<center>
本仓库接口用于提供问答匹配知识库，如：[输入：清除浮动 | 输出：(清除浮动的代码)]<br/>
本服务接口对外免费提供<br/>

<br/><br/>
大白只是对该仓库接口的一种使用场景<br/>
hello! 我是大白，一个助力于编程开发者的机器人。专注于代码段整理收集。<br/>
呼唤我的方式：@大白 [问题]  <br/>   
eg：@大白 js字符串翻转  <br/>   
仅供学习使用！！！
</center>  


## 大白体验qq群
    787511352

## 简介

    该仓库为 大白机器人 代码段仓库，各位可以向该仓库提交自己的代码段

    
## 代码贡献

    1、打开代码段目录 /pages/api/*

    2、打开需要的贡献的语言或者框架的目录的文件  eg:/pages/api/js/func.js [也可创建自己的文件夹]

    4、/api 目录下文件结构说明
        basic.js  ---  提供接口服务（无需修改）
        func.js   ---  代码段存储位置

    3、func.js 问答结构

        const func = [
            //...
            {
                    "author":"作者",
                    "keywords":["console.log", "关键词2", "关键词3"],
                    "code":`
                        //代码段
                        var a = 10;
                        console.log(a)
                    `
            }
            //...
        ]
        export default func;

## 接口api

    请求方法：get
    地址： https://robot-bice.vercel.app/api/js/basic?keyword=字符串翻转
    参数：keyword
    返回格式[json]：
        {
            作者
            author:String, 
            代码段
            code:String, 
            查询是否成功
            success: Boolean 
        }
 
## 常见问题

*  啥用github托管代码段？
    -   因为我没有钱长期养一台服务器~

*  目前代码段存储使用js文件，为啥使用js？ 
    -   因为在json里面写代码段有些地方不方便。

*  为啥不把数据存入数据库？ 
    -   由于鄙人囊中羞涩暂时额外资金长期养一台服务器。但是后期会把数据导入数据库的。

    
