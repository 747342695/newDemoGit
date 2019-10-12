/**
 * 全局js
 * @author fangping
 */
/**
 * 系统配置
 * @type {{PROXY_IP: string, DOMAIN: string}}
 */
var SYS_CONF = {
    // DOMAIN: "http://10.5.5.159:9010",
    DOMAIN: "http://47.104.190.94:9010",
    FILEDOMAIN: "http://47.104.190.94:9007/upload/",
};

// 设置键的值
var KeyMap = {
    CURRENT_USER: "cur_user"
};

// 当前登陆人的token
var TOKEN = $api.getStorage(KeyMap.CURRENT_USER) == null ? "" : $api.getStorage(KeyMap.CURRENT_USER)["token"];
// 当前屏幕总高度
var windowHeight = window.innerHeight;

const APIUtils = {
    /**
     * 跳转页面（Window）打开
     * @param id 页面id
     * @param url 页面路径
     * @param pageParam 传递给下个页面的参数
     */
    goToPageByWindow: function (id, url, pageParam) {
        api.openWin({
            name: id,
            url: url,
            slidBackEnabled: false,
            pageParam: pageParam,

        });
    },
    /**
     * 跳转页面（Frame打开）
     * @param id 页面id
     * @param data 页面定位参数
     * @param url 页面路径
     * @param pageParam 传递给下个页面的参数
     */
    goToPageByFrame: function (id, data, url, pageParam) {
        api.openFrame({
            name: id,
            url: url,
            rect: data,
            pageParam: pageParam,
            bounces: data.bounces == undefined || data.bounces == null ? false : data.bounces
        });
    },
    /**
     * 打开搜索页面（Frame打开）
     * @param id 页面id
     * @param url 页面路径
     * @param pageParam 传递给下个页面的参数
     */
    goToSearch: function (id, url, pageParam) {
        api.openWin({
            name: id,
            url: url,
            pageParam: pageParam
        });
    },
    /**
     *  返回上一个Window页面
     */
    goBeforePage: function () {
        api.closeWin();
    },
    /**
     *  返回上一个Frame页面
     */
    goBeforeFrame: function () {
        api.closeFrame();
    },

    /**
     * 轻提示
     * @param msg 提示信息
     * @param duration 提示时间长短
     */
    showToast: function showToast(msg, duration) {
        // 弹出提示
        api.toast({
            msg: msg,
            duration: duration,
            location: 'middle'
        });
    },

    /**
     * 进度提示
     * @param title 标题
     * @param text 提示内容
     */
    showProgress: function showProgress(title, text) {
        api.showProgress({
            animationType: 'fade',
            title: title,
            text: text,
            modal: true
        });
    },
    /**
     * 隐藏进度提示
     */
    hideProgress: function hideProgress() {
        api.hideProgress();
    },
    /**
     *  post请求
     * @param url 请求路径
     * @param data 请求数据 {username:'HQKJ',password:'123456'}
     * @param callback 回调方法
     * @param isBody 提交数据的类型是否为body （true为body(文本提交),false为values(表单提交)）
     */
    post: function (url, data, callback, isBody) {
        var headersAjax = {Authorization: TOKEN};
        if(isBody) {
            headersAjax = {
                Authorization: TOKEN,
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
        api.ajax({
                url: SYS_CONF.DOMAIN + url,
                method: 'post',
                timeout: 30,
                headers: headersAjax,
                dataType: 'json',
                data: isBody ? {body: data} : {values: data}
            }, callback
        );
    },
    /**
     * get请求
     * @param url 请求路径
     * @param callback 回调方法
     */
    get: function (url, callback) {
        api.ajax({
                url: SYS_CONF.DOMAIN + url,
                method: 'get',
                timeout: 30,
                headers: {Authorization: TOKEN},
                dataType: 'json',
            }, callback
        );
    },
    /**
     * 捕捉异常js
     * @param err 异常信息
     * @returns {boolean} true代表没有异常，false代表异常发生
     */
    errorCatch: function globalException(err) {
        console.log("log error:---------------" + JSON.stringify(err) + "---------------")
        if (err != "" && err != null) {
            if (err.statusCode === 404) {
                APIUtils.showToast('网络不可用,请确认网络状态', 2000);
                return false;
            }  else if (err.statusCode === 502) {
                APIUtils.showToast('身份过期，请重新登录', 2000);
                // 修改成功后跳回登录页面
                APIUtils.goToPageByWindow("login",api.wgtRootDir+"/login.html");
                return false;
            }  else if (err.statusCode === 500 || err.statusCode === 0 || err.statusCode === 403) {
                APIUtils.showToast('请求失败', 2000);
                return false;
            }  else if (err.statusCode === 501) {
                APIUtils.showToast('修改密码失败，旧密码错误', 2000);
                return false;
            }
        }
        return true;
    },
    /**
     * 根据elementId元素的高计算分页的条目
     * @param headerId  header标签的id
     * @param elementId 遍历元素的id
     */
    getPageSize: function getPageIndex(headerId, elementId) {
        var headerId = headerId == undefined || headerId == null ? "header" : headerId;
        var elementId = elementId == undefined || elementId == null ? "myLi" : elementId;
        var statusHeight = (api.systemType == 'ios') ? 20 : 25; // 判断状态栏高度
        var height = api.winHeight - $api.dom(headerId).offsetHeight - statusHeight;// 减去状态栏高度
        var elementHeight = $api.byId(elementId).offsetHeight;
        return parseInt(height / elementHeight < 1 ? 1 : height / elementHeight);
    },
    /**
     * 图片不存在时显示默认图片
     */
    noFind: function noFind() {
        var img=event.srcElement;
        img.src=api.wgtRootDir+"/image/nofind.png"; //替换的图片
        img.onerror=null; //控制不要一直触发错误
    },
    /**
     * 图片浏览器
     * @param images 图片地址数组 (imgname不为空时，images参数为null，通过dom元素获取src地址)
     * @param index 当前要显示的图片在图片路径数组中的索引
     * @param imgname 图片列表name
     */
    openPhotoBrowser: function openPhotoBrowser(images, index, imgname) {
        // index未传值，默认为0，仅显示一张图片
        if(index == null || index == "" || index == undefined) {
            index = 0;
        } else {
            // 至少一张图片，可左右滑动浏览
            var imgs = document.getElementsByName(imgname);
            images = new Array();
            for(var i = 0; i < imgs.length; i++) {
                images[i] = imgs[i].src;
            }
        }
        api.openWin({
            name: "photoBrowser",
            url: api.wgtRootDir+"/html/photoBrowser.html",
            slidBackEnabled: false,
            pageParam: {images: images, index: index}
        });
    },
    /**
     * 选择器（修改elementId的innerHTML和value）
     * @param title 选择器标题title
     * @param data 选择器数据data(文本内容text、文本值value）
     * @param elementId 选择器div的id
     * @param isRemovePlace 清空placeholder标签内容
     */
    openUIMultiSelector: function openUIMultiSelector(title, data, elementId, isRemovePlace) {
        // 判断data数据是否为空
        if(data == null || "[]" == JSON.stringify(data)) {
            APIUtils.showToast("暂无可选择的选项", 2000);
            return;
        }
        var UIMultiSelector = api.require('UIMultiSelector');
        // 选择器高度
        var heigh = 50;
        if(data.length < 4) {
            heigh += 45*data.length;
        } else {
            heigh += 45*4;
        }
        UIMultiSelector.open({
            rect: {
                h: heigh
            },
            text: {
                title: title,
                leftBtn: '',
                rightBtn: '',
                selectAll: ''
            },
            max: 0,
            singleSelection: true,
            styles: {
                title: {
                    bg: '#0e1a42',
                    color: '#46b4e4',
                    size: 17, //标题字体大小
                    h: 50
                },
                leftButton: {
                    bg: '#0e1a42',
                    color: '#46b4e4'
                },
                rightButton: {
                    bg: '#0e1a42',
                    color: '#46b4e4'
                },
                item: {
                    bg: '#162743',
                    h: 45,
                    size: 16,                      //（可选项）数字类型；选项的文字大小；默认：14
                    activeSize: 16,                //（可选项）数字类型；已选中选项的文字大小；默认：14(仅Android支持)
                    disableSize:16,                   //（可选项）数字类型；不可选中选项的文字大小；默认：14(仅Android支持)
                    color: '#46b4e4',
                    bgHighlight: '#173A43', //选项的高亮背景
                    lineColor: '#3279a1', //分隔线的颜色
                    textAlign: 'center' //选项文字的对齐方式
                }
            },
            animation: true,
            items: data
        }, function(ret, err) {
            if (ret) {
                // 用户点击了列表选项事件
                if(ret.eventType == 'clickItem') {
                    $api.byId(elementId).innerHTML = ret.items[0].text == null ? "" : ret.items[0].text;
                    $api.byId(elementId).value = ret.items[0].value == null ? "" : ret.items[0].value;
                    UIMultiSelector.close();
                } else if(ret.eventType == 'clickRight' || ret.eventType == 'clickLeft') {
                    UIMultiSelector.close();
                }
                // 是否清空placeholder元素内容
                if(isRemovePlace) {
                    APIUtils.removePlaceholder(elementId);
                }
            }
        });
    },
    /**
     * 隐藏/显示placeholder元素内容
     * @param elementId 标签id
     */
    removePlaceholder: function removePlaceholder(elementId) {
        var val = $api.byId(elementId).value;
        var style = document.createElement("style");
        style.type = "text/css";
        var textNode = "#"+elementId+":before{content: ''};";
        // value为空显示placeholder
        if(val == null || val == "" || val == undefined) {
            textNode = "#" + elementId + ":before{content: attr(placeholder)};";
        }
        try{
            style.appendChild(document.createTextNode(textNode));
        }catch(ex){
            style.styleSheet.cssText = textNode;//针对IE
        }
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(style);
    },
    /**
     * 监听全局系统事件和自定义事件
     * 返回键
     * 屏幕显示
     */
    listenEventView: function listenEventView() {
        // 设置状态栏字体颜色
        api.setStatusBarStyle({
            style: 'blue',
            color: '#0d192c'
        });
        // 监听返回键
        api.addEventListener({
            name: 'keyback'
        }, function (ret, err) {
            api.toast({
                msg: '再按一次返回键退出' + api.appName,
                duration: 2000,
                location: 'bottom'
            });
            api.addEventListener({
                name: 'keyback'
            }, function (ret, err) {
                api.closeWidget({
                    id: api.appId,  //你的APPid
                    retData: {
                        name: 'closeWidget'
                    },
                    animation: {
                        type: 'flip',
                        subType: 'from_bottom',
                        duration: 500
                    },
                    silent: true
                });
            });
            setTimeout(function () {  //设置2.5秒的延迟，在2.5秒内再次单击返回键都算退出
                listenEventView();
            }, 2500);
        });

        // 监听屏幕显示事件
        api.addEventListener({
            name:'viewappear'
        },function(ret,err){
            api.setScreenOrientation({
                orientation: 'auto_portrait'  //屏幕根据重力感应在竖屏间自动切换
            });
            api.setFullScreen({
                fullScreen: false  //是否全屏
            });
        });
    },

};

/**
 * 格式化时间
 * @param fmt 时间戳/Date
 */
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
/**
 * 监听屏幕高度
 * 显示/隐藏id为searchButton的元素
 */
window.onresize = function () {
    // 当前页面有id为searchButton的元素
    if($api.byId("searchButton") != null) {
        if (document.body.scrollHeight < windowHeight) {
            $api.byId("searchButton").style.display = "none";
        } else {
            $api.byId("searchButton").style.display = "block";
        }
    }
};