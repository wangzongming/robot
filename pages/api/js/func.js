
//常用方法代码段
const func = [
    {
        "author": "jonas",
        "keywords": ["周日期", "当前周的起始时间", "获取当前所在周的起始和结束的日期", "获取当前所在周的起始日期", "获取当前所在周的结束日期"],
        "code": `
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
        "author": "jonas",
        "keywords": ["cookie", "cookie添加/获取和删除", "cookie添加", "cookie删除", "cookie获取"],
        "code": `
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
        "author": "jonas",
        "keywords": ["js字符串翻转", "字符串翻转", "字符串倒过来"],
        "code": `
            var str = 'abcdefg';
            var revs = str.split('').reverse().join(''); 
        `
    },
    {
        "author": "jonas",
        "keywords": ["requestAnimationFrame兼容"],
        "code": `
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
        "author": "jonas",
        "keywords": ["鼠标移动的方向", "鼠标移动方向"],
        "code": `
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
    },
    {
        "author": "jonas",
        "keywords": ["字符串替换"],
        "code": `
            /**
             * 替换字符串中特定符号中间的数据
             *
             * @param str
             * @param params
             */
            export const strReplace = (str: string, params: any = {}): string => {
                let reg = new RegExp('{(.+?)}', 'g'); // /{(.+?)}/g
                return str.replace(reg, ($1, $2) => {
                    if ($1 && params.hasOwnProperty($2)) {
                        return params[$2];
                    }
                    return $1;
                });
            };

            使用样例：
            const str = "my name is {nickname}, my age is {age}.";
            const info = strReplace(str, {
                nickname: '蚊子',
                age: 24
            });
            console.log(info); // my name is 蚊子, my age is 24.
        `
    },
    {
        "author": "jonas",
        "keywords": ["js产生随机字符串", "js随机字符串", "随机字符串"],
        "code": `
            Math.random().toString(36).substr(2); 
        `
    },
    {
        "author": "jonas",
        "keywords": ["解析url中参数", "解析url中的参数", "获取url中的参数", "url中的参数", "url中参数"],
        "code": `
            function parseUrl(search, name) {
                var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
                var r = url.substr(1).match(reg);
                if (r != null) return unescape(r[2]);
                return null;
            }
            parseUrl(window.location.search, 'id');
        `
    },
    {
        "author": "jonas",
        "keywords": ["时间格式化", "js时间格式化"],
        "code": `
            Date.prototype.format = function (fmt) {
                var o = {
                    'y+': this.getFullYear(),
                    'M+': this.getMonth() + 1, //月份
                    'd+': this.getDate(), //日
                    'h+': this.getHours(), //小时
                    'm+': this.getMinutes(), //分
                    's+': this.getSeconds(), //秒
                    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
                    'S+': this.getMilliseconds(), //毫秒
                };
                for (var k in o) {
                    if (new RegExp('(' + k + ')').test(fmt)) {
                        if (k == 'y+') {
                            fmt = fmt.replace(
                                RegExp.$1,
                                ('' + o[k]).substr(4 - RegExp.$1.length)
                            );
                        } else if (k == 'S+') {
                            var lens = RegExp.$1.length;
                            lens = lens == 1 ? 3 : lens;
                            fmt = fmt.replace(
                                RegExp.$1,
                                ('00' + o[k]).substr(('' + o[k]).length - 1, lens)
                            );
                        } else {
                            fmt = fmt.replace(
                                RegExp.$1,
                                RegExp.$1.length == 1
                                    ? o[k]
                                    : ('00' + o[k]).substr(('' + o[k]).length)
                            );
                        }
                    }
                }
                return fmt;
            };


            使用：

                var date = new Date();
                console.log(date.format('yyyy年MM月dd日 hh:mm:ss.S')); //输出: 2016年04月01日 10:41:08.133
                console.log(date.format('yyyy-MM-dd hh:mm:ss')); //输出: 2016-04-01 10:41:08
                console.log(date.format('yy-MM-dd hh:mm:ss')); //输出: 16-04-01 10:41:08
                console.log(date.format('yy-M-d hh:mm:ss')); //输出: 16-4-1 10:41:08
        `
    },
    {
        "author": "jonas",
        "keywords": ["获取当前月份的第一天和最后一天", "月份的第一天和最后一天", "月份的第一天", "月份的最后一天"],
        "code": `
            const date = new Date();
            const monthFirstDate = new Date(date.getFullYear(), date.getMonth(), 1);
            const monthLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            
            console.log(monthFirstDate, monthLastDate);
        `
    },
    {
        "author": "jonas",
        "keywords": ["截断字符串并添加省略号", "添加省略号", "字符串省略号"],
        "code": `
            /**
             * @param {string} str 要截取的字符串
             * @param {number} size 截取的长度
             * @param {string} tail 补充的字符，默认是3个点
             * @return {string} 返回截取后的字符串
             */
            const truncate = (str: string, size: number, tail?: string) => {
                function trim(str: string) {
                    if (isEmpty(str)) {
                        return str;
                    }
                    return str.replace(/(^\s*)|(\s*$)/g, '');
                }
            
                function isEmpty(str: any) {
                    if (str === undefined || str === '' || str === null) {
                        return true;
                    }
                    return false;
                }
            
                let nstr = trim(str);
            
                const arr = Array.from(str);
            
                let cLen = arr.length;
                let length = size <= 0 ? cLen : size;
                if (length > cLen) return nstr;
                nstr = arr.slice(0, length).join('');
                nstr += tail || '...';
            
                return nstr;
            };
        `
    },
    {
        "author": "jonas",
        "keywords": ["对数组进行随机排序", "数组随机排序", "随机排序"],
        "code": `
            function shuffleSort(arr) {
                var n = arr.length;
            
                while (n--) {
                    var index = Math.floor(Math.random() * n);
                    [arr[index], arr[n]] = [arr[n], arr[index]];
                }
            }
        `
    },
    {
        "author": "jonas",
        "keywords": ["uuid", "唯一id"],
        "code": `
            const uuid = Date.now() + Math.random().toString().slice(-6);
        `
    },
    {
        "author": "jonas",
        "keywords": ["ajax", "jsAjax"],
        "code": `
        function ajax(method,url,data,async,successfn){
            var xhr=null;
            if(window.XMLHttpRequest){
                xhr=new XMLHttpRequest;// 非ie6
            }else{
                xhr=new ActiveXObject('Microsoft.XMLHTTP');// 兼容ie6
            }
            xhr.open(method,url,data,async); //异步填 true或者 false
            if(method=='POST'){
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
                xhr.send(data);
            }else{
                xhr.send();
            }
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){//4.代表通讯读取完成、不代表成功
                    if(xhr.status==200){//成功
                        successfn(xhr.responseText);	
                    }else{
                        alert(xhr.status);
                    }
                }
            }
        }
        `
    },
    {
        "author": "jonas",
        "keywords": ["js让浏览器全屏"],
        "code": `
        function makeFullScreen(divObj) {
            //Use the specification method before using prefixed versions
           if (divObj.requestFullscreen) {
             divObj.requestFullscreen();
           }
           else if (divObj.msRequestFullscreen) {
             divObj.msRequestFullscreen();
           }
           else if (divObj.mozRequestFullScreen) {
             divObj.mozRequestFullScreen();
           }
           else if (divObj.webkitRequestFullscreen) {
             divObj.webkitRequestFullscreen();
           } else {
             var requestMethod = divObj.requestFullScreen || divObj.webkitRequestFullScreen || divObj.mozRequestFullScreen || divObj.msRequestFullScreen || divObj.msRequestFullScreen;
             if (requestMethod) {      
                 requestMethod.call(divObj);    
             } else if (typeof window.ActiveXObject !== "undefined") {      
                 var wscript = new ActiveXObject("WScript.Shell");    
                 if (wscript !== null) {    
                     wscript.SendKeys("{F11}");    
                 }
             }    
           } 
     }
        `
    },
    {
        "author": "jonas",
        "keywords": ["退出全屏"],
        "code": `
        function exitFullscreen() {//直接调用就行
            if(document.exitFullscreen) {
             document.exitFullscreen();
            } else if(document.mozCancelFullScreen) {
             document.mozCancelFullScreen();
            } else if(document.webkitExitFullscreen) { 
             document.webkitExitFullscreen();
            }
           }
        `
    },
    {
        "author": "jonas",
        "keywords": ["js让手机一直震动", "手机震动"],
        "code": `
            fna();

                function fna(){
                navigator.vibrate(10000);
                setTimeout(function(){
                    fnb();
                }, 10000) 
                }

                function fnb(){
                fna();
            }
        `
    } 
]

export default func;