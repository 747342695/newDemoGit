/**
 * 登录页面js
 * @author wangfarui
 */

const loginModule ={
    /**
     * post请求登录
     * @param data 表单数据
     */
    login:function(data,callback) {
        APIUtils.post("/base/login", data, callback);
    },
    /**
     * 更新账号的激光推送注册ID
     * @param data 激光id信息
     */
    updateJPushRegisiterId:function(data, callback) {
        APIUtils.post("/api/gov/myInfo/updateJPushRegisiterId", data, callback);
    }
};