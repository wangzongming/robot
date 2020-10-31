<center>
大白只是对该仓库接口的一种使用场景<br/>
hello! 我是大白，一个助力于编程开发者的机器人。专注于代码段整理收集。<br/>
呼唤我的方式：大白[问题]  <br/>   
eg：大白js字符串翻转  <br/>   
当前处于体验版 所有功能都可能随时停止，仅供学习使用
</center>  


## 体验qq群
    787511352

## 简介

    该仓库为 大白机器人 代码段仓库，各位可以向该仓库提交自己的代码段


## 代码贡献

    1、打开代码段目录 /pages/api/*
    2、打开需要的贡献的语言或者框架的目录的文件  eg:/pages/api/js/func.js
    3、贡献格式
        [
            ...
            {
                    "author":"作者",
                    "keywords":["关键词1", "关键词2", "关键词3"],
                    "code":`
                        代码段
                    `
            }
            ...
        ]

## 接口api

    请求方法：get
    地址： https://robot-bice.vercel.app/api/js/basic?keyword=字符串翻转
    参数：keyword
    返回格式：
    {
        作者
        author:String, 
        代码段
        code:String, 
        查询是否成功
        success: Boolean 
    }
 
## 常见问题

*  啥用github托管代码段？因为我没有钱养一台服务器~