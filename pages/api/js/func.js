
//常用方法代码段
const func = [
    {
        "author":"jonas",
        "keywords":["周日期", "当前周的起始时间", "获取当前所在周的起始和结束的日期", "获取当前所在周的起始日期", "获取当前所在周的结束日期"],
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
    },
    {
        "author":"jonas",
        "keywords":["js字符串翻转", "字符串翻转", "字符串倒过来"],
        "code":`
            var str = 'abcdefg';
            var revs = str.split('').reverse().join(''); 
        `
    },
    {
        "author":"jonas",
        "keywords":["requestAnimationFrame兼容"],
        "code":`
            // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
            // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
            // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
            // MIT license
            (function () {
                var lastTime = 0;
                var vendors = ['ms', 'moz', 'webkit', 'o'];
                for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame =
                        window[vendors[x] + 'RequestAnimationFrame'];
                    window.cancelAnimationFrame =
                        window[vendors[x] + 'CancelAnimationFrame'] ||
                        window[vendors[x] + 'CancelRequestAnimationFrame'];
                }
                if (!window.requestAnimationFrame)
                    window.requestAnimationFrame = function (callback, element) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function () {
                            callback(currTime + timeToCall);
                        }, timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };
                if (!window.cancelAnimationFrame)
                    window.cancelAnimationFrame = function (id) {
                        clearTimeout(id);
                    };
            })();
        `
    },
    {
        "author":"jonas",
        "keywords":["鼠标移动的方向", "鼠标移动方向"],
        "code":`
            /*
            * 获取元素移动的方向
            * @param  $element  元素的jQuery对象
            * @param  event     事件对象
            * @return direction 返回一个数字：0:上，1:右，2:下，3:左
            **/
            function getDirection($element, event) {
                var w = $element.width(),
                    h = $element.height(),
                    x =
                        (event.pageX - $element.offset().left - w / 2) *
                        (w > h ? h / w : 1),
                    y = (event.pageY - $element.offset().top - h / 2) * (h > w ? w / h : 1),
                    direction =
                        Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
            
                return direction;
            }
            
            $('#content')
                .on('mouseenter', function (event) {
                    console.log('enter: ' + getDirection($(this), event));
                })
                .on('mouseleave', function (event) {
                    console.log('leave: ' + getDirection($(this), event));
                });
        `
    }
]

export default func;