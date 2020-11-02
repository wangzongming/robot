import func from "./func"

export default (req, res, funcs = func) => {
    res.statusCode = 200;
    const inpKeyword = req.query.keyword; //输入的关键词

    let resJson = {
        author: "jonas",
        code: `暂未获取到您想要的回复， 如果您有好的代码段欢迎提交github：https://github.com/wangzongming/robot`,
        success: false
    };

    forLabel:
    for (let i = 0; i < funcs.length; i++) {
        const {
            keywords = [],
            code,
            author
        } = funcs[i];
        //模糊匹配
        const isOk = keywords.filter((item) => new RegExp(inpKeyword, "ig").test(item))[0]; //正向匹配
        const isOk2 = keywords.filter((item) => new RegExp(item, "ig").test(inpKeyword))[0]; //逆向匹配
        if (isOk || isOk2) {
            resJson = { author, code, success: true }
            break forLabel;
        }
    }

    res.json(resJson);
}
