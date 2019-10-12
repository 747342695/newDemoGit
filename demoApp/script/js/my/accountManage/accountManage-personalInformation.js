/**
 * 我的页面js
 * @author cuican
 */
/**
 * 系统配置
 * @type {{PROXY_IP: string, DOMAIN: string}}
 */

const personalModule={
    /**
     *  获取个人信息
     *  @param staffId
     *  @param callback
     */
    getPersonalInfo:function (staffId, callback) {
        APIUtils.get("/api/gov/myInfo/"+staffId,callback);

    },

    /**
     *  更新密码
     * @param data
     * @param callback
     */
    editPassword:function (data, callback) {
        APIUtils.post("/api/gov/myInfo/", data, callback);
    }
}