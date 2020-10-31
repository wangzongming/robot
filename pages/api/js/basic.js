import funcs from "./func"

export default (req, res) => {
    res.statusCode = 200;
    const inpKeyword = req.query.keyword; //输入的关键词
    console.log('输入关键词：', inpKeyword)
    
    let resJson = {
        author: "jonas",
        code: `暂未获取到， 如果您有好的代码段欢迎提交github：https://github.com/wangzongming/robot`,
    };

    forLabel:
    for (let i = 0; i < funcs.length; i++) {
        const {
            keywords = [],
            code,
            author
        } = funcs[i];
        //模糊匹配
        const isOk = keywords.filter((item) => new RegExp(inpKeyword, "ig").test(item))[0];
        if (isOk) { 
            resJson = { author, code } 
            break forLabel;
        } 
    }

    res.json(resJson);
}
