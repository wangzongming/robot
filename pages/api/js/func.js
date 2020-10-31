
//常用方法代码段
const func = [
    {
        "author":"jonas",
        "keywords":["周日期", "获取当前所在周的起始和结束的日期", "获取当前所在周的起始日期", "获取当前所在周的结束日期"],
        "code":`
            /**
             * 获取当前星期的起始日期和结束日期
             * @param {string} startFormat 周一的时间格式
             * @param {string} endFormat   周日的时间格式
             * @param {number} timestamp   所在周的时间戳，若不传入，则默认使用当前时刻的时间戳
             * @returns {string, string} {startDate, endDate} 返回的数据
             */
            export const getWeekStartAndEnd = (
                startFormat: string,
                endFormat: string,
                timestamp?: number
            ): {
                startDate: string,
                endDate: string,
            } => {
                const oneDayTime = 1000 * 3600 * 24;
                const nowDate = timestamp ? new Date(timestamp) : new Date();
                const now = nowDate.getTime();
                const nowDay = nowDate.getDay() === 0 ? 7 : nowDate.getDay();
                const startDate = new Date(now - oneDayTime * (nowDay - 1));
                const endDate = new Date(now + oneDayTime * (7 - nowDay));
            
                return {
                    startDate: formatTime(startDate.getTime(), startFormat),
                    endDate: formatTime(endDate.getTime(), endFormat),
                };
            };
        `
    },
    {
        "author":"jonas",
        "keywords":["cookie", "cookie添加/获取和删除", "cookie添加", "cookie删除", "cookie获取"],
        "code":`
            var cookie = {
                //写cookies
                setCookie: function (name, value) {
                    var Days = 365;
                    var exp = new Date();
                    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
                    document.cookie =
                        name + '=' + escape(value) + ';expires=' + exp.toGMTString();
                },
            
                //读取cookies
                getCookie: function (name) {
                    var arr,
                        reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
                    if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
                    else return null;
                },
            
                //删除cookies， name可以为字符串('username')或数组(['username', 'password', ...])
                delCookie: function (name) {
                    var delItem = function (item) {
                        var exp = new Date();
                        exp.setTime(exp.getTime() - 1);
                        var cval = cookie.getCookie(item);
                        if (cval !== null)
                            document.cookie =
                                item + '=' + cval + ';expires=' + exp.toGMTString();
                    };
            
                    if (typeof name === 'string') {
                        delItem(name);
                    } else {
                        for (var i = 0, len = name.length; i < len; i++) {
                            delItem(name[i]);
                        }
                    }
                },
            };
        `
    }
]

export default func;