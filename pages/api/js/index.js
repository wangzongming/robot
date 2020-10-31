import funcs from "./func"

export default (req, res) => {
    res.statusCode = 200;
    const inpKeyword = req.query.keyword; //输入的关键词

    forLabel:
    for (let i = 0; i < funcs.length; i++) {
        const {
            keywords = [],
            code,
            author
        } = funcs[i];
        //模糊匹配
        const isOk = keywords.filter((item) => new RegExp(inpKeyword, "ig").test(item));
        if (isOk) {
            res.json({ code, author });
            break forLabel;
        } else {
            res.json({
                code: `暂未获取到， 如果您有好的代码段欢迎提交github：https://github.com/wangzongming/robot`,
                author: "jonas"
            });
        }
    }
}
